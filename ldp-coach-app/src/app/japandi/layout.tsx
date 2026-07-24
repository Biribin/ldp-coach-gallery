import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for a "gentle yet grounded,
 * humanist, unhurried, quietly authoritative" voice; Noto Serif carries that
 * for headings while body text stays on the scaffold's already-loaded Geist
 * sans, so exactly one route-scoped font is added (same seam the neobrutalist
 * reference uses, matching the next/font pattern documented in the App Router
 * fonts guide).
 */
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japandi — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Japandi : sobriété japonaise et chaleur scandinave — un minimalisme calme et incarné.",
};

/**
 * ISOLATION SEAM: `theme-japandi` on this wrapper is the class scope that
 * `src/styles/themes/japandi.css` targets. Every shadcn token consumed inside
 * {children} resolves through this scoped class instead of the neutral :root
 * defaults, with zero bleed to sibling routes. Same wrapper pattern
 * (route layout -> theme-scope div -> theme CSS file) the neobrutalist route
 * establishes.
 */
export default function JapandiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-japandi ${notoSerif.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
