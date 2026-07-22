# Roadmap: Ldp_coach — Fitness Coach Landing Page Gallery

## Overview

Build a gallery of 25 distinctly-styled, single-scroll landing pages for a fictional female fitness coach, sharing one Next.js/Tailwind/shadcn/Three.js stack but isolated per-route so no two pages read as the same design. Work starts with a scaffold phase that stands up the shared foundation (framework, style-isolation mechanism, shared content, placeholder primitives, slug convention, index page, and one proof-of-concept styled page). The remaining 25 styles are then built in five small batches of five pages each, each batch adding its pages to the index. A final lightweight verification phase confirms all 25 styles are present, distinct, responsive, and linked correctly.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Scaffold & Foundation** - Next.js/Tailwind/shadcn/Three.js stack, style-isolation mechanism, shared content, placeholder primitives, slug convention, index page, and one proof-of-concept styled route (completed 2026-07-22)
- [ ] **Phase 2: Style Batch A (1-5)** - Japandi, Neo-Geo, Editorial, Dark Mode First, Bauhaus
- [ ] **Phase 3: Style Batch B (6-10)** - Gradient Modern, Minimal, Retro-futuristic, Corporate Professional, Glassmorphism
- [ ] **Phase 4: Style Batch C (11-15)** - Scandinavian, Kinetic, Art Deco, Flat, Tech Forward
- [ ] **Phase 5: Style Batch D (16-20)** - Monochromatic, Neobrutalist, Modernist, Luxury Minimal, Neumorphic
- [ ] **Phase 6: Style Batch E (21-25)** - Swiss/International, Organic/Fluid, Typography First, Material, Metropolitan
- [ ] **Phase 7: Final Verification** - Confirm 25 unique styles, working index links, responsive pages, no missing/empty files

## Phase Details

### Phase 1: Scaffold & Foundation

**Mode:** mvp
**Goal**: A running Next.js app exists with the index page and one proof-of-concept styled route, proving the per-route style-isolation mechanism works before 25 pages are built on top of it.
**Depends on**: Nothing (first phase)
**Requirements**: SCAF-01, SCAF-02, SCAF-03, SCAF-04, SCAF-05, SCAF-06, IDX-01
**Success Criteria** (what must be TRUE):

  1. Running `next dev` serves a Next.js (App Router) + TypeScript + Tailwind + shadcn/ui app with no build errors
  2. Three.js is installed and importable, ready for use by later 3D/kinetic/glass-depth pages
  3. Visiting the root `/` renders a simple link-list index page listing at least one style route by name
  4. Visiting the one proof-of-concept style route (e.g. `/neobrutalist`) renders a page whose theme tokens, typography, and component styling are visibly overridden from shadcn defaults — proving the per-route style-isolation mechanism (no bleed from a second route's styling, since none exists yet, but overrides are structurally isolated per route)
  5. A shared fictional content module (coach persona, method, services, benefits, testimonials, CTA/contact copy) and a set of reusable CSS/SVG placeholder primitives (gradient blocks, shapes, inline SVG) exist and are imported by the proof-of-concept page with zero external image requests

**Plans**: 1/1 plans executed

- [x] 01-01-PLAN.md — Walking skeleton: route-scoped style-isolation mechanism, shared content module, offline placeholder primitives, styles registry + slug convention, index link-list, and the `/neobrutalist` proof-of-concept page (full 8-section arc)

### Phase 2: Style Batch A (1-5)

**Mode:** mvp
**Goal**: Five fully-styled landing pages exist — Japandi, Neo-Geo, Editorial, Dark Mode First, and Bauhaus — each a complete single-scroll page embodying its DESIGN-BRIEFS.md brief, each linked from the index.
**Depends on**: Phase 1
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, IDX-02
**Success Criteria** (what must be TRUE):

  1. Visiting `/japandi` renders a single continuous-scroll page (hero → coach intro → method → services/programs → benefits → results/testimonials → CTA → contact/booking) in the calm, restrained Japandi look described in DESIGN-BRIEFS.md #1
  2. Visiting `/neo-geo` renders the same section arc in a precise, mathematically-patterned geometric look (DESIGN-BRIEFS.md #2), visibly distinct from `/japandi`
  3. Visiting `/editorial`, `/dark-mode-first`, and `/bauhaus` each render the same section arc in their respective distinct looks (DESIGN-BRIEFS.md #3, #4, #5), with no two of the five batch pages sharing typography, color, layout, atmosphere, or motion
  4. All five pages use only CSS/SVG/gradient placeholder imagery (no external image requests), have non-functional or placeholder-only interactive elements, and are responsive with no horizontal overflow from mobile to desktop
  5. The root index page now lists working links to all five new routes in addition to the Phase 1 proof-of-concept route, and every link resolves (no dead links)

**Plans**: TBD

### Phase 3: Style Batch B (6-10)

**Mode:** mvp
**Goal**: Five more fully-styled landing pages exist — Gradient Modern, Minimal, Retro-futuristic, Corporate Professional, and Glassmorphism — each a complete single-scroll page embodying its DESIGN-BRIEFS.md brief, each linked from the index.
**Depends on**: Phase 1 (independent of Phase 2's page content, but follows the same scaffold)
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, IDX-02
**Success Criteria** (what must be TRUE):

  1. Visiting `/gradient-modern` renders the full section arc in a vivid, color-transition-driven look (DESIGN-BRIEFS.md #6), distinct from every previously-built page
  2. Visiting `/minimal` renders the full section arc with extreme whitespace and reduction (DESIGN-BRIEFS.md #7), clearly distinct from `/gradient-modern`
  3. Visiting `/retro-futuristic`, `/corporate-professional`, and `/glassmorphism` each render the full section arc in their respective distinct looks (DESIGN-BRIEFS.md #8, #9, #10); `/glassmorphism` and `/retro-futuristic` use Three.js or comparable motion for depth/glow effects where the brief calls for it
  4. All five pages use only CSS/SVG/gradient placeholder imagery, non-functional or placeholder-only interactions, and are responsive with no horizontal overflow
  5. The root index page lists working links to all five new routes; every link resolves (no dead links)

**Plans**: TBD

### Phase 4: Style Batch C (11-15)

**Mode:** mvp
**Goal**: Five more fully-styled landing pages exist — Scandinavian, Kinetic, Art Deco, Flat, and Tech Forward — each a complete single-scroll page embodying its DESIGN-BRIEFS.md brief, each linked from the index.
**Depends on**: Phase 1 (independent of Phases 2-3's page content)
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, IDX-02
**Success Criteria** (what must be TRUE):

  1. Visiting `/scandinavian` renders the full section arc in a warm, cozy hygge-inspired look (DESIGN-BRIEFS.md #11), distinct from every previously-built page
  2. Visiting `/kinetic` renders the full section arc with controlled, athletic scroll-driven motion (DESIGN-BRIEFS.md #12), using Three.js or comparable motion where it strengthens the style
  3. Visiting `/art-deco`, `/flat`, and `/tech-forward` each render the full section arc in their respective distinct looks (DESIGN-BRIEFS.md #13, #14, #15)
  4. All five pages use only CSS/SVG/gradient placeholder imagery, non-functional or placeholder-only interactions, and are responsive with no horizontal overflow
  5. The root index page lists working links to all five new routes; every link resolves (no dead links)

**Plans**: TBD

### Phase 5: Style Batch D (16-20)

**Mode:** mvp
**Goal**: Five more fully-styled landing pages exist — Monochromatic, Neobrutalist, Modernist, Luxury Minimal, and Neumorphic — each a complete single-scroll page embodying its DESIGN-BRIEFS.md brief, each linked from the index.
**Depends on**: Phase 1 (independent of Phases 2-4's page content)
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, IDX-02
**Success Criteria** (what must be TRUE):

  1. Visiting `/monochromatic` renders the full section arc built entirely from tonal variation of one hue (DESIGN-BRIEFS.md #16), distinct from every previously-built page
  2. Visiting `/neobrutalist` renders the full section arc with raw, bold, high-contrast structure (DESIGN-BRIEFS.md #17) — note: if a proof-of-concept route from Phase 1 already used this style, this phase confirms it is complete and fully meets all PAGE requirements rather than duplicating it
  3. Visiting `/modernist`, `/luxury-minimal`, and `/neumorphic` each render the full section arc in their respective distinct looks (DESIGN-BRIEFS.md #18, #19, #20)
  4. All five pages use only CSS/SVG/gradient placeholder imagery, non-functional or placeholder-only interactions, and are responsive with no horizontal overflow
  5. The root index page lists working links to all five new routes; every link resolves (no dead links)

**Plans**: TBD

### Phase 6: Style Batch E (21-25)

**Mode:** mvp
**Goal**: The final five fully-styled landing pages exist — Swiss/International, Organic/Fluid, Typography First, Material, and Metropolitan — each a complete single-scroll page embodying its DESIGN-BRIEFS.md brief, each linked from the index, completing all 25 styles.
**Depends on**: Phase 1 (independent of Phases 2-5's page content)
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, IDX-01, IDX-02
**Success Criteria** (what must be TRUE):

  1. Visiting `/swiss` renders the full section arc in a rigorous grid-based, ultra-clean-typography look (DESIGN-BRIEFS.md #21), distinct from every previously-built page including `/editorial`
  2. Visiting `/organic-fluid` renders the full section arc with flowing, natural curved forms (DESIGN-BRIEFS.md #22), using Three.js or comparable motion where it strengthens the style
  3. Visiting `/typography-first`, `/material`, and `/metropolitan` each render the full section arc in their respective distinct looks (DESIGN-BRIEFS.md #23, #24, #25)
  4. All five pages use only CSS/SVG/gradient placeholder imagery, non-functional or placeholder-only interactions, and are responsive with no horizontal overflow
  5. The root index page now lists working links to all 25 style routes, each labeled with its style name, with every link resolving (no dead links) — the index is now complete

**Plans**: TBD

### Phase 7: Final Verification

**Mode:** mvp
**Goal**: The completed gallery is confirmed correct end-to-end — 25 unique styles present, all index links working, all pages responsive, nothing missing or empty.
**Depends on**: Phase 6
**Requirements**: QA-01
**Success Criteria** (what must be TRUE):

  1. All 25 style routes exist, each renders without error, and each is visually distinct from all 24 others in typography, color, layout, atmosphere, and motion (no two pages read as the same look)
  2. Every link on the root index page resolves to a working page — zero dead links, zero missing routes
  3. Every page passes a responsive check (mobile → desktop) with no horizontal overflow
  4. No page or supporting file is missing, empty, or a stub — every route renders full content following the standard section arc

**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Scaffold & Foundation | 1/1 | Complete    | 2026-07-22 |
| 2. Style Batch A (1-5) | 0/TBD | Not started | - |
| 3. Style Batch B (6-10) | 0/TBD | Not started | - |
| 4. Style Batch C (11-15) | 0/TBD | Not started | - |
| 5. Style Batch D (16-20) | 0/TBD | Not started | - |
| 6. Style Batch E (21-25) | 0/TBD | Not started | - |
| 7. Final Verification | 0/TBD | Not started | - |

## Notes for Planners

- **Design tooling available during execution:** the `ui-ux-pro-max` skill (per-style palettes/fonts/style specs; CLI at `~/.claude/skills/ui-ux-pro-max/scripts/search.py` with `--domain style|color|typography|landing` and `--stack nextjs|shadcn|threejs`) and the 21st Magic MCP (component generation/refinement) should be used when building each style's page to source real design tokens and generate/refine shadcn-compatible components, rather than inventing tokens from scratch.
- **Style-to-route mapping is authoritative from DESIGN-BRIEFS.md.** Each batch phase's plans must reference the exact numbered brief for each style; do not substitute, reorder, or combine styles.
- **Within a batch, pages are independent** and may be planned/executed as parallel plans (per `config.json` `parallelization: true`), since no page depends on another page's implementation — all share only the Phase 1 foundation.
- **Slug convention:** kebab-case single-segment routes matching the style name (e.g. `/neo-geo`, `/dark-mode-first`, `/retro-futuristic`, `/organic-fluid`, `/typography-first`, `/swiss`). Confirm exact slugs during Phase 1 planning and reuse consistently across all batches.
