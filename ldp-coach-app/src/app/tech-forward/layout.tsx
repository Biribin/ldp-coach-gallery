import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for "cutting-edge, precise,
 * confident... a technical edge" — Space Grotesk carries that geometric,
 * engineered voice for headings; IBM Plex Sans is the clean technical body
 * partner; IBM Plex Mono renders data readouts, coordinates, and labels.
 * Same route-scoped-font seam the japandi reference establishes.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tech Forward — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Tech Forward : un coaching précis, conçu comme une ingénierie, piloté par la donnée, rendu sous forme de tableau de bord épuré.",
};

/**
 * ISOLATION SEAM: `theme-tech-forward` on this wrapper is the class scope
 * that `src/styles/themes/tech-forward.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function TechForwardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-tech-forward ${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
