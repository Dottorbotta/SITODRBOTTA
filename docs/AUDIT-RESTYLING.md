# Audit e piano · 13 settembre 2026

STACK ATTUALE: React 19, Vinext beta (routing App Router), Vite 8, Cloudflare Worker, pnpm, TypeScript e CSS globale. Nessun CMS attivo. D1/R2 null: componenti e dipendenze starter presenti, non usati dal prodotto.

PROBLEMI: 17 articoli in un unico modulo importato anche dal client; metadata title/description senza canonical/social specifici; assenza di sitemap, RSS, robots e JSON-LD; due alias duplicati; nessuna vera 404; test ancora riferiti allo skeleton; CSS con numerosi override; font via CSS Google remoto; immagini editoriali esterne; indice nascosto su mobile; Calendly iframe caricato in pagina. Rating Trustpilot statico senza data di verifica. Nessun analytics rilevato.

COSA MANTENERE: stack, routing degli articoli, testi clinici esistenti, palette espresso/bronzo/crema/arancio, font Barlow Condensed/Manrope, foto, testimonianze con provenienza esplicitata, collegamento Calendly fornito.

COSA MODIFICARE: sistema editoriale per record separati, cluster navigabili, related posts semantici, SEO centrale, accessibilità, indice mobile, gerarchia e spaziature, homepage più diretta, caricamento calendario su richiesta.

MIGRAZIONE NECESSARIA: NO. Non esiste una baseline che dimostri un vantaggio di Astro rispetto al rendering server già disponibile. Evitiamo rischi di routing e migrazione. AstroPaper serve da riferimento per tassonomia, indice, correlati, RSS; non si importa il tema. Decap e Pagefind rinviati: 17 articoli, ricerca leggera e nessun requisito di autenticazione editoriale pronto.

## Copy e URL prima delle modifiche
La mappa completa è in url-map.csv. I testi degli articoli sono conservati in content-before.json per un confronto reversibile.
- Home: RIDURRE ripetizioni di obiettivi, MIGLIORARE gerarchia, SPOSTARE focus degli approfondimenti per area; preservare promessa e metodo.
- Metodo: MANTENERE testo e tassonomia, MIGLIORARE navigazione e metadata.
- Per chi: MANTENERE scenari e perimetro sanitario, MIGLIORARE leggibilità.
- Percorsi: MANTENERE fasi e FAQ, MIGLIORARE calendario e CTA.
- Testimonianze: MANTENERE sintesi già presenti; evitare numeri di rating presentati come aggiornati senza verifica.
- Articoli: MANTENERE corpo e fonti; MIGLIORARE autore editoriale, indice, metadata e collegamenti. Nessuna nuova revisione clinica dichiarata.
- Alias: UNIRE attraverso 301, mantenendo gli URL /blog/ esistenti.

## Backlog
P0: preservare URL, vera 404, canonical, robots/sitemap; correggere carico dati blog; CTA condivisa; baseline e test finali.
P1: restyling coerente, cluster reali Piede/Ginocchio/Anca/Metodo e carico/Ritorno allo sport, schema tipizzato, RSS, bio e trasparenza editoriale; accessibilità e immagini.
P2: CMS con accessi editoriali concordati; Pagefind quando necessario; nuove pillar/satelliti solo con contenuti approvati; analytics dopo scelta piattaforma e gestione consenso; Search Console sul dominio pubblico.

## Limiti iniziali
Accesso workspace_all: non pubblico e non indicizzabile come un sito aperto. Nessun cambio audience autorizzato. Nessun dato Search Console o Core Web Vitals reale disponibile. Lighthouse misura laboratorio, non INP sul campo. Nessuna certificazione, revisore sanitario o risultato nuovo va inventato.
