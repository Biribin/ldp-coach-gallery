import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief demands "ultra-clean typographic
 * hierarchy... treated as the primary design element" — Archivo is a true
 * grotesque with a genuine Black weight for oversized display numerals and
 * headlines, and IBM Plex Sans carries a technical, print-precise body voice
 * distinct from a generic UI sans. Exactly two route-scoped fonts, same seam
 * the japandi reference route uses.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Swiss/International — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Swiss/International : grille rigoureuse à 12 colonnes, typographie grotesque ultra-nette, discipline systématique rouge/noir/blanc.",
};

/**
 * ISOLATION SEAM: `theme-swiss-international` on this wrapper is the class
 * scope that `src/styles/themes/swiss-international.css` targets. Every
 * shadcn token consumed inside {children} resolves through this scoped class
 * instead of the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function SwissInternationalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-swiss-international ${archivo.variable} ${plexSans.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
