import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief demands "premium, elegant,
 * effortless — excellence needs no announcement": Bodoni Moda's extreme
 * thick/thin contrast is the single loudest gesture this page allows itself
 * (reserved for display headings), balanced by Jost's quiet geometric
 * lightness for every other word on the page.
 */
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Luxury Minimal — Fitness Coach Landing Page Gallery",
  description:
    "Luxury Minimal-styled landing page concept: premium restraint, generous space, refined serif details — expensive silence.",
};

/**
 * ISOLATION SEAM: `theme-luxury-minimal` on this wrapper is the class scope
 * that `src/styles/themes/luxury-minimal.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function LuxuryMinimalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-luxury-minimal ${bodoniModa.variable} ${jost.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
