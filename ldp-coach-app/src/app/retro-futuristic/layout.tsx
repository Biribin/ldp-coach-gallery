import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";

/**
 * `next/font` self-hosts at build time — no remote <link>, no runtime
 * network request. Syncopate carries the wide, geometric retro-futuristic
 * display voice (hero + eyebrows only, per the theme CSS); Space Grotesk
 * covers body/subhead with enough character to avoid a generic pairing while
 * staying legible at paragraph sizes. Same route-scoped seam the japandi
 * reference route uses.
 */
const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retro-futuristic — Fitness Coach Landing Page Gallery",
  description:
    "Retro-futuristic-styled landing page concept: an 80s vision of the future — neon accents, chrome gradients, horizon grids, refined nostalgia.",
};

/**
 * ISOLATION SEAM: `theme-retro-futuristic` on this wrapper is the class scope
 * that `src/styles/themes/retro-futuristic.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function RetroFuturisticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-retro-futuristic ${syncopate.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
