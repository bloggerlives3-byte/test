export type MonetizationStrategy = {
  id: string;
  title: string;
  emoji: string;
  summary: string;
  pricing?: string;
  details: string[];
  highlight?: string;
};

export const monetizationStrategies: MonetizationStrategy[] = [
  {
    id: "freemium",
    title: "Freemium + SMU-V+",
    emoji: "🛒",
    summary:
      "Core builder stays free while premium members unlock advanced recipes, boosters, and personalization.",
    pricing: "$2.99 / month or $24.99 / year",
    highlight: "Limit free users to 3 saved smoothies to encourage upgrades.",
    details: [
      "Gate elite recipes (performance, kid-friendly, seasonal).",
      "Offer superfood booster insights and goal-tailored blends.",
      "Deliver early access to challenges and upcoming features.",
    ],
  },
  {
    id: "iap-packs",
    title: "Packs & Themes",
    emoji: "🎁",
    summary:
      "Lightweight in-app purchases for seasonal recipe packs, booster guides, and visual themes.",
    pricing: "$0.99 – $4.99 one-time",
    details: [
      "Launch themed packs like Winter Immunity or Low-Sugar Sips.",
      "Sell booster intel packs with dosing tips and benefits.",
      "Offer premium UI themes for smoothie cards and grocery lists.",
    ],
  },
  {
    id: "sponsored",
    title: "Sponsored Co-Labs",
    emoji: "🎥",
    summary:
      "Partner with wellness brands for featured recipes, challenges, and sponsored tips.",
    details: [
      "Integrate brand spotlights in recipe hero placements.",
      "Run co-branded challenges (e.g., Blend with Brand X for a week).",
      "Bundle affiliate coupons with grocery exports.",
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Recos",
    emoji: "🧾",
    summary:
      "Surface shoppable links for blenders, superfoods, and grocery delivery.",
    details: [
      "Add affiliate CTAs to grocery exports and builder suggestions.",
      "Curate gear recommendations in a rotating carousel.",
      "Track conversions with tagged URLs per brand partner.",
    ],
  },
  {
    id: "b2b",
    title: "SMU-V Pro (B2B)",
    emoji: "🎓",
    summary:
      "Subscription tier for coaches and nutritionists to run client programs.",
    pricing: "$9.99 / month or $79 / year",
    details: [
      "Allow branded client portals with assigned recipes.",
      "Unlock analytics on client smoothie usage and grocery exports.",
      "Provide bulk recipe management and messaging tools.",
    ],
  },
  {
    id: "gamification",
    title: "Rewards & Store",
    emoji: "🎟️",
    summary:
      "Gamify the experience with points, unlockable content, and sponsor tie-ins.",
    details: [
      "Grant points for daily blends, streaks, and challenge participation.",
      "Redeem points for packs, partner discounts, or limited recipes.",
      "Highlight sponsor rewards on the home tip card or challenges.",
    ],
  },
  {
    id: "ads",
    title: "Lifestyle Ads (Optional)",
    emoji: "📢",
    summary:
      "Lightly surface wellness-aligned ads for free users with an upgrade path to remove them.",
    details: [
      "Limit ads to feed placements and keep recipe flows clean.",
      "Bundle ad-free experience into SMU-V+ subscription.",
      "Vet partners to preserve the wellness-first tone.",
    ],
  },
];
