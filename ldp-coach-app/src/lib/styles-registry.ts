/**
 * Styles registry (SCAF-06 slug convention, IDX-01 data source).
 *
 * Slug convention: kebab-case, single URL segment, matching the
 * DESIGN-BRIEFS.md style name (e.g. "neobrutalist", "dark-mode-first",
 * "organic-fluid"). Each entry maps 1:1 to a route folder under
 * `src/app/<slug>/`.
 *
 * The root index page (`src/app/page.tsx`) reads this array to render its
 * link-list, so adding a route in a later phase surfaces on the index
 * automatically — no other index changes required.
 *
 * Later phases (2-6) append additional entries here as they build out the
 * remaining 24 style routes. Do NOT add entries for routes that don't exist
 * yet.
 */

export type StyleEntry = {
  slug: string;
  name: string;
  description: string;
  briefNumber: number;
};

export const styles: StyleEntry[] = [
  {
    slug: "neobrutalist",
    name: "Neobrutalist",
    description: "Raw, bold, high-contrast structure",
    briefNumber: 17,
  },
];
