
import Link from "next/link";

const navigation = [
  { label: "Il Metodo", href: "/metodo" },
  { label: "Per chi è", href: "/per-chi" },
  { label: "Il percorso", href: "/percorsi" },
  { label: "Domande frequenti", href: "/domande-frequenti" },
  { label: "Blog", href: "/blog" },
  { label: "Guide", href: "/guide" },
  { label: "Il team", href: "/team" },
  { label: "Dr. Botta", href: "/chi-sono" },
  { label: "Contatti", href: "/contatti" },
];

export function Header({ tone = "light", home = false }: { tone?: "light" | "dark"; home?: boolean }) {
  const items = home ? [{label:"Il metodo",href:"/metodo"},{label:"Il percorso",href:"/percorsi"},{label:"Il team",href:"/team"},{label:"Dr. Botta",href:"/chi-sono"},{label:"Testimonianze",href:"/testimonianze"},{label:"Guide",href:"/guide"},{label:"Blog",href:"/blog"},{label:"Contatti",href:"/contatti"}] : navigation;
  return (
    <header className={`site-header site-header--${tone}`}>
      <Link className="wordmark" href="/" aria-label="Corpo Capace, homepage">
        <img className="cc-brand-logo" src="/brand/corpo-capace-atlante-horizontal.png" alt="Corpo Capace" width="438" height="136" />
      </Link>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        {items.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="header-cta" href="/colloquio">
        {home ? "Parla con il team" : "Il primo colloquio"} <span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-menu">
        <summary aria-label="Apri il menu"><span /><span /></summary>
        <nav aria-label="Navigazione mobile">
          {items.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <a className="mobile-menu-cta" href="/colloquio">Il primo colloquio</a>
        </nav>
      </details>
    </header>
  );
}
