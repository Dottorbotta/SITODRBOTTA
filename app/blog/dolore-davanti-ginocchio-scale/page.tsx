import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({ slug: "dolore-davanti-ginocchio-scale" });
export function generateMetadata() { return articleMetadata({ params }); }
export default function KneeStairsPage() { return ArticlePage({ params }); }
