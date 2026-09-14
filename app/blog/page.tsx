import { pageMetadata } from "../lib/seo";
import { editorialPages } from "../lib/site";
import { articleSummaries } from "../data/articles";
import { TopicLinks } from "../components/TopicLinks";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BlogExplorer } from "./BlogExplorer";

const seoPage = editorialPages.find(p=>p.path=="/blog")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

export default function BlogPage() {
  return (
    <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
      <section className="blog-hero">
        <div>
          <p className="section-label">Il blog di Corpo Capace</p>
          <h1>Capire il corpo.<br />Tornare a usarlo.</h1>
          <p>Movimento, dolore e allenamento: strumenti per capire il tuo corpo e tornare alle attività che contano.</p>
        </div>
        <div className="blog-hero-side"><p>Parti dall’argomento che ti riguarda. Ogni approfondimento collega informazioni, fonti e scelte sul movimento.</p><a className="text-link" href="/blog/argomenti/piede">Esplora il piede →</a></div>
      </section>
      <TopicLinks />
      <BlogExplorer articles={articleSummaries} />
      <section className="blog-newsletter">
        <div><p className="section-label section-label--light">Non un consiglio isolato</p><h2>Dai consigli al tuo percorso.</h2></div>
        <p>Ogni contenuto parte dalla stessa domanda: che cosa deve tornare a sostenere il corpo perché l’attività diventi di nuovo disponibile?</p>
        <Link className="button button--light" href="/metodo">Scopri il Metodo <span>→</span></Link>
      </section>
      <Footer />
    </main></>
  );
}
