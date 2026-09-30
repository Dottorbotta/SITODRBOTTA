import {MarketingShell,Intro} from '../components/Marketing';
import {GoalExplorer} from '../components/GoalExplorer';
import {pageMetadata} from '../lib/seo';
export const metadata=pageMetadata('/quiz-corpo-capace','Quiz Corpo Capace | Scopri il tuo punto di partenza','Cinque domande su attività, movimento e continuità per orientarti nel Metodo Corpo Capace e preparare il colloquio con il team.');
export default function Page(){return <MarketingShell><Intro page="quiz-corpo-capace" label="Il quiz Corpo Capace" title="Parti dalla vita che vuoi recuperare." copy="Scegli un’attività concreta e rispondi pensando a ciò che già conosci della tua esperienza. Non occorre eseguire esercizi o fare prove."/><section className="cc-section"><div className="cc-wrap cc-quiz-standalone"><GoalExplorer/></div></section></MarketingShell>}
