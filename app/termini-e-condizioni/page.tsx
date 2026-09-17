import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { pageMetadata } from '../lib/seo';
import terms from '../data/terms.json';

export const metadata = pageMetadata('/termini-e-condizioni', 'Termini e condizioni di servizio | Dr. Botta', 'Termini e condizioni di servizio di BOTTA PATHODYNAMICS LLP, riprodotti dal sito drbotta.com.');
export default function Terms() {
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <article className="about-page legal-page"><p className="section-label">Informazioni sul servizio</p><h1>Termini e condizioni</h1>
      <p>Testo riportato da <a href="https://drbotta.com/termini-e-condizioni-di-servizio/" target="_blank" rel="noreferrer">drbotta.com</a> il 17 settembre 2026.</p>
      {terms.map(([tag, text], i) => tag === 'h1' ? <h2 key={i}>{text}</h2> : tag === 'h2' || tag === 'h3' ? <h3 key={i}>{text}</h3> : <p key={i}>{tag === 'li' ? '• ' : ''}{text}</p>)}
    </article><Footer /></main></>;
}
