# Ldp_coach — Fitness Coach Landing Page Gallery

## What This Is

A **frontend showcase**: a gallery of ~25 static, one-page landing-page concepts for a fictional female fitness coach, each built in a distinctly different visual design style (Neobrutalist, Swiss, Editorial, Glassmorphism, Art Deco, Japandi, Dark Mode, Tech Forward, Luxury Minimal, Kinetic, and more). Same business context across all pages — a female fitness coach offering personalized coaching, training programs, motivation, physical transformation, wellness guidance, and online/in-person support — but every page looks and *feels* visibly, deliberately different.

This is a **visual experimentation project**, not a product. No users, no customers, no revenue model.

## Core Value

**Visual variety and polish.** Each of the ~25 pages must be a cohesive, single continuous-scroll landing page that unmistakably embodies its assigned design style — different typography, color, atmosphere, layout, and motion from every other page. If the styles blur together, the project has failed.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] ~25 distinct one-page landing pages, each in a unique named design style (each style used exactly once)
- [ ] Each page is a single cohesive scrolling experience with a narrative arc (hero → coach intro → method → services/programs → benefits → results/testimonials → CTA → contact/booking)
- [ ] Each page is visibly different from all others in typography, color, layout, atmosphere, and motion
- [ ] A design-brief artifact (3-paragraph creative prompt per style) drives the look/feel of each page
- [ ] A simple root index page listing/linking to all style routes
- [ ] All imagery uses CSS/SVG placeholders (offline, no broken images)
- [ ] Placeholder copy, fictional testimonials, generic image stand-ins throughout
- [ ] Responsive layout on each page
- [ ] Buttons/interactions are non-functional or simple placeholder interactions

### Out of Scope

- Authentication / user accounts — this is a static showcase, no users
- Database / backend / API — nothing to persist or serve dynamically
- Admin dashboard — no management surface needed
- Payment / checkout — no commerce
- Real scheduling / booking system — booking section is a visual placeholder only
- Real coach content / real photos — fictional placeholder content only
- Deep product discovery — scope is fixed and intentionally narrow

## Context

- **Purpose:** design experimentation / a gallery of polished landing-page examples to compare styles side by side.
- **Business framing (fictional, constant across all pages):** a female fitness coach — personalized coaching, training programs, motivation, physical transformation, wellness guidance, online or in-person support.
- **Design brief per style:** each style has a dedicated 3-paragraph creative prompt (feeling, atmosphere, emotional arc, abstract reference points) stored as a project artifact and used to drive that page's build.
- **Style-divergence challenge:** because all pages share one Next.js + Tailwind + shadcn stack, radically different looks require deliberate per-route style isolation (per-page tokens, typography, and component overrides). shadcn defaults must be overridden heavily so styles don't converge.
- **Design tooling (available & verified in-session):**
  - `ui-ux-pro-max` skill — searchable design DB (161 color palettes, 57 font pairings, 50+ style specs, landing-page structure, UX guidelines) with dedicated `nextjs`, `shadcn`, `html-tailwind`, and `threejs` stack guidance. Query per style for real design tokens (palette, fonts, effects, CSS variables, checklist) instead of inventing them. CLI: `python ~/.claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain style|color|typography|landing --stack nextjs|shadcn|threejs`. Can emit a full design system with `--design-system --persist`.
  - 21st Magic MCP (`mcp__magic__21st_magic_component_builder` / `_inspiration` / `_refiner`, `mcp__magic__logo_search`) — generate and refine shadcn-compatible React components during execution.
- **Design briefs:** `.planning/DESIGN-BRIEFS.md` holds a 3-paragraph creative brief (feeling / atmosphere / abstract references) per style, in a fixed randomized order (1–25). This is the source of truth for each page's intended look and feel.

## Constraints

- **Tech stack**: Next.js (App Router) + Tailwind CSS + shadcn/ui + Three.js — one route per style; Three.js used only for styles that call for 3D/kinetic/glass depth (e.g. Tech Forward, Kinetic, Glassmorphism, Retro-futuristic).
- **Static only**: No backend, no data layer, no server logic. Pages render statically.
- **Imagery**: CSS/SVG/gradient placeholders only — fully offline, no external image requests.
- **Navigation**: simple link-list index page at the root linking to all style routes.
- **Content**: placeholder/fictional only — no real brands, no real people.
- **Scope discipline**: do not over-engineer; this is a design gallery, not an app.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + Tailwind + shadcn/ui + Three.js | User-specified stack; one route per style, shared tooling, 3D where styles call for it | — Pending |
| Per-route style isolation (per-page theme tokens + typography + component overrides) | Same stack must yield ~25 radically different looks; shadcn defaults would otherwise converge | — Pending |
| CSS/SVG placeholders for all imagery | Fully offline, no broken images, keeps focus on design | — Pending |
| Simple link-list index (not thumbnail gallery) | User preference; minimal navigation | — Pending |
| 3-paragraph design brief per style as a committed artifact | Drives per-page look/feel; feeds roadmap + executors | — Pending |
| Use `ui-ux-pro-max` skill + 21st Magic MCP for design | Real palettes/fonts/style specs per style + component generation; both verified available in-session | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-17 after initialization*
