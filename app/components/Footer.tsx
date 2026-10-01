import Link from "next/link";


export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark wordmark--footer" href="/">
            <img className="cc-brand-logo" src="/brand/corpo-capace-atlante-horizontal.png" alt="Corpo Capace" width="438" height="136" />
          </Link>
          <p>Allenamento personalizzato per riprendere le tue attività e imparare a gestire esercizi, carico e recupero.</p>
        </div>
        <div className="footer-column">
          <h2>Esplora</h2>
          <Link href="/metodo">Il Metodo</Link>
          <Link href="/per-chi">Per chi è</Link>
          <Link href="/percorsi">Il percorso</Link><Link href="/domande-frequenti">Domande frequenti</Link>
          <Link href="/testimonianze">Testimonianze</Link>
          <Link href="/guide">Guide</Link><Link href="/quiz-corpo-capace">Quiz Corpo Capace</Link><Link href="/blog">Blog per argomenti</Link><Link href="/team">Il team</Link><Link href="/chi-sono">Dr. Botta</Link><Link href="/redazione">Redazione e fonti</Link><Link href="/feed.xml">Feed RSS</Link>
        </div>
        <div className="footer-column">
          <h2>Seguici</h2>
          <a href="https://www.instagram.com/dr_botta/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/drbottalamanna/" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.linkedin.com/in/bottalamanna/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="footer-column">
          <h2>Contatti</h2>
          <Link href="/contatti">Scrivi al team →</Link>
          <a href="/colloquio">Il colloquio con il team →</a>
          <Link href="/team#lavora-con-noi">Lavora con noi</Link>
          <a href="https://it.trustpilot.com/review/drbotta.com" target="_blank" rel="noreferrer">Recensioni Trustpilot ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BOTTA PATHODYNAMICS LLP</span>
        <a href="https://www.iubenda.com/privacy-policy/48665326" target="_blank" rel="noreferrer">Privacy Policy</a>
        <Link href="/termini-e-condizioni">Termini e condizioni</Link>
      </div>
    </footer>
  );
}
