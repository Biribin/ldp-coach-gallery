"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { styles } from "@/lib/styles-registry";

/**
 * Fixed, theme-independent nav bar so a viewer can move between the 25
 * gallery pages without returning to the index. Mounted once in the root
 * layout; hides itself on "/" via the pathname check below.
 */
export function GalleryNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const currentSlug = pathname.split("/").filter(Boolean)[0];
  const currentIndex = styles.findIndex((style) => style.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  const total = styles.length;
  const prevStyle = styles[(currentIndex - 1 + total) % total];
  const nextStyle = styles[(currentIndex + 1) % total];
  const currentStyle = styles[currentIndex];

  return (
    <nav
      aria-label="Navigation de la galerie"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-sm text-white shadow-lg backdrop-blur-md motion-reduce:transition-none">
        <Link
          href={`/${prevStyle.slug}`}
          className="rounded-full px-3 py-1.5 text-white/80 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60"
        >
          ← Précédent
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center rounded-full px-3 py-1.5 text-center leading-tight outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="text-xs text-white/70">⊞ Galerie</span>
          <span className="text-xs font-medium text-white">
            {currentStyle.name} · {currentIndex + 1} / {total}
          </span>
        </Link>
        <Link
          href={`/${nextStyle.slug}`}
          className="rounded-full px-3 py-1.5 text-white/80 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Suivant →
        </Link>
      </div>
    </nav>
  );
}
