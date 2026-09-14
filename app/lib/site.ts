export const SITE_ORIGIN = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
// Keep the workspace draft out of public search until audience/domain are explicitly changed.
export const INDEXABLE = false;
export const CONSULTATION_URL = 'https://calendly.com/d/dvpx-955-zh5/prenota-la-tua-consulenza?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacucgqRtJScJZuSNoM-VfX1yRZpknkeGYJPn9u-UNKwmtBAJtua6LphM587tA_aem_SQPka9sHC8PvFz0n3h9FxQ&utm_id=97760_v0_s00_e0_tv3&month=2026-09';
export const absolute = (path: string) => new URL(path,SITE_ORIGIN).href;
export const editorialPages = [
 {path:'/', title:'Metodo Corpo Capace | Dr. Botta',description:'Allenamento personalizzato, carico progressivo e monitoraggio per tornare alla vita attiva con il metodo Dr. Botta.'},
 {path:'/metodo',title:'Metodo Corpo Capace: valutazione e progressione | Dr. Botta',description:'Come funziona Corpo Capace: valutazione delle capacità, esercizio progressivo e monitoraggio per tornare alle attività che contano.'},
 {path:'/per-chi',title:'Per chi è il percorso Corpo Capace | Dr. Botta',description:'Vita quotidiana, allenamento e sport: scopri quando un percorso basato sull’esercizio è adatto al tuo punto di partenza.'},
 {path:'/percorsi',title:'Percorso online Corpo Capace: come funziona | Dr. Botta',description:'Valutazione, programma personalizzato e follow-up: scopri le fasi del percorso online Corpo Capace e parla con il team.'},
 {path:'/testimonianze',title:'Testimonianze e recensioni Dr. Botta | Corpo Capace',description:'Esperienze personali di cammino, allenamento e ritorno allo sport: leggi le sintesi e le recensioni complete su Trustpilot.'},
 {path:'/blog',title:'Blog Dr. Botta: piede, ginocchio, anca e movimento',description:'Approfondimenti organizzati per argomento: dolore al piede, ginocchio, anca, carico e ritorno allo sport. Fonti e metodo Corpo Capace.'},
 {path:'/chi-sono',title:'Dr. Simone Botta Lamanna e il Metodo Corpo Capace',description:'Il fondatore di Corpo Capace, i principi del metodo e il lavoro del team. Informazioni editoriali e contatti.'},
];
