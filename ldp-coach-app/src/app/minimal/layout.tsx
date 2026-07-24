import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

/**
 * `next/font` self-hosts the font at build time — no remote <link>, no
 * runtime network request. The brief asks for "refined, calm, quietly
 * authoritative... confidence that needs no volume" — stricter and colder
 * than Japandi. Instrument Sans is used alone, at extreme weight and scale
 * contrast (ultralight 200 huge display vs. regular 400 body), rather than
 * pairing a display face with a body face: a single quiet family taken to
 * its extremes is itself the point. Distinct from every other route's font
 * choice (Archivo, Playfair Display, Poppins, Noto Serif, Space Grotesk).
 */
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minimal — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Minimal : réduction extrême, espace blanc maximal, uniquement l'essentiel.",
};

/**
 * ISOLATION SEAM: `theme-minimal` on this wrapper is the class scope that
 * `src/styles/themes/minimal.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the
 * neutral :root defaults, with zero bleed to sibling routes.
 */
export default function MinimalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-minimal ${instrumentSans.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
