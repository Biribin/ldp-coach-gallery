import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";

/**
 * `next/font/google` self-hosts fonts at build time — no remote <link>, no
 * runtime network request. The brief asks for "bold, athletic, dynamic —
 * strong forms that can move and scale with confidence." Anton is an
 * extreme-condensed display face built for large, high-impact scale-ups,
 * carrying that athletic speed without repeating the Barlow Condensed /
 * Bebas Neue defaults already common in fitness UI. Work Sans stays neutral
 * for body copy so the display face keeps all the energy. Exactly one
 * route-scoped font pairing is added — same seam japandi/neo-geo use.
 */
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetic — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Kinetic : énergie athlétique portée par le mouvement — animation maîtrisée, structure en diagonale, élan discipliné.",
};

/**
 * ISOLATION SEAM: `theme-kinetic` on this wrapper is the class scope that
 * `src/styles/themes/kinetic.css` targets. Every shadcn token consumed inside
 * {children} resolves through this scoped class instead of the neutral :root
 * defaults, with zero bleed to sibling routes. Same wrapper pattern (route
 * layout -> theme-scope div -> theme CSS file) the japandi/neo-geo routes
 * establish.
 */
export default function KineticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-kinetic ${anton.variable} ${workSans.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
