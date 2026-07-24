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
    description: "Structure brute, affirmée, à fort contraste",
    briefNumber: 17,
  },
  {
    slug: "japandi",
    name: "Japandi",
    description: "Sobriété japonaise × chaleur scandinave — un minimalisme calme et chaleureux",
    briefNumber: 1,
  },
  {
    slug: "gradient-modern",
    name: "Gradient Modern",
    description: "Dégradés multi-tons sophistiqués — la couleur comme atmosphère, halo doux, énergie contemporaine",
    briefNumber: 6,
  },
  {
    slug: "editorial",
    name: "Editorial",
    description: "Reportage inspiré de la presse magazine — serif display, colonnes multiples, lettrines et citations",
    briefNumber: 3,
  },
  {
    slug: "neo-geo",
    name: "Neo-Geo",
    description:
      "Motifs géométriques raffinés, rythme mathématique, aplats de couleur précis",
    briefNumber: 2,
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    description:
      "Couleurs primaires, formes géométriques pures sur grille stricte — la forme suit la fonction",
    briefNumber: 5,
  },
  {
    slug: "corporate-professional",
    name: "Corporate Professional",
    description:
      "Bleu marine et cobalt qui inspirent confiance, registre à en-tête, autorité institutionnelle raffinée",
    briefNumber: 9,
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    description:
      "Panneaux translucides superposés, flou d'arrière-plan, profondeur lumineuse sur fonds colorés",
    briefNumber: 10,
  },
  {
    slug: "minimal",
    name: "Minimal",
    description:
      "Réduction extrême, espace blanc maximal, une seule touche froide utilisée deux fois",
    briefNumber: 7,
  },
  {
    slug: "retro-futuristic",
    name: "Retro-futuristic",
    description:
      "Vision du futur façon années 80 — néons, dégradés chromés, nostalgie raffinée",
    briefNumber: 8,
  },
  {
    slug: "art-deco",
    name: "Art Deco",
    description:
      "Géométrie ornementale, touches dorées et symétrie — luxe et glamour vintage",
    briefNumber: 13,
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    description:
      "Chaleur hygge, matériaux naturels et neutres doux — un minimalisme cocooning et humain",
    briefNumber: 11,
  },
  {
    slug: "tech-forward",
    name: "Tech Forward",
    description:
      "Précis, conçu comme une ingénierie, tourné vers l'avenir — grilles fines, détails mono, interface moderne et nette",
    briefNumber: 15,
  },
  {
    slug: "flat",
    name: "Flat",
    description:
      "Sans profondeur, couleurs franches et iconographie simple — net et épuré",
    briefNumber: 14,
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    description:
      "Énergie portée par le mouvement — animation maîtrisée, diagonales dynamiques, élan athlétique",
    briefNumber: 12,
  },
  {
    slug: "monochromatic",
    name: "Monochromatic",
    description:
      "Une seule teinte en de multiples nuances — la profondeur par le ton, non par la variété",
    briefNumber: 16,
  },
  {
    slug: "luxury-minimal",
    name: "Luxury Minimal",
    description:
      "Sobriété premium, espace généreux et détails raffinés — un silence qui a du prix",
    briefNumber: 19,
  },
  {
    slug: "material",
    name: "Material",
    description:
      "Ombres d'élévation, surfaces tonales et contrôles en pilule — mouvement et profondeur MD3",
    briefNumber: 24,
  },
  {
    slug: "metropolitan",
    name: "Metropolitan",
    description:
      "Sophistication urbaine — bleu encre, laiton chaud et bordeaux, vie nocturne raffinée",
    briefNumber: 25,
  },
  {
    slug: "neumorphic",
    name: "Neumorphic",
    description:
      "Surfaces extrudées tout en douceur, ombres claires et sombres — un monochrome tactile",
    briefNumber: 20,
  },
  {
    slug: "swiss-international",
    name: "Swiss / International",
    description:
      "Grille modulaire stricte, hiérarchie systématique — une discipline typographique ultra-nette",
    briefNumber: 21,
  },
  {
    slug: "typography-first",
    name: "Typography First",
    description:
      "La typographie en vedette — lettrages géants et expressifs, contrastes d'échelle spectaculaires",
    briefNumber: 23,
  },
  {
    slug: "dark-mode-first",
    name: "Dark Mode First",
    description:
      "Pensé dark-first — surfaces quasi noires superposées, accents lumineux, élégance nocturne",
    briefNumber: 4,
  },
  {
    slug: "modernist",
    name: "Modernist",
    description:
      "Lignes épurées et intemporelles, beauté fonctionnelle et palette sobre — des proportions classiques",
    briefNumber: 18,
  },
  {
    slug: "organic-fluid",
    name: "Organic / Fluid",
    description:
      "Formes fluides et organiques, courbes naturelles et transitions douces — des mises en page biomorphiques",
    briefNumber: 22,
  },
];
