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
import { SITE_ORIGIN, editorialPages } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: { index: false, follow: true },
  manifest: "/manifest.webmanifest",
  title: {
    default: editorialPages[0].title,
    template: "%s",
  },
  description: editorialPages[0].description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body><a href="#contenuto" className="skip-link">Salta al contenuto</a><SiteSchema />{children}</body></html>;
}
