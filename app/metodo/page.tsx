import { pageMetadata } from "../lib/seo";
import { editorialPages } from "../lib/site";
import { CONSULTATION_URL } from "../lib/site";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const seoPage = editorialPages.find(p=>p.path=="/metodo")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

const profiles = [
  { level: "04", name: "Capace", formula: "Movimento sufficiente + tolleranza sufficiente", copy: "Sostieni la dose richiesta, recuperi in modo compatibile e puoi ripetere l'attività con sufficiente prevedibilità." },
  { level: "03", name: "Limitato", formula: "Tolleranza conservata + capacità di movimento insufficiente", copy: "Riesci a fare una discreta quantità di attività, ma alcune capacità restringono gesti, opzioni o progressioni." },
  { level: "02", name: "Fragile", formula: "Movimento conservato + tolleranza insufficiente", copy: "Riesci a eseguire il gesto, ma piccoli aumenti di volume, intensità o frequenza ti costringono a ridimensionarti." },
  { level: "01", name: "Incapace", formula: "Movimento insufficiente + tolleranza insufficiente", copy: "La distanza dalla richiesta è ancora ampia e va ricostruita progressivamente su entrambe le dimensioni." },
];

export default function MethodPage() {
  return (
    <main id="contenuto">
      <Header tone="dark" />

      <section className="inner-hero inner-hero--method">
        <div>
          <p className="section-label">Il Metodo Corpo Capace</p>
          <h1>Un corpo capace<br />non è un corpo perfetto.</h1>
          <p>È un corpo sufficientemente preparato a sostenere con continuità e affidabilità ciò che vuoi chiedergli.</p>
        </div>
        <div className="inner-hero-mark" aria-hidden="true"><span>C</span><span>C</span></div>
      </section>

      <section className="method-definition">
        <div>
          <p className="section-label">La definizione</p>
          <h2>Allenati per tornare all’attività.</h2>
        </div>
        <div>
          <p>Corpo Capace riporta la persona alle attività desiderate attraverso il recupero progressivo delle capacità fisiche, della tolleranza al carico e dell’affidabilità nell’uso del corpo.</p>
          <p>Non nasce per correggere una postura, inseguire un singolo tessuto o promettere l’assenza di ogni sensazione dolorosa. Nasce per colmare il divario tra ciò che il corpo sostiene oggi e ciò che la persona vuole tornare a fare.</p>
        </div>
      </section>

      <section className="formula-section">
        <p className="section-label section-label--light">La formula operativa</p>
        <div className="formula-row">
          <article><span>01</span><strong>Capacità affidabile attuale</strong><p>La dose che puoi usare, ripetere e recuperare oggi.</p></article>
          <i aria-hidden="true">&lt;</i>
          <article><span>02</span><strong>Richiesta dell’attività</strong><p>La dose reale necessaria per ciò che vuoi tornare a fare.</p></article>
          <i aria-hidden="true">=</i>
          <article className="formula-result"><span>03</span><strong>Gap di Capacità</strong><p>La distanza da misurare, allenare e rivalutare.</p></article>
        </div>
      </section>

      <section className="progression-section">
        <div className="progression-heading">
          <p className="section-label">Il meccanismo centrale</p>
          <h2>Progressione<br />di Capacità</h2>
          <p>Partiamo dal livello che il corpo riesce a sostenere oggi. Troviamo una dose adeguata e aumentiamo progressivamente la richiesta sulla base della risposta reale, fino all’attività desiderata.</p>
        </div>
        <div className="progression-track" aria-label="Ciclo adattivo Corpo Capace">
          {[
            ["Valutiamo", "obiettivo + capacità + dose iniziale"],
            ["Esponiamo", "movimento e carico sostenibili"],
            ["Osserviamo", "sintomi + sforzo + recupero"],
            ["Adattiamo", "una variabile alla volta"],
            ["Progrediamo", "quando la risposta lo consente"],
            ["Trasferiamo", "verso il gesto reale"],
            ["Rivalutiamo", "nuovo livello vs obiettivo"],
          ].map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="matrix-detail">
        <div className="matrix-detail-heading">
          <p className="section-label section-label--light">Matrice Corpo Capace</p>
          <h2>Il tuo obiettivo.<br />Il tuo punto di partenza.</h2>
          <p>Prima identifichiamo ciò che vuoi chiedere al corpo: autonomia quotidiana, vita attiva, allenamento o prestazione. Poi osserviamo movimento utile e tolleranza al carico.</p>
        </div>
        <div className="demand-levels">
          {[
            ["Salute", "Autonomia quotidiana"],
            ["Wellness", "Vita attiva e attività ricreative"],
            ["Fitness", "Allenamento e sport amatoriale"],
            ["Performance", "Prestazione specifica e agonismo"],
          ].map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}
        </div>
        <div className="profile-grid">
          {profiles.map((profile) => (
            <article key={profile.name}>
              <span>{profile.level}</span>
              <h3>{profile.name}</h3>
              <strong>{profile.formula}</strong>
              <p>{profile.copy}</p>
            </article>
          ))}
        </div>
        <p className="matrix-note">La Matrice Corpo Capace è una tassonomia operativa proprietaria in fase di formalizzazione. Non è una diagnosi, una scala clinica validata o uno strumento prognostico.</p>
      </section>

      <section className="principles-section">
        <div className="principles-heading">
          <p className="section-label">Principi non negoziabili</p>
          <h2>Rigore prima<br />delle scorciatoie.</h2>
        </div>
        <ol>
          <li><span>01</span><p>Il dolore non è una misura diretta del danno tissutale.</p></li>
          <li><span>02</span><p>Un’asimmetria o un compenso non sono automaticamente patologici.</p></li>
          <li><span>03</span><p>Correlazione biomeccanica non significa causalità.</p></li>
          <li><span>04</span><p>La risposta individuale al carico conta più di protocolli rigidi.</p></li>
          <li><span>05</span><p>La personalizzazione riguarda dose, priorità, progressione e contesto.</p></li>
          <li><span>06</span><p>Sicurezza e corretto perimetro professionale vengono prima della progressione.</p></li>
        </ol>
      </section>

      <section className="not-method-section">
        <div>
          <p className="section-label section-label--light">Cosa non è</p>
          <h2>Cosa non promettiamo.</h2>
          <ul>
            <li>Non è correzione posturale universale.</li>
            <li>Non è un protocollo uguale per tutti.</li>
            <li>Non è una raccolta di esercizi segreti.</li>
            <li>Non sostituisce diagnosi o presa in carico sanitaria quando necessarie.</li>
          </ul>
        </div>
        <div>
          <p className="section-label section-label--light">Cosa è</p>
          <h2>Cosa facciamo, in pratica.</h2>
          <ul>
            <li>Valutazione funzionale centrata sull’attività.</li>
            <li>Esposizione progressiva al movimento e al carico.</li>
            <li>Monitoraggio della risposta e adattamento continuo.</li>
            <li>Trasferimento alla vita reale e costruzione di autonomia.</li>
          </ul>
        </div>
      </section>

      <section className="final-cta final-cta--cream">
        <p>Il metodo è chiaro. Il percorso deve essere tuo.</p>
        <h2>Definiamo il tuo obiettivo<br />e la prima dose sostenibile.</h2>
        <a className="button button--dark" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
      </section>

      <Footer />
    </main>
  );
}
