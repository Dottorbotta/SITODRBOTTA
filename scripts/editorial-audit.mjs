import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { default as worker } from '../dist/server/index.js';
const origin = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
const get = path => worker.fetch(new Request(new URL(path, origin), {headers:{accept:'text/html'}}), {ASSETS:{fetch:async()=>new Response('Not found',{status:404})}}, {waitUntil(){},passThroughOnException(){}});
await mkdir('editorial-report', {recursive:true});
const sitemap = await get('/sitemap.xml');
if (!sitemap.ok) throw new Error('Sitemap unavailable');
const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]));
if (!urls.length || urls.some(u=>u.origin!==origin)) throw new Error('Invalid sitemap');
const pages = [];
for (const url of urls) {
  const response = await get(url.pathname);
  if (response.status!==200) throw new Error(`${url.pathname}: ${response.status}`);
  pages.push({path:url.pathname,html:await response.text()});
}
await writeFile('editorial-report/pages.json', JSON.stringify(pages));
try { execFileSync('python3', ['scripts/editorial-audit.py'], {stdio:'inherit'}); }
catch (error) { process.exitCode = error.status || 1; }
