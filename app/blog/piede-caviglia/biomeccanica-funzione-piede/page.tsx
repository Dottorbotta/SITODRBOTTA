import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/biomeccanica-funzione-piede",
  "Biomeccanica e funzione del piede: pronazione e carico | Dr. Botta",
  "Guide su pronazione, arco plantare, dorsiflessione e dolore laterale: leggere la biomeccanica insieme a sintomi, capacità e carico."
);

export default function BiomeccanicaFunzionePiedePage() {
  const list = articles.filter(article => article.subHub === "Biomeccanica e funzione del piede");
  const pillars = ["218", "210", "211", "204"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Biomeccanica e funzione del piede",path:"/blog/piede-caviglia/biomeccanica-funzione-piede"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Biomeccanica e funzione del piede</h1>
      <p className="topic-lead">La forma e il movimento del piede sono informazioni da leggere insieme al sintomo e al compito. Esplora pronazione, arco, dorsiflessione e tendini laterali.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
