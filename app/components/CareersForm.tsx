'use client';
import {useState,type FormEvent} from 'react';

const recipient='teamdrbotta@gmail.com';
const roles=['Coach','Fisioterapista','Kinesiologo','Editor video','Content creator / social media','Supporto clienti e organizzazione','Consulente / primo contatto','Altro'];

export function CareersForm(){
 const [prepared,setPrepared]=useState(false);
 function prepare(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const field=(name:string)=>String(data.get(name)||'').trim();
  const role=field('ruolo');
  const body=[`Candidatura per: ${role}`,`Nome e cognome: ${field('nome')}`,`Email: ${field('email')}`,`Telefono: ${field('telefono')||'Non indicato'}`,`Profilo o portfolio: ${field('profilo')||'Non indicato'}`,'',`Esperienza e modo di lavorare:\n${field('presentazione')}`,'','Allego il mio CV a questa email.'].join('\n');
  window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(`Candidatura Corpo Capace · ${role}`)}&body=${encodeURIComponent(body)}`;
  setPrepared(true);
 }
 return <form className="team-form" onSubmit={prepare}>
  <label>Per quale ruolo ti candidi?<select name="ruolo" required defaultValue=""><option value="" disabled>Seleziona un ruolo</option>{roles.map(role=><option key={role} value={role}>{role}</option>)}</select></label>
  <label>Nome e cognome<input name="nome" autoComplete="name" required maxLength={120} placeholder="Il tuo nome"/></label>
  <label>Email<input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="La tua email"/></label>
  <label>Telefono (facoltativo)<input name="telefono" type="tel" autoComplete="tel" maxLength={30} placeholder="Il tuo numero"/></label>
  <label>LinkedIn o portfolio (facoltativo)<input name="profilo" type="url" inputMode="url" maxLength={300} placeholder="https://"/></label>
  <label>Esperienza e modo di lavorare<textarea name="presentazione" required minLength={20} maxLength={1200} rows={5} placeholder="Raccontaci cosa fai e come potresti contribuire al team"/></label>
  <label className="team-form-privacy"><input name="privacy" type="checkbox" required/><span>Ho letto l’<a href="https://www.iubenda.com/privacy-policy/48665326" target="_blank" rel="noopener noreferrer">informativa privacy</a>.</span></label>
  <button className="cc-button" type="submit">Prepara la candidatura</button>
  <p className="team-form-help">Si apre la tua app di posta con i dati compilati. Allega il CV e premi Invia nell’app: il sito non invia automaticamente la candidatura.</p>
  {prepared&&<p className="team-form-feedback" role="status">Controlla il messaggio, allega il CV e premi Invia nella tua app di posta.</p>}
 </form>
}
