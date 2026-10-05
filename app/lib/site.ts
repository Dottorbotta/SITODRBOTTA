export const SITE_ORIGIN = 'https://drbotta-pathodynamics.dr-botta-4589.chatgpt.site';
// Keep the workspace draft out of public search until audience/domain are explicitly changed.
export const INDEXABLE = false;
export const CONSULTATION_URL = 'https://calendly.com/d/dvpx-955-zh5/prenota-la-tua-consulenza';
export const absolute = (path: string) => new URL(path,SITE_ORIGIN).href;
export const editorialPages = [
 {path:"/quiz-corpo-capace",title:"Quiz Corpo Capace",description:"Cinque domande per orientarti nel metodo e preparare il colloquio con il team."},
 {path:"/guide",title:"Guide Corpo Capace",description:"La raccolta delle guide e gli strumenti per conoscere il percorso."},
 {path:"/domande-frequenti",title:"Domande frequenti su Corpo Capace",description:"Guida a metodo, team, percorso online, impegno e risultati prima del colloquio."},
 {path:'/', title:'Tornare alle attività quotidiane | Corpo Capace · Dr. Botta',description:'Camminare, fare le scale e riprendere le tue attività: scopri Corpo Capace, il percorso di esercizio personalizzato a distanza con il team Dr. Botta.'},
 {path:'/metodo',title:'Metodo Corpo Capace: come funziona | Dr. Botta',description:'Come lavora il Metodo Corpo Capace: valutare il punto di partenza, scegliere le capacità da allenare e adattare il carico alla risposta individuale.'},
 {path:'/per-chi',title:'Per chi è Corpo Capace | Cammino, allenamento e sport',description:'Vuoi riprendere cammino, palestra o sport? Scopri a chi si rivolge Corpo Capace e quando serve prima una valutazione sanitaria.'},
 {path:'/percorsi',title:'Allenamento personalizzato online | Dr. Botta',description:'Come si svolge il percorso Corpo Capace: valutazione, programma a casa o in palestra, video e confronti con il team. Prenota una consulenza.'},
 {path:'/testimonianze',title:'Recensioni Dr. Botta e Corpo Capace | Esperienze',description:'Esperienze personali con il team Dr. Botta: cammino, corsa e allenamento. Leggi le sintesi e consulta le recensioni complete su Trustpilot.'},
 {path:'/team',title:'Team Corpo Capace | Chi segue il percorso',description:'Ruoli e assistenza nel percorso Corpo Capace.'},
 {path:'/colloquio',title:'Il primo colloquio con il team | Corpo Capace',description:'Cosa aspettarti e come prenotare il colloquio con il team.'},
 {path:'/termini-e-condizioni',title:'Termini e condizioni | Corpo Capace',description:'Condizioni di servizio di BOTTA PATHODYNAMICS LLP.'},
 {path:'/blog',title:'Dolore, movimento e allenamento | Blog Dr. Botta',description:'Articoli su schiena, piede, ginocchio e anca, gestione del carico e ritorno allo sport. Cerca per argomento e consulta le fonti degli approfondimenti.'},
 {path:'/chi-sono',title:'Dr. Simone Botta Lamanna | Fondatore di Corpo Capace',description:'Chi è Simone Botta Lamanna e come lavora il team Corpo Capace: valutazione, allenamento progressivo e monitoraggio per le attività che vuoi recuperare.'},
 {path:'/contatti',title:'Contatti | Corpo Capace · Dr. Botta',description:'Contatta il team per conoscere il percorso o chiarire le tue domande.'},
];

export const CONSULTATION_LABEL = 'Prenota la tua consulenza';
