export const SITE_ORIGIN = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
// Keep the workspace draft out of public search until audience/domain are explicitly changed.
export const INDEXABLE = false;
export const CONSULTATION_URL = 'https://calendly.com/d/dvpx-955-zh5/prenota-la-tua-consulenza?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacucgqRtJScJZuSNoM-VfX1yRZpknkeGYJPn9u-UNKwmtBAJtua6LphM587tA_aem_SQPka9sHC8PvFz0n3h9FxQ&utm_id=97760_v0_s00_e0_tv3&month=2026-09';
export const absolute = (path: string) => new URL(path,SITE_ORIGIN).href;
export const editorialPages = [
 {path:'/', title:'Tornare alle attività quotidiane | Corpo Capace · Dr. Botta',description:'Camminare, fare le scale e riprendere le tue attività: scopri Corpo Capace, il percorso di esercizio personalizzato a distanza con il team Dr. Botta.'},
 {path:'/metodo',title:'Metodo Corpo Capace: come funziona | Dr. Botta',description:'Come lavora il Metodo Corpo Capace: valutare il punto di partenza, scegliere le capacità da allenare e adattare il carico alla risposta individuale.'},
 {path:'/per-chi',title:'Per chi è Corpo Capace | Cammino, allenamento e sport',description:'Vuoi riprendere cammino, palestra o sport? Scopri a chi si rivolge Corpo Capace e quando serve prima una valutazione sanitaria.'},
 {path:'/percorsi',title:'Allenamento personalizzato online | Dr. Botta',description:'Come si svolge il percorso Corpo Capace: valutazione, programma a casa o in palestra, video e confronti con il team. Prenota una consulenza.'},
 {path:'/testimonianze',title:'Recensioni Dr. Botta e Corpo Capace | Esperienze',description:'Esperienze personali con il team Dr. Botta: cammino, corsa e allenamento. Leggi le sintesi e consulta le recensioni complete su Trustpilot.'},
 {path:'/blog',title:'Dolore, movimento e allenamento | Blog Dr. Botta',description:'Articoli su dolore al piede, ginocchio e anca, gestione del carico e ritorno allo sport. Cerca per argomento e consulta le fonti degli approfondimenti.'},
 {path:'/chi-sono',title:'Dr. Simone Botta Lamanna | Fondatore di Corpo Capace',description:'Chi è Simone Botta Lamanna e come lavora il team Corpo Capace: valutazione, allenamento progressivo e monitoraggio per le attività che vuoi recuperare.'},
];
