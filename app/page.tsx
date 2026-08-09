const nav = [
  ["Home", "#home"],
  ["Coaching avanzato", "#metodo"],
  ["Programmi", "#programmi"],
  ["Clinica e ricerca", "#ricerca"],
  ["Team", "#team"],
  ["Contattaci", "#contatti"],
];

const reviews = [
  {
    quote: "Risultati concreti in poche sedute.",
    text: "Preparato, attento e sempre disponibile. Sto facendo enormi passi avanti nella risoluzione di un problema cervicale che mi limitava da tempo.",
    name: "Marco",
  },
  {
    quote: "Molto meticoloso e ottimi collaboratori",
    text: "Fin dal primo momento mi sono sentita seguita e aiutata. Grandi risultati visibili: non ero mai stata seguita così, neanche in presenza.",
    name: "Rosalba",
  },
  {
    quote: "Serio e competente",
    text: "Per la prima volta mi sono sentito davvero seguito da un professionista competente e appassionato. Ho avuto grandi miglioramenti.",
    name: "Alessandro",
  },
];

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Dr. Botta, homepage">
          <span className="brand-main">DR.BOTTA</span>
          <span className="brand-sub">PATHODYNAMICS</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href="#contatti">Prenota una consulenza <span>→</span></a>

        <details className="mobile-menu">
          <summary aria-label="Apri il menu">☰</summary>
          <nav>{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow">Coaching avanzato · Dr. Botta</p>
          <h1 id="hero-title">Percorsi a distanza per ripristinare abilità, funzione e performance</h1>
          <p className="hero-copy">Fai il test per capire quale programma si adatta maggiormente alle tue esigenze.</p>
          <a className="primary-button" href="#programmi">Inizia il test <span>↗</span></a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="photo-frame">
            <img src="https://drbotta.com/wp-content/uploads/2025/12/Dr.botta-esercizi-1024x1024.jpg" alt="" />
          </div>
          <div className="stat-card"><strong>+10</strong><span>anni di esperienza</span></div>
          <div className="signal"><i /><i /><i /><i /></div>
        </div>

        <a className="scroll-cue" href="#metodo" aria-label="Scorri al metodo"><span>SCOPRI</span>↓</a>
      </section>

      <section className="method" id="metodo">
        <div className="section-number">01</div>
        <div className="method-copy">
          <p className="eyebrow dark">Un metodo costruito su di te</p>
          <h2>Non inseguire il dolore.<br /><em>Recupera la funzione.</em></h2>
        </div>
        <div className="method-body">
          <p>Ti aiutiamo a recuperare capacità, controllo e tolleranza al carico attraverso il movimento. Un percorso misurabile, seguito passo passo da un team di esperti.</p>
          <a href="#contatti">Scopri il metodo <span>→</span></a>
        </div>
      </section>

      <section className="programs" id="programmi">
        <div className="program-intro">
          <p className="eyebrow">I programmi</p>
          <h2>Il percorso giusto,<br />nel momento giusto.</h2>
        </div>
        <article className="program-card reactive">
          <img src="https://drbotta.com/wp-content/uploads/2026/01/Programma-Re-Active-dr.botta_.jpg" alt="Atleta durante una sessione del programma Re-Active" />
          <div className="program-overlay"><span>01</span><h3>Re-Active</h3><p>Recupera capacità e fiducia nel movimento.</p><a href="#contatti">Scopri il programma →</a></div>
        </article>
        <article className="program-card performance">
          <img src="https://drbotta.com/wp-content/uploads/2026/01/Programma-performance-dr.botta_.jpg" alt="Atleta durante una sessione del programma Performance" />
          <div className="program-overlay"><span>02</span><h3>Performance</h3><p>Costruisci forza, controllo e prestazione.</p><a href="#contatti">Scopri il programma →</a></div>
        </article>
      </section>

      <section className="research" id="ricerca">
        <div><p className="eyebrow dark">Clinica e ricerca</p><h2>Ogni scelta parte<br />dai dati.</h2></div>
        <div className="research-copy"><p>Valutazione biomeccanica, progressioni basate sulla risposta individuale e monitoraggio continuo: il percorso cambia insieme a te.</p><div className="metrics"><span><strong>100%</strong>personalizzato</span><span><strong>1:1</strong>monitoraggio</span></div></div>
      </section>

      <section className="testimonials" id="team">
        <p className="eyebrow">Dicono di noi</p>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <article className="review" key={review.name}>
              <div className="stars" aria-label="Valutazione 5 su 5">★★★★★</div>
              <h3>“{review.quote}”</h3>
              <p>{review.text}</p>
              <footer><span>0{index + 1}</span><strong>{review.name}</strong></footer>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-strip" id="contatti">
        <p>Pronto a iniziare?</p>
        <a href="mailto:info@drbotta.com">Prenota una consulenza <span>→</span></a>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span className="brand-main">DR.BOTTA</span><span className="brand-sub">PATHODYNAMICS</span></div>
        <p>Esperto in biomeccanica dell&apos;arto inferiore. Ti aiuto a recuperare capacità, controllo e tolleranza al carico attraverso il movimento.</p>
        <div className="footer-links"><h3>Link rapidi</h3>{nav.slice(0,5).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
        <div className="footer-social"><h3>Seguici</h3><a href="https://www.instagram.com/dr_botta/">Instagram ↗</a><a href="https://www.facebook.com/drbottalamanna/">Facebook ↗</a><a href="https://www.linkedin.com/in/bottalamanna/">LinkedIn ↗</a></div>
        <div className="footer-bottom"><span>© 2026 BOTTA PATHODYNAMICS LLP</span><a href="https://www.iubenda.com/privacy-policy/48665326">Privacy Policy</a><a href="#home">Torna su ↑</a></div>
      </footer>
    </main>
  );
}
