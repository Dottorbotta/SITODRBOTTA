"use client";
import {useState} from 'react';
import Link from 'next/link';
import {ResponsiveImage} from './ResponsiveImage';
const scenes=[
 '/images/corsa-ricreativa-articolazioni.webp',
 '/images/ginocchio-step.webp',
 '/images/equilibrio-monopodalico.webp',
];
export function HomeHero(){
 const [paused,setPaused]=useState(false);
 return <section className="cc-cinema" aria-labelledby="home-title" data-paused={paused}>
  <div className="cc-cinema-images" aria-hidden="true">
   <ResponsiveImage className="cc-cinema-base" src={scenes[0]} alt="" sizes="100vw" fetchPriority="high" loading="eager"/>
   {scenes.map((src,i)=><div className={`cc-cinema-frame cc-cinema-frame-${i}`} key={src}><ResponsiveImage src={src} alt="" sizes="100vw" loading="eager" fetchPriority={i===0?'high':'low'}/></div>)}
  </div>
  <div className="cc-cinema-shade"/>
  <div className="cc-cinema-copy">
   <p className="cc-home-kicker">Corpo Capace · Il movimento torna nella tua vita</p>
   <h1 id="home-title">Torna a camminare,<br/>allenarti e vivere<br/><em>con più libertà.</em></h1>
   <p className="cc-cinema-lead">Percorsi online di esercizio personalizzato per chi convive con dolore a schiena, anca, ginocchio o piede. <strong>Il Team Corpo Capace ti segue, passo dopo passo.</strong></p>
   <Link href="/colloquio" className="cc-home-button">Prenota la tua consulenza <span aria-hidden="true">↗</span></Link>
   <p className="cc-cinema-reviews"><a href="https://it.trustpilot.com/review/drbotta.com" target="_blank" rel="noopener noreferrer">Leggi le esperienze su Trustpilot <span aria-hidden="true">↗</span></a></p>
  </div>
  <div className="cc-cinema-bottom"><a href="#chi-siamo">Scopri Corpo Capace <span aria-hidden="true">↓</span></a><button type="button" className="cc-motion-toggle" aria-label={paused?"Riprendi animazione":"Pausa animazione"} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'Riprendi':'Pausa'} <span aria-hidden="true">{paused?'▷':'Ⅱ'}</span></button></div>
 </section>;
}
