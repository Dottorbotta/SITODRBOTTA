import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/alluce-primo-raggio",
  "Alluce e primo raggio: dolore, rigidità e sport | Dr. Botta",
  "Guide su dolore all’alluce, hallux rigidus, scarpe, turf toe e recupero della spinta nel cammino e nello sport."
);

export default function AllucePrimoRaggioPage() {
  const list = articles.filter(article => article.subHub === "Alluce e primo raggio");
  const pillars = ["187", "188"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Alluce e primo raggio",path:"/blog/piede-caviglia/alluce-primo-raggio"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Alluce e primo raggio</h1>
      <p className="topic-lead">Parti dalla sede e dal comportamento del dolore. Esplora poi rigidità, calzature, lesioni traumatiche e recupero della spinta.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
