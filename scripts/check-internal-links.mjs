import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const content = new URL('../content/articles/', import.meta.url);
const files = (await readdir(content)).filter(name => name.endsWith('.json'));
const articles = await Promise.all(files.map(async file => JSON.parse(await readFile(new URL(file, content), 'utf8'))));
const slugs = new Set(articles.map(article => article.slug));
const requested = process.argv.find(arg => arg.startsWith('--slugs='))?.slice('--slugs='.length).split(',');
const topicsText = await readFile(new URL('../app/data/topics.ts', import.meta.url), 'utf8');
const topics = new Set([...topicsText.matchAll(/\{slug:'([^']+)'/g)].map(match => match[1]));
const routes = new Set(['/']);

async function pages(dir, prefix = '') {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) await pages(join(dir, entry.name), `${prefix}/${entry.name}`);
    else if (entry.name === 'page.tsx') routes.add(prefix || '/');
  }
}
await pages(new URL('../app/', import.meta.url).pathname);
const errors = [];
let links = 0;
let redirects = 0;
let related = 0;
const siteOrigin = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
function check(article, url) {
  if (typeof url !== 'string') return;
  if (url.startsWith(siteOrigin + '/')) url = url.slice(siteOrigin.length);
  if (!url.startsWith('/') || url.startsWith('//')) return;
  links++;
  const path = url.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  if (path === '/coaching-avanzato' || path === '/blog/anca-inguine-bacino' || path === '/programmi') { redirects++; return; }
  if (routes.has(path)) return;
  if (path.startsWith('/blog/argomenti/') && topics.has(path.slice('/blog/argomenti/'.length))) return;
  if (path.startsWith('/blog/') && slugs.has(path.slice('/blog/'.length))) return;
  errors.push(`${article.slug}: ${url}`);
}
for (const article of articles) {
  if (requested && !requested.includes(article.slug)) continue;
  const text = [article.intro, ...article.sections.flatMap(section => section.paragraphs), ...(article.takeaways ?? [])].join('\n');
  for (const [, url] of text.matchAll(/\]\(([^\s)]+)\)/g)) check(article, url);
  for (const key of ['ctaHref', 'ctaUrl']) check(article, article[key]);
  if (typeof article.cta === 'string') check(article, article.cta);
  if (article.cta && typeof article.cta === 'object') check(article, article.cta.href || article.cta.url);
  for (const slug of article.relatedPosts ?? []) {
    related++;
    if (!slugs.has(slug)) errors.push(`${article.slug}: relatedPosts ${slug}`);
  }
}
console.log(`Checked ${links} internal article links and ${related} related article references; ${redirects} legacy redirect links; ${errors.length} unknown routes.`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
