import type { Metadata } from "next";
import { Instrument_Serif, Newsreader } from "next/font/google";

/**
 * `next/font` self-hosts both Google fonts at build time — no remote <link>,
 * no runtime network request. The brief calls for a voice that is "refined,
 * confident, and cohesive... the voice of a coach whose focus is total" —
 * Instrument Serif's single-weight italic display carries that concentrated,
 * ink-drawn character for headings, while Newsreader keeps body copy in the
 * same serif family (one typographic hue, echoing the one-color-hue brief)
 * without competing with the display face.
 */
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Monochromatic — Fitness Coach Landing Page Gallery",
  description:
    "Monochromatic-styled landing page concept: one hue explored across its full tonal range — depth and rhythm through tone, not color variety.",
};

/**
 * ISOLATION SEAM: `theme-monochromatic` on this wrapper is the class scope
 * that `src/styles/themes/monochromatic.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function MonochromaticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-monochromatic ${instrumentSerif.variable} ${newsreader.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
