import sharp from 'sharp';
import { readdir, mkdir, readFile, writeFile, rm, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const input = path.join(root, 'public/images');
const output = path.join(input, 'responsive');
const widths = [320, 480, 640, 800, 1120, 1440];
const settings = { webp: { quality: 82, effort: 5 }, avif: { quality: 55, effort: 5 } };
// No cropping or enlargement: presentation remains owned by the existing CSS.
sharp.concurrency(1);
await mkdir(output, { recursive: true });
const manifest = {};
const keep = new Set();
for (const name of (await readdir(input)).sort()) {
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
  manifest[`/images/${name}`] = entry;
}
// Only remove stale generated variants; originals are never written or deleted.
for (const name of await readdir(output)) if (!keep.has(name)) await rm(path.join(output, name));
await writeFile(path.join(root, 'app/data/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Generated ${keep.size} responsive variants from ${Object.keys(manifest).length} originals (Sharp ${sharp.versions.sharp}).`);
