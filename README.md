# Dr. Botta — Pathodynamics

Homepage responsive di Dr. Botta, dedicata ai percorsi di coaching avanzato per recuperare abilità, funzione e performance.

## Contenuti

- hero e navigazione responsive
- presentazione del metodo
- programmi Re-Active e Performance
- sezione clinica e ricerca
- testimonianze e contatti

## Sviluppo locale

Richiede Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`.

## Verifica della build

```bash
npm run build
```

Il progetto usa React, vinext e Vite ed è predisposto per il deployment su Cloudflare Workers tramite OpenAI Sites.

## Lighthouse CI

Sorgente sincronizzata da Sites `62d96ac3571c799cd9e2f8701add0dd9868f718e`. README GitHub conservato. Per la versione corrente usare `pnpm install --frozen-lockfile` (pnpm 11.19.0), quindi `pnpm test` e `pnpm exec lhci autorun`.

Il workflow Website quality esegue tre misure mobile su home, blog e articolo dolore al piede. I report HTML/JSON restano negli artifact GitHub per 14 giorni; nessun caricamento in storage pubblico Lighthouse. Le soglie sono inizialmente avvisi. Il noindex viene mantenuto e può ridurre il punteggio SEO. Il test usa la build locale nel runner, non modifica né verifica il gateway di accesso Sites.

## Controllo link con Lychee

Il workflow **Website links** si esegue su push a main, pull request e avvio manuale. Compila il sito e raccoglie i link HTML di tutte le pagine della sitemap, incluse fonti scientifiche, immagini, CSS e script. Gli URL assoluti del progetto Sites vengono rimappati esclusivamente nei dati di controllo alla build locale; accesso, noindex, contenuti e Calendly non vengono modificati.

I link interni e le ancore sono controlli obbligatori. I link esterni producono avvisi e un report separato: 403/429, timeout e protezioni anti-bot richiedono verifica, non vengono considerati link validi né esclusi automaticamente. Nessuna esclusione di interi domini, nessun bypass TLS. Le 13 eccezioni per URL esatto in `lychee.toml` sono state confermate corrette dal proprietario il 14 settembre 2026 dopo risposte 403/429/999 del runner. Restano nei conteggi come escluse, non come successi HTTP; i link del sito e le fonti non sono stati modificati. Mailto, tel e data non sono richieste HTTP e restano fuori dal controllo. Il controllo verifica la raggiungibilità, non la correttezza clinica delle fonti né i link creati soltanto dopo interazioni JavaScript.

Gli artifact `link-reports-*` contengono report interni/esterni, inventario URL → pagine di origine e log del server per 14 giorni. Per riprodurre: build, `pnpm exec vinext start --port 4173`, `python3 scripts/collect-links.py`, poi Lychee 0.24.2 sui file `link-check/internal.txt` (con `--include-fragments`) ed `external.txt`, usando `--config lychee.toml`.
