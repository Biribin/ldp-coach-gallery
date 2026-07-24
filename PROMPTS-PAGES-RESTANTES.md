# Prompts pages restantes - Ldp_coach (Sonnet 5, en parallele)

## Reglages avant de lancer

- Chaque conversation : bouton + (nouvelle conversation), puis tape `/model` et
  choisis **Sonnet**. Avec le bloc "Design excellence" ci-dessous (distille du
  skill officiel Anthropic frontend-design + technique anti-"AI slop"), Sonnet
  produit un visuel proche d'Opus pour ~5x moins. Polish final en Opus.
- Le skill **ui-ux-pro-max** (deja installe) est appele par chaque prompt pour
  piocher palette + font pairing adaptes au style.
- 1 prompt = 1 conversation. Tu peux en lancer plusieurs en parallele SANS
  risque : chaque page ne touche que SON dossier + SON theme. Le cablage des 2
  fichiers partages (globals.css + registry) est fait UNE fois a la fin - dis-le
  moi (Claude sur Bmad_PLD) quand un lot est termine et je cable + build + verifie.

## Etat au 2026-07-24

- Deja OK : neobrutalist, japandi, gradient-modern (finies) ; editorial (a cabler, je gere)
- A (re)faire : les 19 ci-dessous (bauhaus etait a moitie fait -> refais-le en entier)

---

## PROMPT 1 - Bauhaus (route /bauhaus)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Bauhaus** (route `/bauhaus`).
Mood to embody: primary colors (red/yellow/blue), circles/squares/triangles, strict functional grid - form follows function, geometric simplicity.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 5. Bauhaus" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Bauhaus.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Bauhaus brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Bauhaus
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Bauhaus in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/bauhaus.css` - a `.theme-bauhaus` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/bauhaus/layout.tsx` - nested layout wrapping children
   in `<div className="theme-bauhaus ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/bauhaus/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/bauhaus/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 2 - Minimal (route /minimal)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Minimal** (route `/minimal`).
Mood to embody: extreme reduction, maximum whitespace, essential elements only, quiet confidence - even sparser and stricter than Japandi (no warmth, pure essence).
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 7. Minimal" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Minimal.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Minimal brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Minimal
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Minimal in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/minimal.css` - a `.theme-minimal` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/minimal/layout.tsx` - nested layout wrapping children
   in `<div className="theme-minimal ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/minimal/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/minimal/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 3 - Retro-futuristic (route /retro-futuristic)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Retro-futuristic** (route `/retro-futuristic`).
Mood to embody: 80s vision of the future - neon accents, chrome-like gradients, horizon grids, refined nostalgia (elegant, not kitsch).
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 8. Retro-futuristic" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Retro-futuristic.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Retro-futuristic brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Retro-futuristic
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Retro-futuristic in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/retro-futuristic.css` - a `.theme-retro-futuristic` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/retro-futuristic/layout.tsx` - nested layout wrapping children
   in `<div className="theme-retro-futuristic ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/retro-futuristic/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/retro-futuristic/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 4 - Corporate Professional (route /corporate-professional)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Corporate Professional** (route `/corporate-professional`).
Mood to embody: trust-building, established, refined - composed blues/neutrals, structured sections, credibility and calm authority.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 9. Corporate Professional" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Corporate Professional.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Corporate Professional brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Corporate Professional
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Corporate Professional in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/corporate-professional.css` - a `.theme-corporate-professional` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/corporate-professional/layout.tsx` - nested layout wrapping children
   in `<div className="theme-corporate-professional ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/corporate-professional/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/corporate-professional/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 5 - Glassmorphism (route /glassmorphism)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Glassmorphism** (route `/glassmorphism`).
Mood to embody: translucent layered panels, backdrop blur, depth and light, floating surfaces over colorful backgrounds.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 10. Glassmorphism" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Glassmorphism.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Glassmorphism brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Glassmorphism
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Glassmorphism in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/glassmorphism.css` - a `.theme-glassmorphism` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/glassmorphism/layout.tsx` - nested layout wrapping children
   in `<div className="theme-glassmorphism ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/glassmorphism/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/glassmorphism/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 6 - Scandinavian (route /scandinavian)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Scandinavian** (route `/scandinavian`).
Mood to embody: hygge warmth, natural-material feel, soft neutrals + wood tones, cozy minimalism - warmer and cozier than Japandi.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 11. Scandinavian" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Scandinavian.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Scandinavian brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Scandinavian
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Scandinavian in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/scandinavian.css` - a `.theme-scandinavian` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/scandinavian/layout.tsx` - nested layout wrapping children
   in `<div className="theme-scandinavian ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/scandinavian/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/scandinavian/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 7 - Kinetic (route /kinetic)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Kinetic** (route `/kinetic`).
Mood to embody: motion-driven - controlled CSS animations, dynamic diagonals, athletic energy, dynamic but never chaotic.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 12. Kinetic" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Kinetic.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Kinetic brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Kinetic
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Kinetic in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/kinetic.css` - a `.theme-kinetic` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/kinetic/layout.tsx` - nested layout wrapping children
   in `<div className="theme-kinetic ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/kinetic/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/kinetic/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 8 - Art Deco (route /art-deco)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Art Deco** (route `/art-deco`).
Mood to embody: ornamental geometric borders, gold accents, symmetry, vintage luxury and sophistication.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 13. Art Deco" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Art Deco.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Art Deco brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Art Deco
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Art Deco in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/art-deco.css` - a `.theme-art-deco` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/art-deco/layout.tsx` - nested layout wrapping children
   in `<div className="theme-art-deco ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/art-deco/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/art-deco/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 9 - Flat (route /flat)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Flat** (route `/flat`).
Mood to embody: zero shadows/depth, bold solid colors, simple iconography, crisp cleanliness.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 14. Flat" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Flat.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Flat brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Flat
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Flat in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/flat.css` - a `.theme-flat` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/flat/layout.tsx` - nested layout wrapping children
   in `<div className="theme-flat ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/flat/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/flat/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 10 - Tech Forward (route /tech-forward)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Tech Forward** (route `/tech-forward`).
Mood to embody: innovative, precise, future-focused - technical accents (mono details, fine grids), sharp modern UI.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 15. Tech Forward" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Tech Forward.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Tech Forward brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Tech Forward
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Tech Forward in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/tech-forward.css` - a `.theme-tech-forward` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/tech-forward/layout.tsx` - nested layout wrapping children
   in `<div className="theme-tech-forward ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/tech-forward/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/tech-forward/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 11 - Monochromatic (route /monochromatic)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Monochromatic** (route `/monochromatic`).
Mood to embody: ONE hue declined in many tonal steps - depth through tone, not color variety.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 16. Monochromatic" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Monochromatic.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Monochromatic brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Monochromatic
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Monochromatic in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/monochromatic.css` - a `.theme-monochromatic` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/monochromatic/layout.tsx` - nested layout wrapping children
   in `<div className="theme-monochromatic ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/monochromatic/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/monochromatic/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 12 - Modernist (route /modernist)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Modernist** (route `/modernist`).
Mood to embody: timeless clean lines, functional beauty, restrained palette, classic proportions.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 18. Modernist" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Modernist.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Modernist brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Modernist
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Modernist in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/modernist.css` - a `.theme-modernist` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/modernist/layout.tsx` - nested layout wrapping children
   in `<div className="theme-modernist ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/modernist/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/modernist/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 13 - Luxury Minimal (route /luxury-minimal)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Luxury Minimal** (route `/luxury-minimal`).
Mood to embody: premium restraint, generous space, refined serif details, high-end simplicity - expensive silence.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 19. Luxury Minimal" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Luxury Minimal.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Luxury Minimal brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Luxury Minimal
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Luxury Minimal in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/luxury-minimal.css` - a `.theme-luxury-minimal` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/luxury-minimal/layout.tsx` - nested layout wrapping children
   in `<div className="theme-luxury-minimal ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/luxury-minimal/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/luxury-minimal/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 14 - Neumorphic (route /neumorphic)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Neumorphic** (route `/neumorphic`).
Mood to embody: soft extruded elements, subtle dual light/dark shadows, tactile monochrome surfaces.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 20. Neumorphic" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Neumorphic.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Neumorphic brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Neumorphic
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Neumorphic in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/neumorphic.css` - a `.theme-neumorphic` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/neumorphic/layout.tsx` - nested layout wrapping children
   in `<div className="theme-neumorphic ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/neumorphic/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/neumorphic/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 15 - Swiss/International (route /swiss-international)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Swiss/International** (route `/swiss-international`).
Mood to embody: strict modular grid, systematic layout, ultra-clean typographic hierarchy, red/black/white discipline.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 21. Swiss/International" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Swiss/International.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Swiss/International brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Swiss/International
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Swiss/International in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/swiss-international.css` - a `.theme-swiss-international` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/swiss-international/layout.tsx` - nested layout wrapping children
   in `<div className="theme-swiss-international ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/swiss-international/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/swiss-international/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 16 - Organic/Fluid (route /organic-fluid)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Organic/Fluid** (route `/organic-fluid`).
Mood to embody: flowing blob shapes, natural curves, soft transitions, biomorphic layouts.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 22. Organic/Fluid" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Organic/Fluid.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Organic/Fluid brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Organic/Fluid
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Organic/Fluid in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/organic-fluid.css` - a `.theme-organic-fluid` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/organic-fluid/layout.tsx` - nested layout wrapping children
   in `<div className="theme-organic-fluid ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/organic-fluid/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/organic-fluid/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 17 - Typography First (route /typography-first)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Typography First** (route `/typography-first`).
Mood to embody: type AS the design - huge expressive letterforms, dramatic scale contrast, minimal ornament.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 23. Typography First" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Typography First.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Typography First brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Typography First
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Typography First in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/typography-first.css` - a `.theme-typography-first` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/typography-first/layout.tsx` - nested layout wrapping children
   in `<div className="theme-typography-first ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/typography-first/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/typography-first/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 18 - Material (route /material)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Material** (route `/material`).
Mood to embody: card-based surfaces, subtle elevation shadows, motion cues, bold yet systematic color.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 24. Material" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Material.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Material brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Material
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Material in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/material.css` - a `.theme-material` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/material/layout.tsx` - nested layout wrapping children
   in `<div className="theme-material ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/material/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/material/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 19 - Metropolitan (route /metropolitan)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Metropolitan** (route `/metropolitan`).
Mood to embody: urban sophistication, cultural depth, editorial-meets-city energy, refined contrast.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 25. Metropolitan" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Metropolitan.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Metropolitan brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. If your first
instinct is one of these, it's the default — choose something truer to THIS style.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values (a real palette, not one accent on grey)
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) — the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Metropolitan
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence — don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Metropolitan in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/metropolitan.css` - a `.theme-metropolitan` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/metropolitan/layout.tsx` - nested layout wrapping children
   in `<div className="theme-metropolitan ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/metropolitan/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/metropolitan/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```

---

## PROMPT 20 - Dark Mode First  (route /dark-mode-first)

```
You are working in the Ldp_coach project. The app lives in `ldp-coach-app/`
(Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui). It is a gallery of
25 distinctly-styled single-scroll landing pages for a fictional female fitness
coach. Several pages already exist; you are adding ONE new one.

## Your task
Build ONE new style page: **Dark Mode First** (route `/dark-mode-first`).
Mood to embody: designed dark-first (never a light page inverted) - deep near-black/charcoal surfaces, layered elevation via lighter panels not shadows, one or two high-contrast glowing accents, nocturnal high-end elegance.
It must be VISIBLY different from every existing page - not a recolor of any.

## Read these files first (nothing else)
1. `.planning/DESIGN-BRIEFS.md` - section "## 4. Dark Mode First" only (your design brief)
2. `ldp-coach-app/src/lib/styles-registry.ts` - slug convention (read only, do NOT edit)
3. `ldp-coach-app/src/styles/themes/japandi.css` - reference theme file
4. `ldp-coach-app/src/app/japandi/layout.tsx` - reference route layout
5. `ldp-coach-app/src/app/japandi/page.tsx` - reference page (8-section arc)
6. `ldp-coach-app/src/app/japandi/ContactForm.tsx` - reference client component
7. `ldp-coach-app/src/lib/content.ts` - shared content (do not invent new fields)
8. `ldp-coach-app/src/components/placeholders/index.tsx` - placeholder primitives

WARNING: the japandi files show the WIRING pattern only - do NOT imitate its
calm composition, spacing or typography. Your page must read as Dark Mode First.

## Design excellence — work like a studio design lead (this is what makes it great, not generic)
FIRST invoke the `ui-ux-pro-max` skill and pull a concrete palette + font pairing
that fits the Dark Mode First brief (it has 161 palettes and 57 font pairings). Use its
recommendation as your starting point, then commit.

You tend to converge toward generic "AI slop" frontends. AVOID the three default
AI looks entirely unless the brief explicitly demands one: (1) cream #F4F1EA bg +
high-contrast serif + terracotta accent; (2) near-black bg + one acid-green/
vermilion accent; (3) broadsheet hairline-rules newspaper columns. NOTE: this
style IS dark, so a near-black background is correct here - but do NOT settle for
the lazy "black + one acid-green accent" cliche; build a real layered dark system
with elevation and a considered accent (or two), not the default.

Work in TWO passes before coding:
1. PLAN a compact token system for this brief:
   - Color: 4-6 named hex values - a true dark SYSTEM (base, raised surfaces,
     borders, 1-2 luminous accents), depth from tonal elevation not drop shadows
   - Type: a CHARACTERFUL display face + a complementary body face via next/font
     (never generic Inter/Arial/Roboto) - the type treatment must itself be
     memorable and carry the style's voice
   - Layout: a concept + which section breaks the grid
   - SIGNATURE: the ONE element this page is remembered by, embodying Dark Mode First
2. CRITIQUE that plan: if any part reads like the default you'd make for any page,
   revise it. Spend your boldness on the signature; keep everything else quiet.

Execution rules that separate authored from templated:
- Hero = a thesis: open with the most characteristic thing, NOT a centered title
  over a box. Deliberate asymmetry or scale contrast.
- Structural devices (numbers 01/02, eyebrows, dividers) only if the content is
  genuinely a sequence - don't decorate with them.
- Section variety: the 8 sections must NOT repeat one card layout. Vary rhythm
  (full-bleed vs contained, grid vs stacked, dense vs airy).
- Motion: CSS-only, deliberate (one orchestrated moment beats scattered effects).
  Respect prefers-reduced-motion.
- Quality floor: responsive to mobile, visible keyboard focus.
- Watch CSS specificity: don't let .section and element selectors cancel each
  other's padding/margins.
Self-check: "Would a designer recognize Dark Mode First in 2 seconds, and is it visibly
different from japandi/neobrutalist/gradient-modern?" If not, push harder.

## Create EXACTLY these 4 files (nothing else - see IMPORTANT below)
1. `ldp-coach-app/src/styles/themes/dark-mode-first.css` - a `.theme-dark-mode-first` class
   overriding the shadcn CSS variables. NEVER touch `:root`.
2. `ldp-coach-app/src/app/dark-mode-first/layout.tsx` - nested layout wrapping children
   in `<div className="theme-dark-mode-first ...">`. You MAY load ONE route-scoped font
   via `next/font` (self-hosted at build - allowed) if the brief demands it.
3. `ldp-coach-app/src/app/dark-mode-first/page.tsx` - complete single-scroll page, same
   8-section arc (hero, method, services, benefits, testimonials, about, CTA,
   contact), all copy from the shared content module, visuals from the
   placeholder primitives.
4. `ldp-coach-app/src/app/dark-mode-first/ContactForm.tsx` - "use client" component
   (Next.js 16 forbids event handlers as Server Component props).

## IMPORTANT - parallel-safe rules
- Do NOT edit `src/app/globals.css` and do NOT edit `src/lib/styles-registry.ts`.
  Those two shared files are wired separately after all pages are done, to avoid
  conflicts between parallel sessions. Creating your 4 files is the whole job.
- Do NOT modify `.planning/`, `.claude/`, or any existing route.
- Do NOT add npm dependencies. No runtime external requests (no external images).
- Do NOT run `git add` or `git commit`.
- This is an EXPLICIT USER OVERRIDE of any project workflow rules (GSD etc.):
  execute directly, do NOT use /gsd-* commands, do NOT enter plan mode, do NOT
  ask which execution mode to use.

## Verify, then stop
Confirm your 4 files exist and are syntactically complete TypeScript/CSS. (Do
NOT run `npm run build` - parallel builds conflict; the build is run once at the
end.) Then report: files created, and anything you were unsure about.
```
