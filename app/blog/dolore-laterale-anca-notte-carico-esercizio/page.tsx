import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({ slug: "dolore-laterale-anca-notte-carico-esercizio" });
export function generateMetadata() { return articleMetadata({ params }); }
export default function HipNightPage() { return ArticlePage({ params }); }
