# Gestione editoriale

Ogni articolo vive in content/articles/SLUG.json, con contenuto e metadati separati in campi. Questo formato conserva il renderer corrente; evita la migrazione del copy a MDX. Aggiungere il record all'indice app/data/articles.ts. Non serve duplicare una route: /blog/[slug] risolve gli articoli nuovi.

Campi: title, slug, description, category, tags, publishedAt ISO, updatedAt (null se non aggiornato sostanzialmente), author, featuredImage, seoTitle, seoDescription, canonical, primaryKeyword, secondaryKeywords, problemArea, clinicalReview, relatedPosts, cta. Le sezioni contengono heading e paragraphs, con Markdown inline limitato (grassetti, link, elenchi, h3). I tag iniziali sono essenziali, da affinare editorialmente.

clinicalReview rimane not-recorded finché non sono disponibili nome, ruolo e data di un revisore reale. Le date di pubblicazione sono conservate; il restyling non viene dichiarato aggiornamento clinico. Autore visualizzato: redazione/team, senza attribuire automaticamente una revisione al fondatore.

Cluster in app/data/topics.ts. Le pagine di argomento selezionano solo contenuti esistenti. L'articolo di riferimento è una scelta editoriale tra gli articoli disponibili, non una nuova trattazione completa di tutte le patologie. Schiena, Spalla, Guide e satelliti futuri non vengono creati senza contenuti.

Per pubblicazione sul dominio aperto: impostare origine verificata e INDEXABLE in app/lib/site.ts solo dopo aver autorizzato l'audience pubblica; verificare robots/canonical/sitemap, poi Search Console. Non introdurre analytics senza un piano privacy/consenso.

Lighthouse CI è configurato in lighthouserc.cjs; la workflow GitHub sarà attiva solo se il repository viene ospitato su GitHub. Il repository Sites non esegue GitHub Actions. I punteggi SEO del draft noindex sono intenzionalmente influenzati dal blocco indicizzazione.
