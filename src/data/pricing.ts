export type PricingTier = {
  id: string;
  name: string;
  price: string;
  description: string;
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
  popular?: boolean;
};

export type AddOnPack = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  href: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "SMU-V Free",
    price: "$0",
    description: "Starter access for curious smoothie explorers.",
    highlights: [
      "Custom smoothie builder with nutrition estimates",
      "6 signature recipes and wellness tip feed",
      "Save up to 3 custom blends locally",
      "Basic grocery list export",
    ],
    cta: {
      label: "Start Blending",
      href: "https://pay.smuv-guide.com/free",
    },
  },
  {
    id: "premium",
    name: "SMU-V+ Premium",
    price: "$2.99 / month",
    description: "Unlock advanced recipes, boosters, and unlimited saves.",
    highlights: [
      "Unlimited smoothie saves with cloud sync",
      "Exclusive recipe drops & seasonal collections",
      "Goal-based plans (muscle, detox, energy)",
      "Priority support and ad-free experience",
    ],
    cta: {
      label: "Upgrade to SMU-V+",
      href: "https://pay.smuv-guide.com/premium",
    },
    popular: true,
  },
  {
    id: "pro",
    name: "SMU-V Pro",
    price: "$9.99 / month",
    description: "Built for coaches and nutrition pros managing clients.",
    highlights: [
      "Client dashboards with branded recipe sharing",
      "Program templates and analytics",
      "Bulk grocery exports & PDF plans",
      "Team collaboration tools (up to 5 seats)",
    ],
    cta: {
      label: "Launch Pro Workspace",
      href: "https://pay.smuv-guide.com/pro",
    },
  },
];

export const addOnPacks: AddOnPack[] = [
  {
    id: "pack-immunity",
    title: "Winter Immunity Pack",
    price: "$2.99",
    description: "Cold-weather blends with immunity boosters and tips.",
    features: [
      "5 vitamin C loaded recipes",
      "Ingredient sourcing cheat sheet",
      "Wellness coach video walkthrough",
    ],
    href: "https://pay.smuv-guide.com/packs/winter-immunity",
  },
  {
    id: "pack-low-sugar",
    title: "Low-Sugar Sips",
    price: "$1.99",
    description: "Balanced smoothies tailored for steady energy without spikes.",
    features: [
      "4 low-glycemic recipes",
      "Sweetener swap guide",
      "Macro calculator cheat sheet",
    ],
    href: "https://pay.smuv-guide.com/packs/low-sugar",
  },
  {
    id: "pack-kids",
    title: "Smoothies for Kids",
    price: "$1.49",
    description: "Creative blends sized for kid-approved nutrition.",
    features: [
      "3 playful recipes with hidden greens",
      "Allergy-friendly substitutions",
      "Printable reward chart",
    ],
    href: "https://pay.smuv-guide.com/packs/kids",
  },
];
