/**
 * Section-type contract (shared across all 25 style pages).
 *
 * Every landing page in the gallery renders exactly these 8 sections, in
 * this order, as the standard arc:
 * hero -> intro -> method -> services -> benefits -> testimonials -> cta -> contact
 *
 * This is a contract, not shared components: each style renders its own
 * markup for every section so that visual styles never converge.
 */

export type SectionId =
  | "hero"
  | "intro"
  | "method"
  | "services"
  | "benefits"
  | "testimonials"
  | "cta"
  | "contact";

export const SECTION_ORDER: SectionId[] = [
  "hero",
  "intro",
  "method",
  "services",
  "benefits",
  "testimonials",
  "cta",
  "contact",
];
