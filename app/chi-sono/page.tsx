import { ResponsiveImage } from "../components/ResponsiveImage";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumbs, pageMetadata } from '../lib/seo';
import { CONSULTATION_URL, editorialPages } from '../lib/site';
const seoPage = editorialPages.find(p => p.path === '/chi-sono')!;
export const metadata = pageMetadata(seoPage.path, seoPage.title, seoPage.description);

export default function About() {
  return <>
    <Header tone="dark" />
    <main id="contenuto" tabIndex={-1}>
      <section className="about-page">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Dr. Botta', path: '/chi-sono' }]} />
        <p className="section-label">Il fondatore di Corpo Capace</p>
        <h1>Dr. Simone<br />Botta Lamanna</h1>
        <div className="about-grid">
          <ResponsiveImage className="about-portrait" sizes="(max-width: 800px) 90vw, (max-width: 1200px) 40vw, 470px" loading="eager" fetchPriority="high" src="/images/dr-botta-ritratto.webp" alt="Dr. Simone Botta Lamanna, fondatore di Corpo Capace, in abito chiaro all’aperto" width="1122" height="1402" />
          <div>
            <p className="section-label">Chi sono</p>
            <h2>Il punto di partenza è ciò che vuoi tornare a fare.</h2>
            <p>Sono Simone Botta Lamanna, fondatore di Corpo Capace. Ho costruito il metodo attorno a un obiettivo concreto: collegare le capacità che una persona ha oggi alle attività che desidera tornare a sostenere.</p>
            <p>Camminare più a lungo, riprendere la palestra, tornare a correre. Ogni attività chiede al corpo qualcosa di diverso. Per questo il percorso parte dal tuo obiettivo, dal livello attuale e dal tempo che puoi dedicare all’allenamento.</p>
            <p>Insieme al team lavoriamo su questa distanza: scegliamo da dove iniziare, osserviamo come rispondi e adattiamo il programma lungo il percorso.</p>
            <a className="text-link" href="https://www.linkedin.com/in/bottalamanna/" target="_blank" rel="noreferrer">Il mio profilo professionale su LinkedIn ↗</a>
          </div>
        </div>
        <section className="about-section" aria-labelledby="about-method">
          <p className="section-label">Il Metodo Corpo Capace</p>
          <h2 id="about-method">Dall’esercizio alle attività della tua vita.</h2>
          <p>Corpo Capace è un metodo di lavoro basato su valutazione funzionale, allenamento progressivo e monitoraggio. Il riferimento è l’attività che vuoi recuperare: quali movimenti richiede, per quanto tempo e con quale frequenza.</p>
          <p>Chiamiamo <strong>Gap di Capacità</strong> la distanza tra ciò che riesci a sostenere e recuperare oggi e ciò che il tuo obiettivo richiede. Serve a scegliere le priorità del programma e a verificare i progressi.</p>
          <ol className="about-steps">
            <li><h3>Definiamo il punto di partenza</h3><p>Mettiamo a fuoco l’attività desiderata e osserviamo le capacità attuali, le difficoltà e il contesto in cui ti alleni.</p></li>
            <li><h3>Costruiamo una progressione sostenibile</h3><p>Scegliamo esercizi e quantità di lavoro adeguati. La progressione tiene conto dello sforzo, dei sintomi e del recupero.</p></li>
            <li><h3>Adattiamo il programma alla risposta</h3><p>Monitoriamo ciò che succede durante e dopo l’attività. Quando la risposta lo consente, aumentiamo la richiesta e ci avviciniamo al gesto reale.</p></li>
          </ol>
          <a className="text-link" href="/metodo">Scopri come funziona il Metodo Corpo Capace →</a>
        </section>
        <section className="about-section" aria-labelledby="about-team">
          <p className="section-label">Il lavoro del team</p>
          <h2 id="about-team">Un obiettivo condiviso. Un programma da adattare.</h2>
          <p>Il team Corpo Capace lavora con criteri comuni: obiettivi chiari, carico progressivo e verifica della risposta individuale. Cambiano gli esercizi, le priorità e i tempi, perché cambiano le persone e le attività a cui vogliono tornare.</p>
          <p>Il percorso può svolgersi anche online, con un programma per casa o palestra, video e confronti con il team. Il primo passaggio è capire se questo tipo di lavoro è adatto alla tua situazione. Quando serve una valutazione sanitaria, questa viene prima dell’allenamento.</p>
          <a className="text-link" href="/percorsi">Come si svolge il percorso →</a>
        </section>
        <section className="about-section about-editorial" aria-labelledby="about-editorial">
          <p className="section-label">Gli approfondimenti del blog</p>
          <h2 id="about-editorial">Capire le scelte, oltre agli esercizi.</h2>
          <p>Nel blog trovi approfondimenti su movimento, gestione del carico e ritorno alle attività. Gli articoli sono pubblicati dalla redazione del team Corpo Capace; le fonti, quando disponibili, sono riportate in fondo al testo.</p>
          <p>I contenuti sono informativi e non sostituiscono diagnosi o trattamento sanitario. Una revisione clinica viene indicata solo quando documentata; la data di pubblicazione non equivale a una revisione. I risultati individuali non sono garantiti.</p>
          <p><a className="text-link" href="/blog">Leggi gli approfondimenti →</a></p>
          <a href="mailto:drbottalamanna@gmail.com">Contatta la redazione</a>
        </section>
      </section>
      <section className="final-cta final-cta--cream">
        <p>Il primo passo è capire da dove partire.</p>
        <h2>Raccontaci cosa vuoi<br />tornare a fare.</h2>
        <p>Confrontati con il team sul tuo obiettivo e sull’appropriatezza del percorso.</p>
        <a className="button button--dark" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Prenota una consulenza <span aria-hidden="true">↗</span></a>
      </section>
      <Footer />
    </main>
  </>;
}
