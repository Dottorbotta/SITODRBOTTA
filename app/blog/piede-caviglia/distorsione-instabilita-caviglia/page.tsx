import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/distorsione-instabilita-caviglia",
  "Distorsione e instabilità di caviglia: recupero e sport | Dr. Botta",
  "Guide Dr. Botta per valutare la distorsione di caviglia, recuperare funzione, usare supporti e tornare gradualmente a corsa e sport."
);

export default function DistorsioneInstabilitaCavigliaPage() {
  const list = articles.filter(article => article.subHub === "Distorsione e instabilità di caviglia");
  const pillars = ["198", "199", "200"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Distorsione e instabilità di caviglia",path:"/blog/piede-caviglia/distorsione-instabilita-caviglia"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Distorsione e instabilità di caviglia</h1>
      <p className="topic-lead">Dopo una distorsione, la diminuzione del dolore è solo una parte del percorso. Parti dalla valutazione e approfondisci forza, controllo, supporti e ritorno allo sport.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
