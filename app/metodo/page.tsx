import Link from "next/link";
import { PathwayFAQ } from "../components/PathwayFAQ";
import { getPathwayQuestions } from "../data/pathway-faq";
import { MarketingShell, Section, Intro, CTA, Cards } from "../components/Marketing";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "/metodo",
  "Il Metodo Corpo Capace | Recuperare abilità e tolleranza al carico",
  "Dalle attività che vuoi recuperare al programma individuale: valutazione funzionale, esercizio, feedback e criteri per osservare i progressi con il Team Corpo Capace."
);

export default function Page() {
  return <MarketingShell>
    <Intro page="metodo" label="Che cosa significa Corpo Capace"
      title="Il punto di arrivo è ciò che vuoi tornare a fare."
      copy="Camminare senza dover organizzare ogni uscita attorno alle pause. Affrontare le scale. Riprendere ad allenarti. Corpo Capace costruisce il lavoro sulle abilità e sulla tolleranza al carico necessarie alle attività che contano per te." />

    <Section label="Dolore e capacità" title="Come ti senti e che cosa riesci a fare: osserviamo entrambi.">
      <p className="cc-lead">Il dolore può condizionare le tue scelte, il modo in cui ti muovi e le attività a cui partecipi. Per costruire un percorso ci interessa capire anche quanto riesci a sostenere oggi e che cosa vorresti recuperare.</p>
      <p>Un periodo con meno dolore può lasciarti ancora incerto sulle scale o lontano dalla corsa. Allo stesso tempo, i progressi nella vita quotidiana possono avere valore anche quando i sintomi non sono del tutto scomparsi. Per questo raccogliamo informazioni sia sui sintomi sia sulle attività.</p>
      <div className="cc-panel"><h3>Che cosa intendiamo per capacità</h3><p>La possibilità di svolgere un’attività nelle condizioni che ti interessano: per una certa durata, con un determinato sforzo e con un recupero compatibile con la tua giornata. Il riferimento è il tuo obiettivo concreto.</p></div>
    </Section>

    <Section label="Il punto di partenza" title="La distanza tra ciò che fai oggi e ciò che vuoi recuperare.">
      <div className="cc-split"><div><p className="cc-lead">Una passeggiata, una rampa di scale e una corsa richiedono capacità diverse. Prima definiamo l’attività, poi osserviamo le richieste che oggi ti mettono in difficoltà.</p><p>Chi vuole camminare più a lungo può avere priorità diverse da chi vuole tornare a correre, anche in presenza di sintomi nella stessa zona del corpo.</p></div><div className="cc-panel"><h3>Il Gap di Capacità</h3><p>Usiamo questa espressione per descrivere la distanza tra il punto di partenza e le richieste dell’attività desiderata. Ci aiuta a scegliere le priorità del programma e a verificare se il lavoro ti sta avvicinando all’obiettivo.</p></div></div>
    </Section>

    <Section dark label="La valutazione funzionale" title="Criteri condivisi. Scelte individuali.">
      <p className="cc-lead">Il professionista raccoglie la tua storia, gli obiettivi, le attività attuali e i video necessari a osservare il movimento. Considera anche tempo, attrezzatura e possibilità di applicare il programma nella tua settimana.</p>
      <p>Il team usa procedure condivise per raccogliere e leggere queste informazioni con coerenza. Quello che emerge orienta il lavoro della singola persona: esercizi, dosaggio, indicazioni e progressione.</p>
      <p>La valutazione funzionale serve a programmare il lavoro sul movimento nell’ambito delle competenze del professionista. Quando la situazione richiede approfondimenti sanitari, il confronto con il professionista appropriato orienta i passaggi successivi.</p>
      <Link className="cc-link" href="/per-chi">Quando considerare il percorso</Link>
    </Section>

    <Section label="La programmazione" title="Ogni esercizio deve contribuire al tuo obiettivo.">
      <p className="cc-lead">La scelta dipende da ciò che serve allenare, dalle possibilità attuali e dalla risposta al lavoro. Il programma tiene insieme esercizio, esecuzione, dose e recupero.</p>
      <Cards items={[
        ["Movimento utile", "Mobilità e controllo vengono osservati in relazione ai gesti da recuperare. Le indicazioni sull’esecuzione aiutano a capire lo scopo dell’esercizio e ad applicarlo."],
        ["Forza e resistenza", "Il lavoro viene orientato alle richieste dell’attività: sostenere un gesto, ripeterlo o mantenerlo nel tempo. Le priorità dipendono dal punto di partenza."],
        ["Dose e recupero", "Carico, ripetizioni, serie, frequenza e pause vengono scelti insieme. Conta anche come il lavoro si combina con cammino, sport e impegni quotidiani."],
        ["Ritorno all’attività", "Quando appropriato, il programma integra esposizioni progressive all’attività desiderata. I riscontri aiutano a decidere quanto sostenere e quale richiesta preparare dopo."],
      ]} />
    </Section>

    <Section label="Come osserviamo i progressi" title="Il programma si misura anche fuori dall’allenamento.">
      <p className="cc-lead">Il riferimento resta l’attività che vuoi recuperare. Concordiamo elementi osservabili e li rileggiamo nel tempo, in condizioni confrontabili quando possibile.</p>
      <Cards items={[
        ["Quello che riesci a fare", "Durata o distanza del cammino, scale affrontate, attività riprese, necessità di pause: scegliamo indicatori pertinenti al tuo obiettivo."],
        ["Come sostieni il lavoro", "Esecuzione, sforzo e quantità di lavoro aiutano a capire se una richiesta è diventata più gestibile e se ha senso modificarla."],
        ["Come rispondi dopo", "Sintomi, fatica e recupero nelle ore e nel giorno successivo vengono considerati insieme al resto della giornata."],
      ]} />
      <p>Un riscontro isolato va letto nel contesto. Il team confronta l’andamento delle attività, degli esercizi e del recupero per decidere se progredire, mantenere il lavoro o modificarlo. I tempi possono variare e il risultato desiderato non è garantito.</p>
    </Section>

    <Section dark label="Il confronto con il team" title="I tuoi riscontri fanno parte del programma.">
      <p className="cc-lead">Ricevi esercizi, video dimostrativi e istruzioni. Invii le tue esecuzioni e comunichi ciò che succede durante il lavoro e nella vita quotidiana.</p>
      <p>Il professionista osserva i video, chiarisce le indicazioni e rilegge la risposta al programma. Può modificare la difficoltà, la quantità di lavoro, le pause o la scelta degli esercizi. La progressione viene decisa sulla base dei riscontri e dell’obiettivo.</p>
      <p>Il Metodo Corpo Capace è sviluppato da Simone Botta Lamanna. I percorsi sono seguiti da chinesiologi o fisioterapisti del team; modalità e frequenza dell’assistenza vengono definite nel percorso concordato.</p>
      <Link className="cc-link" href="/team">Chi segue il tuo percorso</Link>
    </Section>

    <Section label="Esempio illustrativo" title="Tornare a una passeggiata più lunga.">
      <p className="cc-note">L’esempio descrive il processo di lavoro. Non è un caso reale, una prescrizione o una previsione dei risultati.</p>
      <Cards items={[
        ["Definire la richiesta", "La persona vorrebbe tornare a una passeggiata di 45 minuti, ma oggi dopo circa 15 minuti sente il bisogno di fermarsi. Raccogliamo ciò che succede durante e dopo il cammino e osserviamo il movimento."],
        ["Costruire il punto di partenza", "Il professionista sceglie il lavoro sulle capacità rilevanti e concorda una quantità iniziale di cammino in base alle informazioni raccolte. Esercizi e attività vengono considerati insieme."],
        ["Leggere la risposta", "La persona riferisce di aver completato il lavoro, ma il giorno dopo fa più fatica nelle attività abituali. Il team riconsidera dose, distribuzione e recupero prima di aumentare la richiesta."],
        ["Verificare il trasferimento", "Nel tempo si osserva se il cammino diventa più sostenibile, come cambiano le pause e quale risposta segue l’attività. Questi riscontri orientano il passo successivo."],
      ]} />
      <Link className="cc-link" href="/percorsi">Come si svolge il percorso online</Link>
    </Section>

    <Section label="I riferimenti" title="Principi da applicare alla persona.">
      <p>Le linee guida NICE sul dolore cronico primario raccomandano di considerare bisogni, preferenze e capacità individuali nella proposta di esercizio. Le indicazioni OMS sulla lombalgia cronica primaria sostengono un’assistenza centrata sulla persona.</p>
      <p>Questi documenti riguardano condizioni e ambiti specifici e orientano principi generali. Le decisioni sul tuo percorso dipendono dalle informazioni raccolte e dalla valutazione del professionista.</p>
      <p className="cc-small"><a href="https://www.nice.org.uk/guidance/ng193/chapter/Recommendations" target="_blank" rel="noopener noreferrer">NICE · Dolore cronico: valutazione ed esercizio</a> · <a href="https://www.who.int/publications/i/item/9789240081789" target="_blank" rel="noopener noreferrer">OMS · Lombalgia cronica primaria</a></p>
    </Section>

    <Section label="Approfondisci" title="Le domande prima di scegliere.">
      <PathwayFAQ items={getPathwayQuestions(["gia-provato", "personalizzazione", "nessun-progresso"])} />
      <Link className="cc-link" href="/domande-frequenti">Tutte le domande sul percorso</Link>
    </Section>
    <CTA title="Quale attività vuoi recuperare? Parlane con il team." />
  </MarketingShell>;
}
