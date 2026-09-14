import ArticlePage, {generateMetadata as articleMetadata} from '../[slug]/page';
const params=Promise.resolve({slug:'perche-camminare-benefici-tutto-il-corpo'});
export function generateMetadata(){return articleMetadata({params});}
export default function WalkingPage(){return ArticlePage({params});}
