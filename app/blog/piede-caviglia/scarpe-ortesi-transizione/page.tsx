import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Breadcrumbs, pageMetadata } from "../../../lib/seo";
import { articles } from "../../../data/articles";

export const metadata: Metadata = pageMetadata(
  "/blog/piede-caviglia/scarpe-ortesi-transizione",
  "Scarpe, ortesi e transizione nella corsa | Dr. Botta",
  "Guide su scarpe da running, plantari, comfort, supporto e passaggi graduali fra calzature: cosa cambia nel carico e come valutare la risposta individuale."
);

export default function ScarpeOrtesiTransizionePage() {
  const pillars = ["213", "214", "220", "223"];
  const ordered = articles
    .filter(article => article.subHub === "Scarpe, ortesi e transizione")
    .sort((a, b) => {
      const x = pillars.indexOf(a.sourceArticleId ?? "");
      const y = pillars.indexOf(b.sourceArticleId ?? "");
      return (x < 0 ? 10 : x) - (y < 0 ? 10 : y) || Number(a.sourceArticleId) - Number(b.sourceArticleId);
    });

  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <section className="topic-page">
      <Breadcrumbs items={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Piede e caviglia", path: "/blog/piede-caviglia" },
        { name: "Scarpe, ortesi e transizione", path: "/blog/piede-caviglia/scarpe-ortesi-transizione" }
      ]} />
      <p className="section-label">Piede e caviglia</p>
      <h1>Scarpe, ortesi e transizione</h1>
      <p className="topic-lead">Scarpe e supporti possono cambiare il modo in cui distribuiamo il carico. Parti dall’obiettivo, osserva comfort e sintomi e dai al corpo tempo per adattarsi quando cambi calzatura.</p>
      <div className="topic-articles">{ordered.map(article =>
        <Link href={`/blog/${article.slug}`} key={article.slug}>
          <span>{pillars.includes(article.sourceArticleId ?? "") ? "Guida principale" : `${article.readingTime} di lettura`}</span>
          <h2>{article.title}</h2><p>{article.excerpt}</p><strong>Leggi →</strong>
        </Link>
      )}</div>
    </section><Footer />
  </main></>;
}
