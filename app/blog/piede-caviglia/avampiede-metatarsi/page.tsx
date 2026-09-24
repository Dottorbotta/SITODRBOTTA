import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/avampiede-metatarsi",
  "Avampiede e metatarsi: metatarsalgia, neuroma e plantar plate | Dr. Botta",
  "Guide sul dolore dell’avampiede: differenziale della metatarsalgia, neuroma di Morton, plantar plate, supporti e progressione del carico."
);

export default function AvampiedeMetatarsiPage() {
  const list = articles.filter(article => article.subHub === "Avampiede e metatarsi");
  const pillars = ["182", "184", "185"];
  const ordered = [...list].sort((a,b) => {
    const x=pillars.indexOf(a.sourceArticleId ?? ""), y=pillars.indexOf(b.sourceArticleId ?? "");
    return (x<0?10:x)-(y<0?10:y) || Number(a.sourceArticleId)-Number(b.sourceArticleId);
  });
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},{name:"Piede e caviglia",path:"/blog/piede-caviglia"},{name:"Avampiede e metatarsi",path:"/blog/piede-caviglia/avampiede-metatarsi"}]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Avampiede e metatarsi</h1>
      <p className="topic-lead">Il punto in cui senti dolore non basta a nominare la causa. Parti dal differenziale, poi approfondisci neuroma, plantar plate, supporti e ritorno al carico.</p>
      <div className="topic-articles">{ordered.map(article=><Link href={`/blog/${article.slug}`} key={article.slug}><span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong></Link>)}</div>
    </section><Footer />
  </main></>;
}
