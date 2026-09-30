import sharp from 'sharp';
import { readdir, mkdir, readFile, writeFile, rm, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const input = path.join(root, 'public/images');
const output = path.join(input, 'responsive');
// Preview startup has a short health deadline. Reuse fully generated assets
// only when neither the generator nor any original has changed.
if (process.argv.includes('--if-stale')) {
  try {
    const manifestPath = path.join(root, 'app/data/image-manifest.json');
    const generatedAt = (await stat(manifestPath)).mtimeMs;
    const cached = JSON.parse(await readFile(manifestPath, 'utf8'));
    const originals = (await readdir(input)).filter(name => /\.(webp|png|jpe?g)$/i.test(name));
    let fresh = originals.length === Object.keys(cached).length
      && (await stat(fileURLToPath(import.meta.url))).mtimeMs <= generatedAt
      && (await stat(path.join(root, 'app/data/image-sources.json'))).mtimeMs >= generatedAt;
    for (const name of originals) {
      if (!cached[`/images/${name}`] || (await stat(path.join(input, name))).mtimeMs > generatedAt) fresh = false;
    }
    if (fresh) {
      for (const entry of Object.values(cached)) for (const format of ['webp', 'avif']) {
        for (const variant of entry[format]) await stat(path.join(root, 'public', variant.src));
      }
      console.log('Responsive image cache is current.');
      process.exit(0);
    }
  } catch { /* Missing or stale files: regenerate normally. */ }
}
const widths = [320, 640, 960, 1200];
const settings = { webp: { quality: 72, effort: 4 }, avif: { quality: 42, effort: 2 } };
// No cropping or enlargement: presentation remains owned by the existing CSS.
sharp.concurrency(2);
await mkdir(output, { recursive: true });
const manifest = {};
const sources = {};
const keep = new Set();
const names = (await readdir(input)).filter(name => /\.(webp|png|jpe?g)$/i.test(name)).sort();
const results = new Array(names.length);
await Promise.all(Array.from({ length: 6 }, async (_, worker) => {
for (let index = worker; index < names.length; index += 6) {
  const name = names[index];
  if (!/\.(webp|png|jpe?g)$/i.test(name)) continue;
  const bytes = await readFile(path.join(input, name));
  const metadata = await sharp(bytes).metadata();
  if (metadata.pages > 1) throw new Error(`Animated source requires explicit handling: ${name}`);
  const { width, height } = await sharp(bytes).rotate().toBuffer({ resolveWithObject: true }).then(r => r.info);
  const hash = createHash('sha256').update(bytes).update(JSON.stringify({ widths, settings, versions: sharp.versions })).digest('hex').slice(0, 16);
  const entry = { width, height, webp: [], avif: [] };
  for (const size of [...new Set([...widths.filter(w => w < width), width])]) {
    for (const format of ['webp', 'avif']) {
      const filename = `${path.parse(name).name}-${hash}-${size}.${format}`;
      const destination = path.join(output, filename);
      let byteSize;
      try {
        const cached = await sharp(destination).metadata();
        if (cached.width !== size || cached.height !== Math.round(height * size / width)) throw new Error('Invalid cached dimensions');
        byteSize = (await stat(destination)).size;
      } catch {
        const result = await sharp(bytes).rotate().resize({ width: size, withoutEnlargement: true })[format](settings[format]).toFile(destination);
        byteSize = result.size;
      }
      entry[format].push({ src: `/images/responsive/${filename}`, width: size, bytes: byteSize });
      keep.add(filename);
    }
  }
  results[index] = { name, entry, source: { width, height, prefix: `/images/responsive/${path.parse(name).name}-${hash}`, widths: entry.webp.map(v => v.width) } };
}
}));
for (const { name, entry, source } of results) {
  manifest[`/images/${name}`] = entry;
  sources[`/images/${name}`] = source;
}
// Only remove stale generated variants; originals are never written or deleted.
for (const name of await readdir(output)) if (!keep.has(name)) await rm(path.join(output, name));
await writeFile(path.join(root, 'app/data/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await writeFile(path.join(root, 'app/data/image-sources.json'), JSON.stringify(sources) + '\n');
console.log(`Generated ${keep.size} responsive variants from ${Object.keys(manifest).length} originals (Sharp ${sharp.versions.sharp}).`);
