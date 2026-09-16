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
  ["05", "Capacità specifica", "Trasferire ciò che hai costruito a cammino, palestra, corsa o sport."],
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
          <h1 id="home-hero-title">Torna a muoverti.<br /><em>Ritrova fiducia nel tuo corpo.</em></h1>
          <p className="hero-lead">Allenamento personalizzato per riprendere cammino, palestra e sport. Partiamo da ciò che riesci a fare oggi e adattiamo il programma in base alla risposta del tuo corpo.</p>
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

        <div className="hero-media" aria-label="Allenamento e valutazione secondo il Metodo Corpo Capace">
          <ResponsiveImage sizes="(max-width: 800px) 88vw, 43vw" loading="eager" fetchPriority="high" width="1000" height="750" src="/images/brand-db261c509ec7.webp" alt="Persona atletica durante un allenamento funzionale" />
          <div className="hero-media-wash" />
          <div className="capacity-gauge">
            <span>CAPACITÀ ATTUALE</span>
            <div><i /><i /><i /><i /><i /></div>
            <strong>PROGRESSIONE</strong>
          </div>
          <div className="hero-stamp"><span>METODO</span><strong>CORPO<br />CAPACE</strong></div>
        </div>

            <Link className="hero-scroll" href="/per-chi">Scopri per chi è <span>→</span></Link>
      </section>

      <section className="recognition" id="per-chi">
        <div className="recognition-title">
          <p className="section-label">Ti riconosci?</p>
          <h2>Riesci ancora a fare.<br /><em>Ma non quanto vorresti.</em></h2>
        </div>
        <div className="recognition-copy">
          <p>Cammini, ma non abbastanza a lungo. Ti alleni, ma se aumenti la frequenza il problema torna. Completi l’attività, ma la paghi il giorno dopo. Oppure eviti alcune richieste perché non sai quanto puoi fidarti del tuo corpo.</p>
          <div className="market-voices">
            <span>“Non so quanto posso fare”</span>
            <span>“Non mi fido del mio corpo”</span>
            <span>“Vorrei fare le cose senza pensarci”</span>
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
          <p>Quando la richiesta supera ciò che il corpo riesce oggi a sostenere con sufficiente affidabilità, possono comparire dolore, rigidità, affaticamento o limitazione. Spegnere il sintomo può aiutare. Ma non sempre colma la distanza dall’attività.</p>
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
        <div className="routes-heading">
          <div>
            <p className="section-label">Dove vuoi tornare</p>
            <h2 id="routes-title">Vita quotidiana.<br /><em>Allenamento e sport.</em></h2>
          </div>
          <p>Definiamo l’attività che vuoi recuperare: quanto deve durare, con quale frequenza e a quale intensità. Il programma parte da questa richiesta e dalla tua situazione.</p>
        </div>
        <div className="routes-grid">
          <Link className="route-card route-card--daily" href="/percorsi">
            <ResponsiveImage sizes="(max-width: 900px) 92vw, 30vw" loading="lazy" width="1000" height="750" src="/images/brand-6da500b82980.webp" alt="Valutazione personalizzata con il team Dr. Botta" />
            <span className="route-card-number">01</span>
            <div><span>Vita quotidiana</span><h3>Riprendi le tue attività.</h3><p>Camminare, lavorare, viaggiare, salire le scale e vivere le tue giornate con più affidabilità.</p><strong>Scopri il percorso →</strong></div>
          </Link>
          <Link className="route-card route-card--fitness" href="/percorsi">
            <ResponsiveImage sizes="(max-width: 900px) 92vw, 30vw" loading="lazy" width="1000" height="750" src="/images/brand-023f3900e8f5.webp" alt="Allenamento progressivo del Metodo Corpo Capace" />
            <span className="route-card-number">02</span>
            <div><span>Allenamento</span><h3>Torna ad allenarti con continuità.</h3><p>Ricostruisci forza, controllo e tolleranza per non dover ripartire ogni volta da zero.</p><strong>Scopri il percorso →</strong></div>
          </Link>
          <Link className="route-card route-card--sport" href="/percorsi">
            <ResponsiveImage sizes="(max-width: 900px) 92vw, 30vw" loading="lazy" width="1000" height="750" src="/images/brand-db261c509ec7.webp" alt="Ritorno allo sport con il Metodo Corpo Capace" />
            <span className="route-card-number">03</span>
            <div><span>Sport</span><h3>Torna al tuo sport.</h3><p>Corsa, palestra, padel o sport di campo: dal gesto controllato alla richiesta reale.</p><strong>Scopri il percorso →</strong></div>
          </Link>
        </div>
      </section>

      <section className="matrix-section">
        <div className="matrix-copy">
          <p className="section-label section-label--light">Matrice Corpo Capace</p>
          <h2>Capace rispetto a cosa?</h2>
          <p>La stessa persona può essere capace nella vita quotidiana e fragile rispetto alla corsa. Per questo partiamo dalla richiesta concreta, non da un’etichetta assoluta.</p>
          <div className="matrix-legend">
            <span><i className="dot dot--capable" /> Capace</span>
            <span><i className="dot dot--limited" /> Limitato</span>
            <span><i className="dot dot--fragile" /> Fragile</span>
            <span><i className="dot dot--unable" /> Incapace</span>
          </div>
        </div>
        <div className="matrix-grid" aria-label="Categorie di richiesta della Matrice Corpo Capace">
          {[
            ["Salute", "Autonomia quotidiana", "camminare · lavorare · scale"],
            ["Wellness", "Vita attiva", "trekking · bici · attività outdoor"],
            ["Fitness", "Allenamento strutturato", "palestra · corsa · sport amatoriale"],
            ["Performance", "Prestazione specifica", "agonismo · forza · velocità · volume"],
          ].map(([title, subtitle, examples], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <strong>{subtitle}</strong>
              <p>{examples}</p>
              <div aria-hidden="true"><i /><i /><i /><i /></div>
            </article>
          ))}
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
          <ResponsiveImage sizes="(max-width: 900px) 92vw, 43vw" loading="lazy" width="1000" height="750" src="/images/brand-6da500b82980.webp" alt="Dr. Simone Botta Lamanna durante una valutazione" />
        </div>
        <div className="founder-copy">
          <p className="section-label">Fondatore e garante del metodo</p>
          <h2>Dr. Simone<br />Botta Lamanna</h2>
          <p>Podologo, osteopata ed esperto in patomeccanica del movimento. Ha costruito Corpo Capace per trasformare valutazione, esercizio e monitoraggio in un sistema applicabile dal team con criteri condivisi e misurabili.</p>
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
