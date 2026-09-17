import { ResponsiveImage } from "./components/ResponsiveImage";
import { TopicLinks } from "./components/TopicLinks";
import { pageMetadata } from "./lib/seo";
import { editorialPages } from "./lib/site";
import { CONSULTATION_URL } from "./lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TrustpilotBox } from "./components/TrustpilotBox";
import { articles } from "./data/articles";

const seoPage = editorialPages.find(p=>p.path=="/")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

const capacities = [
  ["01", "Mobilità", "Avere il movimento necessario per l’attività, senza inseguire un’ampiezza ideale."],
  ["02", "Controllo", "Organizzare il gesto, mantenere equilibrio e adattare l'esecuzione."],
  ["03", "Forza", "Produrre, assorbire e sostenere la forza richiesta dall'attività."],
  ["04", "Tolleranza", "Ripetere il compito e recuperare senza doverlo continuamente ridimensionare."],
  ["05", "Capacità specifica", "Usare ciò che hai costruito per camminare, fare le scale e riprendere le tue attività."],
];

const process = [
  ["Valutiamo", "Definiamo l’attività da recuperare, il livello attuale e quanto lavoro puoi sostenere."],
  ["Alleniamo", "Proponiamo movimento ed esercizio a una dose compatibile con il punto di partenza."],
  ["Osserviamo", "Osserviamo sintomi, sforzo, movimento e recupero durante e dopo l’attività."],
  ["Adattiamo", "Cambiamo il minimo necessario: carico, volume, frequenza, variante o recupero."],
  ["Trasferiamo", "Avviciniamo progressivamente il lavoro alle richieste dell'attività reale."],
];

export default function Home() {
  const latestArticles = articles.slice(0, 3);

  return (
    <><Header /><main id="contenuto" tabIndex={-1}>

      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="hero-copy-block">
          <p className="hero-kicker">Metodo Corpo Capace · Dr. Botta</p>
          <h1 id="home-hero-title">Torna alle cose<br /><em>che ti fanno stare bene.</em></h1>
          <p className="hero-lead">Una passeggiata, le scale di casa, una giornata fuori. Se dolore e difficoltà di movimento ti portano a rinunciare, partiamo da ciò che riesci a fare oggi: esercizi personalizzati e confronti con il team per lavorare sulle attività che vuoi recuperare.</p>
          <div className="hero-actions">
            <a className="button button--primary" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
            <Link className="text-link text-link--light" href="/metodo">Scopri il metodo <span>→</span></Link>
          </div>
          <a className="hero-trust" href="https://it.trustpilot.com/review/drbotta.com" target="_blank" rel="noreferrer">
            <span className="hero-trust-stars">★★★★★</span>
            <strong>Recensioni</strong>
            <span>Leggi le esperienze su Trustpilot</span>
          </a>
        </div>

        <div className="hero-media" aria-label="Dr. Simone Botta Lamanna, fondatore di Corpo Capace">
          <ResponsiveImage sizes="(max-width: 800px) 88vw, 43vw" loading="eager" fetchPriority="high" width="1122" height="1402" src="/images/dr-botta-camice-home.webp" alt="Dr. Simone Botta Lamanna in camice bianco e camicia azzurra" />
          <div className="hero-media-wash" />
          <div className="hero-stamp"><span>METODO</span><strong>CORPO<br />CAPACE</strong></div>
        </div>

            <Link className="hero-scroll" href="/per-chi">Scopri per chi è <span>→</span></Link>
      </section>

      <section className="recognition" id="per-chi">
        <div className="recognition-title">
          <p className="section-label">Ti riconosci?</p>
          <h2>Quando anche le cose semplici<br /><em>diventano una rinuncia.</em></h2>
        </div>
        <div className="recognition-copy">
          <p>Magari accorci una passeggiata, fai le scale con cautela o rinunci a un’uscita. Hai già provato altre strade e cerchi un percorso che tenga conto delle tue difficoltà, dei tuoi tempi e di come stai, anche quando la risposta cambia.</p>
          <div className="market-voices">
            <span>Riprendere le attività quotidiane</span>
            <span>Sentirsi seguiti durante il percorso</span>
            <span>Un programma compatibile con i propri tempi</span>
          </div>
          <Link className="text-link recognition-link" href="/per-chi">Capisci se è il percorso giusto <span>→</span></Link>
        </div>
      </section>

      <section className="gap-section">
        <div className="gap-visual" aria-hidden="true">
          <div className="gap-now"><span>OGGI</span><strong>Ciò che riesci<br />a sostenere</strong></div>
          <div className="gap-arrow"><i /><span>GAP DI CAPACITÀ</span><i /></div>
          <div className="gap-target"><span>OBIETTIVO</span><strong>Ciò che vuoi<br />tornare a fare</strong></div>
        </div>
        <div className="gap-copy">
          <p className="section-label section-label--light">Il punto di partenza</p>
          <h2>Costruiamo capacità, passo dopo passo.</h2>
          <p>Quanto riesci a camminare oggi? Quale attività vorresti riprendere? Chiamiamo Gap di Capacità la distanza tra il punto di partenza e la richiesta del tuo obiettivo. Ci serve per scegliere gli esercizi e dosare il lavoro; non è una diagnosi delle cause del dolore.</p>
          <Link className="text-link text-link--light" href="/blog/gap-di-capacita">Capisci il Gap di Capacità <span>→</span></Link>
        </div>
      </section>

      <section className="method-overview">
        <div className="method-heading">
          <p className="section-label">Il Metodo Corpo Capace</p>
          <h2>Mobilità, forza e controllo.<br /><em>Per le attività che contano.</em></h2>
          <p>Un corpo capace non è perfetto: è sufficientemente preparato a sostenere con continuità ciò che vuoi chiedergli.</p>
        </div>
        <div className="capacity-list">
          {capacities.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Link className="button button--dark" href="/metodo">Esplora il metodo <span>→</span></Link>
      </section>

      <section className="routes-section" aria-labelledby="routes-title">
        <div className="routes-heading"><div><p className="section-label">Le tue priorità</p><h2 id="routes-title">Il traguardo è<br /><em>nella tua giornata.</em></h2></div><p>Non serve avere un obiettivo sportivo. Scegliamo insieme un’attività concreta e costruiamo il lavoro attorno alle tue possibilità.</p></div>
        <div className="routes-grid">
          {[
            ['Camminare', 'Una passeggiata senza dover decidere prima dove fermarti.', 'Partiamo dal tempo e dalla distanza che riesci a sostenere, osservando anche come recuperi.'],
            ['Muoversi ogni giorno', 'Scale, commissioni, impegni: ritrovare spazio per le tue attività.', 'Gli esercizi preparano alle richieste della tua giornata, con difficoltà e quantità di lavoro da adattare.'],
            ['Tornare a ciò che piace', 'Un viaggio, un’uscita, un’attività lasciata da parte.', 'Il tuo obiettivo guida il percorso. Può essere anche tornare ad allenarti, se è ciò che desideri.'],
          ].map(([label, title, copy]) => <Link className="route-card" href="/percorsi" key={label}><div><span>{label}</span><h3>{title}</h3><p>{copy}</p><strong>Come lavoriamo insieme →</strong></div></Link>)}
        </div>
      </section>

      <section className="matrix-section">
        <div className="matrix-copy"><p className="section-label section-label--light">Anche a distanza</p><h2>Un programma da seguire.<br />Un team con cui confrontarti.</h2><p>Video, indicazioni e confronti aiutano a capire cosa fare e a segnalare ciò che non funziona. Gli aggiornamenti tengono conto delle tue difficoltà e del tempo disponibile.</p></div>
        <div className="matrix-grid">
          {[
            ['Da dove si parte?', 'Dalla tua situazione', 'Raccogliamo obiettivi e difficoltà e valutiamo se il percorso è adatto.'],
            ['E se ho poco tempo?', 'Un impegno da concordare', 'Il programma tiene conto del tempo che puoi dedicargli.'],
            ['Come vengo seguito?', 'Con riscontri e adattamenti', 'Call, video e supporto dipendono dal percorso concordato.'],
            ['È una terapia?', 'È coaching motorio', 'Non sostituisce diagnosi o cure. Quando serve, la valutazione sanitaria viene prima.'],
          ].map(([title, subtitle, copy]) => <article key={title}><h3>{title}</h3><strong>{subtitle}</strong><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="process-section">
        <div className="process-intro">
          <p className="section-label">Il programma si adatta a te</p>
          <h2>Ogni risposta guida il passo successivo.</h2>
          <p>Valutiamo il punto di partenza, proponiamo esercizi e osserviamo come rispondi. Questi riscontri guidano gli adattamenti e il ritorno all’attività desiderata.</p>
          <Link className="button button--outline" href="/percorsi">Come funziona il percorso <span>↗</span></Link>
        </div>
        <ol className="process-list">
          {process.map(([title, copy], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <TopicLinks />

      <TrustpilotBox />

      <section className="founder-section">
        <div className="founder-photo">
          <ResponsiveImage sizes="(max-width: 900px) 92vw, 43vw" loading="lazy" width="1125" height="1687" src="/images/dr-botta-giacca-blu.webp" alt="Ritratto di Dr. Simone Botta Lamanna, fondatore di Corpo Capace" />
        </div>
        <div className="founder-copy">
          <p className="section-label">Il fondatore di Corpo Capace</p>
          <h2>Dr. Simone<br />Botta Lamanna</h2>
          <p>Simone Botta Lamanna ha costruito Corpo Capace attorno a un obiettivo: collegare le capacità di oggi alle attività che una persona desidera tornare a sostenere. Il team lavora con valutazione funzionale, esercizio progressivo e monitoraggio.</p>
          <p className="founder-quote">“Non ti serve un corpo perfetto. Ti serve un corpo sufficientemente capace per ciò che vuoi fare.”</p>
          <Link className="text-link" href="/chi-sono">Conosci Dr. Botta <span>→</span></Link>
        </div>
      </section>

      <section className="latest-blog">
        <div className="latest-blog-heading">
          <div><p className="section-label">Dal blog Corpo Capace</p><h2>Capire meglio.<br />Muoversi con criterio.</h2></div>
          <Link className="text-link" href="/blog">Tutti gli articoli <span>→</span></Link>
        </div>
        <div className="latest-blog-grid">
          {latestArticles.map((article, index) => (
            <Link className={`editorial-card editorial-card--${article.accent}`} href={`/blog/${article.slug}`} key={article.slug}>
              <ResponsiveImage sizes="(max-width: 900px) 92vw, 30vw" loading="lazy" width="1000" height="750" src={article.image} alt="" />
              <span className="editorial-card-number">0{index + 1}</span>
              <div className="editorial-card-content"><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><strong>Leggi l’articolo →</strong></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p>Vuoi tornare a fare ciò che conta?</p>
        <h2>Partiamo da te.<br />Costruiamo il tuo percorso.</h2>
        <a className="button button--light" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
      </section>

      <Footer />
    </main></>
  );
}
