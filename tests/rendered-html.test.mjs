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
test('copy revision is explicit, preserves clinical records and keeps links valid', async () => {
  const original = JSON.parse(await readFile('docs/content-before.json', 'utf8'));
  const revision = JSON.parse(await readFile('docs/copy-edits-2026-09-16.json', 'utf8'));
  const round2 = JSON.parse(await readFile('docs/article-edits-round2-2026-09-16.json', 'utf8'));
  assert.equal(new Set(round2.articles.map(a => a.slug)).size, original.length);
  assert.equal(new Set(revision.articles.map(a => a.slug)).size, original.length);
  const baselineRecords = records.filter(a => original.some(b => b.slug === a.slug));
  assert.equal(baselineRecords.length, original.length);
  for (const current of baselineRecords) {
    const latest = round2.articles.find(a => a.slug === current.slug);
    assert.ok(latest, current.slug);
    const article = structuredClone(current);
    for (const [field, change] of Object.entries(latest.changes)) {
      assert.deepEqual(current[field], change.after, current.slug + ': latest ' + field);
      article[field] = change.before;
    }
    for (const [field, value] of Object.entries(latest.protected)) assert.deepEqual(current[field], value, current.slug + ': preserved ' + field);
    const baseline = original.find(a => a.slug === article.slug);
    const edit = revision.articles.find(a => a.slug === article.slug);
    assert.ok(baseline && edit, article.slug);
    // Keep the migration baseline. Every intentional copy edit has a before/after record.
    for (const field of ['title', 'sections']) {
      const change = edit.changes[field];
      const comparable = value => field === 'sections' ? value.map(s => [s.heading, s.paragraphs]) : value;
      if (change) assert.deepEqual(comparable(change.before), comparable(baseline[field]), article.slug + ': old ' + field);
      assert.deepEqual(comparable(article[field]), comparable(change ? change.after : baseline[field]), article.slug + ': ' + field);
    }
    for (const [field, change] of Object.entries(edit.changes)) assert.deepEqual(article[field], change.after, article.slug + ': ' + field);
    for (const [field, value] of Object.entries(edit.protected)) assert.deepEqual(article[field], value, article.slug + ': protected ' + field);
    for (const slug of article.relatedPosts) assert.ok(records.some(a => a.slug === slug), slug);
    if (article.image.startsWith('/')) await access('public' + article.image);
  }
});
test('all articles return HTML with own canonical and structured data',async()=>{for(const a of records){const r=await get('/blog/'+a.slug);assert.equal(r.status,200,a.slug);const html=await r.text();assert.ok(html.includes('rel="canonical"'),a.slug);assert.ok(html.includes('/blog/'+a.slug));assert.ok(html.includes('BlogPosting'));assert.ok(html.includes('BreadcrumbList'));assert.equal((html.match(/<h1\b/g)||[]).length,1);}});
test('sitemap RSS and robots are available; aliases permanently redirect',async()=>{for(const path of ['/sitemap.xml','/feed.xml','/robots.txt']){const r=await get(path);assert.equal(r.status,200,path);const text=await r.text();assert.ok(text.length>20);}for(const slug of ['dolore-al-piede','piedi-caviglie-gonfie']){const r=await get('/'+slug);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/blog/'+slug);}});
test('missing article is a real 404',async()=>{const r=await get('/blog/non-esiste-qa');assert.equal(r.status,404);});
test('main pages and real topic clusters render with metadata',async()=>{for(const path of ['/','/metodo','/per-chi','/percorsi','/testimonianze','/blog','/chi-sono','/blog/argomenti/piede','/blog/argomenti/ginocchio','/blog/argomenti/anca','/blog/argomenti/metodo','/blog/argomenti/ritorno-allo-sport']){const r=await get(path);assert.equal(r.status,200,path);const html=await r.text();assert.ok(html.includes('rel="canonical"'),path);assert.equal((html.match(/<h1\b/g)||[]).length,1,path);}});
test('source consultation dates are shown only when documented',async()=>{for(const a of records.filter(a=>a.sources?.length)){const html=await (await get('/blog/'+a.slug)).text();const sources=html.match(/<section class="article-sources"[\s\S]*?<\/section>/)?.[0];assert.ok(sources,a.slug);assert.equal(sources.includes('Fonti consultate il'),Boolean(a.sourceDate),a.slug);}});
test('article metadata and FAQ schema describe the actual article and retain noindex', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const article of records) {
    assert.ok(!titles.has(article.seoTitle), article.slug + ': duplicate SEO title');
    assert.ok(!descriptions.has(article.seoDescription), article.slug + ': duplicate description');
    titles.add(article.seoTitle); descriptions.add(article.seoDescription);
    const html = await (await get('/blog/' + article.slug)).text();
    assert.match(html, /property="og:type" content="article"/);
    assert.match(html, /name="robots" content="[^"]*noindex/);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    const posting = schemas.find(s => s['@type'] === 'BlogPosting');
    assert.equal(posting.description, article.seoDescription);
    assert.equal(posting.datePublished, article.publishedAt);
    assert.equal(posting.dateModified, article.updatedAt || undefined);
    assert.deepEqual((posting.citation || []).map(c => c.url), (article.sources || []).map(s => s.url));
    const faq = article.sections.find(s => s.heading === 'Domande frequenti');
    const structured = schemas.find(s => s['@type'] === 'FAQPage');
    if (faq) assert.deepEqual(structured.mainEntity.map(q => q.name), faq.paragraphs.filter(p => p.startsWith('### ')).map(p => p.slice(4)));
    else assert.equal(structured, undefined);
    assert.ok(html.includes(encodeURIComponent('https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site/blog/' + article.slug)));
  }
});

// New publications are checked independently; the original 17-article baseline remains intact.
test('Drive publications 004–010 retain their order, metadata, images and valid related articles', async () => {
  const batch = JSON.parse(await readFile('docs/blog-publication-004-010.json', 'utf8'));
  assert.deepEqual(batch.map(a => a.id), [4,5,6,7,8,9,10]);
  const source = await readFile('app/data/articles.ts', 'utf8');
  assert.match(source, /\[article20,article21,article22,article23,article24,article25,article26,article17/);
  for (const item of batch) {
    const article = records.find(a => a.slug === item.slug);
    assert.ok(article, item.slug);
    assert.equal(article.title, item.title);
    assert.equal(article.clinicalReview.status, 'not-recorded');
    assert.ok(article.sources.length >= 4);
    assert.ok(article.imageAlt && article.imageCaption.includes('IA'));
    assert.ok(!JSON.stringify(article).includes('scrivi INFO'));
    await access('public' + article.image);
    for (const slug of article.relatedPosts) assert.ok(records.some(a => a.slug === slug), slug);
    const html = await (await get('/blog/' + item.slug)).text();
    assert.ok(html.includes('FAQPage'));
    assert.ok(html.includes('type="image/avif"'));
  }
});
test('Drive publications 001–003 have complete editorial records and live cross-links', async () => {
  const slugs = ['tecnica-di-corsa', 'dolore-anca-dopo-corsa', 'infortuni-corsa-fattori-rischio'];
  for (const slug of slugs) {
    const a = records.find(a => a.slug === slug);
    assert.ok(a, slug);
    assert.ok(a.sources.length >= 4, slug);
    assert.equal(a.clinicalReview.status, 'not-recorded');
    assert.ok(a.imageAlt && a.imageCaption.includes('IA'));
    assert.ok(!JSON.stringify(a).includes('scrivi INFO'));
    for (const related of a.relatedPosts) assert.ok(records.some(r => r.slug === related));
    const html = await (await get('/blog/' + slug)).text();
    assert.ok(html.includes('FAQPage'));
    assert.ok(html.includes('type="image/avif"'));
  }
});
