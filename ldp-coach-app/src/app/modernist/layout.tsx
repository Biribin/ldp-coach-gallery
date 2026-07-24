import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";

/**
 * `next/font` self-hosts Google fonts at build time — no remote <link>, no
 * runtime network request. The brief calls for "timeless, functional,
 * classic proportion" with a mid-century warmth rather than a cold Swiss
 * grid or a luxury-editorial serif. Fraunces is a warm, soft-optical-size
 * serif (its "SOFT"/"opsz" axes are tuned in modernist.css) that reads as
 * considered rather than decorative; Archivo is a functional grotesk with
 * slightly rounded bones — the mid-century "form follows function" voice
 * without Inter's neutrality.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modernist — Galerie de landing pages coach fitness",
  description:
    "Concept de landing page façon Modernist : lignes épurées du milieu du siècle, beauté fonctionnelle, palette chaude et sobre, proportions classiques.",
};

/**
 * ISOLATION SEAM: `theme-modernist` on this wrapper is the class scope that
 * `src/styles/themes/modernist.css` targets. Every shadcn token consumed
 * inside {children} resolves through this scoped class instead of the
 * neutral :root defaults, with zero bleed to sibling routes.
 */
export default function ModernistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-modernist ${fraunces.variable} ${archivo.variable} min-h-screen bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
