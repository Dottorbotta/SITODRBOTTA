import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/tibiale-posteriore-piede-piatto",
  "Tibiale posteriore e piede piatto: valutazione e carico | Dr. Botta",
  "Guide su dolore mediale di caviglia, tendine tibiale posteriore, piede piatto acquisito, supporti e capacità del piede."
);

export default function TibialePosteriorePiedePiattoPage() {
  const list = articles.filter(article => article.subHub === "Tibiale posteriore e piede piatto");
  const pillars = ["206", "209"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Tibiale posteriore e piede piatto",path:"/blog/piede-caviglia/tibiale-posteriore-piede-piatto"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Tibiale posteriore e piede piatto</h1>
      <p className="topic-lead">Dolore del tendine, forma del piede e deformità progressiva non descrivono sempre lo stesso problema. Parti dai sintomi e dalla funzione prima di scegliere esercizio o supporto.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
