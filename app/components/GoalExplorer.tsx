"use client";
import {useRef,useState} from 'react';
import Link from 'next/link';
import {emptyQuiz,getQuizResult,quizGoals,type QuizAnswers,type CapacityAnswer} from '../lib/quiz';
const questions=[
 {key:'movement',title:'Il gesto che vuoi recuperare, oggi, ti riesce?',hint:'Pensa al movimento in sé, anche per un momento breve. Non fare prove adesso.',options:[['yes','Sì, il movimento mi riesce','Il problema, se c’è, arriva quando continuo o aumento.'],['no','Solo in parte, oppure lo evito','Devo modificare il gesto o non riesco a farlo.'],['unknown','Non saprei distinguerlo','Preferisco approfondire questo punto.']]},
 {key:'duration',title:'Riesci a farlo nella quantità che desideri?',hint:'Considera durata, distanza o ripetizioni dell’attività che hai in mente.',options:[['yes','Sì, sostengo la quantità che mi serve','Arrivo alla durata o alla quantità che ho in mente.'],['no','No, devo ridurre o interrompere','Mi fermo prima o faccio meno di quanto vorrei.'],['unknown','Non lo so ancora','Non ho un riferimento chiaro.']]},
 {key:'recovery',title:'Riesci anche a ripetere l’attività?',hint:'Pensa alla tua esperienza recente, al ritmo che desideri mantenere.',options:[['yes','Sì, riesco a ripeterla','Il recupero mi consente di mantenerla nella mia routine.'],['no','No, poi devo ridimensionarmi','Dopo devo rinunciare, aspettare di più o ridurre il lavoro.'],['unknown','Non ho elementi per dirlo','Non la faccio da tempo o la risposta è poco chiara.']]},
 {key:'participation',title:'Come immagini di essere seguito?',hint:'Il percorso Corpo Capace è attivo: esercizi, video delle esecuzioni e confronto con il team.',options:[['ready','Cerco questo tipo di supporto','Posso esercitarmi e condividere le mie esecuzioni.'],['help','Mi interessa, ma ho dubbi pratici','Vorrei chiarire tempo, video o attrezzatura.'],['unsure','Non so se è quello che cerco','Voglio capire meglio il servizio prima di scegliere.']]},
] as const;
const axisLabel=(value:CapacityAnswer|null)=>value==='yes'?'Disponibile secondo le risposte':value==='no'?'Da approfondire e costruire':'Da chiarire';
export function GoalExplorer(){
 const [step,setStep]=useState(0);const [answers,setAnswers]=useState<QuizAnswers>({...emptyQuiz});const heading=useRef<HTMLHeadingElement>(null);
 const key=step===0?'goal':questions[Math.min(step-1,3)].key;const result=step===5?getQuizResult(answers):null;
 function move(next:number){setStep(next);requestAnimationFrame(()=>{heading.current?.focus({preventScroll:true});heading.current?.scrollIntoView({block:"nearest"});});}
 function reset(){setAnswers({...emptyQuiz});move(0);}
 return <aside className="cc-quiz" id="quiz-corpo-capace" aria-label="Quiz Corpo Capace">
 <div className="cc-quiz-top"><span>IL TUO PUNTO DI PARTENZA</span><span>{result?'Il tuo orientamento':`${step+1} / 5`}</span></div>
 <div className="cc-quiz-progress" role="progressbar" aria-label="Avanzamento del quiz" aria-valuemin={0} aria-valuemax={5} aria-valuenow={step}><span style={{width:`${step/5*100}%`}}/></div>
 {result?<div className="cc-quiz-body"><p className="cc-quiz-eyebrow">La richiesta che hai scelto</p><h2 ref={heading} tabIndex={-1}>{result.goal.name} <span>· {result.goal.title}</span></h2><p>Il tuo obiettivo riguarda {result.goal.context}. Non è un voto: una stessa persona può avere profili diversi in attività diverse.</p>
 <div className="cc-quiz-result"><p className="cc-quiz-eyebrow">Il punto da cui partire</p><h3>{result.profile.headline}</h3><p>{result.profile.description}</p><p className="cc-quiz-profile">{result.key==='daChiarire'?result.profile.name:<>Nella matrice Corpo Capace: <strong>{result.profile.name}</strong>, rispetto all’attività scelta.</>}</p></div>
 <dl className="cc-quiz-axes"><div><dt>Movimento</dt><dd>{axisLabel(answers.movement)}</dd></div><div><dt>Tolleranza e ripetibilità</dt><dd>{axisLabel(result.tolerance)}</dd></div></dl>
 <h3>Il prossimo passo</h3><p>{result.profile.next}</p>
 {answers.participation!=='ready'&&<p className="cc-quiz-support">{answers.participation==='help'?'Prima di aderire, chiarisci con il team come organizzare esercizi, video e tempo disponibile.':'Prima di prenotare puoi leggere come funziona il percorso. Il quiz non stabilisce che il servizio sia adatto a te.'} <Link href="/percorsi">Come funziona il percorso →</Link></p>}
 <Link className="cc-button" href="/colloquio#calendario">Prenota la tua consulenza <span aria-hidden="true">→</span></Link><p className="cc-quiz-caption">Con il Team Corpo Capace, per conoscere il percorso. Le risposte del quiz non vengono inviate al team.</p>
 <div className="cc-quiz-controls"><button type="button" onClick={()=>move(4)}>Rivedi le risposte</button><button type="button" onClick={reset}>Ricomincia</button></div>
 </div>:<form className="cc-quiz-body" onSubmit={event=>{event.preventDefault();if(answers[key]!==null)move(step+1);}}>
 <p className="cc-quiz-eyebrow">{step===0?'Quiz Corpo Capace':'Pensa sempre alla stessa attività'}</p>
 <h2 ref={heading} tabIndex={-1}>{step===0?'Cosa vuoi tornare a fare?':questions[step-1].title}</h2>
 <p className="cc-quiz-intro">{step===0?'Cinque domande per orientarti nella matrice Corpo Capace e capire cosa approfondire con il team. Scegli la richiesta che conta di più per te.':questions[step-1].hint}</p>
 <fieldset className="cc-quiz-options"><legend className="cc-sr-only">{step===0?'Scegli il tuo obiettivo':questions[step-1].title}</legend>
 {step===0?quizGoals.map((goal,index)=><label key={goal.id} className={`cc-quiz-option${answers.goal===goal.id?' is-selected':''}`}><input type="radio" name="goal" value={goal.id} checked={answers.goal===goal.id} onChange={()=>setAnswers(previous=>previous.goal===goal.id?previous:{...emptyQuiz,goal:goal.id})}/><span className="cc-quiz-option-number">0{index+1}</span><span><strong>{goal.title}</strong><small>{goal.example}</small></span></label>):questions[step-1].options.map(([value,title,detail])=><label key={value} className={`cc-quiz-option${answers[key]===value?' is-selected':''}`}><input type="radio" name={key} value={value} checked={answers[key]===value} onChange={()=>setAnswers(previous=>({...previous,[key]:value}))}/><span><strong>{title}</strong><small>{detail}</small></span></label>)}
 </fieldset><div className="cc-quiz-actions">{step>0&&<button type="button" className="cc-quiz-back" onClick={()=>move(step-1)}>← Indietro</button>}<button type="submit" className="cc-button" disabled={answers[key]===null}>{step===4?'Scopri il tuo punto di partenza':'Continua'} <span aria-hidden="true">→</span></button></div><p className="cc-quiz-caption">{answers[key]===null?'Seleziona una risposta per continuare.':'Puoi cambiare risposta prima di proseguire.'}</p>
 </form>}
 <div className="cc-quiz-bottom">Nessun dato di contatto richiesto. Le risposte restano solo in questa pagina e si azzerano quando la ricarichi.</div><noscript><p>Per utilizzare il quiz attiva JavaScript. Puoi comunque <a href="/domande-frequenti">leggere le domande sul percorso</a> o <a href="/colloquio">conoscere il colloquio con il team</a>.</p></noscript>
 </aside>;
}
