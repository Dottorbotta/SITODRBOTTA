import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params = Promise.resolve({slug:"piedi-caviglie-gonfie"});
export function generateMetadata(){return articleMetadata({params});}
export default function EdemaPage(){return ArticlePage({params});}
