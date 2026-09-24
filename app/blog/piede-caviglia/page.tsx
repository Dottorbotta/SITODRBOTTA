import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../lib/seo";
import { articles } from "../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia",
  "Piede e caviglia: dolore, funzione e ritorno all’attività | Dr. Botta",
  "Guide Dr. Botta su dolore al piede e alla caviglia, fascia plantare, carico, funzione e ritorno graduale a cammino, corsa e sport."
);

export default function PiedeCavigliaPage() {
  const list = articles.filter((article) => article.hub === "Piede e caviglia" || article.category === "Piede");
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"}]} />
      <p className="section-label">Guide per orientarsi</p>
      <h1>Piede e caviglia</h1>
      <p className="topic-lead">Dolore, funzione, calzature e gestione del carico: parti dalla sede e dal comportamento dei sintomi, poi approfondisci il percorso più vicino alla tua situazione.</p>
      <div className="topic-articles">
        <Link href="/blog/dolore-piede-corsa-fattori-da-valutare"><span>Inizia da qui</span><h2>Dolore al piede durante la corsa</h2><p>Una guida per orientarsi in base alla sede, al carico e alla risposta del piede.</p><strong>Leggi →</strong></Link>
        <Link href="/blog/piede-caviglia/tallone-fascia-plantare"><span>Sotto-hub</span><h2>Tallone e fascia plantare</h2><p>Differenziale, persistenza dei sintomi e recupero della capacità.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/tendine-achille"><span>Sotto-hub</span><h2>Tendine d’Achille</h2><p>Tendinopatia, carico progressivo, rottura e ritorno allo sport.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/avampiede-metatarsi"><span>Sotto-hub</span><h2>Avampiede e metatarsi</h2><p>Metatarsalgia, neuroma di Morton, plantar plate e gestione del carico.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/alluce-primo-raggio"><span>Sotto-hub</span><h2>Alluce e primo raggio</h2><p>Dolore dell’alluce, rigidità, scarpe e ritorno alla spinta.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/stress-osseo-piede"><span>Sotto-hub</span><h2>Stress osseo del piede</h2><p>Segnali da riconoscere, sedi a rischio e ritorno graduale alla corsa.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/dolore-mesopiede-cause-differenziale"><span>Guida</span><h2>Dolore al mesopiede</h2><p>Lisfranc, stress osseo, artrosi e tendini: come orientare il differenziale.</p><strong>Leggi →</strong></Link>
        <Link href="/blog/piede-caviglia/distorsione-instabilita-caviglia"><span>Sotto-hub</span><h2>Distorsione e instabilità di caviglia</h2><p>Valutazione, recupero, supporti e ritorno a corsa e sport.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/biomeccanica-funzione-piede"><span>Sotto-hub</span><h2>Biomeccanica e funzione del piede</h2><p>Pronazione, dorsiflessione, tendini laterali e relazione tra forma e carico.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/scarpe-ortesi-transizione"><span>Sotto-hub</span><h2>Scarpe, ortesi e transizione</h2><p>Comfort, supporto, caratteristiche delle scarpe e adattamento graduale al cambiamento.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/piede-caviglia/tibiale-posteriore-piede-piatto"><span>Sotto-hub</span><h2>Tibiale posteriore e piede piatto</h2><p>Dolore mediale, valutazione, deformità progressiva ed esercizio.</p><strong>Esplora →</strong></Link>
        <Link href="/blog/artrosi-mesopiede-scarpe-ortesi-esercizio"><span>Guida</span><h2>Artrosi del mesopiede</h2><p>Come valutare scarpe, supporti e capacità attiva nella gestione del carico.</p><strong>Leggi →</strong></Link>
        {list.filter(a=>!["dolore-piede-corsa-fattori-da-valutare","dolore-tallone-non-sempre-fascite-plantare","dolore-tallone-da-mesi-terapie-plantari"].includes(a.slug)).slice(0,4).map(a=><Link href={`/blog/${a.slug}`} key={a.slug}><span>{a.readingTime} di lettura</span><h2>{a.title}</h2><p>{a.excerpt}</p><strong>Leggi →</strong></Link>)}
      </div>
    </section><Footer />
  </main></>;
}
