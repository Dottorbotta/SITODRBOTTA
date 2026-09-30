import Link from 'next/link';
import {MarketingShell} from '../components/Marketing';
import {PageHero} from '../components/PageHero';
import {ContactForm} from '../components/ContactForm';
import {pageMetadata} from '../lib/seo';
import './contatti.css';
export const metadata=pageMetadata('/contatti','Contatti | Corpo Capace · Dr. Botta','Contatta il Team Corpo Capace per informazioni sul percorso online, sul programma e sull’assistenza. Racconta il tuo caso al team o scopri come prenotare il primo colloquio.');
function ContactIcon(){return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18m-13 5 3 3 5-5"/></svg>}
export default function ContactPage(){return <MarketingShell><PageHero page="contatti"/>
<section className="cc-contact-section"><div className="cc-wrap cc-contact-grid">
 <div className="cc-contact-details"><p className="cc-label">Contattaci</p><h2>Raccontaci il tuo caso.<br/>Parliamone insieme.</h2><p className="cc-contact-intro">Descrivi cosa ti limita e cosa vorresti tornare a fare. Il Team Corpo Capace ti aiuta a capire come iniziare.</p>
 <div className="cc-contact-channels"><Link href="/colloquio"><span className="cc-contact-icon"><ContactIcon/></span><span><strong>Il primo colloquio</strong><span>Scopri come funziona e prenota con il team ↗</span></span></Link></div>
 <div className="cc-contact-social"><h3>Seguici sui social</h3><div><a href="https://www.instagram.com/dr_botta/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/drbottalamanna/" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://www.linkedin.com/in/bottalamanna/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></div>
 <div className="cc-contact-message"><p>Invia il tuo caso al team: racconta quali attività oggi ti creano difficoltà e quali vuoi recuperare.</p><ContactForm/></div>
</div></section>
<section className="cc-contact-closing"><div className="cc-wrap"><p className="cc-label">Il tuo prossimo passo</p><h2>Conosci il percorso.<br/>Scegli da dove iniziare.</h2><p>Nel primo colloquio puoi parlare con il team, chiarire le tue domande e conoscere programma, assistenza e modalità per iniziare.</p><Link className="cc-button cc-button-light" href="/colloquio">Parla con il team <span aria-hidden="true">↗</span></Link></div></section>
</MarketingShell>}
