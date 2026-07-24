/**
 * Shared fictional content module (SCAF-04).
 *
 * Single source of truth for all copy across every style page in the gallery.
 * This module is style-agnostic: plain copy only, no visual/style assumptions.
 * All 25 pages import `coachContent` and render it their own way.
 *
 * Subject (constant across all styles): a fictional female fitness coach
 * offering personalized coaching, training programs, motivation, physical
 * transformation, wellness guidance, and online/in-person support.
 */

export type CoachContent = {
  coachName: string;
  tagline: string;
  heroHeadline: string;
  heroSubcopy: string;
  intro: {
    heading: string;
    paragraphs: string[];
  };
  method: {
    heading: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  services: {
    heading: string;
    programs: {
      name: string;
      description: string;
      priceLabel: string;
    }[];
  };
  benefits: {
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    heading: string;
    quotes: {
      name: string;
      role: string;
      quote: string;
    }[];
  };
  cta: {
    heading: string;
    subcopy: string;
    buttonLabel: string;
  };
  contact: {
    heading: string;
    subcopy: string;
    fields: string[];
    submitLabel: string;
  };
};

export const coachContent: CoachContent = {
  coachName: "Cécilia Voss",
  tagline: "Un coaching de force pensé pour votre vraie vie.",
  heroHeadline: "Entraînez-vous avec intention. Transformez-vous durablement.",
  heroSubcopy:
    "Un coaching personnalisé pour les femmes qui veulent des résultats visibles et une relation durable avec leur corps — en ligne ou en présentiel.",

  intro: {
    heading: "Découvrez Cécilia",
    paragraphs: [
      "Depuis plus de dix ans, Cécilia Voss aide les femmes à reconstruire leur force, leur confiance et leur rapport au mouvement — non par la contrainte, mais par la méthode.",
      "Son approche allie programmation fondée sur des preuves et véritable accompagnement : pas de tendances éphémères, pas de raccourcis, juste un travail constant qui porte ses fruits.",
      "Que vous partiez de zéro ou repreniez après des années de pause, Cécilia part de là où vous en êtes et construit un plan qui s'adapte réellement à votre vie.",
    ],
  },

  method: {
    heading: "La Méthode",
    steps: [
      {
        title: "Évaluer",
        description:
          "Un bilan complet de la qualité de mouvement, du mode de vie et des objectifs — aucun point de départ standardisé.",
      },
      {
        title: "Construire",
        description:
          "Un plan d'entraînement progressif organisé autour de votre emploi du temps, de votre récupération et de vos capacités actuelles.",
      },
      {
        title: "Ajuster",
        description:
          "Des points hebdomadaires et des ajustements fondés sur les données pour faire évoluer le plan avec vous.",
      },
      {
        title: "Pérenniser",
        description:
          "Des habitudes et des systèmes conçus pour durer au-delà du programme — une force qui reste.",
      },
    ],
  },

  services: {
    heading: "Programmes",
    programs: [
      {
        name: "Coaching en ligne 1:1",
        description:
          "Programmation entièrement sur mesure, points vidéo hebdomadaires et suivi par messagerie directe, où que vous vous entraîniez.",
        priceLabel: "Dès 180 €/mois",
      },
      {
        name: "Séances en présentiel",
        description:
          "Un coaching pratique au studio de Cécilia — technique, intensité et accompagnement à vos côtés.",
        priceLabel: "Dès 120 €/séance",
      },
      {
        name: "Programme de transformation en groupe",
        description:
          "Un programme collectif de 12 semaines alliant entraînement structuré et entraide entre pairs.",
        priceLabel: "Dès 95 €/mois",
      },
    ],
  },

  benefits: {
    heading: "Pourquoi elles restent",
    items: [
      {
        title: "Un accompagnement réel",
        description: "Des points hebdomadaires qui maintiennent une dynamique honnête.",
      },
      {
        title: "Une programmation qui s'adapte",
        description: "Des plans flexibles selon votre emploi du temps et votre récupération.",
      },
      {
        title: "Des progrès durables",
        description: "Pensé pour des années, pas pour un sprint de 6 semaines.",
      },
      {
        title: "Un coaching global",
        description: "Entraînement, conseils nutritionnels et état d'esprit dans un seul plan.",
      },
      {
        title: "Des formats flexibles",
        description: "Entraînez-vous en ligne, en présentiel, ou les deux à la fois.",
      },
    ],
  },

  testimonials: {
    heading: "Résultats clients",
    quotes: [
      {
        name: "Elena R.",
        role: "Cliente coaching en ligne, 8 mois",
        quote:
          "J'ai essayé tous les programmes possibles. C'est le premier qui s'est vraiment adapté à ma vie, au lieu de m'imposer de m'adapter à lui.",
      },
      {
        name: "Priya K.",
        role: "Cliente en présentiel, 1 an",
        quote:
          "Le coaching de Cécilia m'a redonné un corps en qui j'ai confiance. La force est bien réelle, tout comme la confiance qui l'accompagne.",
      },
      {
        name: "Jordan T.",
        role: "Ancienne du programme de groupe",
        quote:
          "L'entraide du programme de groupe, c'est ce qui a tout fait tenir. Douze semaines plus tard, je ne voulais plus m'arrêter.",
      },
    ],
  },

  cta: {
    heading: "Prête à commencer ?",
    subcopy: "Places limitées chaque mois pour préserver la qualité du coaching.",
    buttonLabel: "Réserver une consultation",
  },

  contact: {
    heading: "Contactez-nous",
    subcopy:
      "Parlez-nous un peu de vos objectifs, nous reviendrons vers vous pour planifier votre première consultation.",
    fields: ["Nom", "Email", "Objectifs"],
    submitLabel: "Envoyer",
  },
};
