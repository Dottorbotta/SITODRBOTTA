import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/tendine-achille",
  "Tendine d’Achille: tendinopatia, rottura e ritorno allo sport | Dr. Botta",
  "Guide sul tendine d’Achille: differenze tra tendinopatia inserzionale e midportion, progressione del carico, recupero dopo rottura e ritorno alla corsa."
);

export default function TendineAchillePage() {
  const list = articles.filter(article => article.subHub === "Tendine d’Achille");
  const pillars = ["167", "173", "174", "181"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Tendine d’Achille",path:"/blog/piede-caviglia/tendine-achille"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Tendine d’Achille</h1>
      <p className="topic-lead">Dalla sede del dolore alle capacità da recuperare: scegli una guida sulla tendinopatia, sulla progressione del carico o sul ritorno alla funzione dopo una rottura.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
