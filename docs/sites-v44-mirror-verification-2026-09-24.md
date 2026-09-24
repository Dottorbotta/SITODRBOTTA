# Verifica Sites v44 e mirror GitHub — 24 settembre 2026

## Stato verificato
- Sites: versione 44, sorgente `2d2c63a8c27ce32cbdfdcf7ad6046342f417f09d`; deployment riuscito.
- Accesso Sites `workspace_all`; `INDEXABLE=false`, robots `Disallow: /` e noindex conservati. Nessun lancio pubblico.
- GitHub verificato: `e650f3d1f0add91499fa364b6fd0f5bdcc3a7aba`.
- Confronto dei blob Git: contenuti dei 130 articoli, codice applicativo, sitemap, dipendenze, workflow e generatore immagini coincidono con Sites v44.
- GitHub conserva README specifico, otto file di anteprima fascite e la correzione dei test dell'audit editoriale. Queste differenze non devono essere cancellate con un mirror indiscriminato.
- Questo aggiornamento aggiunge le quattro note storiche di pubblicazione 167–211 e questo verbale. Le note descrivono i controlli effettuati nei rispettivi batch, non lo stato corrente.

## Verifiche eseguite dalla CI sul commit verificato
Sono stati letti gli esiti e i log effettivi, non solo lo stato verde dei workflow.
- [Website quality](https://github.com/Dottorbotta/SITODRBOTTA/actions/runs/36030193123): build riuscita, 18/18 test HTML, 5/5 test del checker editoriale. Audit: 155 pagine, 130 articoli, 0 errori tecnici, 112 dati da confermare.
- [Website links](https://github.com/Dottorbotta/SITODRBOTTA/actions/runs/36030192873): 3.052 URL interni/ancore, 0 errori. 330 URL esterni, 25 risposte HTTP 403: non sono prova di collegamenti inesistenti. Il controllo esterno è informativo e non blocca il workflow.
- [Website accessibility](https://github.com/Dottorbotta/SITODRBOTTA/actions/runs/36030192914): 155 pagine, 465 scansioni desktop/mobile/menu aperto; nessuna violazione automatica elencata e 0 errori di scansione. Skip link e menu da tastiera superati. Restano 438 risultati incompleti da valutare; non equivale a certificazione di accessibilità.

## Lighthouse mobile
Mediane di tre esecuzioni per URL sul build del runner, non misure del gateway Sites o della latenza live.

| Pagina | Performance | Accessibilità | Best practices | SEO | LCP |
| --- | ---: | ---: | ---: | ---: | ---: |
| / | 74 | 100 | 96 | 69 | 4,67 s |
| /blog | 75 | 100 | 96 | 69 | 4,76 s |
| /blog/dolore-al-piede | 75 | 100 | 96 | 58 | 4,71 s |

Le soglie Lighthouse sono warning: workflow verde non significa prestazioni ottimali. Una parte della penalizzazione SEO è attesa per noindex; non rimuovere noindex per alzare il punteggio. Analizzare separatamente gli altri rilievi.

## Gate ancora aperti
- 102 articoli con fonti senza data di consultazione registrata.
- 18 articoli con data già presente: conferma documentale ancora necessaria.
- 10 articoli legacy senza elenco fonti: valutare affermazioni e necessità dei riferimenti.
- Nessuna approvazione clinica nominativa registrata per i 130 articoli.
- Verificare i 25 HTTP 403 tramite editore/DOI senza eliminarli o escluderli solo per rendere verde il report.
- Valutare i risultati incompleti di accessibilità e gli interventi sul caricamento mobile.

Non attribuire firme, date retroattive o approvazioni inesistenti. Non pubblicare nuovi lotti o cambiare accesso nell'ambito di questo allineamento.
