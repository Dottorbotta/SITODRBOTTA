"use client";
import { ResponsiveImage } from "../components/ResponsiveImage";


import { useMemo, useState } from "react";
import type { ArticleSummary } from "../data/articles";
const articleCategories = ["Tutti","Metodo","Piede","Ginocchio","Anca","Carico","Ritorno allo sport"] as const;

export function BlogExplorer({ articles }: { articles: ArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof articleCategories)[number]>("Tutti");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("it");
    return articles.filter((article) => {
      const matchesCategory = category === "Tutti" || article.category === category;
      const searchable = `${article.title} ${article.kicker} ${article.excerpt} ${article.category}`.toLocaleLowerCase("it");
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [articles, category, query]);

  return (
    <section className="blog-explorer" aria-label="Archivio articoli Corpo Capace">
      <div className="blog-tools">
        <label>
          <span>Cerca nel blog</span>
          <div className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Piede, carico, corsa..." /></div>
        </label>
        <label>
          <span>Argomento</span>
          <select value={category} onChange={(event) => setCategory(event.target.value as (typeof articleCategories)[number])}>
            {articleCategories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="blog-results-meta" aria-live="polite"><span>{filtered.length} {filtered.length === 1 ? "articolo" : "articoli"}</span><i /></div>

      {filtered.length > 0 ? (
        <div className="blog-card-grid">
          {filtered.map((article, index) => (
            <a className={`blog-cover blog-cover--${article.accent}${article.slug === "perche-camminare-benefici-tutto-il-corpo" ? " blog-cover--long-title" : ""}`} href={`/blog/${article.slug}`} key={article.slug}>
              <ResponsiveImage sizes="(max-width: 600px) calc(100vw - 28px), (max-width: 900px) 92vw, calc(46vw - 8px)" src={article.image} alt="" loading="lazy" width="640" height="420" />
              <div className="blog-cover-filter" />
              <span className="blog-cover-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="blog-cover-copy">
                <span>{article.category} · {article.readingTime}</span>
                <h2>{article.title}</h2>
                <p>{article.kicker}</p>
                <strong>Leggi →</strong>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="blog-empty"><h2>Nessun articolo trovato.</h2><p>Prova un termine più ampio oppure seleziona “Tutti”.</p></div>
      )}
    </section>
  );
}
