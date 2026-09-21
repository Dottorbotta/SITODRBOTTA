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
        {list.filter(a=>!["dolore-piede-corsa-fattori-da-valutare","dolore-tallone-non-sempre-fascite-plantare","dolore-tallone-da-mesi-terapie-plantari"].includes(a.slug)).slice(0,4).map(a=><Link href={`/blog/${a.slug}`} key={a.slug}><span>{a.readingTime} di lettura</span><h2>{a.title}</h2><p>{a.excerpt}</p><strong>Leggi →</strong></Link>)}
      </div>
    </section><Footer />
  </main></>;
}
