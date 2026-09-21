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
          <h1>Dolore, movimento<br />e allenamento.</h1>
          <p>Articoli su piede, ginocchio, anca e gestione del carico. Per capire i sintomi, orientarti tra le informazioni e preparare il ritorno alle tue attività.</p>
        </div>
        <div className="blog-hero-side"><p>Parti dall’argomento che ti riguarda. Ogni approfondimento collega informazioni, fonti e scelte sul movimento.</p><a className="text-link" href="/blog/piede-caviglia">Articoli su piede e caviglia →</a></div>
      </section>
      <TopicLinks />
      <section className="blog-running-entry"><div><p className="section-label">Corsa: scegli il tuo punto di partenza</p><h2>Un programma, i primi passi o più resistenza?</h2><p>Guide organizzate per obiettivo, dalla ripresa dopo uno stop alla gestione di volume, intensità e recupero.</p></div><Link className="button" href="/blog/corsa">Esplora le guide sulla corsa →</Link></section>
      <BlogExplorer articles={articleSummaries} />
      <section className="blog-newsletter">
        <div><p className="section-label section-label--light">Dal blog al metodo</p><h2>Dai consigli al tuo percorso.</h2></div>
        <p>Gli articoli aiutano a orientarti. Il percorso di allenamento parte invece dalla tua situazione, dalle capacità attuali e dall’attività che vuoi recuperare.</p>
        <Link className="button button--light" href="/metodo">Scopri il Metodo <span>→</span></Link>
      </section>
      <Footer />
    </main></>
  );
}
