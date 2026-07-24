import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for an "authoritative, literary,
 * richly crafted" voice with "expressive display type"; Playfair Display is a
 * high-contrast didone that carries headlines, drop caps, pull quotes and
 * folios like a magazine masthead, while body text stays on the scaffold's
 * already-loaded Geist sans for long-form readability. Exactly one
 * route-scoped font is added (same seam the japandi reference uses, matching
 * the next/font pattern documented in the App Router fonts guide).
 */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Editorial — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Editorial : un reportage coaching mis en page comme un magazine papier raffiné — serif display, colonnes multiples, lettrines et citations.",
};

/**
 * ISOLATION SEAM: `theme-editorial` on this wrapper is the class scope that
 * `src/styles/themes/editorial.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the neutral
 * :root defaults, with zero bleed to sibling routes. Same wrapper pattern
 * (route layout -> theme-scope div -> theme CSS file) the japandi and
 * neobrutalist routes establish.
 */
export default function EditorialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-editorial ${playfair.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
