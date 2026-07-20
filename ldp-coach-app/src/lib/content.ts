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
  coachName: "Mara Voss",
  tagline: "Strength coaching, built around your real life.",
  heroHeadline: "Train with intent. Transform for good.",
  heroSubcopy:
    "Personalized coaching for women who want visible results and a sustainable relationship with their bodies — online or in person.",

  intro: {
    heading: "Meet Mara",
    paragraphs: [
      "Mara Voss has spent over a decade helping women rebuild their strength, confidence, and relationship with movement — not through punishment, but through method.",
      "Her approach blends evidence-based programming with real accountability: no fads, no shortcuts, just consistent work that compounds.",
      "Whether you're starting from zero or picking up after years away, Mara meets you where you are and builds a plan that actually fits your life.",
    ],
  },

  method: {
    heading: "The Method",
    steps: [
      {
        title: "Assess",
        description:
          "A full baseline on movement quality, lifestyle, and goals — no cookie-cutter starting point.",
      },
      {
        title: "Build",
        description:
          "A progressive training plan sequenced around your schedule, recovery, and current capacity.",
      },
      {
        title: "Adjust",
        description:
          "Weekly check-ins and data-driven tweaks so the plan evolves as you do.",
      },
      {
        title: "Sustain",
        description:
          "Habits and systems designed to outlast the program — strength that sticks.",
      },
    ],
  },

  services: {
    heading: "Programs",
    programs: [
      {
        name: "1:1 Online Coaching",
        description:
          "Fully custom programming, weekly video check-ins, and direct messaging support wherever you train.",
        priceLabel: "From $180/mo",
      },
      {
        name: "In-Person Sessions",
        description:
          "Hands-on coaching at Mara's studio — technique, intensity, and accountability in the room with you.",
        priceLabel: "From $120/session",
      },
      {
        name: "Group Transformation Program",
        description:
          "A 12-week cohort-based program combining structured training with peer accountability.",
        priceLabel: "From $95/mo",
      },
    ],
  },

  benefits: {
    heading: "Why Clients Stay",
    items: [
      {
        title: "Real Accountability",
        description: "Weekly check-ins that keep momentum honest.",
      },
      {
        title: "Programming That Adapts",
        description: "Plans that flex with your schedule and recovery.",
      },
      {
        title: "Sustainable Progress",
        description: "Built for years, not just a 6-week sprint.",
      },
      {
        title: "Whole-Person Coaching",
        description: "Training, nutrition guidance, and mindset in one plan.",
      },
      {
        title: "Flexible Formats",
        description: "Train online, in-person, or a mix of both.",
      },
    ],
  },

  testimonials: {
    heading: "Client Results",
    quotes: [
      {
        name: "Elena R.",
        role: "Online Coaching Client, 8 months",
        quote:
          "I've tried every program out there. This is the first one that actually adjusted to my life instead of demanding I adjust to it.",
      },
      {
        name: "Priya K.",
        role: "In-Person Client, 1 year",
        quote:
          "Mara's coaching gave me back a body I trust. The strength is real, and so is the confidence that came with it.",
      },
      {
        name: "Jordan T.",
        role: "Group Program Alum",
        quote:
          "The accountability from the group program is what made it stick. Twelve weeks in, I didn't want to stop.",
      },
    ],
  },

  cta: {
    heading: "Ready to start?",
    subcopy: "Spots are limited each month to keep coaching quality high.",
    buttonLabel: "Book a Consultation",
  },

  contact: {
    heading: "Get in Touch",
    subcopy:
      "Tell us a bit about your goals and we'll follow up to schedule your first consultation.",
    fields: ["Name", "Email", "Goals"],
    submitLabel: "Send",
  },
};
