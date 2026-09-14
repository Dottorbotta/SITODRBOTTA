import Link from "next/link";

const profileUrl = "https://it.trustpilot.com/review/drbotta.com";

const previews = [
  { name: "Vincenzo", label: "Ritorno alla corsa", copy: "Dopo un percorso progressivo ha ritrovato fiducia nel corpo e la possibilità di continuare a correre." },
  { name: "Simona", label: "Seguita davvero", copy: "Allenamenti costruiti sui suoi bisogni e sul tempo disponibile, con feedback continui e una guida presente." },
  { name: "Alessandra", label: "Tornare a camminare", copy: "Dopo oltre un anno di fascite plantare è tornata a camminare con serenità e senza il limite di prima." },
];

export function TrustpilotBox() {
  return (
    <section className="stories-preview" id="testimonianze" aria-labelledby="stories-preview-title">
      <div className="stories-preview-head">
        <div><p className="section-label">Esperienze reali</p><h2 id="stories-preview-title">Non promesse.<br />Persone tornate a fare.</h2></div>
        <a className="trust-summary" href={profileUrl} target="_blank" rel="noreferrer" aria-label="Leggi tutte le recensioni Dr. Botta su Trustpilot">
          <span className="trust-summary-brand"><i>★</i> Trustpilot</span><strong>Le esperienze</strong><span>Leggi le recensioni aggiornate</span>
        </a>
      </div>
      <div className="stories-preview-grid">
        {previews.map((review, index) => (
          <article key={review.name}>
            <div><span>0{index + 1}</span><span className="story-stars" aria-label="5 stelle su 5">★★★★★</span></div>
            <p>{review.copy}</p>
            <footer><strong>{review.name}</strong><span>{review.label}</span></footer>
          </article>
        ))}
      </div>
      <div className="stories-preview-actions">
        <small>Sintesi di recensioni pubblicate su Trustpilot.</small>
        <Link className="button button--dark" href="/testimonianze">Leggi le storie <span>→</span></Link>
      </div>
    </section>
  );
}
