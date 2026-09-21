import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Breadcrumbs, JsonLd, pageMetadata } from '../../lib/seo';
import { absolute } from '../../lib/site';
import { getArticle } from '../../data/articles';
import { runningGroups } from '../../data/running';
export const metadata=pageMetadata('/blog/corsa','Corsa: tecnica, programmazione e performance | Dr. Botta','Guide per iniziare, programmare e migliorare la corsa: carico, resistenza, tecnica, recupero e progressioni individuali.');
export default function RunningHub(){
 const slugs=[...new Set(runningGroups.flatMap(g=>g.articleSlugs))];
 return <><Header tone="dark"/><main id="contenuto" tabIndex={-1} className="running-hub">
 <Breadcrumbs items={[{name:'Home',path:'/'},{name:'Blog',path:'/blog'},{name:'Corsa',path:'/blog/corsa'}]}/>
 <JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:'Corsa: tecnica, programmazione e performance',url:absolute('/blog/corsa'),mainEntity:{'@type':'ItemList',itemListElement:slugs.map((s,i)=>({'@type':'ListItem',position:i+1,url:absolute('/blog/'+s),name:getArticle(s)?.title}))}}}/>
 <header className="running-intro"><p className="section-label">Le guide Dr. Botta</p><h1>Corsa: costruisci capacità,<br/>poi aumenta la richiesta.</h1><p>Iniziare, tornare dopo uno stop e migliorare un tempo richiedono decisioni diverse. Qui trovi le guide per scegliere da dove partire, distribuire gli allenamenti e capire quando modificare la dose.</p><p>Il punto di partenza è ciò che riesci a fare e recuperare oggi. Chilometri, intensità e frequenza diventano utili quando li colleghi al tuo obiettivo e alla risposta nelle sedute successive.</p></header>
 <nav className="running-paths" aria-label="Scegli il tuo obiettivo">{runningGroups.map(g=><a key={g.slug} href={'#'+g.slug}>{g.name} →</a>)}<a href="#tecnica">Capire la tecnica →</a></nav>
 {runningGroups.map(g=><section className="running-group" id={g.slug} key={g.slug}><div><p className="section-label">{g.active?'Percorso di lettura':'Approfondimenti'}</p><h2>{g.name}</h2><p>{g.description}</p>{g.active&&<Link className="text-link" href={'/blog/corsa/'+g.slug}>Esplora il percorso →</Link>}</div><ul>{g.articleSlugs.map((slug,i)=>{const a=getArticle(slug)!;return <li key={slug}><span>{i===0?'Da cui iniziare':a.readingTime+' di lettura'}</span><Link href={'/blog/'+slug}>{a.title}</Link></li>})}</ul></section>)}
 <section className="running-group" id="tecnica"><div><p className="section-label">Tecnica e movimento</p><h2>Osserva il gesto nel suo contesto.</h2><p>Postura, cadenza e appoggio sono variabili da interpretare. Una modifica deve avere uno scopo preciso, senza inseguire un modello valido per tutti.</p></div><ul>{['tecnica-di-corsa','cadenza-corsa-velocita-carico','running-economy-tecnica-forza-corsa','tecnica-corsa-corretta-regole'].map(s=><li key={s}><Link href={'/blog/'+s}>{getArticle(s)!.title}</Link></li>)}</ul></section>
 <section className="running-footer"><h2>Se il dolore continua a limitare la corsa</h2><p>Queste guide aiutano a orientarti. Un sintomo persistente richiede di considerare la tua storia e il comportamento del dolore; una lettura non sostituisce una valutazione sanitaria quando necessaria.</p><Link className="button" href="/percorsi">Scopri il percorso Corpo Capace →</Link><p>A cura del <Link href="/chi-sono">team Corpo Capace</Link>.</p></section>
 </main><Footer/></>;
}
