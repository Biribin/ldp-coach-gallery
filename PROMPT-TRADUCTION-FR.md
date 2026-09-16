# Traduction FR + renommage Mara → Cécilia (économe en tokens)

## Quand / comment (toi)
- À lancer APRÈS la passe de polish Opus (sinon Opus retravaillerait du texte FR).
- Nouvelle conversation → `/model` **Sonnet** (traduction = tâche mécanique, pas
  besoin d'Opus) → colle le prompt ci-dessous.
- Une seule session séquentielle. Le contenu est centralisé, donc c'est rapide.

---

## Prompt à coller

```
Task: translate the Ldp_coach gallery from English to French and rename the coach
"Mara" → "Cécilia". App is in `ldp-coach-app/` (Next.js 16). Work to MINIMIZE
tokens: the content is centralized, so do NOT read all 25 pages up front.

## Why this is cheap
Almost all visible copy lives in ONE shared file: `src/lib/content.ts` (~194
lines), imported by all 25 pages. Translating it once translates most of every
page. "Mara" appears ONLY in that file (6 times). Do that file first.

## Step 1 — the shared content (does ~80% of the work)
Read `src/lib/content.ts`. Translate every English string value to natural,
idiomatic French (fitness-coaching register, "vous" form, not word-for-word).
Rename every "Mara" → "Cécilia". Do NOT change keys, structure, types, or code —
only the string VALUES. Keep it one edit.

## Step 2 — hardcoded labels in the pages
Some section labels/eyebrows are hardcoded in the page files, not in content.ts.
Find them once with a single grep, then translate them. Use this FIXED glossary
so the same English label always maps to the same French across all 25 pages
(consistency + no re-deciding per page):
  The Method → La Méthode
  Programs / Services → Programmes / Services
  Benefits → Bénéfices
  Why clients stay → Pourquoi elles restent
  About the Coach / About → À propos
  Testimonials → Témoignages
  Contact → Contact
  Get Started / Start / Book → Commencer / Réserver
  Send / Submit → Envoyer
Keep any section NUMBERS (01, 02, "/ 08") exactly as-is. Translate only the words.
Batch your edits; don't re-read a whole page just to change one label.

## Step 3 — page metadata (SEO titles)
Each `src/app/*/layout.tsx` has a `metadata` object (title + description) in
English. Translate those title/description strings to French too. These are
short — do them in a quick sweep.

## HARD rules — do not break the design
- Translate TEXT ONLY. Never touch: className, CSS, layout structure, component
  logic, imports, variable/key names, next/font config, theme files.
- French is often ~15-20% longer than English. If a translation is much longer
  than the original and sits in a tight UI slot (button, eyebrow, nav, a fixed-
  width label), choose a SHORTER French phrasing rather than let it overflow or
  wrap badly. Concision > literal fidelity in tight slots.
- Reuse identical translations for identical source strings (via the glossary and
  content.ts centralization) — don't produce three variants of the same label.
- Do NOT add npm deps. Do NOT commit. Do NOT run /gsd-*, no plan mode, no
  "which mode" question — execute directly (explicit user override).

## Step 4 — gallery navigation (add ONCE, shows on all 25 pages)
Add a small, reusable "gallery navigation" bar so a viewer can move between the
25 pages without going back to the index every time. Build it ONCE as a shared
component; do not hand-write it into each page.

Design & placement (must NOT clash with any page's theme):
- Create `src/components/GalleryNav.tsx` (a "use client" component).
- It reads the ordered `styles` array from `src/lib/styles-registry.ts` and uses
  `usePathname()` to find the current page's index in that array.
- Render a slim FIXED bar pinned to the bottom-center of the viewport
  (position: fixed; bottom; centered; high z-index). Give it its OWN neutral,
  theme-independent look — a translucent dark pill with backdrop-blur, rounded,
  subtle border/shadow — so it stays legible and consistent on ALL 25 styles and
  never inherits a page theme's colors. Do NOT style it with theme tokens.
- Contents, left to right:
  • "← Précédent" link to the previous style (wraps: first page's prev = last)
  • a center block: "⊞ Galerie" link to "/" + the label
    "«Nom du style» · N / 25" (N = 1-based position, 25 = styles.length)
  • "Suivant →" link to the next style (wraps: last page's next = first)
- Use next/link. Keyboard-accessible (real <a>/<Link>, visible focus). Respect
  reduced-motion. All labels in FRENCH (Précédent / Galerie / Suivant).
- Mount it ONCE so it appears on every style page but NOT on the index "/":
  add `<GalleryNav />` inside the shared `src/app/layout.tsx` (root layout) OR,
  if cleaner, render it and hide it on "/" via the pathname check inside the
  component itself (if pathname === "/", return null). Pick whichever avoids
  editing all 25 route layouts.
- Make sure it doesn't cover page content: the bar is compact and floats; if any
  page's footer/contact sits flush at the bottom, that's fine (the pill floats
  above with blur). Do not add body padding hacks that could shift layouts.

## Verify, then report
Run `npm run build` once at the end — must pass. Then: grep for any remaining
"Mara" (must be 0); spot-check that no obvious English UI string remains on a
couple of pages; and confirm the GalleryNav appears on a style page, links
prev/next/gallery correctly, wraps at the ends, and is hidden on "/".
Report: files changed, any string you shortened to fit the UI, and anything you
were unsure about.
```
```
