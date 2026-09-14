import "@fontsource/barlow-condensed/latin-500.css";
import "@fontsource/barlow-condensed/latin-600.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/barlow-condensed/latin-800.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/barlow-condensed/latin-600-italic.css";
import type { Metadata } from "next";
import "./globals.css";
import "./restyling.css";
import { SiteSchema } from "./lib/seo";
import { SITE_ORIGIN } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: { index: false, follow: true },
  manifest: "/manifest.webmanifest",
  title: {
    default: "Metodo Corpo Capace | Dr. Botta",
    template: "%s",
  },
  description: "Allenamento personalizzato per tornare alle attività che contano, costruendo capacità, affidabilità e autonomia.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body><a href="#contenuto" className="skip-link">Salta al contenuto</a><SiteSchema />{children}</body></html>;
}
