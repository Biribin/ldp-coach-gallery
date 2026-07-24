import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Manrope } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for a "sophisticated, confident,
 * cultured" voice with an urban edge; Bricolage Grotesque carries that in
 * headings (a contemporary grotesk with editorial ink-trap character), while
 * Manrope stays clean and warm-neutral for body copy. Fraunces supplies the
 * genuine cultured serif register the brief calls for — used only on the
 * editorial "serif accent" (district numerals, prices, pull-quote marks) so
 * the metropolitan voice has both a modern grotesk and an old-city serif.
 * Same route-scoped seam the japandi reference establishes.
 */
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metropolitan — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Metropolitan : sophistication urbaine et profondeur culturelle — cosmopolite, superposé, entre énergie éditoriale et vie citadine.",
};

/**
 * ISOLATION SEAM: `theme-metropolitan` on this wrapper is the class scope
 * that `src/styles/themes/metropolitan.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function MetropolitanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-metropolitan ${bricolageGrotesque.variable} ${fraunces.variable} ${manrope.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
