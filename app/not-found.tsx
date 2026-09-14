import { Header } from './components/Header';
import { Footer } from './components/Footer';
export default function NotFound(){return <><Header tone="dark"/><main id="contenuto" tabIndex={-1}><section className="topic-page"><p className="section-label">Pagina non trovata · 404</p><h1>Ripartiamo da qui.</h1><p>La pagina che cerchi non è disponibile. Puoi esplorare gli argomenti del blog o tornare al metodo.</p><a className="button button--dark" href="/blog">Vai al blog →</a></section><Footer/></main></>;}
