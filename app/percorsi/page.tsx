import { ResponsiveImage } from "../components/ResponsiveImage";
import { pageMetadata } from "../lib/seo";
import { editorialPages } from "../lib/site";
import { CONSULTATION_URL } from "../lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const seoPage = editorialPages.find(p=>p.path=="/percorsi")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

const contactHref = CONSULTATION_URL;

const obstacles = [
  { number: "01", title: "Il sintomo cala, il limite resta", copy: "Stai meglio finché fai meno. Quando riprovi ad aumentare durata, intensità o frequenza, il problema ritorna." },
  { number: "02", title: "Manca una progressione", copy: "Una scheda può essere utile, ma senza criteri di avanzamento non collega il punto in cui sei alla richiesta reale dell’attività." },
  { number: "03", title: "Manca un confronto continuo", copy: "Dubbi, risposta al carico e difficoltà tecniche emergono mentre ti alleni. È lì che servono osservazione e adattamento." },
];

const goals = [
  { tag: "Vita quotidiana", title: "Muovermi senza dover calcolare tutto", copy: "Camminare, lavorare, viaggiare, giocare con i figli o affrontare una giornata piena con maggiore affidabilità." },
  { tag: "Allenamento", title: "Tornare in palestra con continuità", copy: "Ricostruire forza, controllo e tolleranza per allenarti senza alternare ripartenze aggressive e lunghi stop." },
  { tag: "Sport", title: "Riprendere ciò che mi rappresenta", copy: "Correre, pedalare, sciare o tornare in campo preparando il corpo alla dose e ai gesti specifici del tuo sport." },
];

const pillars = [
  { number: "01", title: "Valutazione che orienta", copy: "Partiamo dalla tua storia, dall’attività-obiettivo e da ciò che riesci a sostenere oggi. Osserviamo mobilità, controllo, forza, tolleranza e capacità specifica: solo ciò che serve a decidere." },
  { number: "02", title: "Allenamento che progredisce", copy: "Costruiamo un programma personale compatibile con tempo, attrezzatura, esperienza e recupero. La dose iniziale deve essere allenante, ma realmente sostenibile." },
  { number: "03", title: "Monitoraggio che decide", copy: "Video, feedback, sforzo percepito, sintomi e risposta nelle ore successive guidano il passo seguente. Il programma cambia quando cambiano i dati, non perché è passata una settimana." },
];

const phases = [
  { number: "01", title: "Verifica del perimetro", copy: "Prima di allenare, verifichiamo che il percorso attivo sia appropriato. Quando serve, la priorità resta l’inquadramento sanitario." },
  { number: "02", title: "Obiettivo concreto", copy: "Traduciamo «stare meglio» in qualcosa di osservabile: una distanza, un carico, una durata, una frequenza o un gesto." },
  { number: "03", title: "Valutazione funzionale", copy: "Integriamo colloquio, test, video e risposta al carico per capire il tuo punto di partenza affidabile." },
  { number: "04", title: "Gap di Capacità", copy: "Confrontiamo ciò che il corpo sostiene oggi con ciò che l’attività richiede, individuando poche priorità allenabili." },
  { number: "05", title: "Programma personale", copy: "Ricevi esercizi, routine ed esposizioni progressive con indicazioni chiare su dose, frequenza e segnali da osservare." },
  { number: "06", title: "Feedback e adattamento", copy: "Osserviamo l’esecuzione e la risposta. Possiamo progredire, mantenere oppure modificare senza ripartire ogni volta da zero." },
  { number: "07", title: "Retest e trasferimento", copy: "Rivalutiamo le capacità e rendiamo il lavoro sempre più vicino alla vita, all’allenamento o allo sport a cui vuoi tornare." },
];

const included = [
  "Colloquio iniziale e definizione dell’attività-obiettivo",
  "Valutazione funzionale con test pertinenti al tuo caso",
  "Programma personalizzato fruibile anche da casa o in palestra",
  "Video dimostrativi e istruzioni sulla dose di lavoro",
  "Invio dei tuoi video per ricevere feedback tecnici",
  "Check periodici su sintomi, sforzo, recupero e attività svolte",
  "Aggiornamenti del programma e live mirate quando servono",
  "Retest e progressione verso le richieste reali dell’attività",
];

export default function PathPage() {
  return (
    <><Header /><main id="contenuto" tabIndex={-1}>

      <section className="journey-hero">
        <div className="journey-hero-copy">
          <p className="section-label section-label--light">Il percorso Corpo Capace</p>
          <h1>Tornare a fare.<br />Con un corpo più affidabile.</h1>
          <p>Un percorso di allenamento personalizzato che collega il punto in cui sei alle attività che vuoi riprendere, attraverso valutazione, progressione e monitoraggio.</p>
          <div className="journey-actions">
            <a className="button button--primary" href={contactHref} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a>
            <Link href="/per-chi" className="journey-text-link">Verifica se è per te →</Link>
          </div>
          <div className="journey-proofline"><span>VALUTAZIONE</span><i>→</i><span>ALLENAMENTO</span><i>→</i><span>ADATTAMENTO</span></div>
        </div>
        <figure className="journey-hero-media">
          <ResponsiveImage sizes="(max-width: 900px) 90vw, 43vw" loading="eager" fetchPriority="high" width="1000" height="750" src="/images/brand-023f3900e8f5.webp" alt="Persona seguita durante un esercizio del percorso Corpo Capace" />
          <figcaption><strong>Non una scheda da eseguire.</strong><span>Un processo che evolve con te.</span></figcaption>
        </figure>
      </section>

      <section className="journey-recognition">
        <p className="section-label">Il vero punto di partenza</p>
        <h2>Farlo una volta.<br />Riuscire a ripeterlo.</h2>
        <p>Il problema spesso non è la mancanza assoluta di movimento. È la distanza tra la capacità che il corpo esprime oggi con affidabilità e la richiesta dell’attività a cui vuoi tornare.</p>
      </section>

      <section className="journey-obstacles">
        <div className="journey-section-head">
          <p className="section-label">Perché puoi sentirti ancora bloccato</p>
          <h2>Cosa può mancare al tuo percorso.</h2>
        </div>
        <div className="journey-obstacle-grid">
          {obstacles.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="journey-gap">
        <div className="journey-gap-visual" aria-label="Il percorso riduce progressivamente la distanza tra capacità attuale e richiesta dell'attività">
          <div><small>OGGI</small><strong>Capacità<br />affidabile</strong></div>
          <span>IL PERCORSO</span>
          <div><small>OBIETTIVO</small><strong>Richiesta<br />dell’attività</strong></div>
        </div>
        <div className="journey-gap-copy">
          <p className="section-label section-label--light">La soluzione Corpo Capace</p>
          <h2>Dal sollievo<br />alla capacità.</h2>
          <p>Chiamiamo questo divario <strong>Gap di Capacità</strong>. Il percorso lo riduce costruendo, nella combinazione utile per te, mobilità, controllo, forza, tolleranza e capacità specifica.</p>
          <p>Il sintomo resta un dato importante, ma viene letto insieme a funzione, dose, recupero e contesto.</p>
        </div>
      </section>

      <section className="journey-goals">
        <div className="journey-section-head">
          <p className="section-label">Una destinazione personale</p>
          <h2>Cosa vuoi tornare a fare?</h2>
        </div>
        <div className="journey-goal-grid">
          {goals.map((goal) => <article key={goal.tag}><span>{goal.tag}</span><h3>{goal.title}</h3><p>{goal.copy}</p></article>)}
        </div>
      </section>

      <section className="journey-pillars">
        <div className="journey-pillars-intro">
          <p className="section-label section-label--light">I tre pilastri</p>
          <h2>Tre pilastri.<br />Un percorso personale.</h2>
          <p>Ogni fase produce informazioni utili alla fase successiva. Così il programma non resta statico e la progressione non viene affidata al caso.</p>
        </div>
        <div className="journey-pillar-list">
          {pillars.map((pillar) => <article key={pillar.number}><span>{pillar.number}</span><div><h3>{pillar.title}</h3><p>{pillar.copy}</p></div></article>)}
        </div>
      </section>

      <section className="journey-cycle">
        <div className="journey-cycle-heading">
          <p className="section-label">Come funziona</p>
          <h2>Sette passaggi.<br />Un ciclo che si adatta.</h2>
          <p>Non sono caselle da spuntare una volta sola: valutazione, esposizione e risposta si alimentano a vicenda fino al trasferimento nell’attività.</p>
        </div>
        <div className="journey-cycle-list">
          {phases.map((phase) => <article key={phase.number}><span>{phase.number}</span><div><h3>{phase.title}</h3><p>{phase.copy}</p></div></article>)}
        </div>
      </section>

      <section className="journey-included">
        <div className="journey-included-photo">
          <ResponsiveImage sizes="(max-width: 900px) 90vw, 43vw" loading="lazy" width="1000" height="750" src="/images/brand-6da500b82980.webp" alt="Esercizio personalizzato seguito dal team Dr. Botta" />
        </div>
        <div className="journey-included-copy">
          <p className="section-label">In pratica</p>
          <h2>Cosa trovi nel percorso.</h2>
          <ul>{included.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="journey-decisions">
        <div>
          <p className="section-label section-label--light">Come prendiamo le decisioni</p>
          <h2>La risposta guida la progressione.</h2>
        </div>
        <div className="journey-decision-grid">
          <article><span>↑</span><h3>Progredire</h3><p>Quando esecuzione, risposta e recupero mostrano che puoi sostenere una richiesta maggiore.</p></article>
          <article><span>→</span><h3>Mantenere</h3><p>Quando la dose è utile ma serve ancora tempo per renderla più stabile e ripetibile.</p></article>
          <article><span>↙</span><h3>Modificare</h3><p>Quando tecnica, sintomi o recupero indicano di cambiare esercizio, volume, intensità o frequenza.</p></article>
        </div>
      </section>

      <section className="journey-outcome">
        <p className="section-label">Il risultato che cerchiamo</p>
        <h2>Più capacità.<br />Più autonomia.</h2>
        <p>Vogliamo che tu torni all’attività alla dose necessaria e impari a riconoscere i segnali utili, regolare il carico e mantenere nel tempo le capacità costruite. Non promettiamo dolore zero: lavoriamo per aumentare funzione, affidabilità e autonomia.</p>
        <Link href="/testimonianze" className="button button--dark">Leggi le testimonianze <span>↗</span></Link>
      </section>

      <section className="calendly-section" id="prenota">
        <div className="calendly-heading">
          <p className="section-label">Prenota la tua consulenza</p>
          <h2>Scegli direttamente<br />giorno e orario.</h2>
          <p>Apri il calendario, seleziona la disponibilità più comoda e completa la prenotazione con i tuoi dati.</p>
        </div>
        <details className="calendly-disclosure"><summary className="button button--dark">Apri il calendario e scegli un orario</summary><div className="calendly-frame">
          <iframe src={contactHref} title="Prenota una consulenza con il team Dr. Botta" loading="lazy" />
        </div></details>
      </section>

      <section className="faq-section">
        <div><p className="section-label">Domande frequenti</p><h2>Prima di iniziare.</h2></div>
        <div className="faq-list">
          <details><summary>È un percorso online?<span>+</span></summary><p>Può svolgersi online con programma personalizzato, video dimostrativi, invio delle esecuzioni, feedback e momenti di confronto. Gli esercizi vengono adattati al contesto disponibile, a casa o in palestra.</p></details>
          <details><summary>È fisioterapia a distanza?<span>+</span></summary><p>No. È allenamento personalizzato per il ritorno all’attività e non sostituisce diagnosi, trattamento medico o presa in carico sanitaria quando necessari.</p></details>
          <details><summary>Serve avere dolore?<span>+</span></summary><p>No. Il punto comune è una capacità insufficiente o poco affidabile rispetto a un’attività significativa. Il dolore può essere presente, ricorrente oppure non essere il problema principale.</p></details>
          <details><summary>Il programma è uguale per tutti?<span>+</span></summary><p>No. Sono strutturati il metodo di valutazione e i criteri decisionali; obiettivo, priorità, esercizi, dose, frequenza e progressione vengono personalizzati.</p></details>
          <details><summary>Quanto dura il percorso?<span>+</span></summary><p>Dipende dal punto di partenza, dalla richiesta dell’attività, dalla risposta al carico e dalla continuità. Dopo la valutazione il team può definire una direzione realistica e i primi criteri di avanzamento.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <p>Non serve ripartire dal massimo.</p>
        <h2>Serve trovare il primo passo<br />che puoi sostenere.</h2>
        <a className="button button--light" href={contactHref} target="_blank" rel="noreferrer">Richiedi una consulenza <span>↗</span></a>
      </section>
      <Footer />
    </main></>
  );
}
