import ArticlePage, { generateMetadata as articleMetadata } from "../[slug]/page";
const params=Promise.resolve({slug:"dolore-al-piede"});
export async function generateMetadata(){return {...await articleMetadata({params}),alternates:{canonical:"https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site/blog/dolore-al-piede"}};}
export default function FootPage(){return ArticlePage({params});}
