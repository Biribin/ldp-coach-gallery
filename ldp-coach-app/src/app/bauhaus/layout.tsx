import type { Metadata } from "next";
import { Poppins } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link> tag,
 * no runtime network request. The brief asks for "functional, geometric,
 * authoritative — clean sans-serif forms, strong and unornamented"; Poppins is
 * a pure geometric sans (circles + stems), the honest Bauhaus counterpart to
 * the humanist serif the japandi route loads. Body text stays on the
 * scaffold's already-loaded Geist sans, so exactly one route-scoped font is
 * added (same next/font seam the reference routes use, matching the App
 * Router fonts guide in node_modules/next/dist/docs/).
 */
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bauhaus — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Bauhaus : couleurs primaires, formes géométriques sur grille stricte — la forme suit la fonction, une transformation sans détour.",
};

/**
 * ISOLATION SEAM: `theme-bauhaus` on this wrapper is the class scope that
 * `src/styles/themes/bauhaus.css` targets. Every shadcn token consumed inside
 * {children} resolves through this scoped class instead of the neutral :root
 * defaults, with zero bleed to sibling routes. Same wrapper pattern
 * (route layout -> theme-scope div -> theme CSS file) the reference routes
 * establish.
 */
export default function BauhausLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-bauhaus ${poppins.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
