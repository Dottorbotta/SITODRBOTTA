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
