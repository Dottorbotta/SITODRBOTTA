const visuals: Record<string,string[]> = {
 build: [
  'M20 100C60 100 48 40 94 40H150 M141 31l9 9-9 9',
  'M25 100V30M25 100H155 M45 100V78H65V100 M85 100V58H105V100 M125 100V35H145V100',
  'M25 34H75V57H25Z M92 34H155V57H92Z M25 75H105V98H25Z M122 75H155V98H122Z',
  'M20 105H50V82H85V59H120V36H160 M145 24l15 12-15 12',
 ],
 context: [
  'M22 28H80V102H22Z M100 28H158V102H100Z M36 83H65 M114 83H143 M80 65H100',
  'M30 98C30 40 70 40 90 67S150 94 150 36 M30 36C30 94 70 94 90 67S150 40 150 98',
  'M25 34H155V104H25Z M25 54H155 M48 25V42 M132 25V42 M43 72H61 M81 72H99 M119 72H137 M43 90H61 M81 90H99',
 ],
 support: [
  'M20 100H160 M20 80C35 80 35 40 52 56S75 96 91 63S112 30 128 47S146 68 160 29',
  'M25 37H104V76H67L48 92V76H25Z M77 56H155V96H132L113 111V96H77',
  'M22 68H75 M75 68C100 68 105 35 130 35H158 M75 68H158 M75 68C100 68 105 101 130 101H158 M148 25l10 10-10 10',
 ],
};
export function PathwayVisuals({items,kind}:{items:[string,string][];kind:'build'|'context'|'support'}){
 return <div className={`cc-cards pathway-visual-cards pathway-visual-${kind}`}>{items.map(([title,copy],i)=><article key={title}>
  <div className="pathway-diagram" aria-hidden="true"><svg viewBox="0 0 180 130" fill="none"><path className="diagram-grid" d="M20 112H160M20 18H160"/><path className="diagram-ink" d={visuals[kind][i]}/>{kind==='build'&&i===0?<><circle className="diagram-accent" cx="150" cy="40" r="18"/><circle className="diagram-dot" cx="150" cy="40" r="5"/><circle className="diagram-dot" cx="20" cy="100" r="5"/></>:kind==='build'&&i===1?<path className="diagram-accent" d="M25 48H155" strokeDasharray="4 6"/>:kind==='build'&&i===2?<path className="diagram-fill" d="M92 34H155V57H92Z M25 75H105V98H25Z"/>:kind==='build'&&i===3?<><circle className="diagram-dot" cx="20" cy="105" r="5"/><circle className="diagram-dot" cx="120" cy="36" r="5"/></>:kind==='context'&&i===0?<><circle className="diagram-dot" cx="50" cy="59" r="7"/><circle className="diagram-dot" cx="129" cy="59" r="7"/></>:kind==='context'&&i===1?<circle className="diagram-accent" cx="90" cy="67" r="20"/>:kind==='context'&&i===2?<path className="diagram-accent" d="M118 87l7 7 13-15"/>:kind==='support'&&i===0?<path className="diagram-accent" d="M20 91L160 28" strokeDasharray="4 6"/>:kind==='support'&&i===1?<><path className="diagram-accent" d="M40 51H73 M102 77H140"/></>:<><circle className="diagram-dot" cx="75" cy="68" r="6"/><path className="diagram-accent" d="M75 68C100 68 105 35 130 35H158"/></>}</svg></div>
  <span className="cc-number">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p>
 </article>)}</div>
}
