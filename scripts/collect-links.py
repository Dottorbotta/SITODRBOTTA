"""Collect rendered site links for Lychee without changing the deployed site."""
import json
import re
import time
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import urlopen

ORIGIN = 'http://127.0.0.1:4173'
OUT = Path('link-check')
source = Path('app/lib/site.ts').read_text()
SITE_ORIGIN = re.search(r"SITE_ORIGIN\s*=\s*['\"]([^'\"]+)", source).group(1)


def fetch(url):
    with urlopen(url, timeout=20) as response:
        if response.status != 200:
            raise RuntimeError(f'{url}: HTTP {response.status}')
        return response.read().decode('utf-8')


class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.urls = set()

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if not value:
                continue
            if key in ('href', 'src', 'poster'):
                self.urls.add(value)
            elif key == 'srcset' and not value.startswith('data:'):
                self.urls.update(item.strip().split()[0] for item in value.split(',') if item.strip())


def localize(url):
    parsed = urlsplit(url)
    if (parsed.scheme, parsed.netloc) == (urlsplit(SITE_ORIGIN).scheme, urlsplit(SITE_ORIGIN).netloc):
        return urlunsplit(('http', '127.0.0.1:4173', parsed.path, parsed.query, parsed.fragment))
    return url


def collect():
    for attempt in range(60):
        try:
            sitemap = fetch(ORIGIN + '/sitemap.xml')
            break
        except Exception:
            if attempt == 59:
                raise
            time.sleep(1)
    root = ET.fromstring(sitemap)
    pages = sorted({localize(e.text) for e in root.findall('.//{*}loc')})
    if not pages:
        raise RuntimeError('Empty sitemap: refusing an empty link check')
    inventory = {'pages': [], 'internal': {}, 'external': {}, 'skipped_schemes': {}}
    for page in pages:
        if urlsplit(page).netloc != '127.0.0.1:4173':
            raise RuntimeError('Unexpected sitemap origin: ' + page)
        parser = Links()
        parser.feed(fetch(page))
        inventory['pages'].append(page)
        for value in parser.urls | {page}:
            url = localize(urljoin(page, value))
            parts = urlsplit(url)
            if parts.scheme not in ('http', 'https'):
                inventory['skipped_schemes'][parts.scheme] = inventory['skipped_schemes'].get(parts.scheme, 0) + 1
                continue
            group = 'internal' if parts.netloc == '127.0.0.1:4173' else 'external'
            inventory[group].setdefault(url, []).append(page)
    OUT.mkdir(exist_ok=True)
    for group in ('internal', 'external'):
        if not inventory[group]:
            raise RuntimeError('No links collected for ' + group)
        (OUT / (group + '.txt')).write_text('\n'.join(sorted(inventory[group])) + '\n')
    (OUT / 'inventory.json').write_text(json.dumps(inventory, indent=2, ensure_ascii=False))
    print(f"Collected {len(pages)} pages; {len(inventory['internal'])} internal and {len(inventory['external'])} external URLs")


if __name__ == '__main__':
    collect()
