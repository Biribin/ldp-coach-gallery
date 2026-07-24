import type { Metadata } from "next";
import { Archivo } from "next/font/google";

/**
 * `next/font/google` self-hosts the font at build time — no remote <link>, no
 * runtime network request. The brief asks for a "precise, modern, quietly
 * assured" voice with a sense of engineered geometry; Archivo is a geometric
 * grotesque that carries that for headings, index numerals, and controls,
 * while body text stays on the scaffold's already-loaded Geist sans. Exactly
 * one route-scoped font is added — the same seam japandi (Noto Serif) uses,
 * and deliberately distinct from neobrutalist's Space Grotesk.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neo-Geo — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Neo-Geo : motifs géométriques raffinés, rythme mathématique, aplats de couleur précis — une transformation structurée et systématique.",
};

/**
 * ISOLATION SEAM: `theme-neo-geo` on this wrapper is the class scope that
 * `src/styles/themes/neo-geo.css` targets. Every shadcn token consumed inside
 * {children} resolves through this scoped class instead of the neutral :root
 * defaults, with zero bleed to sibling routes. Same wrapper pattern (route
 * layout -> theme-scope div -> theme CSS file) the japandi/neobrutalist routes
 * establish.
 */
export default function NeoGeoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-neo-geo ${archivo.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
