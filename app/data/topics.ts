export const topics = [
 {slug:'schiena',name:'Schiena, core e respirazione',description:'Lombalgia, sciatica, sport e respirazione: guide per capire i sintomi, valutare le opzioni e ricostruire la capacità di muoversi.',categories:['Schiena'],pillar:'mal-di-schiena-sportivi-ritorno-performance'},
 {slug:'piede',name:'Piede e caviglia',description:'Dolore al piede, fascite plantare, alluce valgo e gonfiore: guide per orientarti tra sintomi, valutazione sanitaria e ritorno al cammino.',categories:['Piede'],pillar:'dolore-al-piede'},
 {slug:'ginocchio',name:'Ginocchio',description:'Dolore sulle scale e condromalacia rotulea: capire la differenza tra referto e sintomi, il ruolo dell’esercizio e quando chiedere una valutazione.',categories:['Ginocchio'],pillar:'dolore-davanti-ginocchio-cause-differenziale'},
 {slug:'anca',name:'Anca',description:'Dolore all’anca e all’inguine: guide su diagnosi differenziale, tendini glutei, FAIS, labbro, displasia, adduttori e ritorno all’attività.',categories:['Anca'],pillar:'dolore-anca-inguine-cosa-distinguere'},
 {slug:'metodo',name:'Metodo e carico',description:'Come definire un obiettivo, valutare il recupero e aggiornare l’allenamento. I principi del Metodo Corpo Capace applicati alle attività quotidiane.',categories:['Metodo','Carico'],pillar:'gap-di-capacita'},
 {slug:'ritorno-allo-sport',name:'Ritorno allo sport',description:'Riprendere a correre dopo uno stop: preparare distanza, ritmo e frequenza, osservare il recupero e collegare gli esercizi alle richieste della corsa.',categories:['Ritorno allo sport'],pillar:'stare-meglio-non-basta-tornare-a-correre'},
];
export function topicFor(category:string){return topics.find(t=>t.categories.includes(category));}
