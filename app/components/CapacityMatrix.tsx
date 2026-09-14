export function CapacityMatrix() {
  return <div className="capacity-matrix">
    <p className="section-label">Matrice Corpo Capace · lettura educativa</p>
    <div className="capacity-matrix-scroll" role="region" aria-label="Matrice capacità di movimento e tolleranza" tabIndex={0}>
      <table>
        <caption>Rispetto alla stessa attività e alla stessa dose</caption>
        <thead><tr><th scope="col">Tolleranza al carico ↓<br />Capacità di movimento →</th><th scope="col">Da costruire</th><th scope="col">Sufficiente per il compito</th></tr></thead>
        <tbody>
          <tr><th scope="row">Sufficiente</th><td><strong>Limitato</strong><p>Il carico è relativamente tollerato, ma mancano capacità utili al gesto.</p><small>Priorità: ampliare le capacità pertinenti.</small></td><td><strong>Capace</strong><p>Il gesto e la dose sono sostenibili, ripetibili e compatibili con il recupero.</p><small>Priorità: consolidare o definire un nuovo obiettivo.</small></td></tr>
          <tr><th scope="row">Da costruire</th><td><strong>Incapace rispetto al compito</strong><p>Movimento utile e tolleranza sono entrambi insufficienti per la richiesta attuale.</p><small>Priorità: ridimensionare il compito e costruire le basi.</small></td><td><strong>Fragile rispetto al compito</strong><p>Il gesto riesce, ma dose, frequenza o recupero ne limitano la continuità.</p><small>Priorità: sviluppare tolleranza e ripetibilità.</small></td></tr>
        </tbody>
      </table>
    </div>
    <p>La richiesta cambia con l’obiettivo: <b>Salute</b> (autonomia quotidiana), <b>Wellness</b> (vita attiva), <b>Fitness</b> (allenamento strutturato), <b>Performance</b> (prestazione specifica). Una stessa persona può avere profili diversi nei diversi contesti.</p>
  </div>;
}
