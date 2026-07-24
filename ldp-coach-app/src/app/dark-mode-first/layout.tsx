import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";

/**
 * Self-hosted at build via next/font — no remote <link>, no runtime request.
 * Bebas Neue carries the "cutting-edge, luminous, high-contrast" condensed
 * impact voice for headings; Manrope is a crisp geometric body/UI face that
 * reads modern and precise without falling back to Inter/Arial/Roboto.
 */
const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Mode First — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Dark Mode First : pensé dark-first, élévation tonale par couches, accents cuivrés lumineux sur fond quasi noir.",
};

/**
 * ISOLATION SEAM: `theme-dark-mode-first` is the class scope that
 * `src/styles/themes/dark-mode-first.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function DarkModeFirstLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-dark-mode-first ${bebasNeue.variable} ${manrope.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
