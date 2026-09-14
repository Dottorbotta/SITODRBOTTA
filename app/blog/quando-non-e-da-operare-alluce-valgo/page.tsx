import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({ slug: "quando-non-e-da-operare-alluce-valgo" });
export function generateMetadata() { return articleMetadata({ params }); }
export default function HalluxValgusPage() { return ArticlePage({ params }); }
