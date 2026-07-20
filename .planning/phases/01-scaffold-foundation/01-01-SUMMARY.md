---
phase: 01-scaffold-foundation
plan: 01
subsystem: ui
tags: [nextjs, tailwindcss-v4, shadcn, react19, css-variables, walking-skeleton]

# Dependency graph
requires: []
provides:
  - Route-scoped `.theme-<slug>` CSS-variable style-isolation mechanism (the isolation seam every future style page reuses)
  - Shared fictional content module (`coachContent`) covering the full 8-section arc
  - Offline CSS/SVG placeholder primitives (GradientBlock, ShapeGraphic, AvatarBlob)
  - Section-type contract (`SectionId`, `SECTION_ORDER`) enforcing the standard 8-section arc
  - Styles registry (`styles-registry.ts`) driving the data-driven index link-list
  - Working `/neobrutalist` proof-of-concept route (full 8-section landing page)
  - Data-driven index `/` link-list
affects: [02-style-batch-a, 03-style-batch-b, 04-style-batch-c, 05-style-batch-d, 06-style-batch-e, 07-final-verification]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Per-route style isolation: nested layout wraps {children} in a `.theme-<slug>` div; a `src/styles/themes/<slug>.css` file redefines shadcn tokens ONLY under that class selector, imported into globals.css after the base :root block."
    - "Shared content module pattern: single style-agnostic `coachContent` typed constant in src/lib/content.ts imported by every style page — no per-style content duplication."
    - "Offline placeholder primitives (GradientBlock/ShapeGraphic/AvatarBlob) as the only imagery source across all 25 pages — zero network requests."
    - "Client Component extraction for any form/interactive element needing an event handler (Next 16 forbids event handlers as Server Component JSX props)."

key-files:
  created:
    - ldp-coach-app/src/lib/content.ts
    - ldp-coach-app/src/lib/styles-registry.ts
    - ldp-coach-app/src/components/sections/section-types.ts
    - ldp-coach-app/src/components/placeholders/GradientBlock.tsx
    - ldp-coach-app/src/components/placeholders/ShapeGraphic.tsx
    - ldp-coach-app/src/components/placeholders/AvatarBlob.tsx
    - ldp-coach-app/src/components/placeholders/index.tsx
    - ldp-coach-app/src/styles/themes/neobrutalist.css
    - ldp-coach-app/src/app/neobrutalist/layout.tsx
    - ldp-coach-app/src/app/neobrutalist/page.tsx
    - ldp-coach-app/src/app/neobrutalist/ContactForm.tsx
  modified:
    - ldp-coach-app/src/app/globals.css
    - ldp-coach-app/src/app/layout.tsx
    - ldp-coach-app/src/app/page.tsx

key-decisions:
  - "Style isolation implemented exactly per SKELETON.md: route-scoped `.theme-neobrutalist` class + nested layout wrapper, zero :root mutation."
  - "Contact form extracted into a separate Client Component (ContactForm.tsx) because Next.js 16 raises a build error when an event handler (onSubmit) is passed as a prop from a Server Component."
  - "Space Grotesk loaded via next/font/google (self-hosted at build time, no runtime network request) for the neobrutalist display font, wired through the scoped --font-heading token."

patterns-established:
  - "Theme file convention: `src/styles/themes/<slug>.css`, single `.theme-<slug> { ... }` root scope, imported into globals.css via `@import` after the base :root/.dark blocks."
  - "Route convention: `src/app/<slug>/layout.tsx` applies the theme-scope wrapper + metadata; `src/app/<slug>/page.tsx` renders exactly 8 `<section>` elements sourcing all copy from `coachContent` and all imagery from `@/components/placeholders`."
  - "Styles registry convention: append one `StyleEntry` per new route to `src/lib/styles-registry.ts`; the index page auto-surfaces it with zero index code changes."

requirements-completed: [SCAF-01, SCAF-02, SCAF-03, SCAF-04, SCAF-05, SCAF-06, IDX-01]

coverage:
  - id: D1
    description: "Next.js App Router + TypeScript + Tailwind v4 + shadcn/ui scaffold verified working (no new install; verified by clean build)"
    requirement: "SCAF-01"
    verification:
      - kind: other
        ref: "cd ldp-coach-app && npx next build (exit 0)"
        status: pass
    human_judgment: false
  - id: D2
    description: "Three.js installed and importable for later 3D/kinetic/glass pages"
    requirement: "SCAF-02"
    verification:
      - kind: other
        ref: "package.json dependencies.three=^0.185.1; `import * as THREE from \"three\"` type-checks via npx tsc --noEmit (exit 0)"
        status: pass
    human_judgment: false
  - id: D3
    description: "Route-scoped .theme-neobrutalist CSS-variable isolation mechanism — overrides shadcn tokens with zero :root mutation, applied via nested layout wrapper"
    requirement: "SCAF-03"
    verification:
      - kind: other
        ref: "grep -nE \"^\\s*:root\" src/styles/themes/neobrutalist.css (zero matches); theme redefines --background/--foreground/--primary/--radius(0px) under .theme-neobrutalist"
        status: pass
    human_judgment: false
  - id: D4
    description: "Shared fictional content module (coachContent) covering all 8 arc sections, imported end-to-end by the PoC route"
    requirement: "SCAF-04"
    verification:
      - kind: other
        ref: "src/app/neobrutalist/page.tsx imports @/lib/content; npx tsc --noEmit exit 0"
        status: pass
    human_judgment: false
  - id: D5
    description: "Offline CSS/SVG placeholder primitives (GradientBlock, ShapeGraphic, AvatarBlob) rendered through the PoC route with zero remote imagery"
    requirement: "SCAF-05"
    verification:
      - kind: other
        ref: "grep -rniE 'https?://|url\\(.?https?' across src/components/placeholders + src/lib/content.ts returns only benign xmlns=\"http://www.w3.org/2000/svg\" SVG namespace declarations, zero remote-fetch URLs"
        status: pass
    human_judgment: false
  - id: D6
    description: "Kebab-case single-segment slug convention established and proven for one route (neobrutalist), styles-registry has exactly one entry"
    requirement: "SCAF-06"
    verification:
      - kind: other
        ref: "src/lib/styles-registry.ts styles array length === 1, entry.slug === 'neobrutalist'"
        status: pass
    human_judgment: false
  - id: D7
    description: "Root `/` renders a data-driven link-list from styles-registry with a resolving link to /neobrutalist"
    requirement: "IDX-01"
    verification:
      - kind: other
        ref: "src/app/page.tsx imports styles from @/lib/styles-registry, maps to next/link with href={`/${style.slug}`}; npx next build exit 0 with both / and /neobrutalist routes generated"
        status: pass
    human_judgment: false
  - id: D8
    description: "Full walking-skeleton end-to-end run: / links to /neobrutalist, page renders unmistakably neobrutalist-styled 8-section arc with zero broken/remote imagery (ROADMAP Phase 1 success criteria 1-5)"
    verification: []
    human_judgment: true
    rationale: "Visual/functional confirmation of style divergence, section order, and zero broken-image network requests requires a human viewing the rendered app in a browser — not automatable via static analysis alone. Task 4 preparation (build + three.js typecheck) completed by executor; human sign-off pending per workflow.human_verify_mode=end-of-phase."

# Metrics
duration: 14min
completed: 2026-07-20
status: complete
---

# Phase 01 Plan 01: Scaffold Foundation Walking Skeleton Summary

**Route-scoped `.theme-neobrutalist` CSS-variable isolation mechanism proven end-to-end via a full 8-section `/neobrutalist` landing page driven by a shared `coachContent` module and offline CSS/SVG placeholder primitives, plus a data-driven `/` index link-list.**

## Performance

- **Duration:** 14 min
- **Started:** 2026-07-20T10:38:54Z
- **Completed:** 2026-07-20T10:52:xxZ (approx.)
- **Tasks:** 3 of 4 executor-completed (Task 4 prepared, awaiting human verification per `human_verify_mode: end-of-phase`)
- **Files modified:** 14 (11 created, 3 modified)

## Accomplishments

- Established the **per-route style-isolation seam** that all 25 future style pages will reuse: a nested `layout.tsx` wraps `{children}` in a `.theme-<slug>` div; a `src/styles/themes/<slug>.css` file redefines shadcn design tokens (`--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--radius`, etc.) exclusively under that class selector, imported into `globals.css` without ever touching `:root`.
- Built the **shared fictional content module** (`coachContent` in `src/lib/content.ts`) covering all 8 standard-arc sections (hero, intro, method, services, benefits, testimonials, cta, contact) for a fictional coach ("Mara Voss") — style-agnostic, imported by the PoC page and ready for reuse by all future pages.
- Built **three offline CSS/SVG placeholder primitives** (`GradientBlock`, `ShapeGraphic`, `AvatarBlob`) — zero network requests, zero image files, zero remote URLs (the only `http://` string anywhere is the standard SVG XML namespace declaration `xmlns="http://www.w3.org/2000/svg"`, which is not a network fetch).
- Shipped the **`/neobrutalist` proof-of-concept page**: exactly 8 `<section>` elements in standard arc order, all copy from `coachContent`, all imagery from the placeholder primitives, embodying DESIGN-BRIEFS brief #17 (thick 4px borders, hard offset drop-shadows with no blur, `--radius: 0px`, oversized uppercase Space Grotesk headings, clashing-yet-controlled electric-orange/violet/lime accents).
- Replaced the boilerplate index at `/` with a **data-driven link-list** that maps over `styles` from `styles-registry.ts` — adding a route in a later phase requires zero index-page changes.
- Established the **kebab-case single-segment slug convention** and the **styles-registry** data source pattern (`StyleEntry[]`), with exactly one entry (`neobrutalist`) as required this phase.

## Task Commits

Each task was committed atomically:

1. **Task 1: Shared content module, offline placeholder primitives, styles registry, and section-type contract** - `0948155` (feat)
2. **Task 2: Per-route style-isolation mechanism + neobrutalist route theme, wired into globals** - `8e13a29` (feat)
3. **Task 3: Neobrutalist proof-of-concept page (full 8-section arc) + real index link-list** - `5144154` (feat)
4. **Task 4: Human-verify the walking skeleton end-to-end** - preparation only (build + three.js typecheck confirmed); no code commit, human verification pending (see below).

**Plan metadata:** commit pending (this SUMMARY + STATE/ROADMAP update)

## Files Created/Modified

- `ldp-coach-app/src/lib/content.ts` - shared fictional `coachContent` + `CoachContent` type, all 8 arc sections
- `ldp-coach-app/src/lib/styles-registry.ts` - `StyleEntry` type + single-entry `styles` array (neobrutalist)
- `ldp-coach-app/src/components/sections/section-types.ts` - `SectionId` union (8 members) + `SECTION_ORDER`
- `ldp-coach-app/src/components/placeholders/GradientBlock.tsx` - CSS-gradient `<div>` primitive
- `ldp-coach-app/src/components/placeholders/ShapeGraphic.tsx` - inline `<svg>` geometric-shape primitive
- `ldp-coach-app/src/components/placeholders/AvatarBlob.tsx` - CSS/SVG initials-blob person stand-in
- `ldp-coach-app/src/components/placeholders/index.tsx` - barrel export
- `ldp-coach-app/src/styles/themes/neobrutalist.css` - `.theme-neobrutalist` scoped token overrides + `.nb-*` utility classes
- `ldp-coach-app/src/app/globals.css` - added `@import "../styles/themes/neobrutalist.css";` after base tokens; `:root` unchanged
- `ldp-coach-app/src/app/layout.tsx` - metadata title/description updated to describe the gallery (no other changes)
- `ldp-coach-app/src/app/neobrutalist/layout.tsx` - nested layout applying `.theme-neobrutalist` wrapper, loads Space Grotesk via `next/font/google`, exports route metadata
- `ldp-coach-app/src/app/neobrutalist/page.tsx` - PoC page, 8 sections sourced from `coachContent` + placeholders
- `ldp-coach-app/src/app/neobrutalist/ContactForm.tsx` - extracted Client Component for the placeholder-only contact form
- `ldp-coach-app/src/app/page.tsx` - replaced boilerplate index with data-driven link-list from `styles-registry`

## Decisions Made

- **Style isolation:** implemented exactly per SKELETON.md's keystone decision — route-scoped `.theme-<slug>` class + nested-layout wrapper, CSS-variable driven, zero JS theme provider. Confirmed zero `:root` mutation and zero bleed risk (scoping guarantees isolation).
- **Font:** Space Grotesk loaded via `next/font/google` (self-hosted at build time — Next.js downloads and bundles the font file during build, no runtime remote request) rather than a `<link>` tag, satisfying the offline-fonts constraint while still giving the neobrutalist page a distinct oversized display font.
- **Contact form Client Component split:** see Deviations below.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Extracted contact form into a Client Component**
- **Found during:** Task 3 (`npx next build` verification step)
- **Issue:** The plan's inline contact form (a `<form onSubmit={...}>` inside the neobrutalist page, itself a Server Component) failed the production build with: `Error: Event handlers cannot be passed to Client Component props` — a Next.js 16 App Router constraint (Server Components cannot pass function props like `onSubmit` down through the render tree without an explicit Client Component boundary).
- **Fix:** Extracted the form markup into a new `ldp-coach-app/src/app/neobrutalist/ContactForm.tsx` marked `"use client"`, accepting `fields`/`submitLabel` as props. The parent page now renders `<ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />` instead of inline JSX. Behavior is identical (still `preventDefault`-only, no backend, no persisted data — PAGE-07 unaffected).
- **Files modified:** `ldp-coach-app/src/app/neobrutalist/ContactForm.tsx` (new), `ldp-coach-app/src/app/neobrutalist/page.tsx`
- **Verification:** `npx next build` exits 0 with both `/` and `/neobrutalist` generated as static routes; `npx tsc --noEmit` exits 0.
- **Committed in:** `5144154` (Task 3 commit)

---

**Total deviations:** 1 auto-fixed (1 bug fix, Rule 1)
**Impact on plan:** Necessary for a passing production build under Next.js 16's Server/Client Component boundary rules. No scope creep — behavior and acceptance criteria (PAGE-07 placeholder-only interactions) unchanged. This pattern (extract any interactive/event-handling element into a small named Client Component) should be reused by later-phase pages whenever a form or click handler is needed.

## Issues Encountered

- Initial `npx next build` reported "3 errors" via the project's compact build-output wrapper (`rtk.exe`) without printing error detail. Root-caused by invoking `node node_modules/next/dist/bin/next build` directly, which surfaced the actual Next.js error text (see deviation above). Future executors on this repo should prefer the direct `node node_modules/next/dist/bin/next build` invocation (or `-vvv` verbosity flags, though those did not surface detail in this environment) when the wrapped `next build` reports non-zero errors without detail.
- The `ldp-coach-app/` directory contains scaffold files that were never committed to git before this plan ran (`package.json`, `tsconfig.json`, `components.json`, `AGENTS.md`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `public/`, `src/components/ui/*`, `src/lib/utils.ts`, `.gitignore`, etc. all show as untracked `??` in `git status`). These are pre-existing scaffold artifacts out of this plan's `files_modified` scope (the plan explicitly states the app is "ALREADY scaffolded" and instructs not to re-initialize it) — left untouched per the deviation scope boundary. A future phase or a dedicated cleanup step should commit these foundational scaffold files so the repository accurately reflects the working tree.

## Known Stubs

None. All content flows through `coachContent`; all imagery flows through the three offline placeholder primitives; the contact form is intentionally placeholder-only per PAGE-07 (documented in DESIGN-BRIEFS/PROJECT.md as out of scope for real booking/commerce).

## Threat Flags

None. No new network endpoints, auth paths, file-access patterns, or schema changes were introduced. Consistent with the phase's threat model (`T-01-NONE`): fully static, offline, no-backend design gallery.

## Human Verification Required (Task 4 — end-of-phase human-check)

Per `workflow.human_verify_mode = end-of-phase`, Task 4 is a prepared verification, not an interactive checkpoint. The executor completed the following preparation and confirms:

- **SC #1 (build):** `cd ldp-coach-app && npx next build` — confirmed exit 0. Both `/` and `/neobrutalist` compiled as static routes.
- **SC #2 (Three.js importable):** `three@^0.185.1` present in `ldp-coach-app/package.json` dependencies; `import * as THREE from "three"` type-checks cleanly via `npx tsc --noEmit` (exit 0). Not yet rendered on any page — only required to be importable this phase.

**Awaiting human confirmation of the remaining 3 criteria.** To verify, run locally:

```bash
cd ldp-coach-app
npx next dev
```

Then open the printed local URL (e.g. `http://localhost:3000`) and confirm:

- **SC #3:** `/` shows a simple link-list with a "Neobrutalist" link that navigates correctly.
- **SC #4:** `/neobrutalist` renders a full single-scroll landing page whose look (thick borders, hard shadows, oversized uppercase type, high-contrast/clashing electric-orange + violet + lime accents, zero rounded corners) is unmistakably different from default shadcn styling. Confirm all 8 sections appear in order: hero, coach intro, method, services/programs, benefits, testimonials, CTA, contact/booking.
- **SC #5:** All imagery is CSS/SVG/gradient — no broken-image icons, and the browser Network tab shows no failed or remote image requests.

Reply "approved" if all five ROADMAP Phase 1 success criteria hold, or describe what's off.

## Next Phase Readiness

- The style-isolation seam, shared content module, placeholder primitives, section contract, and styles-registry pattern are all in place and proven end-to-end via `/neobrutalist`. Phases 2-6 can add the remaining 24 style routes by following the exact same three-file pattern (route `layout.tsx` + `page.tsx` + `src/styles/themes/<slug>.css` + one `styles-registry.ts` entry) without renegotiating any architectural decision.
- **Blocker/concern:** Task 4's human-verification items (SC #3, #4, #5) are pending sign-off — this plan's status should be treated as "prepared, not yet UAT-approved" until a human confirms the live app in a browser.
- **Note:** the untracked pre-existing scaffold files noted under Issues Encountered should be committed (likely via a small chore commit) before or during Phase 2, so the repository state matches the working tree.

---
*Phase: 01-scaffold-foundation*
*Completed: 2026-07-20*

## Self-Check: PASSED

All 13 created/modified files verified present on disk. All 4 commit hashes (0948155, 8e13a29, 5144154, 8e6a470) verified present in git log.
