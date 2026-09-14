export const topics = [
 {slug:'piede',name:'Piede e caviglia',description:'Dal dolore al piede alla fascite plantare: orientati tra sintomi, carico e ritorno al cammino.',categories:['Piede'],pillar:'dolore-al-piede'},
 {slug:'ginocchio',name:'Ginocchio',description:'Scale, allenamento e condropatia: comprendere i sintomi e organizzare una progressione.',categories:['Ginocchio'],pillar:'condromalacia-rotulea'},
 {slug:'anca',name:'Anca',description:'Dolore laterale, riposo e ritorno alla corsa: approfondimenti per capire il contesto.',categories:['Anca'],pillar:'dolore-laterale-anca-notte-carico-esercizio'},
 {slug:'metodo',name:'Metodo e carico',description:'Capacità, recupero e decisioni: i principi che collegano il programma alla vita quotidiana.',categories:['Metodo','Carico'],pillar:'gap-di-capacita'},
 {slug:'ritorno-allo-sport',name:'Ritorno allo sport',description:'Dal sollievo alla richiesta dello sport: preparare gesto, durata e continuità.',categories:['Ritorno allo sport'],pillar:'stare-meglio-non-basta-tornare-a-correre'},
];
export function topicFor(category:string){return topics.find(t=>t.categories.includes(category));}
