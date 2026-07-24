import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for a voice that is
 * "authoritative, clear, and reassuring... established and dependable."
 * Fraunces carries composed institutional weight without tipping into the
 * warm-editorial-serif default — its sturdy, slightly formal curves read as
 * "established firm" rather than "boutique magazine." Body text stays on the
 * scaffold's already-loaded Geist sans, so exactly one route-scoped font is
 * added (same seam the japandi reference route uses).
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Corporate Professional — Fitness Coach Landing Page Gallery",
  description:
    "Corporate Professional-styled landing page concept: composed navy and cobalt, structured sections, credibility and calm authority.",
};

/**
 * ISOLATION SEAM: `theme-corporate-professional` on this wrapper is the class
 * scope that `src/styles/themes/corporate-professional.css` targets. Every
 * shadcn token consumed inside {children} resolves through this scoped class
 * instead of the neutral :root defaults, with zero bleed to sibling routes.
 * Same wrapper pattern (route layout -> theme-scope div -> theme CSS file)
 * the japandi route establishes.
 */
export default function CorporateProfessionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-corporate-professional ${fraunces.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
