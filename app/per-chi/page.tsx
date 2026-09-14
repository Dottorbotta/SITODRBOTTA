import { pageMetadata } from "../lib/seo";
import { editorialPages } from "../lib/site";
import { CONSULTATION_URL } from "../lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const seoPage = editorialPages.find(p=>p.path=="/per-chi")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

const signals = [
  ["01", "Riesci a farlo, ma non a sostenerlo", "Cammini, ti alleni o pratichi sport, ma durata, frequenza o intensità restano inferiori a quelle che desideri."],
  ["02", "Quando aumenti, il problema torna", "Stai meglio finché resti sotto una certa soglia. Appena provi a progredire, dolore, rigidità o affaticamento diventano imprevedibili."],
  ["03", "Completi l’attività, ma la paghi dopo", "Durante sembra andare bene. Nelle ore o nel giorno successivo, però, devi fermarti o ridimensionare tutto."],
  ["04", "Hai recuperato solo in parte", "Terapie, esercizio o altri interventi ti hanno aiutato, ma non ti hanno accompagnato fino alla richiesta reale che vuoi sostenere."],
  ["05", "Eviti perché non sai quanto puoi fare", "Non è sempre il sintomo a fermarti: è il dubbio sulla dose giusta e la paura di una nuova ricaduta."],
  ["06", "Vuoi un percorso, non esercizi casuali", "Cerchi una progressione verificabile che parta dal tuo livello attuale e cambi sulla base della risposta del corpo."],
];

const destinations = [
  { number: "01", title: "Vita quotidiana", copy: "Camminare, stare in piedi, lavorare, salire le scale, viaggiare o giocare con i tuoi figli senza organizzare ogni giornata intorno al problema.", examples: "SALUTE · AUTONOMIA" },
  { number: "02", title: "Vita attiva", copy: "Tornare a lunghe camminate, trekking, bicicletta, attività outdoor o palestra leggera con una continuità compatibile con la tua vita.", examples: "WELLNESS · PARTECIPAZIONE" },
  { number: "03", title: "Allenamento", copy: "Riprendere palestra, corsa, padel, tennis o uno sport amatoriale e sostenere davvero volumi, frequenze e intensità programmate.", examples: "FITNESS · CONTINUITÀ" },
  { number: "04", title: "Prestazione", copy: "Ricostruire forza, velocità, potenza, volume e capacità specifiche per tornare a una richiesta elevata o agonistica.", examples: "PERFORMANCE · SPECIFICITÀ" },
];

export default function ForWhoPage() {
  return (
    <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>

      <section className="audience-hero">
        <div className="audience-hero-copy">
          <p className="section-label">Per chi è Corpo Capace</p>
          <h1>Ti muovi.<br /><em>Ma vuoi sentirti più sicuro.</em></h1>
          <p>Il punto non è avere una diagnosi specifica o dolore tutti i giorni. Il punto è non riuscire più a sostenere con affidabilità l’attività che conta per te.</p>
          <div className="audience-hero-actions">
            <a className="button button--primary" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
            <a className="text-link text-link--light" href="#ti-riconosci">Ti riconosci? <span>↓</span></a>
          </div>
        </div>
        <aside className="audience-statement" aria-label="La condizione tipica">
          <span>LA CONDIZIONE TIPICA</span>
          <blockquote>“Riesco ancora a fare molte cose. Ma se aumento la richiesta, il problema torna o la pago dopo.”</blockquote>
          <div><span>CAPACITÀ DI OGGI</span><i /><strong>ATTIVITÀ DESIDERATA</strong></div>
        </aside>
      </section>

      <section className="recognition-deep" id="ti-riconosci">
        <div className="recognition-deep-heading">
          <p className="section-label">Sei nel posto giusto se</p>
          <h2>Quando chiedi di più al corpo.</h2>
          <p>Non devi riconoscerti in ogni situazione. Basta che esista una distanza concreta tra ciò che riesci a sostenere oggi e ciò che vuoi tornare a fare.</p>
        </div>
        <div className="signal-grid">
          {signals.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="pain-spectrum">
        <div>
          <p className="section-label section-label--light">Il dolore non è un requisito</p>
          <h2>Può esserci sempre.<br />Solo a volte.<br />O quasi mai.</h2>
        </div>
        <div className="pain-spectrum-scale">
          {["Persistente", "Ricorrente", "Intermittente", "Lieve o assente tra gli episodi"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
          <p>Il denominatore comune è la perdita di affidabilità rispetto a una richiesta significativa, non l’intensità del sintomo in un singolo momento.</p>
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="section-label">Capace rispetto a cosa?</p>
          <h2>Il tuo obiettivo definisce il percorso.</h2>
          <p>Essere capaci nella vita quotidiana non significa esserlo già per una corsa, una seduta intensa o una gara. Valutiamo il corpo rispetto alla richiesta reale da recuperare.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <article key={item.number}><span>{item.number}</span><small>{item.examples}</small><h3>{item.title}</h3><p>{item.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="eligibility-section">
        <div className="eligibility-good">
          <p className="section-label">Quando ha senso candidarsi</p>
          <h2>Quando serve ricostruire capacità.</h2>
          <ul>
            <li>Hai un’attività concreta alla quale vuoi tornare.</li>
            <li>Sei disponibile ad allenarti con continuità e a condividere feedback.</li>
            <li>Vuoi imparare a dosare il carico, non evitare per sempre ciò che temi.</li>
            <li>Cerchi un programma adattato a obiettivo, tempo, attrezzatura e risposta reale.</li>
          </ul>
        </div>
        <div className="eligibility-stop">
          <p className="section-label section-label--light">Quando serve prima altro</p>
          <h2>Prima, la sicurezza.</h2>
          <p>Corpo Capace non sostituisce diagnosi, trattamento medico o presa in carico sanitaria. Se la condizione è acuta, instabile, non chiarita o presenta segnali che richiedono approfondimento diretto, la priorità è il professionista sanitario appropriato.</p>
          <strong>Prima di aumentare capacità e carico verifichiamo che tu sia nel perimetro corretto per un percorso attivo.</strong>
        </div>
      </section>

      <section className="forwho-bridge">
        <p className="section-label section-label--light">Il passo successivo</p>
        <h2>Ti riconosci?<br />Scopri il percorso.</h2>
        <Link className="button button--light" href="/percorsi">Scopri il percorso <span>→</span></Link>
      </section>

      <Footer />
    </main></>
  );
}
