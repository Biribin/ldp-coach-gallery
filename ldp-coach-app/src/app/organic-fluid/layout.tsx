import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for type that is "gentle,
 * natural, and welcoming," working "with the body rather than against it."
 * Fraunces is a soft-optical-size serif whose variable axes let letterforms
 * feel wet, rounded, and alive (the opposite of a rigid didone) — it carries
 * headings. Nunito Sans pairs it with a fully rounded, humane body voice
 * whose terminals echo the same curve language. Two fonts, one route-scoped
 * concern (display + body), matching the next/font pattern the reference
 * routes use — no Google/Geist defaults leak through.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Organic/Fluid — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Organic/Fluid : formes organiques fluides, courbes naturelles et mises en page biomorphiques — une approche holistique et harmonieuse du fitness et du bien-être.",
};

/**
 * ISOLATION SEAM: `theme-organic-fluid` on this wrapper is the class scope
 * that `src/styles/themes/organic-fluid.css` targets. Every shadcn token
 * consumed inside {children} resolves through this scoped class instead of
 * the neutral :root defaults, with zero bleed to sibling routes. Same wrapper
 * pattern (route layout -> theme-scope div -> theme CSS file) the japandi and
 * neobrutalist routes establish.
 */
export default function OrganicFluidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-organic-fluid ${fraunces.variable} ${nunitoSans.variable} min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
