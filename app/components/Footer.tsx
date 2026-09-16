import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark wordmark--footer" href="/">
            <span className="wordmark-main">CORPO CAPACE</span>
            <span className="wordmark-sub">UN METODO DR. BOTTA</span>
          </Link>
          <p>Allenamento personalizzato per riprendere le tue attività e imparare a gestire esercizi, carico e recupero.</p>
        </div>
        <div className="footer-column">
          <h2>Esplora</h2>
          <a href="/metodo">Il Metodo</a>
          <a href="/per-chi">Per chi è</a>
          <a href="/percorsi">Il percorso</a>
          <a href="/testimonianze">Testimonianze</a>
          <a href="/blog">Blog per argomenti</a><a href="/chi-sono">Dr. Botta e redazione</a><a href="/feed.xml">Feed RSS</a>
        </div>
        <div className="footer-column">
          <h2>Seguici</h2>
          <a href="https://www.instagram.com/dr_botta/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/drbottalamanna/" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.linkedin.com/in/bottalamanna/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="footer-column">
          <h2>Contatti</h2>
          <a href="mailto:drbottalamanna@gmail.com">drbottalamanna@gmail.com</a>
          <a href="https://it.trustpilot.com/review/drbotta.com" target="_blank" rel="noreferrer">Recensioni Trustpilot ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BOTTA PATHODYNAMICS LLP</span>
        <span>I contenuti hanno finalità informative e non sostituiscono una valutazione sanitaria.</span>
        <a href="https://www.iubenda.com/privacy-policy/48665326" target="_blank" rel="noreferrer">Privacy Policy</a>
      </div>
    </footer>
  );
}
