import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for a "soft, calm, welcoming"
 * voice with tactile depth; Fraunces carries warm, rounded-terminal
 * personality for headings (distinct from every other route's display face),
 * paired with Figtree — a quiet, humanist sans — for body text. Two
 * route-scoped fonts, same seam the japandi reference route uses.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neumorphic — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Neumorphic : éléments extrudés tout en douceur, ombres claires et sombres, surfaces monochromes tactiles.",
};

/**
 * ISOLATION SEAM: `theme-neumorphic` on this wrapper is the class scope that
 * `src/styles/themes/neumorphic.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the
 * neutral :root defaults, with zero bleed to sibling routes.
 */
export default function NeumorphicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-neumorphic ${fraunces.variable} ${figtree.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
