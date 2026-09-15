# Controllo editoriale interno

Dopo la build eseguire `pnpm run editorial:audit` (Node e Python 3 standard library).
Il workflow Website quality esegue il controllo su push a main e pull request,
mostra il riepilogo nel job e conserva HTML, JSON e Markdown per 14 giorni.

Il controllo legge tutti gli URL della sitemap dalla build Worker, controlla titolo
e descrizione effettivi, costruisce un grafo dei link HTML in ingresso e confronta
i record JSON degli articoli. Errori di rendering, sitemap vuota, metadata mancanti
o duplicati, articoli isolati, alt HTML assenti, correlati inesistenti e revisioni
cliniche dichiarate senza revisore/data ISO valida bloccano il job (P1).

I dati mancanti che richiedono una decisione editoriale sono segnalazioni P2:
imageAlt non presente nel record e data di consultazione fonti non documentata.
Un alt esplicitamente vuoto è ammesso: non viene inventato un testo né cambiata
la funzione dell'immagine. Confermare il ruolo decorativo prima di registrare
imageAlt vuoto. Le 10 copertine da chiarire e le 2 date mancanti sono elencate in
editorial-audit-baseline.md; il report di ogni esecuzione descrive lo stato corrente.

clinicalReview.status=not-recorded non dichiara una revisione avvenuta e non richiede
l'invenzione di un autore/data. Il controllo strutturale non autentica documenti,
qualifiche o revisioni, non giudica le affermazioni cliniche in prosa e non certifica
l'accessibilità. Le dichiarazioni in testo libero richiedono revisione umana.
Il grafo non include link creati soltanto dopo interazione JavaScript.

Correzioni del template: privilegiare seoDescription già presente, con fallback a
description/excerpt; mostrare la data di consultazione solo quando sourceDate è
registrato. Nessun contenuto clinico, alt esistente o dato del record è stato cambiato.
