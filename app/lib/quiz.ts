export const quizGoals = [
 {id:'salute',name:'Salute',title:'Ritrovare autonomia',example:'Camminare per le commissioni, fare le scale, gestire la giornata.',context:'le attività essenziali della tua giornata'},
 {id:'wellness',name:'Wellness',title:'Vivere una vita più attiva',example:'Passeggiate più lunghe, viaggi, escursioni e tempo libero.',context:'le attività del tempo libero che vuoi recuperare'},
 {id:'fitness',name:'Fitness',title:'Riprendere ad allenarmi',example:'Palestra, corsa o sport amatoriale con continuità.',context:'il tuo allenamento o sport amatoriale'},
 {id:'performance',name:'Performance',title:'Preparare una prestazione',example:'Una gara o un obiettivo sportivo con richieste specifiche.',context:'la prestazione sportiva a cui punti'},
] as const;
export type QuizGoal = typeof quizGoals[number]['id'];
export type CapacityAnswer = 'yes'|'no'|'unknown';
export type QuizAnswers = {goal:QuizGoal|null;movement:CapacityAnswer|null;duration:CapacityAnswer|null;recovery:CapacityAnswer|null;participation:'ready'|'help'|'unsure'|null};
export const emptyQuiz:QuizAnswers={goal:null,movement:null,duration:null,recovery:null,participation:null};
export const quizProfiles = {
 capace:{name:'Corpo capace',headline:'Consolidare ciò che riesci a fare.',description:'Descrivi un movimento disponibile e una quantità di attività che riesci a sostenere e ripetere. Rispetto alla richiesta che hai scelto, entrambe le dimensioni risultano presenti nella tua autovalutazione.',next:'Il confronto può aiutarti a chiarire se vuoi consolidare questa capacità o preparare una richiesta diversa. Il risultato non implica che tu abbia bisogno di acquistare un percorso.'},
 limitato:{name:'Corpo limitato',headline:'Ampliare le possibilità di movimento.',description:'Riferisci difficoltà nel gesto, pur riuscendo a sostenere e ripetere la quantità di attività considerata. La prima area da approfondire è quali movimenti o opzioni ti mancano rispetto al tuo obiettivo.',next:'Porta un esempio del gesto che modifichi o eviti e spiega quanto lavoro riesci comunque a sostenere. Il team potrà chiarire quali informazioni servono per orientare il percorso.'},
 fragile:{name:'Corpo fragile',headline:'Costruire più continuità nell’attività.',description:'Descrivi un gesto che riesci a eseguire, ma una difficoltà nel sostenerlo quanto vorresti o nel ripeterlo dopo. La priorità da approfondire riguarda la quantità di attività e la sua ripetibilità.',next:'Racconta quando devi ridurre o interrompere l’attività e cosa succede quando provi a ripeterla. Sono informazioni da approfondire prima di scegliere una progressione.'},
 incapace:{name:'Corpo incapace',headline:'Ricostruire movimento e continuità.',description:'Le risposte indicano difficoltà sia nel gesto sia nella quantità di attività che riesci a sostenere o ripetere. Il punto da approfondire è una partenza proporzionata alle possibilità che hai oggi.',next:'Porta un’attività concreta che hai ridotto o lasciato da parte. Prima di parlare di aumenti, occorre chiarire il punto di partenza e se il percorso proposto sia appropriato.'},
 daChiarire:{name:'Profilo da approfondire',headline:'Mettere a fuoco il punto di partenza.',description:'Una o più risposte non permettono di distinguere con sufficiente chiarezza movimento e tolleranza. Assegnarti uno dei quattro profili darebbe una precisione che questo quiz non ha.',next:'Non serve provare nuovi movimenti per completare il quiz. Porta al colloquio ciò che sai già della tua esperienza e i dubbi rimasti aperti.'},
} as const;
export function getQuizResult(answers:QuizAnswers){
 if(Object.values(answers).some(value=>value===null))return null;
 const tolerance:CapacityAnswer=answers.duration==='no'||answers.recovery==='no'?'no':answers.duration==='yes'&&answers.recovery==='yes'?'yes':'unknown';
 const key=answers.movement==='unknown'||tolerance==='unknown'?'daChiarire':answers.movement==='yes'?(tolerance==='yes'?'capace':'fragile'):(tolerance==='yes'?'limitato':'incapace');
 return {key,profile:quizProfiles[key],goal:quizGoals.find(goal=>goal.id===answers.goal)!,tolerance};
}
