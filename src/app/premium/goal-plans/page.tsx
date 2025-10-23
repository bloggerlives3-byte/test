import Link from "next/link";
import SeasonalRecipeCard from "../seasonal-drops/SeasonalRecipeCard";
import type { SeasonalRecipe } from "../seasonal-drops/types";

const GOAL_PLANS: SeasonalRecipe[] = [
  {
    id: "muscle-morning-fuel",
    name: "Muscle Morning Fuel",
    description: "High-protein vanilla smoothie with creatine option to start the day strong.",
    macros: { calories: 320, protein: 28, carbs: 30 },
    saves: 204,
    color: "#ffcc80",
    ingredientIds: ["banana", "protein-powder", "greek-yogurt"],
    boosterIds: ["booster-protein", "booster-collagen"],
    ingredients: [
      "1 frozen banana",
      "1 scoop vanilla protein",
      "1/2 cup Greek yogurt",
      "1 tbsp peanut butter",
      "1 cup oat milk",
    ],
    boosters: ["Add creatine for strength days", "Top with cacao nibs"],
    steps: [
      "Blend all ingredients until creamy.",
      "Add ice if you prefer a thicker texture.",
      "Serve with cacao nibs and sip pre-workout.",
    ],
  },
  {
    id: "detox-greens-reset",
    name: "Detox Greens Reset",
    description: "Refreshing greens and citrus combo to kick off a detox reset plan.",
    macros: { calories: 190, protein: 7, carbs: 28 },
    saves: 178,
    color: "#a5d6a7",
    ingredientIds: ["spinach", "pineapple", "cucumber"],
    boosterIds: ["booster-spirulina"],
    ingredients: [
      "1 cup spinach",
      "1/2 cup pineapple",
      "1/2 cucumber",
      "1/2 avocado",
      "Juice of 1 lime",
    ],
    boosters: ["Add spirulina for chlorophyll", "Top with coconut flakes"],
    steps: [
      "Blend spinach, cucumber, and lime juice.",
      "Add pineapple and avocado; blend until smooth.",
      "Serve chilled with coconut flakes.",
    ],
  },
  {
    id: "steady-energy-matcha",
    name: "Steady Energy Matcha",
    description: "Matcha, oats, and healthy fats for a low-glycemic energy boost.",
    macros: { calories: 230, protein: 9, carbs: 26 },
    saves: 165,
    color: "#c5e1a5",
    ingredientIds: ["banana", "chia-seeds", "spinach"],
    boosterIds: ["booster-chia"],
    ingredients: [
      "1 banana",
      "1 tsp matcha",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "1/4 avocado",
    ],
    boosters: ["Add chia pudding pearls", "Top with toasted coconut"],
    steps: [
      "Blend almond milk, banana, and avocado.",
      "Add matcha and chia seeds; blend until smooth.",
      "Serve chilled with toasted coconut.",
    ],
  },
];

const PremiumGoalPlansPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link
        href="/premium/success"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to premium hub
      </Link>

      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Goal Plan Templates
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Personalize your smoothie journey
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Choose a template, tweak ingredients, and save it to your library so you can track progress week to week.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {GOAL_PLANS.map((plan) => (
          <SeasonalRecipeCard key={plan.id} recipe={plan} />
        ))}
      </section>
    </div>
  );
};

export default PremiumGoalPlansPage;
