import Link from "next/link";
import { styles } from "@/lib/styles-registry";

/**
 * Root index (IDX-01). A simple link-list of every style route, driven by
 * the styles registry — adding an entry there surfaces it here automatically.
 * This page intentionally stays on the neutral shadcn defaults (:root
 * tokens); it is navigation, not a styled showcase page.
 */
export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-24 sm:px-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Galerie de landing pages — Coach fitness
          </h1>
          <p className="max-w-xl text-muted-foreground">
            Une galerie de concepts de landing page pour une coach fitness
            fictive, chacun décliné dans un style visuel radicalement
            différent. Choisissez un style ci-dessous pour voir la page complète.
          </p>
        </div>
        <nav aria-label="Styles de design">
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {styles.map((style) => (
              <li key={style.slug}>
                <Link
                  href={`/${style.slug}`}
                  className="flex flex-col gap-1 py-4 transition-colors hover:text-primary"
                >
                  <span className="text-lg font-medium">{style.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {style.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
