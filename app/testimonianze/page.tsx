import { pageMetadata } from "../lib/seo";
import { editorialPages } from "../lib/site";
import { CONSULTATION_URL } from "../lib/site";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const profileUrl = "https://it.trustpilot.com/review/drbotta.com";

const seoPage = editorialPages.find(p=>p.path=="/testimonianze")!;
export const metadata: Metadata = pageMetadata(seoPage.path,seoPage.title,seoPage.description);

const stories = [
  { name: "Vincenzo", date: "19 agosto 2026", title: "Ha ritrovato fiducia nella corsa", tag: "CORSA · ANCA", copy: "Dopo una maratona conviveva con dolore all’anca, all’inguine e alla zona lombare. Un percorso strutturato, con esercizi e feedback continui, gli ha permesso di gestire le ricadute e tornare a correre con maggiore fiducia nel proprio corpo." },
  { name: "Alessandra", date: "21 maggio 2026", title: "È tornata a camminare", tag: "CAMMINO · PIEDE", copy: "Dopo oltre un anno di fascite plantare e diversi tentativi senza il risultato sperato, ha trovato un percorso progressivo e una guida costante. Il traguardo più concreto: tornare a camminare senza il limite che condizionava le sue giornate." },
  { name: "Alessandro", date: "5 maggio 2026", title: "Di nuovo ai suoi livelli", tag: "SPORT · PERFORMANCE", copy: "Atleta professionista, era limitato da problemi a spalla, ginocchio e anca. Dopo mesi di lavoro metodico ha recuperato stabilità, equilibrio e mobilità, tornando progressivamente ai livelli precedenti." },
];

const reviews = [
  { name: "Simona", date: "5 agosto 2026", title: "Mai seguita più di così", copy: "Un programma costruito sui suoi bisogni e sul tempo disponibile, con feedback continui e una relazione capace di farla sentire compresa." },
  { name: "I.G.", date: "5 agosto 2026", title: "Mobilità e resistenza ritrovate", copy: "Dopo un intervento complesso ha apprezzato la programmazione attenta e la disponibilità del team, recuperando mobilità, resistenza e fiducia." },
  { name: "M.M.", date: "10 luglio 2026", title: "Di nuovo alla sua attività", copy: "Un programma mirato e professionisti presenti l’hanno aiutato a gestire un problema che durava da anni e a riprendere l’attività." },
  { name: "Michele", date: "29 giugno 2026", title: "Dallo scetticismo alla corsa", copy: "Era dubbioso sul percorso a distanza. La continuità del supporto e i risultati ottenuti gli hanno permesso di tornare a correre." },
  { name: "Dania", date: "19 giugno 2026", title: "Tornare a correre", copy: "Descrive un team preparato e disponibile e un percorso che le ha consentito di riprendere la corsa senza i dolori che la fermavano." },
  { name: "Pierdaniel", date: "24 maggio 2026", title: "Seguito passo dopo passo", copy: "Video chiari, confronti regolari e presenza costante hanno reso il percorso comprensibile, concreto e facile da seguire." },
  { name: "Andrea", date: "28 aprile 2026", title: "Il valore dei feedback", copy: "Alla prima esperienza a distanza, ha visto miglioramenti in poche settimane grazie ai controlli e agli adattamenti del programma." },
  { name: "Claudia", date: "24 aprile 2026", title: "Più autonomia ogni giorno", copy: "Un problema all’anca limitava anche gesti semplici. Un programma adattato a lei ha migliorato concretamente la qualità della vita quotidiana." },
];

export default function TestimonialsPage() {
  return (
    <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
      <section className="stories-hero">
        <div><p className="section-label">Testimonianze</p><h1>Recensioni ed esperienze<br />con Corpo Capace.</h1><p>Esperienze personali di cammino, corsa e allenamento. Le sintesi rimandano alle recensioni complete su Trustpilot; i risultati raccontati non sono una garanzia di risultati individuali.</p></div>
        <a className="stories-score" href={profileUrl} target="_blank" rel="noreferrer"><span><i>★</i> Trustpilot</span><strong>Le vostre storie</strong><small>Recensioni e valutazioni aggiornate</small><b>Leggile tutte ↗</b></a>
      </section>
      <section className="featured-stories">
        <div className="featured-stories-head"><p className="section-label">Tre percorsi, tre obiettivi</p><h2>Obiettivi diversi.<br />Storie personali.</h2></div>
        <div className="featured-stories-list">
          {stories.map((story, index) => (
            <article key={story.name}><header><span>0{index + 1}</span><small>{story.tag}</small></header><div><p className="story-stars" aria-label="5 stelle su 5">★★★★★</p><h3>{story.title}</h3><p>{story.copy}</p><footer><strong>{story.name}</strong><span>{story.date}</span></footer></div></article>
          ))}
        </div>
      </section>
      <section className="review-wall">
        <div className="review-wall-head"><p className="section-label section-label--light">Le esperienze, in sintesi</p><h2>Presenza, metodo, ritorno all’attività.</h2><p>Sintesi fedeli delle recensioni pubblicate sul profilo Trustpilot di Dr. Botta.</p></div>
        <div className="review-wall-grid">
          {reviews.map((review) => (
            <article key={review.name}><span className="story-stars" aria-label="5 stelle su 5">★★★★★</span><h3>{review.title}</h3><p>{review.copy}</p><footer><strong>{review.name}</strong><span>{review.date}</span></footer></article>
          ))}
        </div>
      </section>
      <section className="reviews-source">
        <div><p className="section-label">Fonte indipendente</p><h2>Le recensioni complete.</h2></div>
        <div><p>I testi presenti in questa pagina sono stati alleggeriti per facilitarne la lettura. Le recensioni integrali, con data e profilo dell’autore, restano disponibili su Trustpilot.</p><a className="button button--dark" href={profileUrl} target="_blank" rel="noreferrer">Vai a Trustpilot <span>↗</span></a></div>
      </section>
      <section className="final-cta"><p>La prossima attività da recuperare è la tua.</p><h2>Partiamo da ciò che vuoi<br />tornare a fare.</h2><a className="button button--light" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team <span>↗</span></a></section>
      <Footer />
    </main></>
  );
}
