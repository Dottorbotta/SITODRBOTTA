import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/stress-osseo-piede",
  "Stress osseo del piede: segnali, sedi e ritorno al carico | Dr. Botta",
  "Guide sulle bone stress injuries del piede: quinto metatarso, calcagno, runner e ritorno progressivo alla corsa dopo la guarigione."
);

export default function StressOsseoPiedePage() {
  const list = articles.filter(article => article.subHub === "Stress osseo del piede");
  const pillars = ["193", "191"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Stress osseo del piede",path:"/blog/piede-caviglia/stress-osseo-piede"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Stress osseo del piede</h1>
      <p className="topic-lead">Dolore focale e progressivo dopo carichi ripetuti richiede una valutazione appropriata. Queste guide spiegano sedi, fattori e ritorno al carico dopo la fase medica.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
