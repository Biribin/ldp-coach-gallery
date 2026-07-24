import type { Metadata } from "next";
import { Poiret_One, Cormorant } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for "elegant, glamorous,
 * authoritative... refined display forms with decorative precision" — Poiret
 * One's thin geometric strokes are the single most recognizable Art Deco
 * display letterform available, used sparingly for headings; Cormorant
 * carries body copy with a quieter vintage-serif voice so the decorative face
 * never has to do double duty as reading type.
 */
const poiretOne = Poiret_One({
  variable: "--font-poiret",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Art Deco — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Art Déco : glamour des salles de bal d'antan — géométrie ornementale, touches dorées, luxe vintage symétrique.",
};

/**
 * ISOLATION SEAM: `theme-art-deco` on this wrapper is the class scope that
 * `src/styles/themes/art-deco.css` targets. Same wrapper pattern (route
 * layout -> theme-scope div -> theme CSS file) as the japandi reference.
 */
export default function ArtDecoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-art-deco ${poiretOne.variable} ${cormorant.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
