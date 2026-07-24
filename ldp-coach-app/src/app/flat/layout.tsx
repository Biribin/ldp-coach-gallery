import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for "clean, friendly, clear...
 * approachable and modern" — Fredoka's rounded geometric terminals carry the
 * cheerful flat-illustration voice for headings, Nunito stays warm and highly
 * legible for body copy. Exactly two route-scoped fonts, same seam the
 * japandi reference route uses.
 */
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flat — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Flat : zéro ombre, aplats de couleurs francs, iconographie simple, clarté nette et enjouée.",
};

/**
 * ISOLATION SEAM: `theme-flat` on this wrapper is the class scope that
 * `src/styles/themes/flat.css` targets. Every shadcn token consumed inside
 * {children} resolves through this scoped class instead of the neutral
 * :root defaults, with zero bleed to sibling routes.
 */
export default function FlatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-flat ${fredoka.variable} ${nunito.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
