import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile,access} from 'node:fs/promises';
import worker from '../dist/server/index.js';
const origin='https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
const get=path=>worker.fetch(new Request(origin+path,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async request=>{
 try{return new Response(await readFile('dist/client'+new URL(request.url).pathname));}
 catch{return new Response('Not found',{status:404});}
}}},{waitUntil(){},passThroughOnException(){}});
const routes=['/guide','/quiz-corpo-capace','/domande-frequenti','/','/metodo','/per-chi','/percorsi','/team','/chi-sono','/testimonianze','/colloquio','/termini-e-condizioni'];
test('commercial routes render and their internal navigation resolves',async()=>{
 const links=new Set();
 for(const path of routes){
  const r=await get(path);assert.equal(r.status,200,path);const html=await r.text();assert.equal((html.match(/<h1\b/g)||[]).length,1,path);
  for(const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g))if(href.startsWith('/')&&!href.startsWith('//'))links.add(href.split('#')[0]);
  for(const [,src] of html.matchAll(/<img\b[^>]*src="([^"]+)"/g))if(src.startsWith('/'))await access('dist/client'+src);
 }
 for(const href of links){const r=await get(href);assert.ok(r.status>=200&&r.status<400,href+': '+r.status);await r.body?.cancel();}
});
test('terms preserve every contractual block and legacy URL redirects',async()=>{
 const data=JSON.parse(await readFile('app/data/terms.json','utf8'));const html=await(await get('/termini-e-condizioni')).text();
 const decode=s=>s.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 const text=decode(html);for(const [,block] of data)assert.ok(text.includes(block),block.slice(0,70));
 for(const p of ['/termini-e-condizioni-di-servizio','/termini-e-condizioni-di-servizio/']){const r=await get(p);assert.equal(r.status,301);assert.equal(r.headers.get('location'),origin+'/termini-e-condizioni');}
 const slash=await get('/termini-e-condizioni/');assert.ok([200,301,308].includes(slash.status));
});
test('booking path explains the team and exposes a usable external fallback',async()=>{
 const html=await(await get('/colloquio')).text();assert.ok(html.includes('non con Dr. Botta personalmente'));assert.ok(html.includes('https://calendly.com/d/dvpx-955-zh5/prenota-la-tua-consulenza'));assert.ok(!html.includes('fbclid='));assert.ok(!html.includes('month=2026-09'));assert.ok(html.includes('apri')||html.includes('Apri'));assert.ok(html.includes('<iframe'));
});
test('legacy coaching, programmes and hip hub links resolve to their canonical destination',async()=>{
 for(const [oldPath,target] of [['/programmi','/percorsi'],['/coaching-avanzato','/percorsi'],['/blog/anca-inguine-bacino','/blog/argomenti/anca']]){
  const response=await get(oldPath);assert.ok([301,302,307,308].includes(response.status),oldPath);
  const destination=new URL(response.headers.get('location'),origin);assert.equal(destination.pathname,target,oldPath);
  assert.equal((await get(destination.pathname)).status,200,target);
 }
});

test('educational guide is server-rendered, linked, canonical and preserves draft controls',async()=>{
 const html=await(await get('/domande-frequenti')).text();
 assert.equal((html.match(/class="cc-faq-answer"/g)||[]).length,18);
 for(const id of ['adatto-a-me','fiducia-team','vita-quotidiana','risultati-scelta','perche-team','paura-peggiorare','prezzo']) assert.ok(html.includes('id="'+id+'"'),id);
 assert.ok(html.includes('rel="canonical" href="'+origin+'/domande-frequenti"'));
 assert.ok(html.includes('noindex'));
 const scripts=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
 const org=scripts.find(x=>x['@type']==='Organization');assert.equal(org.name,'Corpo Capace');
 assert.equal(org.founder['@id'],origin+'/chi-sono#simone-botta-lamanna');
 const sitemap=await(await get('/sitemap.xml')).text();assert.equal(sitemap.split('<loc>'+origin+'/domande-frequenti</loc>').length-1,1);
 const robots=await(await get('/robots.txt')).text();assert.ok(robots.includes('Disallow: /'));
});

test('all commercial hash links resolve to real anchors',async()=>{
 const cache=new Map();for(const path of routes)cache.set(path,await(await get(path)).text());
 for(const [path,html] of cache){for(const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
  if(!href.startsWith('/')&&!href.startsWith('#'))continue;
  const url=new URL(href,origin+path);if(!url.hash)continue;
  if(!cache.has(url.pathname))cache.set(url.pathname,await(await get(url.pathname)).text());
  assert.ok(cache.get(url.pathname).includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'),path+' -> '+href);
 }}
});
test('guides exposes a real downloadable PDF and quiz has an accessible server-rendered start',async()=>{
 const guide=await(await get('/guide')).text();
 const downloads=[...guide.matchAll(/href="(\/[^"?#]+\.pdf)"/g)].map(match=>match[1]);
 assert.ok(downloads.length>0,'the current guide page must expose its PDF');
 for(const path of downloads){const response=await get(path);assert.equal(response.status,200,path);const bytes=Buffer.from(await response.arrayBuffer());assert.equal(bytes.subarray(0,5).toString(),'%PDF-',path);}
 const quiz=await(await get('/quiz-corpo-capace')).text();assert.equal((quiz.match(/type="radio"/g)||[]).length,4);assert.ok(quiz.includes('<fieldset'));assert.ok(quiz.includes('<noscript>'));assert.ok(quiz.includes('nessun')||quiz.includes('Nessun'));
});
