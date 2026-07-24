/**
 * Styles registry (SCAF-06 slug convention, IDX-01 data source).
 *
 * Slug convention: kebab-case, single URL segment, matching the
 * DESIGN-BRIEFS.md style name (e.g. "neobrutalist", "dark-mode-first",
 * "organic-fluid"). Each entry maps 1:1 to a route folder under
 * `src/app/<slug>/`.
 *
 * The root index page (`src/app/page.tsx`) reads this array to render its
 * link-list, so adding a route in a later phase surfaces on the index
 * automatically — no other index changes required.
 *
 * Later phases (2-6) append additional entries here as they build out the
 * remaining 24 style routes. Do NOT add entries for routes that don't exist
 * yet.
 */

export type StyleEntry = {
  slug: string;
  name: string;
  description: string;
  briefNumber: number;
};

export const styles: StyleEntry[] = [
  {
    slug: "neobrutalist",
    name: "Neobrutalist",
    description: "Raw, bold, high-contrast structure",
    briefNumber: 17,
  },
  {
    slug: "japandi",
    name: "Japandi",
    description: "Japanese restraint × Scandinavian warmth — calm, warm minimalism",
    briefNumber: 1,
  },
  {
    slug: "gradient-modern",
    name: "Gradient Modern",
    description: "Sophisticated multi-stop gradients — color as atmosphere, soft glow, contemporary energy",
    briefNumber: 6,
  },
  {
    slug: "editorial",
    name: "Editorial",
    description: "Magazine-inspired feature story — display serif, multi-column type, drop caps and pull quotes",
    briefNumber: 3,
  },
  {
    slug: "neo-geo",
    name: "Neo-Geo",
    description:
      "Refined geometric patterns, mathematical rhythm, precise color-blocked shapes",
    briefNumber: 2,
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    description:
      "Primary colors, pure geometric shapes on a strict grid — form follows function",
    briefNumber: 5,
  },
  {
    slug: "corporate-professional",
    name: "Corporate Professional",
    description:
      "Trust-building navy and cobalt, letterhead ledger, refined institutional authority",
    briefNumber: 9,
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    description:
      "Translucent layered panels, backdrop blur, luminous depth over colorful backgrounds",
    briefNumber: 10,
  },
  {
    slug: "minimal",
    name: "Minimal",
    description:
      "Extreme reduction, maximum whitespace, a single cold accent spent twice",
    briefNumber: 7,
  },
  {
    slug: "retro-futuristic",
    name: "Retro-futuristic",
    description:
      "80s vision of the future — neon accents, chrome gradients, refined nostalgia",
    briefNumber: 8,
  },
  {
    slug: "art-deco",
    name: "Art Deco",
    description:
      "Ornamental geometry, gold accents and symmetry — vintage luxury and glamour",
    briefNumber: 13,
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    description:
      "Hygge warmth, natural materials and soft neutrals — cozy, human minimalism",
    briefNumber: 11,
  },
  {
    slug: "tech-forward",
    name: "Tech Forward",
    description:
      "Precise, engineered, future-focused — fine grids, mono details, sharp modern UI",
    briefNumber: 15,
  },
  {
    slug: "flat",
    name: "Flat",
    description:
      "No depth, bold solid colors and simple iconography — crisp and clean",
    briefNumber: 14,
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    description:
      "Motion-driven energy — controlled animation, dynamic diagonals, athletic drive",
    briefNumber: 12,
  },
  {
    slug: "monochromatic",
    name: "Monochromatic",
    description:
      "One hue in many tonal steps — depth through tone, not color variety",
    briefNumber: 16,
  },
  {
    slug: "luxury-minimal",
    name: "Luxury Minimal",
    description:
      "Premium restraint, generous space and refined detail — expensive silence",
    briefNumber: 19,
  },
  {
    slug: "material",
    name: "Material",
    description:
      "Elevation shadows, tonal surfaces and pill controls — MD3 motion and depth",
    briefNumber: 24,
  },
  {
    slug: "metropolitan",
    name: "Metropolitan",
    description:
      "Urban sophistication — ink-navy, warm brass and bordeaux, cultured nightlife",
    briefNumber: 25,
  },
  {
    slug: "neumorphic",
    name: "Neumorphic",
    description:
      "Soft extruded surfaces, dual light-and-dark shadows — tactile monochrome",
    briefNumber: 20,
  },
  {
    slug: "swiss-international",
    name: "Swiss / International",
    description:
      "Strict modular grid, systematic hierarchy — ultra-clean typographic discipline",
    briefNumber: 21,
  },
  {
    slug: "typography-first",
    name: "Typography First",
    description:
      "Type as the hero — huge expressive letterforms, dramatic scale contrast",
    briefNumber: 23,
  },
  {
    slug: "dark-mode-first",
    name: "Dark Mode First",
    description:
      "Designed dark-first — layered near-black surfaces, luminous accents, nocturnal elegance",
    briefNumber: 4,
  },
  {
    slug: "modernist",
    name: "Modernist",
    description:
      "Timeless clean lines, functional beauty and restrained palette — classic proportions",
    briefNumber: 18,
  },
  {
    slug: "organic-fluid",
    name: "Organic / Fluid",
    description:
      "Flowing blob shapes, natural curves and soft transitions — biomorphic layouts",
    briefNumber: 22,
  },
];
