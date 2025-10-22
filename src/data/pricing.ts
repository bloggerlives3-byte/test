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
  stripePriceEnv?: string;
  popular?: boolean;
};

export type AddOnPack = {
  id: string;
  slug: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  stripePriceEnv?: string;
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
      href: "/pricing/free",
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
      href: "/pricing/premium",
    },
    stripePriceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PREMIUM",
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
      href: "/pricing/pro",
    },
    stripePriceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PRO",
  },
];

export const addOnPacks: AddOnPack[] = [
  {
    id: "pack-immunity",
    slug: "winter-immunity",
    title: "Winter Immunity Pack",
    price: "$2.99",
    description: "Cold-weather blends with immunity boosters and tips.",
    features: [
      "5 vitamin C loaded recipes",
      "Ingredient sourcing cheat sheet",
      "Wellness coach video walkthrough",
    ],
    stripePriceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PACK_IMMUNITY",
  },
  {
    id: "pack-low-sugar",
    slug: "low-sugar",
    title: "Low-Sugar Sips",
    price: "$1.99",
    description: "Balanced smoothies tailored for steady energy without spikes.",
    features: [
      "4 low-glycemic recipes",
      "Sweetener swap guide",
      "Macro calculator cheat sheet",
    ],
    stripePriceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PACK_LOW_SUGAR",
  },
  {
    id: "pack-kids",
    slug: "kids",
    title: "Smoothies for Kids",
    price: "$1.49",
    description: "Creative blends sized for kid-approved nutrition.",
    features: [
      "3 playful recipes with hidden greens",
      "Allergy-friendly substitutions",
      "Printable reward chart",
    ],
    stripePriceEnv: "NEXT_PUBLIC_STRIPE_PRICE_PACK_KIDS",
  },
];

export const getPricingTierById = (id: string) =>
  pricingTiers.find((tier) => tier.id === id);

export const getPackBySlug = (slug: string) =>
  addOnPacks.find((pack) => pack.slug === slug);

export type CheckoutProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  type: "tier" | "pack";
  stripePriceEnv?: string;
};

export const getCheckoutProduct = (identifier: string): CheckoutProduct | null => {
  const tier = pricingTiers.find((item) => item.id === identifier && item.id !== "free");
  if (tier) {
    return {
      id: tier.id,
      name: tier.name,
      description: tier.description,
      price: tier.price,
      type: "tier",
      stripePriceEnv: tier.stripePriceEnv,
    };
  }

  const packBySlug = getPackBySlug(identifier);
  if (packBySlug) {
    return {
      id: packBySlug.slug,
      name: packBySlug.title,
      description: packBySlug.description,
      price: packBySlug.price,
      type: "pack",
      stripePriceEnv: packBySlug.stripePriceEnv,
    };
  }

  return null;
};
