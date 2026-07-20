# Walking Skeleton — Ldp_coach (Fitness Coach Landing Page Gallery)

**Phase:** 1
**Generated:** 2026-07-20

## Capability Proven End-to-End

A visitor can open the root `/` index, click the "Neobrutalist" link, and land on `/neobrutalist` — a complete single-scroll landing page (8-section arc) rendered from the shared fictional content module and offline CSS/SVG placeholder primitives, styled by a **route-scoped theme** that visibly overrides shadcn defaults with zero style bleed to any other route.

This is the thinnest slice that exercises the whole stack: scaffold → routing → shared content/"data" layer → per-route styling → local run. It proves the style-isolation seam works before 25 pages depend on it.

> "Full-stack" here is reinterpreted for a **static, offline, no-backend design gallery** (hard project constraint). The "real read/write" analog is: the shared content module + placeholder primitives are created AND actually imported/rendered through a real route end-to-end with zero external image requests. There is no database, API, or remote deploy — by design.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js **16.2.10**, App Router, TypeScript, React 19 | Already scaffolded in `ldp-coach-app/`; user-specified stack. Next 16 has breaking changes vs. training data — always read `node_modules/next/dist/docs/01-app/` before writing App Router code (per `ldp-coach-app/AGENTS.md`). |
| Styling engine | **Tailwind CSS v4 (CSS-first config)** + shadcn/ui (`base-nova` style, `cssVariables: true`, `baseColor: neutral`) | v4 has NO `tailwind.config.js`; theme tokens live in `src/app/globals.css` under `@theme inline` + `:root`. Style isolation is done in CSS, not JS config. |
| **Per-route style isolation** (the keystone decision) | **Route-scoped CSS-variable theming**: each style route wraps its subtree in a `<div className="theme-<slug>">` (via the route's nested `layout.tsx`); a per-route CSS file (`src/styles/themes/<slug>.css`) redefines the shadcn design tokens (`--background`, `--primary`, `--radius`, `--font-heading`, …) and adds style-specific tokens **only under `.theme-<slug> { … }`**, never on `:root`. Theme CSS files are `@import`-ed into `globals.css`. shadcn components read `var(--token)`, so they auto-adopt the scoped values inside that route with **zero bleed** to sibling routes. | Same stack must yield 25 radically different looks. Scoping tokens to a wrapper class is the minimal, framework-native mechanism: no runtime theme provider, no JS, works with static rendering, and every future page reuses the identical seam by adding one CSS file + one layout wrapper. Proven this phase with `/neobrutalist`. |
| Data layer | **None (static).** Shared fictional content is a typed TS module (`src/lib/content.ts`, `coachContent`); the index is driven by `src/lib/styles-registry.ts`. | No backend/DB by project constraint. Content is constant across all 25 pages; a plain typed module is the right "data" primitive. |
| Imagery | **Offline CSS/SVG/gradient placeholder primitives only** (`src/components/placeholders/`: `GradientBlock`, `ShapeGraphic`, `AvatarBlob`) | Fully offline, no broken images, no external requests. Real photos out of scope. |
| Fonts | **`next/font` (self-hosted), referenced through scoped `--font-*` variables** | Offline requirement forbids remote Google Fonts `<link>`s. Per-style display fonts are loaded via `next/font` and wired through the route-scoped `--font-heading`/`--font-sans`. |
| Auth | **None** | Static showcase, no users (out of scope). |
| Deployment target | **Local run only**: `npx next dev` (or `next build && next start`) | No remote deploy in v1 (deferred to v2 GAL2-02). The documented local full-stack command is the "deployment" analog. |
| Directory layout | Routes: `src/app/<slug>/{layout.tsx,page.tsx}`; root index `src/app/page.tsx`; shared content/registry `src/lib/*.ts`; offline primitives `src/components/placeholders/*`; section contract `src/components/sections/section-types.ts`; per-route themes `src/styles/themes/<slug>.css`; shadcn UI `src/components/ui/*`; `cn` helper `src/lib/utils.ts`. Import alias `@/*` → `./src/*`. | Feature-per-route folders keep each style self-contained; shared modules are style-agnostic and imported by every page. |
| Slug convention | **kebab-case, single URL segment, matching the DESIGN-BRIEFS style name** | Locked so all 5 batch phases reuse it consistently. Full mapping below. |

## Slug ↔ Style ↔ Brief mapping (authoritative; created incrementally)

Created this phase: **`/neobrutalist`** (brief #17) only. The remaining 24 are added in Phases 2-6, one route folder + one theme CSS + one styles-registry entry each:

| Slug | Style | Brief # | Phase |
|---|---|---|---|
| `/neobrutalist` | Neobrutalist | 17 | **1 (PoC — this phase)** |
| `/japandi` | Japandi | 1 | 2 |
| `/neo-geo` | Neo-Geo | 2 | 2 |
| `/editorial` | Editorial | 3 | 2 |
| `/dark-mode-first` | Dark Mode First | 4 | 2 |
| `/bauhaus` | Bauhaus | 5 | 2 |
| `/gradient-modern` | Gradient Modern | 6 | 3 |
| `/minimal` | Minimal | 7 | 3 |
| `/retro-futuristic` | Retro-futuristic | 8 | 3 |
| `/corporate-professional` | Corporate Professional | 9 | 3 |
| `/glassmorphism` | Glassmorphism | 10 | 3 |
| `/scandinavian` | Scandinavian | 11 | 4 |
| `/kinetic` | Kinetic | 12 | 4 |
| `/art-deco` | Art Deco | 13 | 4 |
| `/flat` | Flat | 14 | 4 |
| `/tech-forward` | Tech Forward | 15 | 4 |
| `/monochromatic` | Monochromatic | 16 | 5 |
| `/modernist` | Modernist | 18 | 5 |
| `/luxury-minimal` | Luxury Minimal | 19 | 5 |
| `/neumorphic` | Neumorphic | 20 | 5 |
| `/swiss` | Swiss/International | 21 | 6 |
| `/organic-fluid` | Organic/Fluid | 22 | 6 |
| `/typography-first` | Typography First | 23 | 6 |
| `/material` | Material | 24 | 6 |
| `/metropolitan` | Metropolitan | 25 | 6 |

Note: `/neobrutalist` is built fully in Phase 1 as the PoC; Phase 5's success criterion #2 explicitly says it confirms (does not re-build) the neobrutalist page if Phase 1 already produced it. Phase 5's remaining new work is Monochromatic, Modernist, Luxury Minimal, Neumorphic (4 styles).

## Standard section arc (every page)

hero → coach intro → coaching method → services/programs → benefits → client results/testimonials → call-to-action → contact/booking. Exactly 8 `<section>` blocks, enforced by `SECTION_ORDER` in `src/components/sections/section-types.ts`.

## Stack Touched in Phase 1

- [x] Project scaffold (Next 16 App Router, TypeScript, Tailwind v4, shadcn/ui, ESLint) — already present; verified by clean `tsc` + `next build`
- [x] Routing — root `/` index route AND one real style route `/neobrutalist`, both resolving
- [x] "Data" layer analog — shared fictional content module (`content.ts`) + styles registry (`styles-registry.ts`) created AND rendered through the `/neobrutalist` route (the static-site read/write analog: shared content + offline placeholders flow through a route end-to-end with zero external requests)
- [x] UI — full 8-section neobrutalist page wired to shared content + placeholders + scoped theme tokens; placeholder-only interactions (no backend)
- [x] "Deployment" analog — documented local full-stack run command (`npx next dev` / `next build && next start`); no remote deploy

## Out of Scope (Deferred to Later Slices / v2)

Reason for all backend/infra exclusions: **static offline design gallery — no backend by project constraint.**

- Database / API routes / server actions that persist — no data to store or serve (out of scope).
- Authentication / user accounts — static showcase, no users (out of scope).
- Payment / commerce / real booking — booking section is a visual placeholder only (out of scope).
- External image services (Unsplash/picsum) — offline CSS/SVG placeholders chosen instead (out of scope).
- Remote deployment / static-export config — deferred to v2 (GAL2-02).
- Thumbnail/preview cards on the index — user chose a simple link list for v1; deferred to v2 (GAL2-01).
- Screenshot contact sheet — deferred to v2 (GAL2-03).
- The other 24 style routes — added in Phases 2-6, NOT Phase 1.
- Three.js usage/rendering — Three.js is only *installed* (importable) in Phase 1; actual 3D/kinetic/glass rendering happens on the relevant later-phase pages (Glassmorphism, Retro-futuristic, Kinetic, Tech Forward, Organic/Fluid).

## Subsequent Slice Plan

Each later phase adds vertical slices on top of this skeleton WITHOUT altering the isolation mechanism, slug convention, shared content module, or placeholder primitives. Each new style page = one route folder (`layout.tsx` scope wrapper + `page.tsx` 8-section arc) + one `src/styles/themes/<slug>.css` + one `styles-registry.ts` entry (which auto-surfaces on the index).

- **Phase 2 — Style Batch A:** adds 5 pages (Japandi, Neo-Geo, Editorial, Dark Mode First, Bauhaus) + their index links.
- **Phase 3 — Style Batch B:** adds 5 pages (Gradient Modern, Minimal, Retro-futuristic, Corporate Professional, Glassmorphism); first Three.js usage where briefs call for depth/glow.
- **Phase 4 — Style Batch C:** adds 5 pages (Scandinavian, Kinetic, Art Deco, Flat, Tech Forward).
- **Phase 5 — Style Batch D:** adds 4 new pages (Monochromatic, Modernist, Luxury Minimal, Neumorphic) + confirms the existing `/neobrutalist`.
- **Phase 6 — Style Batch E:** adds the final 5 pages (Swiss/International, Organic/Fluid, Typography First, Material, Metropolitan); index now lists all 25 links.
- **Phase 7 — Final Verification:** confirm 25 unique/distinct styles, all index links resolve, all pages responsive with no horizontal overflow, no empty/stub pages.
