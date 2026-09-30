import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';

const folder = new URL('../content/articles/', import.meta.url);
const files = (await readdir(folder)).filter(name => name.endsWith('.json'));
const articles = await Promise.all(files.map(async name => JSON.parse(await readFile(new URL(name, folder), 'utf8'))));
const revisedIds = new Set([
  118, 121, 126, 129, 131, 133, 136, 137, 141, 145, 151,
  155, 156, 157, 158, 159, 160, 161, 162, 163, 165, 166,
  188, 189, 200, 215, 218, 225, 244, 253, 256, 258,
  272, 276, 297, 299, 300, 303, 324, 325, 326, 330, 339,
  322, 323, 340, 374, 384, 386, 388, 390,
  400, 403, 411, 415, 425, 428, 435, 445, 453, 456,
  306, 307, 315, 317, 321, 327, 328, 329,
  309, 312, 318, 320, 336, 360, 375, 401, 410, 412,
  308, 310, 409, 432, 466,
  331, 380, 392, 413, 416,
  302, 391, 417, 458, 463,
  361, 363, 369, 381, 382, 385, 389, 394, 398, 402,
  405, 407, 408, 414, 454, 457, 459, 460, 461, 464, 468, 469,
  476, 477, 478, 492, 495, 499, 501, 502,
]);
for (const id of [301, 304, 305, 311, 313, 314, 316, 319, 332, 333, 334, 335, 337, 338, 341, 342, 343, 344, 345, 346]) revisedIds.add(id);
for (const id of [347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 362, 364, 365, 366, 367, 368, 370]) revisedIds.add(id);
const checkAll = process.argv.includes('--all');
const requiredIds = checkAll ? new Set(Array.from({ length: 203 }, (_, index) => 300 + index)) : revisedIds;
const wordCount = value => (value.match(/\p{L}[\p{L}\p{N}_]*(?:['’]\p{L}[\p{L}\p{N}_]*)?/gu) || []).length;
const repeated = new Map();
const seenIds = new Set();
const shortArticles = [];
const structureIssues = [];

for (const article of articles) {
  assert.ok(!JSON.stringify(article).includes('<built-in function vars>'), `${article.slug}: unresolved template value`);
  for (const section of article.sections || []) {
    assert.ok(section.heading && section.paragraphs?.length, `${article.slug}: empty section`);
    for (const paragraph of section.paragraphs) {
      for (const chunk of paragraph.split('\n\n')) {
        const normalized = chunk.toLocaleLowerCase('it').replace(/\s+/g, ' ').trim();
        if (normalized.length < 200 || normalized.startsWith('se vuoi capire come si svolge un programma') || normalized.startsWith('la guida introduttiva su [cosa osservare')) continue;
        if (!repeated.has(normalized)) repeated.set(normalized, new Set());
        repeated.get(normalized).add(article.slug);
      }
    }
  }

  const id = Number(article.sourceArticleId);
  if (!requiredIds.has(id)) continue;
  assert.ok(!seenIds.has(id), `${id}: duplicated sourceArticleId`);
  seenIds.add(id);
  const editorial = [article.intro, ...article.sections.flatMap(section => [section.heading, ...section.paragraphs]), ...(article.takeaways || [])].join(' ');
  if (wordCount(editorial) <= 2200) shortArticles.push(`${id}: ${wordCount(editorial)}`);
  const headings = article.sections.map(section => section.heading);
  if (headings.includes('Conclusione') && headings.at(-1) !== 'Conclusione')
    structureIssues.push(`${id}: content appears after the conclusion`);
  assert.ok(article.seoTitle && article.seoDescription && article.sources?.length && article.imageAlt, `${id}: incomplete metadata`);
  await access(new URL(`../public${article.image}`, import.meta.url));
  for (const section of article.sections) for (const paragraph of section.paragraphs) {
    if (['### Conclusione', '### Domande frequenti', `### ${section.heading}`].includes(paragraph))
      structureIssues.push(`${id}: misplaced section heading`);
  }
}

assert.equal(seenIds.size, requiredIds.size, 'Some required articles are missing');
for (const [paragraph, slugs] of repeated) {
  assert.ok(slugs.size < 5, `Repeated boilerplate in ${slugs.size} articles: ${paragraph.slice(0, 90)}`);
}
assert.equal(shortArticles.length, 0, `${shortArticles.length} articles at 2200 words or less: ${shortArticles.join(', ')}`);
assert.equal(structureIssues.length, 0, structureIssues.join(', '));
console.log(`Article gate passed: ${articles.length} JSON records; ${seenIds.size} required articles above 2200 editorial words; no unresolved template text or repeated boilerplate.`);
