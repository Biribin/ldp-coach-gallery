# Corrections visuelles ciblées (revue navigateur de l'utilisateur)

## Comment lancer (toi)
Nouvelle conversation → `/model` **Opus** (bugs de layout = besoin de finesse) →
colle le prompt ci-dessous. En SÉQUENTIEL. Vérifie chaque page dans le navigateur
après correction. Aucun commit.

---

## Prompt à coller

```
Targeted visual-bug fixes on specific pages of the Ldp_coach gallery (in
`ldp-coach-app/`). A human reviewed the pages in a browser and reported the
issues below. Fix ONLY what is listed — do not redesign pages that aren't
mentioned. Text-only content is already French; keep it French. Do NOT touch
shared files (content.ts, styles-registry.ts, globals.css, GalleryNav) unless a
fix genuinely requires it. Each page owns its `page.tsx` + `src/styles/themes/<slug>.css`.
No commit. Execute directly (explicit override: no /gsd-*, no plan mode, no mode
question). Run `npm run build` once at the very end — must pass.

For each fix: reproduce by reading the relevant page.tsx + its theme CSS, apply
the minimal change, and re-check the CSS specificity trap (theme element-rules
silently out-specify Tailwind utilities — a known issue in this project).

### 1. neobrutalist  (src/app/neobrutalist/…)
- The "Method" step blocks and the "Programs" service blocks currently use a
  saturated VIOLET background. The user wants VARIETY, not all-violet. Rotate the
  block backgrounds across the theme's OWN existing palette (electric orange
  --primary, violet --secondary, lime, off-white/paper, ink) so consecutive
  blocks alternate colors instead of repeating violet. Keep the neobrutalist look
  (hard borders, offset shadows); just vary the fills block-to-block. Ensure text
  stays readable (AA) on whichever fill each block gets.
- "WHY CLIENTS STAY" / benefits section: it's currently BLACK text on the LIME
  block. The user wants WHITE text on a BLACK (dark) background for that section
  instead. Change that band to a dark/near-black background with white/off-white
  text (headings + the 01–05 numbers + labels + body all legible on dark). Keep
  the brutalist framing.

### 2. gradient-modern  (src/app/gradient-modern/…) — "Résultats clients"
- The vertical timeline line + circle markers are misaligned: the first circle
  isn't centered on the line and it's unclear whether circles should sit ON the
  line. SIMPLEST GOOD FIX: remove the circle markers and the vertical line
  entirely for this testimonials section — keep the cards in their staggered
  layout without the timeline rail. (If you'd rather keep a rail, then every
  circle must be perfectly centered on the line; but removal is preferred.)

### 3. glassmorphism  (src/app/glassmorphism/…) — "La Méthode"
- The four method steps are not aligned (they sit at uneven vertical positions).
  Make the four step cards align to a single top baseline in a clean row (equal
  top edges), same as a normal 4-col grid. Remove any per-column vertical offset
  causing the misalignment.

### 4. retro-futuristic  (src/app/retro-futuristic/…)
- HERO: the giant headline "…DURABLEMENT" is CLIPPED on the right edge and
  overlaps the sun graphic. Reduce the hero headline font-size (clamp) so the
  longest French line fits within the viewport without clipping, and ensure it
  doesn't collide with the sun. French text is longer than English — size for the
  French copy.
- PROGRAMS section: the three price labels ("DÈS 180 €/MOIS" etc.) are not
  aligned across the 3 cards. Pin each price to the bottom of its card so all
  three align on one baseline (e.g. make the card a flex column and push the
  price with margin-top:auto / mt-auto).
- "RÉSULTATS CLIENTS": remove the "CH.01 / CH.02 / CH.03" chapter numerals
  entirely (they add clutter). The quote at page.tsx line ~211 is
  `{`CH.${...}`}` — remove that element (keep the avatar + name + quote).

### 5. kinetic  (src/app/kinetic/…)
- "La Méthode": there's a GREEN horizontal line that looks stray — it should
  align with the diamond/losange markers of the steps, not float on its own.
  Either align the green connector line to pass through the center of the diamond
  markers, or remove the line if it can't be cleanly aligned. Make it look
  intentional.
- "Résultats clients": the marquee/reel testimonials JUMP on hover (text shifts
  abruptly) and the row isn't centered. Fix: on hover, PAUSE the marquee smoothly
  (animation-play-state: paused) with NO positional jump — don't reset transform.
  Also center the reel row vertically/horizontally within its band. Ensure it
  still respects prefers-reduced-motion (paused/static).

### 6. typography-first  (src/app/typography-first/…)
- The giant ghost section numbers: only "01" and "05" are faintly visible, the
  others barely show, and the user wants them clearer AND positioned to the
  RIGHT. Fix the `.tf-ghost-num` treatment: (a) make ALL section ghost numbers
  render with a consistent, slightly higher visibility (raise opacity / use a
  visible outline stroke) so every section's number reads, not just 01/05;
  (b) position them consistently on the RIGHT side of each section (the one at
  page.tsx line ~154 is currently `-left-8` — move it to the right like the
  others). Keep them behind content (pointer-events-none, low z) and not clipping
  the layout.

### Verify
Run `npm run build` (must pass). Then report each of the 6 pages: what you
changed, and confirm you re-checked it doesn't introduce an overlap/contrast bug.
```
```
