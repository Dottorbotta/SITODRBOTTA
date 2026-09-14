import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({ slug: "condromalacia-rotulea" });
export function generateMetadata() { return articleMetadata({ params }); }
export default function ChondromalaciaPage() { return ArticlePage({ params }); }
