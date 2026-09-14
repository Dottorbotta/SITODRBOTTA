import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({ slug: "fascite-plantare-sintomi-cure-ritorno-movimento" });
export function generateMetadata() { return articleMetadata({ params }); }
export default function PlantarFasciitisPage() { return ArticlePage({ params }); }
