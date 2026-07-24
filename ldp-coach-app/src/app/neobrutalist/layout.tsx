import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. Required by the offline-imagery/fonts constraint.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Neobrutalist — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Neobrutalist : structure brute, affirmée, à fort contraste.",
};

/**
 * ISOLATION SEAM: `theme-neobrutalist` on this wrapper is the class scope
 * that `src/styles/themes/neobrutalist.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes. This exact
 * wrapper pattern (route layout -> theme-scope div -> theme CSS file) is
 * reused by every future style route.
 */
export default function NeobrutalistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-neobrutalist ${spaceGrotesk.variable} min-h-screen bg-background text-foreground`}
    >
      {children}
    </div>
  );
}
