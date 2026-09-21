import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/tallone-fascia-plantare",
  "Dolore al tallone e fascia plantare: guide e approfondimenti | Dr. Botta",
  "Approfondimenti sul dolore al tallone, la fascia plantare, le diagnosi da distinguere, la gestione del carico e il ritorno alle attività."
);

export default function TalloneFasciaPage() {
  const list = articles.filter((article) => article.subHub === "Tallone e fascia plantare" || article.slug === "fascite-plantare-sintomi-cure-ritorno-movimento");
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Tallone e fascia plantare",path:"/blog/piede-caviglia/tallone-fascia-plantare"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Tallone e fascia plantare</h1>
      <p className="topic-lead">Il dolore al tallone non identifica automaticamente una fascite. Queste guide aiutano a distinguere i quadri possibili e a collegare sintomi, carico e capacità da recuperare.</p>
      <div className="topic-articles">{list.map((article)=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{article.readingTime} di lettura</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
