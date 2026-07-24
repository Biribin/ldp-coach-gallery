import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for a "sophisticated, confident,
 * cultured" voice with an urban edge; Bricolage Grotesque carries that in
 * headings (a contemporary grotesk with editorial ink-trap character), while
 * Manrope stays clean and warm-neutral for body copy. Same route-scoped
 * seam the japandi reference establishes.
 */
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metropolitan — Fitness Coach Landing Page Gallery",
  description:
    "Metropolitan-styled landing page concept: urban sophistication and cultural depth — cosmopolitan, layered, editorial-meets-city energy.",
};

/**
 * ISOLATION SEAM: `theme-metropolitan` on this wrapper is the class scope
 * that `src/styles/themes/metropolitan.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes.
 */
export default function MetropolitanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-metropolitan ${bricolageGrotesque.variable} ${manrope.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
