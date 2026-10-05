import {Breadcrumbs} from '../lib/seo';
import {ResponsiveImage} from './ResponsiveImage';

const covers = {
 'contatti': {title:'Contatti', image:'corsa-pianificazione',position:'50% 44%'},
 'metodo': {title:'Il Metodo Corpo Capace', image:'equilibrio-monopodalico',position:'50% 43%'},
 'per-chi': {title:'Per chi è', image:'ginocchio-step',position:'50% 40%'},
 'percorsi': {title:'Come funziona il percorso Corpo Capace', image:'per-chi-movimento',position:'80% 50%'},
 'team': {title:'Il Team Corpo Capace', image:'corsa-pianificazione',position:'50% 44%'},
 'chi-sono': {title:'Dr. Botta', image:'dr-botta-giacca-blu',position:'50% 15%'},
 'testimonianze': {title:'Le testimonianze', image:'corsa-ricreativa-articolazioni',position:'50% 35%'},
 'guide': {title:'Le guide', image:'corsa-pianificazione',position:'50% 58%'},
 'domande-frequenti': {title:'Domande frequenti', image:'ginocchio-step',position:'50% 48%'},
 'colloquio': {title:'Il primo colloquio', image:'corsa-pianificazione',position:'50% 42%'},
 'quiz-corpo-capace': {title:'Il quiz Corpo Capace', image:'equilibrio-monopodalico',position:'50% 42%'},
 'termini-e-condizioni': {title:'Termini e condizioni', image:'corsa-pianificazione',position:'50% 60%'},
} as const;
export type InnerPage = keyof typeof covers;
export function PageHero({page}:{page:InnerPage}) {
 const cover=covers[page];
 return <section className={`cc-page-cover${page==='chi-sono'?' cc-page-cover-founder':''}${page==='quiz-corpo-capace'?' cc-page-cover-compact':''}`} aria-labelledby="page-title">
  <ResponsiveImage className="cc-page-cover-image" src={`/images/${cover.image}.webp`} alt="" sizes="100vw" loading="eager" fetchPriority="high" style={{objectPosition:cover.position}}/>
  <div className="cc-page-cover-shade"/>
  <div className="cc-page-cover-copy"><h1 id="page-title">{page==='percorsi'?<>Come funziona<br/>il percorso Corpo Capace</>:cover.title}</h1><Breadcrumbs items={[{name:'Home',path:'/'},...(page==='percorsi'?[{name:'Il percorso',path:'/percorsi'}]:[]),{name:page==='percorsi'?'Come funziona':cover.title,path:`/${page}`}]} /></div>
 </section>;
}
