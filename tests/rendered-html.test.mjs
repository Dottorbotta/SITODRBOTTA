import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import test from 'node:test';
const records=await Promise.all((await readdir('content/articles')).filter(f=>f.endsWith('.json')).map(async f=>JSON.parse(await readFile('content/articles/'+f,'utf8'))));
const {default:worker}=await import('../dist/server/index.js');
const get=(path)=>worker.fetch(new Request('https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site'+path,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('Not found',{status:404})}},{waitUntil(){},passThroughOnException(){}});
test('responsive images are discoverable in HTML, preserve alternatives and ship every variant', async () => {
  const manifest = JSON.parse(await readFile('app/data/image-manifest.json', 'utf8'));
  for (const [src, entry] of Object.entries(manifest)) {
    await access('public' + src);
    for (const format of ['webp', 'avif']) for (const variant of entry[format]) {
      assert.ok(variant.width <= entry.width);
      await access('dist/client' + variant.src);
    }
  }
  for (const path of ['/', '/blog', '/blog/dolore-al-piede']) {
    const html = await (await get(path)).text();
    assert.ok(html.includes('type="image/avif"'), path);
    assert.ok(html.includes('type="image/webp"'), path);
    assert.ok(html.includes('srcSet=') || html.includes('srcset='), path);
    assert.ok(html.includes('noindex'), path);
    if (path !== '/blog') {
      const firstImage = html.match(/<img\b[^>]*>/)?.[0];
      assert.ok(firstImage?.includes('loading="eager"'), path);
      assert.ok(/fetchPriority="high"|fetchpriority="high"/.test(firstImage), path);
    }
  }
});
test('existing editorial copy survives migration and links resolve to known records',async()=>{const before=JSON.parse(await readFile('docs/content-before.json','utf8'));assert.equal(records.length,before.length);for(const a of records){const b=before.find(x=>x.slug===a.slug);assert.equal(a.title,b.title);assert.deepEqual(a.sections.map(s=>[s.heading,s.paragraphs]),b.sections.map(s=>[s.heading,s.paragraphs]));for(const slug of a.relatedPosts)assert.ok(records.some(x=>x.slug===slug));if(a.image.startsWith('/'))await access('public'+a.image);}});
test('all articles return HTML with own canonical and structured data',async()=>{for(const a of records){const r=await get('/blog/'+a.slug);assert.equal(r.status,200,a.slug);const html=await r.text();assert.ok(html.includes('rel="canonical"'),a.slug);assert.ok(html.includes('/blog/'+a.slug));assert.ok(html.includes('BlogPosting'));assert.ok(html.includes('BreadcrumbList'));assert.equal((html.match(/<h1\b/g)||[]).length,1);}});
test('sitemap RSS and robots are available; aliases permanently redirect',async()=>{for(const path of ['/sitemap.xml','/feed.xml','/robots.txt']){const r=await get(path);assert.equal(r.status,200,path);const text=await r.text();assert.ok(text.length>20);}for(const slug of ['dolore-al-piede','piedi-caviglie-gonfie']){const r=await get('/'+slug);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/blog/'+slug);}});
test('missing article is a real 404',async()=>{const r=await get('/blog/non-esiste-qa');assert.equal(r.status,404);});
test('main pages and real topic clusters render with metadata',async()=>{for(const path of ['/','/metodo','/per-chi','/percorsi','/testimonianze','/blog','/chi-sono','/blog/argomenti/piede','/blog/argomenti/ginocchio','/blog/argomenti/anca','/blog/argomenti/metodo','/blog/argomenti/ritorno-allo-sport']){const r=await get(path);assert.equal(r.status,200,path);const html=await r.text();assert.ok(html.includes('rel="canonical"'),path);assert.equal((html.match(/<h1\b/g)||[]).length,1,path);}});
