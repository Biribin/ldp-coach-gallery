import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for "modern, energetic, and
 * welcoming" typography that "sits confidently on rich gradient fields";
 * Space Grotesk is a contemporary geometric grotesque with a slight warmth
 * that pairs cleanly with the sunrise→twilight spectrum, while body text
 * stays on the scaffold's already-loaded Geist sans. Exactly one route-scoped
 * font is added — same seam the japandi reference uses, matching the next/font
 * pattern documented in the App Router fonts guide.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gradient Modern — Fitness Coach Landing Page Gallery",
  description:
    "Gradient Modern landing page concept: sophisticated multi-stop gradients, depth through color transitions, soft glow, and contemporary energy — color as atmosphere, not accent.",
};

/**
 * ISOLATION SEAM: `theme-gradient-modern` on this wrapper is the class scope
 * that `src/styles/themes/gradient-modern.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes. The theme
 * file also paints the wrapper's `background-image` (the sunrise→twilight
 * atmospheric wash) so the whole single-scroll page carries the gradient as
 * its foundation surface. Same wrapper pattern (route layout -> theme-scope
 * div -> theme CSS file) the neobrutalist / japandi routes establish.
 */
export default function GradientModernLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-gradient-modern ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
