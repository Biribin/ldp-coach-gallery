---
phase: 01-scaffold-foundation
reviewed: 2026-07-22T00:00:00Z
depth: standard
files_reviewed: 14
files_reviewed_list:
  - ldp-coach-app/src/app/globals.css
  - ldp-coach-app/src/app/layout.tsx
  - ldp-coach-app/src/app/neobrutalist/ContactForm.tsx
  - ldp-coach-app/src/app/neobrutalist/layout.tsx
  - ldp-coach-app/src/app/neobrutalist/page.tsx
  - ldp-coach-app/src/app/page.tsx
  - ldp-coach-app/src/components/placeholders/AvatarBlob.tsx
  - ldp-coach-app/src/components/placeholders/GradientBlock.tsx
  - ldp-coach-app/src/components/placeholders/ShapeGraphic.tsx
  - ldp-coach-app/src/components/placeholders/index.tsx
  - ldp-coach-app/src/components/sections/section-types.ts
  - ldp-coach-app/src/lib/content.ts
  - ldp-coach-app/src/lib/styles-registry.ts
  - ldp-coach-app/src/styles/themes/neobrutalist.css
findings:
  critical: 1
  warning: 3
  info: 4
  total: 8
status: issues_found
fixes_applied:
  fixed_at: 2026-07-22T00:00:00Z
  scope: critical_warning
  fixed: 4
  skipped: 0
  commits:
    CR-01: 9abdb65
    WR-01: 351747f
    WR-02: 84c21a3
    WR-03: c437dd1
---

# Phase 01: Code Review Report

**Reviewed:** 2026-07-22T00:00:00Z
**Depth:** standard
**Files Reviewed:** 14
**Status:** issues_found

## Summary

Reviewed the scaffold-foundation phase: root layout/theme plumbing, the neobrutalist proof-of-concept route, the shared content/registry/section-contract modules, and the three offline placeholder primitives. The style-isolation architecture is sound — `neobrutalist.css` correctly scopes every declaration under `.theme-neobrutalist` with zero `:root` mutation, and `layout.tsx` applies the scope class exactly as documented. No remote imagery/font URLs were found; `next/font` self-hosts both Geist and Space Grotesk, and the SVG/gradient placeholders are fully inline. The `ContactForm`'s `preventDefault`-only submit handler is correctly treated as intentional, not a bug.

However, one genuine functional bug was found: the global `--font-sans` custom property is self-referential and never resolves to the actual Geist Sans font stack, meaning the base `font-sans` utility (applied to `<html>`) silently falls back to the browser default rather than Geist. Several warnings and info-level maintainability issues are also noted below, mostly around fragile React keys and duplicated/dead custom properties.

## Critical Issues

### CR-01: `--font-sans` custom property is circular and never resolves to Geist Sans

**Status:** fixed: `9abdb65`

**File:** `ldp-coach-app/src/app/globals.css:10`
**Issue:** `layout.tsx` sets `--font-geist-sans` as the CSS variable holding the actual `next/font` font-family value (line 6 of `layout.tsx`), but `globals.css`'s `@theme inline` block defines:
```css
--font-sans: var(--font-sans);
```
This is a self-reference — `--font-sans` is defined in terms of itself, not in terms of `--font-geist-sans`. Per CSS custom property resolution rules, a property that references itself (directly or transitively) is invalid at computed-value time and resolves to its inherited/initial value, i.e. **never Geist Sans**. Since `html { @apply font-sans; }` (globals.css:127-129) and `body`/most components depend on the `font-sans` Tailwind utility → `--font-sans` variable → font stack, the entire app silently falls back to the browser's generic `sans-serif` instead of the intended Geist Sans typeface. This defeats the purpose of loading `Geist` via `next/font` in `layout.tsx` at all (the `Geist Mono` variable has the same class of bug potential but is at least referenced correctly elsewhere as `--font-geist-mono` for `--font-mono`, line 11 — only `--font-sans` is broken).

The same bug is duplicated in the theme override: `neobrutalist.css:49` also self-assigns `--font-sans: var(--font-sans);`, which is a no-op given the upstream value is already unresolved, but reinforces that this pattern was copy-pasted rather than intentional.

**Fix:**
```css
/* globals.css, inside @theme inline */
--font-sans: var(--font-geist-sans), sans-serif;
```
And remove (or correct) the redundant self-assignment in `neobrutalist.css:49` — if the neobrutalist theme intends body copy to stay on Geist Sans, simply delete that line entirely (it inherits from the root theme layer); do not repeat a self-referential declaration.

## Warnings

### WR-01: Fragile React `key` derived from truncated content, not a stable identifier

**Status:** fixed: `351747f`

**File:** `ldp-coach-app/src/app/neobrutalist/page.tsx:65`
**Issue:**
```tsx
{intro.paragraphs.map((paragraph) => (
  <p key={paragraph.slice(0, 24)} className="text-foreground/85">
```
Using the first 24 characters of a paragraph as the React key is fragile: if a future content edit introduces two paragraphs sharing the same 24-character prefix (e.g. two sentences starting identically), React will silently collide the keys, causing incorrect reconciliation (stale DOM reuse across list item updates). This is exactly the class of bug `key` correctness is meant to prevent. The current `coachContent.intro.paragraphs` array happens to avoid collisions today, but the pattern has no structural guarantee against it as content evolves — and this module is documented as reused by all 25 future style pages, so the risk compounds every time a new page copies this pattern.
**Fix:** Use the array index or restructure `intro.paragraphs` as `{ id: string; text: string }[]` in `content.ts` and key on `id`. Simplest fix given static content:
```tsx
{intro.paragraphs.map((paragraph, index) => (
  <p key={index} className="text-foreground/85">
))}
```
(Index keys are acceptable here since the list is static and never reordered/filtered.)

### WR-02: `ContactForm` labels are not programmatically associated via `htmlFor`/`id`, `email` field detection is a fragile string match

**Status:** fixed: `84c21a3` (applied the minimal alternative from the Fix section — case-insensitive `.includes("email")` plus a coupling comment — rather than restructuring `content.ts`'s data model, per fix scope constraints)

**File:** `ldp-coach-app/src/app/neobrutalist/ContactForm.tsx:22-32`
**Issue:** The `<label>` wraps the `<input>` implicitly (valid HTML, generally works for a11y), but the code also derives the input `type` via `field.toLowerCase() === "email"` (line 26) — a hardcoded string match against arbitrary caller-supplied `fields: string[]`. If `contact.fields` in `content.ts` is ever changed to something like `"Email Address"` or `"Contact Email"` (a plausible future content edit for other style pages reusing this component), the match silently fails and the field renders as `type="text"` instead of `type="email"`, losing input validation/mobile keyboard hints with no error or warning. This is a correctness trap disguised as working code.
**Fix:** Make the field type explicit in the data model instead of inferring it from a label string:
```ts
// content.ts
contact: {
  ...
  fields: [{ label: "Name", type: "text" }, { label: "Email", type: "email" }, { label: "Goals", type: "text" }],
}
```
```tsx
// ContactForm.tsx
{fields.map((field) => (
  <label key={field.label} ...>
    {field.label}
    <input type={field.type} name={field.label.toLowerCase()} ... />
  </label>
))}
```
Alternatively, at minimum use `.includes("email")` case-insensitively rather than exact equality, and add a code comment flagging the coupling so future content edits don't break it silently.

### WR-03: `getInitials` unsafe non-null assertions rely on an untested invariant

**Status:** fixed: `c437dd1`

**File:** `ldp-coach-app/src/components/placeholders/AvatarBlob.tsx:15-20`
**Issue:**
```ts
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}
```
The non-null assertions (`parts[0]!`, `parts[0]![0]!`) are safe today only because `.filter(Boolean)` guarantees non-empty strings in `parts`. That's a correct but non-obvious invariant enforced three assertions deep with no comment explaining it — a future refactor (e.g. changing the split regex or dropping the `.filter(Boolean)`) could reintroduce an empty-string element and produce `undefined![0]` → runtime `TypeError` in a component used across all 25 future pages for every coach/testimonial avatar. This is exactly the kind of "quiet contract" that breaks silently under refactor.
**Fix:** Add a one-line comment above the invariant, or better, avoid the assertions entirely:
```ts
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0] ?? "";
  const last = parts[parts.length - 1][0] ?? "";
  return (first + last).toUpperCase();
}
```

## Info

### IN-01: `services` section hardcodes visual variants by array index instead of data-driven flags

**File:** `ldp-coach-app/src/app/neobrutalist/page.tsx:98-125`
**Issue:** The "highlighted" middle program card is selected via `index === 1` (three separate places: card background, shape choice, and description color), which silently breaks if `coachContent.services.programs` is ever reordered or trimmed to fewer/more than 3 entries — there's no explicit `featured: boolean` flag in the data model driving this. Since `content.ts` is the shared source for all 25 pages, other style pages copying this pattern will inherit the same magic-index coupling.
**Fix:** Add a `featured?: boolean` field to the `services.programs` content type and branch on that instead of `index === 1`.

### IN-02: Duplicate/no-op custom property re-declaration in theme override

**File:** `ldp-coach-app/src/styles/themes/neobrutalist.css:49`
**Issue:** `--font-sans: var(--font-sans);` inside `.theme-neobrutalist` is a no-op self-reference (see CR-01) — it doesn't override anything since the value it references is the same unresolved variable from the parent scope. Dead declaration that should be removed once CR-01 is fixed (or corrected to reference `--font-geist-sans` explicitly if the intent was to force Geist Sans body text under this theme).
**Fix:** Delete the line, or replace with an explicit, meaningful override if intentional.

### IN-03: `AvatarBlob`/`ShapeGraphic` accept a `size`/`color` prop but `ShapeGraphic`'s `secondaryColor` default is unused outside the `polygon` shape — minor prop-surface bloat

**File:** `ldp-coach-app/src/components/placeholders/ShapeGraphic.tsx:24, 52-59`
**Issue:** `secondaryColor` is a documented prop on every `ShapeGraphicProps` usage but only consumed by the `polygon` branch. Not a bug, but callers passing `secondaryColor` for `circle`/`rect`/`triangle`/`line` shapes get silently ignored with no warning — worth a JSDoc note that it's polygon-only.
**Fix:** Add `/** Only used by the "polygon" shape. */` above the `secondaryColor` prop doc comment.

### IN-04: Inline `key={program.name}` / `key={item.title}` / `key={item.name}` patterns repeat the "content string as key" fragility seen in WR-01

**File:** `ldp-coach-app/src/app/neobrutalist/page.tsx:100, 134, 150`
**Issue:** These specific instances are lower-risk than WR-01 because they key on whole, currently-unique fields (`program.name`, `item.title`, testimonial `item.name`) rather than truncated substrings, so collision risk is much lower — but there's still no uniqueness guarantee enforced by the `CoachContent` type. Flagging as info-level since the pattern is repeated four times across this one page and will likely be copy-pasted into 24 more.
**Fix:** Non-blocking; consider whether `content.ts` should carry explicit `id` fields for list items long-term, especially once content is edited across many style variants.

---

_Reviewed: 2026-07-22T00:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
