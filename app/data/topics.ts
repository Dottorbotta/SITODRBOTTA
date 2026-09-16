export const topics = [
 {slug:'piede',name:'Piede e caviglia',description:'Dolore al piede, fascite plantare, alluce valgo e gonfiore: guide per orientarti tra sintomi, valutazione sanitaria e ritorno al cammino.',categories:['Piede'],pillar:'dolore-al-piede'},
 {slug:'ginocchio',name:'Ginocchio',description:'Dolore sulle scale e condromalacia rotulea: capire la differenza tra referto e sintomi, il ruolo dell’esercizio e quando chiedere una valutazione.',categories:['Ginocchio'],pillar:'condromalacia-rotulea'},
 {slug:'anca',name:'Anca',description:'Dolore laterale all’anca durante il riposo e ritorno alla corsa: due approfondimenti su valutazione dei sintomi, attività e gestione del carico.',categories:['Anca'],pillar:'dolore-laterale-anca-notte-carico-esercizio'},
 {slug:'metodo',name:'Metodo e carico',description:'Come definire un obiettivo, valutare il recupero e aggiornare l’allenamento. I principi del Metodo Corpo Capace applicati alle attività quotidiane.',categories:['Metodo','Carico'],pillar:'gap-di-capacita'},
 {slug:'ritorno-allo-sport',name:'Ritorno allo sport',description:'Riprendere a correre dopo uno stop: preparare distanza, ritmo e frequenza, osservare il recupero e collegare gli esercizi alle richieste della corsa.',categories:['Ritorno allo sport'],pillar:'stare-meglio-non-basta-tornare-a-correre'},
];
export function topicFor(category:string){return topics.find(t=>t.categories.includes(category));}
