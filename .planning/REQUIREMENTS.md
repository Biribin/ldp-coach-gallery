# Requirements: Ldp_coach — Fitness Coach Landing Page Gallery

**Defined:** 2026-07-17
**Core Value:** Each of ~25 pages is a cohesive single-scroll landing page that unmistakably embodies its assigned design style — visibly different from every other page.

## v1 Requirements

Requirements for the initial gallery. Each maps to roadmap phases.

### Project Scaffold

- [ ] **SCAF-01**: Next.js (App Router) project initialized with TypeScript, Tailwind CSS, and shadcn/ui configured
- [ ] **SCAF-02**: Three.js available as a dependency for styles that use 3D/kinetic/glass depth
- [ ] **SCAF-03**: Per-route style isolation mechanism exists so each page can override theme tokens, typography, and component styling independently (shadcn defaults do not bleed across pages)
- [ ] **SCAF-04**: Shared fictional content set (coach persona, method, services/programs, benefits, testimonials, CTA/contact copy) available for reuse across all pages
- [ ] **SCAF-05**: Reusable CSS/SVG placeholder image primitives (gradient blocks, shapes, inline SVG) available — no external image requests
- [ ] **SCAF-06**: One route per style, following a consistent slug convention (e.g. `/swiss`, `/editorial`, …)

### Landing Pages (25 styles, each used once)

- [ ] **PAGE-01**: Each style listed in DESIGN-BRIEFS.md has exactly one landing page route (25 total)
- [ ] **PAGE-02**: Each page is a single continuous-scroll page with the standard section arc: hero → coach intro → coaching method → services/programs → benefits → client results/testimonials → call-to-action → contact/booking
- [ ] **PAGE-03**: Each page visibly embodies its assigned style's typography, color, layout, atmosphere, and motion per its design brief
- [ ] **PAGE-04**: Each page is visually distinct from all others (no two pages read as the same look)
- [ ] **PAGE-05**: Each page is responsive (mobile → desktop) with no horizontal overflow
- [ ] **PAGE-06**: All imagery on each page uses CSS/SVG/gradient placeholders (offline; no broken images)
- [ ] **PAGE-07**: Buttons/interactions are non-functional or simple placeholder interactions (no backend calls)
- [ ] **PAGE-08**: Styles calling for 3D/kinetic/glass depth (e.g. Tech Forward, Kinetic, Glassmorphism, Retro-futuristic) use Three.js or comparable motion where it strengthens the style

### Gallery Index

- [ ] **IDX-01**: Root page (`/`) presents a simple link list to all 25 style routes, each labeled with its style name
- [ ] **IDX-02**: Every index link resolves to a working page (no dead links)

### Quality Bar

- [ ] **QA-01**: Final verification confirms 25 unique styles present, all index links work, all pages responsive, and no missing/empty pages or files

## v2 Requirements

Deferred; tracked but not in current roadmap.

### Gallery Polish

- **GAL2-01**: Thumbnail/preview cards on the index instead of a plain link list
- **GAL2-02**: Static export / deploy configuration for hosting the gallery
- **GAL2-03**: Screenshot capture of each page for a visual contact sheet

## Out of Scope

Explicitly excluded to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Authentication / user accounts | Static design showcase — no users |
| Database / backend / API | Nothing to persist or serve dynamically |
| Admin dashboard | No management surface |
| Payment / checkout | No commerce |
| Real scheduling / booking | Booking section is a visual placeholder only |
| Real coach content / real photos | Fictional placeholder content only |
| External image services (Unsplash/picsum) | CSS/SVG placeholders chosen for offline reliability |
| Thumbnail gallery index | User chose a simple link list for v1 (deferred to v2) |

## Traceability

Populated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCAF-01 | TBD | Pending |
| SCAF-02 | TBD | Pending |
| SCAF-03 | TBD | Pending |
| SCAF-04 | TBD | Pending |
| SCAF-05 | TBD | Pending |
| SCAF-06 | TBD | Pending |
| PAGE-01 | TBD | Pending |
| PAGE-02 | TBD | Pending |
| PAGE-03 | TBD | Pending |
| PAGE-04 | TBD | Pending |
| PAGE-05 | TBD | Pending |
| PAGE-06 | TBD | Pending |
| PAGE-07 | TBD | Pending |
| PAGE-08 | TBD | Pending |
| IDX-01 | TBD | Pending |
| IDX-02 | TBD | Pending |
| QA-01 | TBD | Pending |

**Coverage:**
- v1 requirements: 17 total
- Mapped to phases: 0 (roadmap not yet created)
- Unmapped: 17 ⚠️

---
*Requirements defined: 2026-07-17*
*Last updated: 2026-07-17 after initial definition*
