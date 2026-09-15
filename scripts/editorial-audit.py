"""Audit source records and rendered HTML using only the Python standard library."""
import json, re, sys, os
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse
from datetime import date
ORIGIN = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site'
class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.titles=[]; self.in_title=False; self.descriptions=[]; self.images=[]; self.links=[]
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self.titles.append(''); self.in_title=True
        if tag=='meta' and a.get('name','').lower()=='description': self.descriptions.append(a.get('content',''))
        if tag=='img': self.images.append(a)
        if tag=='a' and a.get('href'): self.links.append(a['href'])
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
    def handle_data(self, data):
        if self.in_title: self.titles[-1]+=data

def audit(pages, records):
    findings=[]; parsed={p['path']:Page(p['html']) for p in pages}; incoming={p:set() for p in parsed}
    def add(priority, path, file, rule, evidence):
        findings.append(dict(priority=priority,page=path,file=file,rule=rule,evidence=evidence))
    def source(path):
        if path.startswith('/blog/argomenti/'): return 'app/blog/argomenti/[topic]/page.tsx'
        if path.startswith('/blog/'): return 'content/articles/'+path.split('/')[-1]+'.json'
        return 'app'+('' if path=='/' else path)+'/page.tsx'
    for path,p in parsed.items():
        for field, values in [('title',p.titles),('description',p.descriptions)]:
            if len(values)!=1 or not values[0].strip(): add('P1',path,source(path),'metadata',f'{field}: {values!r}')
        for image in p.images:
            if 'alt' not in image: add('P1',path,source(path),'missing-alt',image.get('src','unknown image'))
        for href in p.links:
            u=urlparse(urljoin(ORIGIN+path,href))
            target=u.path.rstrip('/') or '/'
            if u.netloc==urlparse(ORIGIN).netloc and target in incoming and target!=path: incoming[target].add(path)
    for field in ['titles','descriptions']:
        seen={}
        for path,p in parsed.items():
            values=getattr(p,field)
            if len(values)==1 and values[0].strip(): seen.setdefault(' '.join(values[0].split()).casefold(),[]).append(path)
        for value, paths in seen.items():
            if len(paths)>1:
                for path in paths: add('P1',path,source(path),'duplicate-metadata',f'{field}: {value}; pages: {", ".join(paths)}')
    slugs={a['slug'] for a in records}
    for a in records:
        path='/blog/'+a['slug']; file='content/articles/'+a['slug']+'.json'
        if path not in parsed: add('P1',path,file,'missing-route','Article absent from sitemap/rendered audit')
        if not incoming.get(path): add('P1',path,file,'orphan-article','No incoming link from another rendered sitemap page')
        for slug in a.get('relatedPosts',[]):
            if slug not in slugs: add('P1',path,file,'missing-related',f'relatedPosts: {slug}')
        if 'imageAlt' not in a or a['imageAlt'] is None:
            add('P2',path,file,'undocumented-cover-alt','imageAlt absent; template renders alt="". Confirm decorative intent or supply an approved alternative.')
        for i,section in enumerate(a.get('sections',[])):
            if section.get('image') and 'alt' not in section['image']: add('P1',path,file,'missing-section-alt',f'sections[{i}].image.alt absent')
        review=a.get('clinicalReview') or {}; status=review.get('status','not-recorded')
        declared=status not in ('not-recorded','pending','not-reviewed','draft','')
        if declared:
            try: date.fromisoformat(review.get('date') or '')
            except (ValueError,TypeError): add('P1',path,file,'clinical-review-date',f'Declared status {status!r} without valid documented ISO date')
            if not (review.get('reviewer') or '').strip(): add('P1',path,file,'clinical-review-author',f'Declared status {status!r} without reviewer')
        if a.get('sources') and not a.get('sourceDate'): add('P2',path,file,'source-date','Sources present but consultation date not documented; do not infer it from publication date.')
    return findings, incoming, sum(1 for p in parsed.values() for i in p.images if i.get('alt')=='')

def main():
    pages=json.loads(Path('editorial-report/pages.json').read_text())
    records=[json.loads(p.read_text()) for p in sorted(Path('content/articles').glob('*.json'))]
    findings,incoming,empty=audit(pages,records)
    report={'pages':len(pages),'articles':len(records),'findings':findings,'incoming':{k:sorted(v) for k,v in incoming.items()},'emptyAltOccurrences':empty}
    Path('editorial-report/report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
    lines=['# Controllo editoriale', '',f'{len(pages)} pagine; {len(records)} articoli; {sum(f["priority"]=="P1" for f in findings)} errori tecnici; {sum(f["priority"]=="P2" for f in findings)} dati da confermare.', '', '| Priorità | Pagina | File | Controllo | Evidenza |','|---|---|---|---|---|']
    for f in findings: lines.append('| '+' | '.join(str(f[k]).replace('|','\\|').replace('\n',' ') for k in ['priority','page','file','rule','evidence'])+' |')
    lines+=['',f'Alt vuoti nel rendering: {empty}. Un alt vuoto esplicito è ammesso; un imageAlt assente nel record viene segnalato separatamente.', 'Le revisioni non registrate non sono dichiarazioni di revisione clinica. Autenticità di autore e data e appropriatezza degli alt richiedono verifica editoriale umana. Il grafo usa i link presenti nell’HTML iniziale delle pagine della sitemap.']
    markdown='\n'.join(lines)+'\n'; Path('editorial-report/report.md').write_text(markdown)
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'],'a') as f: f.write(markdown)
    print(markdown)
    return int(any(f['priority']=='P1' for f in findings))
if __name__=='__main__': sys.exit(main())
