import Link from "next/link";
import { MarketingShell, Section, Intro, CTA, Cards } from "../components/Marketing";
import { pageMetadata } from "../lib/seo";
import { ResponsiveImage } from "../components/ResponsiveImage";

export const metadata = pageMetadata(
  "/chi-sono",
  "Dr. Botta | Simone Botta Lamanna, fondatore di Corpo Capace",
  "Formazione, esperienza e storia di Simone Botta Lamanna: dalla pratica iniziata nel 2015 alla nascita di Corpo Capace e alla direzione scientifica del metodo."
);

export default function Page() {
  return <MarketingShell>
    <Intro page="chi-sono" label="Simone Botta Lamanna · Dr. Botta"
      title="Ho iniziato a lavorare sul movimento. Poi ho dovuto riconquistare il mio."
      copy="Sono osteopata, podologo e massoterapista. Lavoro nel settore dal 2015 e ho fondato Corpo Capace per aiutare le persone a recuperare le abilità che il dolore ha limitato: camminare, allenarsi e tornare alle attività che contano per loro." />

    <Section label="La formazione" title="Le competenze da cui sono partito.">
      <div className="cc-founder">
        <ResponsiveImage src="/images/dr-botta-giacca-blu.webp" width="1125" height="1687" sizes="(max-width:700px) 160px,220px" loading="lazy" alt="Simone Botta Lamanna, fondatore di Corpo Capace" />
        <div>
          <p>Ho conseguito il diploma in Osteopatia presso CRESO nel 2020 e la laurea in Podologia presso l’Università degli Studi di Milano nel 2021, con formazione presso l’Ospedale Galeazzi. Sono anche massoterapista.</p>
          <p>Nel corso del mio lavoro ho approfondito la terapia manuale e il movimento attraverso corsi internazionali. Ho insegnato terapia manuale presso CRESO, la scuola in cui mi sono formato.</p>
          <p>Queste esperienze mi hanno dato prospettive complementari: osservare il movimento, comprendere le richieste delle attività e collegare il lavoro sul corpo alla vita della persona.</p>
          <a className="cc-link" href="https://www.linkedin.com/in/bottalamanna/" target="_blank" rel="noopener noreferrer">Il mio profilo professionale su LinkedIn</a>
        </div>
      </div>
    </Section>

    <Section dark label="La svolta · 2023" title="Quando il problema è diventato anche mio.">
      <p className="cc-lead">Nel 2023 ho avuto un’ernia discale. Il giorno successivo a un trattamento manuale ho perso l’uso di una gamba. Mi sono trovato vicino alla possibilità di un intervento chirurgico e ho affrontato mesi di terapia con cortisone.</p>
      <p>Da professionista ero abituato a occuparmi delle difficoltà degli altri. In quel momento dovevo capire che cosa stesse succedendo a me e come affrontare una limitazione che aveva cambiato il mio rapporto con il movimento.</p>
      <p>Ho iniziato a studiare con un’intensità diversa. Volevo comprendere come fossi arrivato a quella situazione, quali elementi considerare nel recupero e come tornare a usare il corpo con maggiore fiducia.</p>
      <p>Quell’esperienza ha orientato la mia pratica verso le persone con dolore persistente e verso una domanda concreta: quali capacità servono per tornare a fare ciò a cui si è rinunciato?</p>
    </Section>

    <Section label="La nascita di Corpo Capace" title="Dall’esercizio proposto al percorso costruito.">
      <p className="cc-lead">Nel lavoro quotidiano mi sono trovato sempre più spesso a correggere il modo in cui le persone eseguivano gli esercizi e a rivedere programmi che non tenevano abbastanza conto della loro situazione.</p>
      <p>Le persone arrivavano con obiettivi diversi: camminare più a lungo, riprendere un allenamento, tornare alle attività quotidiane. Spesso avevano già seguito diversi trattamenti e continuavano a sentirsi lontane da ciò che desideravano recuperare.</p>
      <p>Serviva collegare le informazioni raccolte alle decisioni: che cosa allenare, con quale dose, come eseguirlo e quando progredire. Da questa esigenza è nato Corpo Capace.</p>
      <p>Il suo obiettivo è aiutare la persona a ricostruire le abilità e la tolleranza al carico necessarie per il livello di movimento che le interessa, anche quando i tentativi precedenti non l’hanno portata al risultato desiderato.</p>
    </Section>

    <Section label="I principi" title="Il programma deve avere una ragione. E poter cambiare.">
      <p className="cc-lead">Il lavoro parte dall’attività da recuperare e dalle capacità attuali. Le scelte vengono poi verificate attraverso le esecuzioni, i riscontri e ciò che la persona riesce a fare nella propria giornata.</p>
      <Cards items={[
        ["Un obiettivo osservabile", "Camminare una distanza, affrontare le scale, riprendere un allenamento: definiamo l’attività che conta per la persona e le richieste da preparare."],
        ["Una dose sostenibile", "Esercizi, carico, volume, frequenza e recupero devono permettere di applicare il lavoro con continuità. La risposta della persona orienta gli adattamenti."],
        ["Esecuzioni collegate allo scopo", "I video aiutano il professionista a osservare come viene svolto l’esercizio e a chiarire le indicazioni. Le modifiche dipendono dall’obiettivo e dalle difficoltà incontrate."],
        ["Progressi da verificare", "Sintomi, sforzo, recupero e attività quotidiane vengono letti insieme. Quando il lavoro non produce la risposta attesa, si riconsiderano le scelte."],
      ]} />
      <p>Le linee guida NICE sul dolore cronico primario indicano di considerare bisogni, preferenze e capacità individuali nella proposta di esercizio. Le linee guida OMS sulla lombalgia cronica primaria raccomandano un’assistenza centrata sulla persona. Questi riferimenti orientano i principi generali; le decisioni sul singolo percorso richiedono la valutazione del professionista.</p>
      <p className="cc-small"><a href="https://www.nice.org.uk/guidance/ng193/chapter/Recommendations" target="_blank" rel="noopener noreferrer">NICE · Dolore cronico primario, raccomandazioni sull’esercizio</a> · <a href="https://www.who.int/publications/i/item/9789240081789" target="_blank" rel="noopener noreferrer">OMS · Gestione non chirurgica della lombalgia cronica primaria</a></p>
      <Link className="cc-link" href="/metodo">Approfondisci il Metodo Corpo Capace</Link>
    </Section>

    <Section dark label="Il mio ruolo oggi" title="Sviluppo il metodo. Il team segue i percorsi.">
      <p className="cc-lead">Oggi mi occupo dello sviluppo del Metodo Corpo Capace e della sua direzione scientifica. I percorsi individuali e il primo colloquio sono seguiti dal team; non li gestisco personalmente.</p>
      <p>Lavoriamo con chinesiologi e fisioterapisti e collaboriamo attivamente con medici. I percorsi vengono affidati a chinesiologi o fisioterapisti, secondo le competenze pertinenti al lavoro da svolgere.</p>
      <p>Abbiamo strutturato la raccolta delle informazioni e la valutazione funzionale attraverso procedure e criteri condivisi. Questo permette al team di lavorare con coerenza e di confrontare i riscontri nel tempo.</p>
      <p>Gli obiettivi, la scelta degli esercizi, il punto di partenza e la progressione vengono definiti per la singola persona. Il programma cambia in funzione delle sue esigenze e della risposta al lavoro.</p>
      <Link className="cc-link" href="/team">Conosci il lavoro del team</Link>
    </Section>

    <Section label="Dai principi alla pratica" title="Un percorso che prende forma con te.">
      <p>Il primo colloquio serve a conoscere il funzionamento del servizio e chiarire i passaggi per iniziare. Nel percorso, il professionista raccoglie la storia, gli obiettivi e i video necessari a osservare il movimento e definire il lavoro.</p>
      <p>Il programma comprende esercizi, video dimostrativi e indicazioni pratiche. Invii le tue esecuzioni e comunichi difficoltà, sintomi e recupero: il professionista usa queste informazioni per correggere le indicazioni e aggiornare il programma.</p>
      <p>Il lavoro sulle capacità fisiche si colloca nell’ambito delle competenze di chi segue il percorso. Quando emergono elementi che richiedono approfondimenti sanitari, il confronto con il professionista appropriato orienta i passaggi successivi.</p>
      <Link className="cc-link" href="/percorsi">Scopri come si svolge il percorso</Link>
    </Section>

    <Section label="Gli approfondimenti" title="Condividere il ragionamento, oltre agli esercizi.">
      <p>La Redazione Corpo Capace cura gli articoli del progetto. La responsabilità editoriale e l’eventuale revisione clinica documentata sono indicate con ruoli distinti.</p>
      <Link className="cc-link" href="/redazione">Leggi i criteri editoriali e di revisione</Link>
    </Section>
    <CTA title="Che cosa vuoi tornare a fare? Parlane con il team." />
  </MarketingShell>;
}
