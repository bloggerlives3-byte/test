import Link from "next/link";
import SeasonalRecipeCard from "../seasonal-drops/SeasonalRecipeCard";
import type { SeasonalRecipe } from "../seasonal-drops/types";
import PerformanceBuilder from "./PerformanceBuilder";

const CATEGORIES: Array<{
  id: string;
  title: string;
  description: string;
  recipes: SeasonalRecipe[];
}> = [
  {
    id: "pre-workout",
    title: "Pre-Workout",
    description: "Carb-forward blends to fuel your session without weighing you down.",
    recipes: [
      {
        id: "banana-oat-power",
        name: "Banana Oat Power Up",
        description: "Slow-release carbs with a touch of caffeine to prime your workout.",
        macros: { calories: 260, protein: 10, carbs: 45 },
        saves: 210,
        color: "#ffe082",
        ingredientIds: ["banana", "chia-seeds", "protein-powder"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1 banana",
          "1/3 cup rolled oats",
          "1 espresso shot or matcha",
          "1 scoop vanilla protein",
          "1 tsp honey",
        ],
        boosters: ["Add creatine for strength days", "Top with cinnamon"],
        steps: [
          "Blend oats and espresso first.",
          "Add banana, protein, and honey.",
          "Serve chilled 30 minutes before training.",
        ],
      },
      {
        id: "blueberry-beet-charge",
        name: "Blueberry Beet Charge",
        description: "Nitrates from beet plus antioxidants for endurance sessions.",
        macros: { calories: 220, protein: 7, carbs: 38 },
        saves: 178,
        color: "#ce93d8",
        ingredientIds: ["spinach", "pineapple", "kale"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1/2 cup roasted beet",
          "1 cup blueberries",
          "1/2 cup coconut water",
          "1 handful spinach",
          "Juice of 1/2 lemon",
        ],
        boosters: ["Add spirulina for extra chlorophyll", "Top with lemon zest"],
        steps: [
          "Blend beet and coconut water until smooth.",
          "Add blueberries, spinach, and lemon.",
          "Serve immediately over ice.",
        ],
      },
    ],
  },
  {
    id: "post-lift",
    title: "Post-Lift Recovery",
    description: "High-protein mixes with anti-inflammatory ingredients to rebuild and restore.",
    recipes: [
      {
        id: "chocolate-collagen-repair",
        name: "Chocolate Collagen Repair",
        description: "Chocolate and almond butter support muscle repair post-lift.",
        macros: { calories: 320, protein: 28, carbs: 28 },
        saves: 234,
        color: "#bcaaa4",
        ingredientIds: ["banana", "protein-powder", "peanut-butter"],
        boosterIds: ["booster-collagen"],
        ingredients: [
          "1 frozen banana",
          "1 scoop chocolate protein",
          "1 tbsp almond butter",
          "1 tsp cacao powder",
          "1 cup oat milk",
        ],
        boosters: ["Add collagen for joint health", "Top with cacao nibs"],
        steps: [
          "Blend all ingredients until silky.",
          "Add ice if you prefer a thicker shake.",
          "Top with cacao nibs and serve.",
        ],
      },
      {
        id: "pineapple-turmeric-calm",
        name: "Pineapple Turmeric Calm",
        description: "Tropical smoothie with turmeric to ease soreness and inflammation.",
        macros: { calories: 250, protein: 16, carbs: 35 },
        saves: 156,
        color: "#ffe57f",
        ingredientIds: ["pineapple", "greek-yogurt", "chia-seeds"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup pineapple",
          "1/2 cup Greek yogurt",
          "1 tsp fresh turmeric",
          "1 tbsp hemp seeds",
          "1 cup coconut water",
        ],
        boosters: ["Add spirulina for amino acids", "Top with hemp hearts"],
        steps: [
          "Blend all ingredients until smooth.",
          "Add extra turmeric for zest.",
          "Serve cold post training.",
        ],
      },
    ],
  },
  {
    id: "low-glycemic",
    title: "Low-Glycemic Morning",
    description: "Balanced smoothies that steady blood sugar and keep you focused.",
    recipes: [
      {
        id: "cinnamon-almond-steady",
        name: "Cinnamon Almond Steady",
        description: "Cinnamon and almond pair with greens for a satiating breakfast.",
        macros: { calories: 210, protein: 12, carbs: 22 },
        saves: 198,
        color: "#e0f2f1",
        ingredientIds: ["spinach", "avocado", "chia-seeds"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup almond milk",
          "1/2 avocado",
          "1 handful spinach",
          "1 tbsp chia seeds",
          "1/2 tsp cinnamon",
        ],
        boosters: ["Add chia pudding pearls", "Top with toasted almonds"],
        steps: [
          "Blend almond milk with spinach and avocado.",
          "Add chia seeds and cinnamon.",
          "Blend briefly to maintain texture.",
        ],
      },
      {
        id: "vanilla-hemp-focus",
        name: "Vanilla Hemp Focus",
        description: "Vanilla, hemp, and berries keep energy steady through the morning.",
        macros: { calories: 200, protein: 14, carbs: 24 },
        saves: 142,
        color: "#f3e5f5",
        ingredientIds: ["chia-seeds", "pineapple", "spinach"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1 cup unsweetened almond milk",
          "1/2 cup mixed berries",
          "2 tbsp hemp hearts",
          "1 tbsp chia seeds",
          "1/2 tsp vanilla extract",
        ],
        boosters: ["Add protein powder for extra satiety", "Top with coconut flakes"],
        steps: [
          "Blend almond milk and berries.",
          "Add hemp, chia, and vanilla.",
          "Serve cold with coconut flakes.",
        ],
      },
    ],
  },
];

const PerformanceBlendsPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/premium/library"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to premium library
      </Link>

      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Performance Blends
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Train smarter with targeted blends
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Customize each category with your preferred ingredients and boosters to match your training plan.
        </p>
      </header>

      {CATEGORIES.map((category) => (
        <section key={category.id} id={category.id} className="mt-10 space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
              {category.title}
            </h2>
            <p className="text-sm text-[color:var(--color-foreground)]/70">
              {category.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {category.recipes.map((recipe) => (
              <SeasonalRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      ))}

      <PerformanceBuilder />
    </div>
  );
};

export default PerformanceBlendsPage;
