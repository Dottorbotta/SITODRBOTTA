import { notFound } from "next/navigation";
import { topicFor } from "../../data/topics";
import { ArticleSchema, ArticleFaqSchema, Breadcrumbs, pageMetadata } from "../../lib/seo";
import { CONSULTATION_URL } from "../../lib/site";
import { ArticleBlock, CapacityGap } from "../../components/ArticleBlock";
import { CapacityMatrix } from "../../components/CapacityMatrix";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { articles, getArticle } from "../../data/articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Articolo non trovato | Corpo Capace" };
  return pageMetadata(`/blog/${article.slug}`, article.seoTitle ?? `${article.title} | Corpo Capace`, article.excerpt, article.image);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();
  const topic = topicFor(article.category);

  const related = (article.relatedPosts ?? []).map(slug=>getArticle(slug)).filter((item): item is NonNullable<typeof item> => Boolean(item)).slice(0,3);

  return (
    <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
      <ArticleSchema article={article} /><ArticleFaqSchema article={article} />
      <article className="article-page">
        <header className={`article-header${article.slug === "perche-camminare-benefici-tutto-il-corpo" ? " article-header--long" : ""}`}>
          <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blog",path:"/blog"},...(topic?[{name:topic.name,path:`/blog/argomenti/${topic.slug}`}]:[]),{name:article.title,path:`/blog/${article.slug}`}]} />
          <div className="article-meta"><span>{article.category}</span><span>{article.date}</span><span>{article.readingTime} di lettura</span></div>
          <h1>{article.title}</h1>
          <p>{article.kicker}</p><div className="article-byline">A cura del <a href="/chi-sono">team Corpo Capace</a>{article.updatedAt && <span> · Aggiornato il {article.updatedAt}</span>}</div>
        </header>

        <figure className={`article-cover article-cover--${article.accent}`}>
          <img src={article.image} alt={article.imageAlt ?? ""} width="1200" height="750" fetchPriority="high" />
          <div /><figcaption>{article.imageCaption ?? "Metodo Corpo Capace · Dr. Botta"}</figcaption>
        </figure>

        <div className="article-layout">
          <aside className="article-aside"><details open><summary>Indice dell’articolo</summary>

            {article.sections.map((section, index) => <a href={`#sezione-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, "0")} · {section.heading}</a>)}
            <a className="article-share" href="mailto:?subject=Un%20articolo%20di%20Corpo%20Capace">Condividi via email ↗</a>
          </details></aside>
          <div className="article-body">
            <p className="article-intro">{article.intro}</p>
            {article.sections.map((section, index) => (
              <section id={`sezione-${index + 1}`} key={section.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <ArticleBlock key={paragraph} text={paragraph} />)}
                {section.image && <figure className="article-inline-image"><img src={section.image.src} alt={section.image.alt} loading="lazy" width="1200" height="900" /><figcaption>{section.image.caption}</figcaption></figure>}
                {section.matrix && <CapacityMatrix />}
                {section.gap && <CapacityGap />}
              </section>
            ))}
            {topic && <nav className="article-topic-link" aria-label="Approfondimenti collegati"><a href={`/blog/argomenti/${topic.slug}`}>Tutti gli articoli: {topic.name} →</a>{topic.pillar !== article.slug && <a href={`/blog/${topic.pillar}`}>Leggi l’approfondimento di riferimento →</a>}<a href="/percorsi">Come funziona il percorso Corpo Capace →</a></nav>}
            <div className="article-takeaways">
              <p className="section-label section-label--light">In sintesi</p>
              <h2>Che cosa portarti via</h2>
              <ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            {article.sources && <section className="article-sources" aria-labelledby="fonti"><h2 id="fonti">Fonti e approfondimenti</h2><p>Fonti consultate il {article.sourceDate ?? "7 settembre 2026"}. Riferimenti per approfondire i contenuti dell’articolo.</p><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section>}
            <p className="article-disclaimer">Questo articolo ha finalità informative e non sostituisce diagnosi, trattamento medico o valutazione sanitaria quando necessari.</p>
          </div>
        </div>
      </article>

      <section className="related-articles">
        <div><p className="section-label">Continua a leggere</p><h2>Altri articoli Corpo Capace</h2></div>
        <div>{related.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><strong>Leggi →</strong></Link>)}</div>
      </section>

      <section className="final-cta">
        <p>Il contenuto può darti una direzione.</p>
        <h2>Il percorso deve partire<br />da ciò che vuoi tornare a fare.</h2>
        <a className="button button--light" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
      </section>
      <Footer />
    </main></>
  );
}
