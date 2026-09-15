# Responsive image pipeline

Sharp 0.34.5 is a direct, locked development dependency. `pnpm run images:generate`
also runs automatically before `pnpm run build` and `pnpm run dev`.

The generator reads raster originals in `public/images` without overwriting them.
It creates WebP (quality 82) and AVIF (quality 55) variants at 320, 480, 640, 800,
1120, 1440 pixels and the original width, excluding enlargement. Rotation follows
source orientation; no new crop is applied. SVGs remain vectors. Animated rasters
require an explicit decision and cause generation to fail.

Generated variants and `app/data/image-manifest.json` are build products, excluded
from Git. Filenames include a hash of original bytes, encoder settings and Sharp's
codec versions. Repeated builds reuse dimension-checked outputs; clean checkouts
regenerate everything from the lockfile. Only stale files inside the dedicated
`public/images/responsive` output directory are removed.

The browser imports only the compact generated `image-sources.json` index (one
prefix and width list per original), not the detailed byte-count inventory.

`ResponsiveImage` renders AVIF, WebP and original fallbacks in initial HTML. The
transparent picture wrapper preserves the existing image box. Direct-child CSS
rules also match `:where(picture)` without increasing specificity; existing crop,
filter, hover and object-position declarations are retained. Alt text is unchanged.
Intrinsic dimensions come from the source; sizes describe the image's layout slot.
Home, journey and article hero images are eager and high priority. Other existing
lazy-loading decisions are retained.

## Verification

- Existing rendered-HTML tests also verify generated assets, formats, noindex and
  eager/high-priority initial image markup.
- Existing accessibility workflow retains all axe scans and keyboard checks.
  It also decodes images on six representative routes at 1440/390 px, records
  selected variants and geometry, checks overflow and saves full-page screenshots.
- Lighthouse configuration and its three mobile runs per route are unchanged.
- Lychee's 13 exact URL exclusions are unchanged.

Baseline: GitHub `a3d79df870f5265081c7e29701d0f2cc8880b0d9`, Sites
`52716b00d01a7dc2dabd497fb45d8cd216f01238`. All original app/content/image blobs
matched between those sources. CI files were present only on GitHub and were
preserved. The original Sites starter README and GitHub project README differ
intentionally and were not overwritten.

The baseline Lighthouse artifact identifies the foot article's 311,390-byte cover
as its mobile LCP image. The homepage and blog mobile LCP elements are text;
image compression alone cannot be assumed to fix their render delay. Performance
comparisons must use the same three-run GitHub runner configuration, not the live
workspace-authenticated production URL.
