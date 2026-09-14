import { Fragment } from 'react';
function Inline({text}:{text:string}) {
  return <>{text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g).map((part,i)=>{
    if(part.startsWith('**')) return <strong key={i}>{part.slice(2,-2)}</strong>;
    const link=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if(link && /^(\/|https:\/\/)/.test(link[2])) return <a key={i} href={link[2]}>{link[1]}</a>;
    return <Fragment key={i}>{part}</Fragment>;
  })}</>;
}
export function ArticleBlock({text}:{text:string}) {
  if(text.startsWith('### '))return <h3><Inline text={text.slice(4)}/></h3>;
  if(text.startsWith('- '))return <ul>{text.split('\n').map((line,i)=><li key={i}><Inline text={line.replace(/^- /,'')}/></li>)}</ul>;
  if(text.startsWith('> '))return <blockquote><Inline text={text.slice(2)}/></blockquote>;
  return <p><Inline text={text}/></p>;
}
export function CapacityGap(){return <figure className="capacity-gap" aria-label="Esempio didattico: richiesta 100, capacità 60, differenza 40">
  <figcaption><strong>Richiesta e capacità</strong><span>Esempio illustrativo, non una misurazione clinica</span></figcaption>
  <div className="gap-row"><b>Richiesta del compito</b><div className="gap-bar gap-full">100</div></div>
  <div className="gap-row"><b>Capacità attuale</b><div className="gap-track"><div className="gap-bar gap-current">60</div><div className="gap-difference">Gap 40</div></div></div>
  <p>Dose tollerabile → adattamento → progressione → nuova capacità</p>
  <small>I numeri rendono visibile il concetto. Non quantificano il danno, non predicono il dolore e non fissano una soglia di sicurezza.</small>
</figure>}
