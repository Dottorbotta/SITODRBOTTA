import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { pageMetadata } from '../lib/seo';
import terms from '../data/terms.json';

export const metadata = pageMetadata('/termini-e-condizioni', 'Termini e condizioni di servizio | Dr. Botta', 'Termini e condizioni di servizio di BOTTA PATHODYNAMICS LLP: caratteristiche del percorso, pagamenti, recesso e responsabilità.');

function LinkedText({ text }: { text: string }) {
  return text.split(/(bottapathodynamics@gmail\.com|www\.[Dd]rbotta\.com)/g).map((part, index) =>
    part === 'bottapathodynamics@gmail.com' ? <a key={index} href={`mailto:${part}`}>{part}</a>
    : /^www\.[Dd]rbotta\.com$/.test(part) ? <a key={index} href="https://drbotta.com/">{part}</a>
    : part);
}

export default function Terms() {
  const blocks = [];
  for (let i = 0; i < terms.length; i++) {
    const [tag, text] = terms[i];
    if (tag === 'li' || tag === 'oli') {
      const start = i;
      const items = [];
      while (i < terms.length && terms[i][0] === tag) {
        items.push(<li key={i}><LinkedText text={terms[i][1]} /></li>);
        i++;
      }
      i--;
      blocks.push(tag === 'oli' ? <ol key={start}>{items}</ol> : <ul key={start}>{items}</ul>);
    } else if (tag === 'h1') blocks.push(<h2 key={i}>{text}</h2>);
    else if (tag === 'h2' || tag === 'h3') blocks.push(<h3 key={i}>{text}</h3>);
    else blocks.push(<p key={i} className={i === 0 ? 'legal-effective-date' : undefined}><LinkedText text={text} /></p>);
  }
  return <><Header tone="dark" /><main id="contenuto" tabIndex={-1}>
    <article className="about-page legal-page"><h1>Termini e condizioni</h1>{blocks}</article>
  </main><Footer /></>;
}
