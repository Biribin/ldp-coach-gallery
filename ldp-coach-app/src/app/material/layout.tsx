import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. Space Grotesk carries the "organized, friendly,
 * modern" MD3 display voice with real geometric character (never Inter/Arial);
 * Sora is the complementary body face — clean, legible, quietly systematic.
 * Two route-scoped fonts, same seam the japandi/neo-geo/bauhaus routes use.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Material — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Material : cartes superposées, élévation subtile et mouvement intentionnel — organisé, lumineux et accessible.",
};

/**
 * ISOLATION SEAM: `theme-material` on this wrapper is the class scope that
 * `src/styles/themes/material.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the
 * neutral :root defaults, with zero bleed to sibling routes. Same wrapper
 * pattern (route layout -> theme-scope div -> theme CSS file) the reference
 * routes establish.
 */
export default function MaterialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-material ${spaceGrotesk.variable} ${sora.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
