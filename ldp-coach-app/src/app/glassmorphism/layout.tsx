import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. Fraunces is a soft, high-contrast display serif
 * with real character (wide optical-size range, subtle ink-trap warmth) that
 * carries the "clean, modern, premium" voice the brief asks for without
 * repeating the Playfair/Noto Serif choices already used elsewhere in the
 * gallery. Body text stays on the scaffold's Geist sans equivalent via
 * Tailwind, so exactly one route-scoped font is added here.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Glassmorphism — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Glassmorphism : couches translucides givrées flottant sur des couleurs lumineuses, profondeur et légèreté.",
};

/**
 * ISOLATION SEAM: `theme-glassmorphism` on this wrapper is the class scope
 * that `src/styles/themes/glassmorphism.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 *
 * `.gm-atmosphere` renders the fixed, ambient luminous gradient field that
 * every glass panel in the page floats above — it lives once here at the
 * route root rather than being repeated per-section.
 */
export default function GlassmorphismLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-glassmorphism ${fraunces.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      <div aria-hidden="true" className="gm-atmosphere" />
      {children}
    </div>
  );
}
