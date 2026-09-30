'use client';
import {useState,type FormEvent} from 'react';
const email='teamdrbotta@gmail.com';
export function ContactForm(){
 const [prepared,setPrepared]=useState(false);
 function prepare(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const body=`Nome: ${String(data.get('nome')).trim()} ${String(data.get('cognome')).trim()}\nEmail: ${String(data.get('email')).trim()}\nCellulare: ${String(data.get('telefono')||'Non indicato').trim()}\n\n${String(data.get('messaggio')).trim()}`;
  window.location.href=`mailto:${email}?subject=${encodeURIComponent('Il mio caso · Corpo Capace')}&body=${encodeURIComponent(body)}`;
  setPrepared(true);
 }
 return <form className="cc-contact-form" onSubmit={prepare}>
  <div className="cc-contact-name"><label>Nome<input name="nome" autoComplete="given-name" required maxLength={80} placeholder="Il tuo nome"/></label><label>Cognome<input name="cognome" autoComplete="family-name" required maxLength={80} placeholder="Il tuo cognome"/></label></div>
  <label>Email<input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="La tua email"/></label>
  <label><span>Cellulare (facoltativo)</span><input name="telefono" type="tel" autoComplete="tel" maxLength={30} placeholder="Il tuo numero di telefono"/></label>
  <label>Raccontaci il tuo caso<textarea name="messaggio" required minLength={10} maxLength={1500} rows={6} placeholder="Quali attività ti limitano oggi e cosa vorresti tornare a fare?"/></label>
  <label className="cc-contact-privacy"><input name="privacy" type="checkbox" required/><span>Ho letto l’<a href="https://www.iubenda.com/privacy-policy/48665326" target="_blank" rel="noopener noreferrer">informativa privacy</a>.</span></label>
  <button className="cc-button" type="submit">Invia il tuo caso <span aria-hidden="true">↗</span></button>
  <p className="cc-contact-help">Si apre la tua app di posta con il messaggio compilato. Controllalo e premi Invia nell’app per recapitarlo al team.</p>
  {prepared&&<div className="cc-contact-feedback" role="status"><strong>Il messaggio è pronto per la tua app di posta.</strong><p>Non è stato inviato dal sito: controllalo e premi Invia nell’app di posta.</p></div>}
 </form>;
}
