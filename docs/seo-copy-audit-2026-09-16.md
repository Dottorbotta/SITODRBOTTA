# Revisione testi UX / SEO — 16 settembre 2026

## Ambito e confronto iniziale

Revisione richiesta dall’utente su React/Vinext: 7 pagine principali, 5 pagine di argomento e 17 articoli. Il confronto iniziale ha confermato codice uguale in GitHub `78d38808db5295e680ce86761a7361f669217b86` e Sites `155d685de52dc789b6fb42c4e899c134c06e988f`, esclusi i README preesistenti conservati. Pubblicazione iniziale: versione 23. Le correzioni di alt e date di consultazione già presenti nei sorgenti sono conservate.

L’obiettivo è rendere più comprensibili argomento, destinatario e passo successivo di ogni pagina, senza cambiare consigli clinici, fonti, testimonianze, immagini o impaginazione. Accesso `workspace_all`, `noindex` e CTA Calendly restano invariati. Nessun dato di traffico, volume di ricerca, posizionamento o citazione AI è disponibile: gli intenti qui descritti sono scelte editoriali basate sui testi, non keyword validate da dati di mercato.

## Skill effettivamente consultate

I pacchetti elencati dall’utente non erano installati nel runtime. Sono state lette le istruzioni dai repository pubblici, senza installare o eseguire codice di terzi. Non si dichiara l’esecuzione di tutti i moduli elencati nella memoria.

| Fonte verificata | Revisione | Modulo applicato |
| --- | --- | --- |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | `92795530b4cc92c6bf7a2435b82c15b003e71181` | `seo-content`, framework E-E-A-T; il modulo riporta 2.3.1, non la versione 1.4.0 ricordata |
| [naimbic/claudeBlog](https://github.com/naimbic/claudeBlog) | `84f7abf05036bef48e114a710ff52586643fe239` | `blog-rewrite`, reviewer, criteri editoriali; questa è la fonte consultata, non una conferma del vecchio clone locale |
| [aaron-he-zhu/seo-geo-claude-skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills/tree/v9.9.12) | tag congelato `v9.9.12` | `meta-tags-optimizer`; il ramo principale è ora un rimando al nuovo pacchetto |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | `25f6ae8d6c96743701222d6d9214267fbf039bb4` | `geo-content` 1.0.0: chiarezza del soggetto, sezioni comprensibili, provenienza |
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | `e818d5e38551a931333381d69c43da6e767ec775` | istruzioni `copy-editing` 1.0.0 presenti nel repository; nessuna esecuzione del progetto Python |

Applicazione selettiva: niente densità forzata di keyword, numeri inventati, autori o revisioni cliniche presunte. I contratti per nuovi blog standalone (PDF, nuove immagini, grafici o score minimo ottenuto aggiungendo qualifiche) non sostituiscono i vincoli di questo sito esistente. La revisione indipendente controlla regressioni e chiarezza; non certifica medicina, ranking o citabilità. Le fonti cliniche non vengono scartate perché anteriori a finestre temporali arbitrarie.

Le istruzioni sono state confrontate con [contenuti utili](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [titoli](https://developers.google.com/search/docs/appearance/title-link), [snippet](https://developers.google.com/search/docs/appearance/snippet) e [funzionalità AI](https://developers.google.com/search/docs/appearance/ai-features) di Google Search Central. Titoli descrittivi, sintesi fedeli e contenuti per il lettore sono pertinenti; non esistono garanzie di snippet identici ai metadata o visibilità AI. Il sito privato e noindex non è una pubblicazione per la ricerca pubblica.

## Problemi rilevati e interventi

| Priorità | Pagina / file | Evidenza iniziale | Intervento |
| --- | --- | --- | --- |
| P2 | `app/percorsi/page.tsx` | H1 «Tornare a fare» non identifica il servizio | H1 su allenamento su misura anche online, introduzione con programma, video e contesto casa/palestra già documentati |
| P2 | `app/metodo/page.tsx`, `app/per-chi/page.tsx` | «ciclo adattivo», «esposizione», «perimetro» e formule astratte nel percorso commerciale | Linguaggio concreto; appropriatezza iniziale distinta dal riconoscersi in un problema; obiettivi senza garanzia di risultato |
| P2 | `app/blog/page.tsx`, `app/data/topics.ts` | H1 «Capire il corpo» e descrizioni di cluster generiche | Argomenti espliciti, guide tematiche distinte e ricerca con messaggio di recupero più utile |
| P2 | `content/articles/*.json` | Alcuni titoli slogan e 14 articoli senza `seoTitle` specifico | Titoli, sottotitoli, excerpt e metadata distinti per tutti i 17 articoli; introduzioni più dirette in sei articoli sul metodo |
| P2 | articoli sul piede / corsa | Titoli poco distinti tra panoramica e ritorno all’attività | Separati intenti: cause e valutazione / recupero dopo il sollievo; ripresa generale della corsa / ripresa dopo dolore all’anca |
| P2 | `app/blog/[slug]/page.tsx` | «Leggi l’approfondimento di riferimento» senza soggetto | Titolo reale del pillar come testo del link; nove collegamenti contestuali fra articoli |
| P2 | `app/lib/seo.tsx`, `app/chi-sono/page.tsx` | Descrizione schema separata dalla metadata; metadata about duplicate nel codice | Fallback coerente per BlogPosting e sorgente condivisa per pagina about |
| P2 | `content/articles/*.json` | Articoli brevi dichiarati da 5–7 minuti | Tempi stimati sul testo effettivo: 200 parole/minuto, arrotondamento per eccesso; non una misura del comportamento dei lettori |
| P2 | `app/testimonianze/page.tsx` | Introduzione interpretabile come risultato tipico | Esplicitata la natura personale delle esperienze; racconti, nomi, date e stelle non modificati |

## Mappa degli articoli

URL e canonical restano invariati. I titoli indicano il compito del lettore; non derivano da volumi di ricerca misurati.

| URL `/blog/…` | Titolo precedente | Titolo della revisione |
| --- | --- | --- |
| `asimmetria-non-e-disfunzione` | Un corpo simmetrico non è per forza un corpo più capace | Asimmetrie del corpo: quando contano nel movimento |
| `condromalacia-rotulea` | Condromalacia rotulea: cosa significa davvero per il tuo ginocchio? | Condromalacia rotulea: referto, dolore e movimento |
| `dolore-al-piede` | Dolore al piede: cosa significa e come capire cosa fare | Dolore al piede: cause, sintomi e quando farsi valutare |
| `dolore-anca-ritorno-corsa` | Dolore all'anca e ritorno alla corsa: dal gesto al carico | Tornare a correre dopo un dolore all’anca |
| `dolore-davanti-ginocchio-scale` | Dolore al ginocchio sulle scale: costruire capacità, passo dopo passo | Dolore al ginocchio sulle scale: cosa valutare |
| `dolore-laterale-anca-notte-carico-esercizio` | Dolore laterale all’anca di notte: capire il carico, ritrovare il movimento | Dolore laterale all’anca di notte: cosa fare |
| `dolore-piede-sintomo-funzione` | Dolore al piede: spegnere il sintomo non ricostruisce la funzione | Dopo il dolore al piede: recuperare cammino e sport |
| `fascite-plantare-sintomi-cure-ritorno-movimento` | Fascite plantare: capire il dolore e tornare al movimento | Fascite plantare: sintomi, cure e ritorno al cammino |
| `gap-di-capacita` | Il Gap di Capacità: cosa separa il tuo oggi dal tuo obiettivo | Gap di Capacità: dal punto di partenza all’obiettivo |
| `il-test-vero-e-la-vita` | Camminare, palestra, trekking: il test vero è la vita | Dagli esercizi alla vita quotidiana: verificare i progressi |
| `la-paghi-il-giorno-dopo` | La paghi il giorno dopo? Il problema può essere la dose | Dolore dopo l’attività: valutare carico e recupero |
| `perche-camminare-benefici-tutto-il-corpo` | Perché camminare ha benefici su tutto il corpo ed è il primo punto di partenza del movimento | Benefici del camminare: riprendere con gradualità |
| `piedi-caviglie-gonfie` | Piedi e caviglie gonfie: perché succede e cosa puoi fare | Piedi e caviglie gonfie: cause e segnali da non ignorare |
| `programma-cambia-con-i-dati` | Il programma deve cambiare quando cambiano i dati | Allenamento personalizzato: quando cambiare programma |
| `quando-aumentare-il-carico` | Come capire se puoi aumentare il carico | Quando aumentare il carico in allenamento |
| `quando-non-e-da-operare-alluce-valgo` | Quando non è da operare l’alluce valgo | Alluce valgo: quando non è necessario operare |
| `stare-meglio-non-basta-tornare-a-correre` | Stare meglio non basta per tornare a correre | Riprendere a correre dopo uno stop: gestire il carico |

## Integrità e limiti

`docs/content-before.json` conserva il baseline originario. `docs/copy-edits-2026-09-16.json` registra prima/dopo delle modifiche e i campi protetti, compresi autori, fonti, date, revisione clinica, immagini, CTA e correlati. Il test di migrazione ora accetta soltanto questi cambiamenti espliciti: non è stato eliminato né sostituito con un controllo che ignora il testo. Le indicazioni cliniche nel corpo sono conservate; nei paragrafi cambiano solo nove collegamenti mantenendo il testo e due spiegazioni operative nel programma di allenamento. Nessuna data di pubblicazione o revisione viene aggiornata per simulare freschezza.

Restano necessari dati reali per attestare una revisione clinica: tutti i record conservano `clinicalReview.status=not-recorded`. Non si è nominato un revisore né certificato le qualifiche. Le testimonianze e le fonti cliniche preesistenti non sono state nuovamente autenticate integralmente in questa revisione di copy. I dati di autore individuale, eventuale revisore, qualifiche documentate e condizioni commerciali (prezzi o cadenze non presenti) devono arrivare dal responsabile del sito; non sono stati inventati.

Decap, Pagefind, pipeline immagini, CSS e impostazioni di accesso restano fuori da questo intervento. La riduzione di sovrapposizione fra titoli è editoriale: non prova una cannibalizzazione nei risultati di ricerca, per i quali non abbiamo dati.

## Verifica

Build locale riuscita; 7 test di rendering/integrità superati e 5 fixture del controllo editoriale superate. Audit del nuovo HTML: 29 pagine, 17 articoli, zero errori tecnici e zero campi obbligatori mancanti. I 25 alt vuoti espliciti restano decorativi e invariati. La revisione indipendente del diff non ha rilevato nuove promesse cliniche; corretto un anchor che prometteva più dettaglio della pagina di destinazione. Le esecuzioni GitHub associate al commit contengono i controlli Lighthouse, accessibilità e collegamenti con artifact. Le soglie Lighthouse rimangono informative; zero violazioni automatiche non certifica l’accessibilità. Nessun incremento di traffico o conversioni è misurato o promesso.
