# Passe de polish design — OPUS 4.8

## Quand / comment (toi)
- À lancer une fois les 25 pages produites ET câblées (dis-moi "fais le point"
  pour le dernier câblage avant de lancer ceci).
- Nouvelle conversation → `/model` → **Opus** → colle le prompt ci-dessous.
- Opus est meilleur qu'Opus/Sonnet/Fable sur le GOÛT visuel : c'est ici qu'on
  dépense la qualité. Lance-le en SÉQUENTIEL (pas en parallèle) : il touche à des
  pages entières et tu veux juger chaque résultat.
- Vérifie CHAQUE page polie dans le navigateur (`npm run dev`) — le build ne voit
  pas les bugs visuels.

---

## Prompt à coller dans Opus

```
You are the senior design lead doing a QUALITY POLISH pass on the Ldp_coach
project. The app lives in `ldp-coach-app/` (Next.js 16 App Router + TypeScript +
Tailwind + shadcn/ui): a gallery of 25 distinctly-styled single-scroll landing
pages for a fictional female fitness coach. The 25 pages were built by faster,
cheaper models following `.planning/DESIGN-BRIEFS.md`. Your job: audit all 25,
then rewrite the weakest so each truly embodies its brief and is visibly
different from every other page.

## Context you must load first
- `.planning/DESIGN-BRIEFS.md` — the 25 briefs (one numbered section per style)
- `ldp-coach-app/src/lib/styles-registry.ts` — the 25 routes (slug → briefNumber)
- `ldp-coach-app/src/lib/content.ts` — shared copy (do NOT invent new fields)
- Optionally invoke the `ui-ux-pro-max` skill for palette/type ideas.

## The quality bar (from .planning/PROJECT.md)
Each page must UNMISTAKABLY embody its assigned style and be visibly different
from every other page. The #1 failure to hunt: pages that are recolors of each
other — same layout, same section composition, same type rhythm, different palette.

## Known failure modes already seen in this project (check every page for these)
1. LAYOUT-COLLAPSE / OVERLAP bugs that DON'T show up in `npm run build` but break
   the page in the browser. Real examples found: a utility class meant for a 1px
   rule was applied to <section> elements and flattened them to 1px so content
   overlapped (minimal); an over-aggressive per-column padding offset made a 4-step
   row look broken rather than styled (metropolitan). LOOK for: absolute/fixed
   positioning without a positioned parent, fixed heights on content containers,
   negative margins, `.section`-vs-element CSS specificity collisions on
   padding/margin, z-index stacking, content taller than its clipped box.
2. GENERIC "AI slop": cream+terracotta, near-black+one-acid-accent, or broadsheet
   hairline columns applied regardless of the actual style.
3. RECOLOR SAMENESS: two pages sharing one layout skeleton.
4. Weak hero (centered title in a box), no real type system, repeated identical
   card layout across all 8 sections, decorative 01/02 numbering on non-sequential
   content.

## Stage 1 — AUDIT (read-only; do this fully before editing anything)
For each of the 25 routes, score 1-10 on: (a) style fidelity, (b) distinctiveness
vs the other 24, (c) craft (type hierarchy, spacing rhythm, section variety,
responsive), (d) correctness (any of the layout bugs above?). Produce a ranked
table, WORST first: route | scores | main defects | "layout-bug: yes/no".
Show me this table and STOP for my go-ahead before Stage 2.

## Stage 2 — POLISH (worst first; I will tell you how many)
For each page you rework:
- Fix any layout/overlap bug first (highest priority — a broken page fails
  regardless of aesthetics).
- Then deepen the design: rework COMPOSITION not just color — section layouts,
  grid/asymmetry, type scale & pairing, whitespace rhythm, a memorable signature
  element true to the brief. Spend boldness on the signature; keep the rest quiet.
- Preserve every invariant: theme CSS route-scoped (`.theme-<slug>`, never :root);
  forms are "use client"; no external runtime requests; copy from content.ts;
  no new npm deps.
- After each page, run `npm run build` (I am running these SEQUENTIALLY, so builds
  don't conflict) — it must pass. Do NOT commit.

## Stage 3 — REPORT
Before/after score per reworked page; any page still < 7/10 for a future pass;
every layout bug found & fixed; anything cross-cutting (index page, shared
content, a theme token collision) worth a follow-up.

## Hard constraints
- Do NOT modify `.planning/`, `.claude/`, `src/lib/content.ts`, or the scaffold
  mechanism (registry pattern, theme isolation).
- Do NOT add npm dependencies. Do NOT commit.
- EXPLICIT USER OVERRIDE of project workflow rules: execute directly, no /gsd-*,
  no plan mode, no "which execution mode" question.
```
