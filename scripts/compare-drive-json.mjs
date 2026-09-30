import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const driveDir = resolve(process.argv[2] ?? 'drive-snapshot');
const partial = process.argv.includes('--partial');
const sourceDir = new URL('../content/articles/', import.meta.url);
const names = (await readdir(driveDir)).filter(name => name.endsWith('.json')).sort();
const sourceNames = (await readdir(sourceDir)).filter(name => name.endsWith('.json')).sort();
const normalize = value => Array.isArray(value) ? value.map(normalize) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, normalize(value[key])])) : value;
const mismatches = [];

if (!partial) {
  assert.equal(names.length, 518, `Drive snapshot has ${names.length} JSON files; expected 518`);
  assert.equal(sourceNames.length, 518, `Site source has ${sourceNames.length} JSON files; expected 518`);
  for (const name of sourceNames) if (!names.includes(name)) mismatches.push(`${name}: missing on Drive`);
}

for (const name of names) {
  if (!sourceNames.includes(name)) { mismatches.push(`${name}: missing on Site`); continue; }
  const drive = JSON.parse(await readFile(resolve(driveDir, name), 'utf8'));
  const site = JSON.parse(await readFile(new URL(name, sourceDir), 'utf8'));
  if (drive.slug !== site.slug || drive.sourceArticleId !== site.sourceArticleId)
    mismatches.push(`${name}: slug or sourceArticleId differs`);
  if (JSON.stringify(normalize(drive)) !== JSON.stringify(normalize(site))) mismatches.push(`${name}: JSON differs`);
}

console.log(`Compared ${names.length} Drive JSON with ${sourceNames.length} Site JSON; ${mismatches.length} differences.`);
if (mismatches.length) { console.error(mismatches.join('\n')); process.exitCode = 1; }
