import { CONSULTATION_URL } from "../lib/site";
import Link from "next/link";

const navigation = [
  { label: "Il Metodo", href: "/metodo" },
  { label: "Per chi è", href: "/per-chi" },
  { label: "Il percorso", href: "/percorsi" },
  { label: "Testimonianze", href: "/testimonianze" },
  { label: "Blog", href: "/blog" },
  { label: "Dr. Botta", href: "/chi-sono" },
];

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Link className="wordmark" href="/" aria-label="Corpo Capace, homepage">
        <span className="wordmark-main">CORPO CAPACE</span>
        <span className="wordmark-sub">UN METODO DR. BOTTA</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="header-cta" href={CONSULTATION_URL} target="_blank" rel="noreferrer">
        Parla con il team <span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-menu">
        <summary aria-label="Apri il menu"><span /><span /></summary>
        <nav aria-label="Navigazione mobile">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <a className="mobile-menu-cta" href={CONSULTATION_URL} target="_blank" rel="noreferrer">Parla con il team</a>
        </nav>
      </details>
    </header>
  );
}
