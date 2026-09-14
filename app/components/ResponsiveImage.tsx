import type { ImgHTMLAttributes } from 'react';
import manifest from '../data/image-manifest.json';

type Variant = { src: string; width: number; bytes: number };
type Entry = { width: number; height: number; webp: Variant[]; avif: Variant[] };
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'alt'> & {
  src: string;
  alt: string;
  sizes: string;
};
const images: Record<string, Entry> = manifest;
const srcSet = (variants: Variant[]) => variants.map(v => `${v.src} ${v.width}w`).join(', ');

export function ResponsiveImage({ src, alt, sizes, ...props }: Props) {
  const entry = images[src];
  // SVG and external sources retain their original behavior.
  if (!entry) return <img {...props} src={src} alt={alt} />;
  return <picture style={{ display: 'contents' }}>
    <source type="image/avif" srcSet={srcSet(entry.avif)} sizes={sizes} />
    <source type="image/webp" srcSet={srcSet(entry.webp)} sizes={sizes} />
    <img {...props} src={src} srcSet={srcSet(entry.webp)} sizes={sizes} alt={alt} width={entry.width} height={entry.height} />
  </picture>;
}
