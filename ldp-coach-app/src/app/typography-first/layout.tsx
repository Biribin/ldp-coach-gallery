import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";

/**
 * Two route-scoped fonts, self-hosted at build via next/font (no remote
 * <link>, no runtime request): Anton for the poster-scale display voice this
 * brief demands (huge, blunt, condensed-impact letterforms — not another
 * Playfair/Inter default), Space Grotesk as the warm technical body/label
 * face that shares Anton's geometric spine without competing with it.
 */
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typography First — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Typography First : lettrages géants et expressifs, contrastes d'échelle spectaculaires, ornement minimal — la typographie comme design à part entière.",
};

/**
 * ISOLATION SEAM: `theme-typography-first` scopes
 * `src/styles/themes/typography-first.css` to this route subtree only.
 */
export default function TypographyFirstLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-typography-first ${anton.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
