import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. Fraunces carries a warm, hand-finished soft-serif
 * voice (distinct from Japandi's Noto Serif) for the "friendly, warm, reassuring"
 * heading voice the brief asks for; Karla is a rounded-terminal grotesque for
 * body copy, keeping the cozy tone without tipping into a script/playful font.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scandinavian — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Scandinavian : chaleur hygge, matériaux naturels, tons de bois et minimalisme cocooning.",
};

/**
 * ISOLATION SEAM: `theme-scandinavian` on this wrapper is the class scope that
 * `src/styles/themes/scandinavian.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the neutral
 * :root defaults, with zero bleed to sibling routes.
 */
export default function ScandinavianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-scandinavian ${fraunces.variable} ${karla.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
