import Link from "next/link";
import SeasonalRecipeCard from "./SeasonalRecipeCard";
import SummerBuilder from "./SummerBuilder";
import AutumnBuilder from "./AutumnBuilder";
import type { SeasonalRecipe } from "./types";

const SEASONAL_SETS: Record<string, {
  title: string;
  heading: string;
  description: string;
  recipes: SeasonalRecipe[];
}> = {
  winter: {
    title: "Seasonal Drops · Winter Immunity",
    heading: "Cozy blends for immune support",
    description:
      "Rotate these feature recipes into your routine when the temperatures drop. Each card highlights ingredients, boosters, and step-by-step guidance.",
    recipes: [
      {
        id: "ginger-citrus-shield",
        name: "Ginger Citrus Shield",
        description: "Zesty vitamin C boost with warming ginger for circulation.",
        macros: { calories: 240, protein: 8, carbs: 45 },
        saves: 142,
        color: "#f8bbd0",
        ingredientIds: ["pineapple", "greek-yogurt", "chia-seeds"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 orange, peeled",
          "1/2 grapefruit",
          "1 knob fresh ginger",
          "1/2 cup Greek yogurt",
          "1 tbsp local honey",
        ],
        boosters: ["Add turmeric for anti-inflammatory support"],
        steps: [
          "Blend citrus with honey and yogurt until smooth.",
          "Add ginger, pulse for 10 seconds.",
          "Serve over ice with a turmeric sprinkle.",
        ],
      },
      {
        id: "maple-chai-recovery",
        name: "Maple Chai Recovery",
        description: "Comforting chai spices paired with protein for post-workout recovery.",
        macros: { calories: 310, protein: 22, carbs: 38 },
        saves: 168,
        color: "#ffe0b2",
        ingredientIds: ["banana", "protein-powder", "peanut-butter"],
        boosterIds: ["booster-collagen"],
        ingredients: [
          "1 frozen banana",
          "1 scoop vanilla protein",
          "1 cup chai tea (cooled)",
          "1 tsp maple syrup",
          "1 tbsp almond butter",
        ],
        boosters: ["Add collagen for joint support", "Top with cinnamon"],
        steps: [
          "Blend cooled chai tea with banana and protein.",
          "Add almond butter and maple until creamy.",
          "Dust with cinnamon before serving.",
        ],
      },
      {
        id: "spiced-beet-glow",
        name: "Spiced Beet Glow",
        description: "Earthy beet with warming spices to promote circulation and glow.",
        macros: { calories: 210, protein: 6, carbs: 40 },
        saves: 119,
        color: "#f48fb1",
        ingredientIds: ["spinach", "kale", "chia-seeds"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1 small roasted beet",
          "1 cup frozen berries",
          "1/2 cup kefir",
          "1 tsp cacao powder",
          "1/8 tsp cayenne",
        ],
        boosters: ["Add maca powder for hormone support"],
        steps: [
          "Blend beet and kefir until smooth.",
          "Add berries and cacao, blend again.",
          "Finish with a pinch of cayenne for warmth.",
        ],
      },
    ],
  },
  spring: {
    title: "Seasonal Drops · Spring Reset",
    heading: "Light and refreshing resets",
    description:
      "Lighten up with greens, herbs, and citrus-forward blends designed to refresh after winter.",
    recipes: [
      {
        id: "minty-green-awakening",
        name: "Minty Green Awakening",
        description: "Cooling mint paired with spinach and pineapple for a crisp morning start.",
        macros: { calories: 190, protein: 7, carbs: 32 },
        saves: 132,
        color: "#b2f2bb",
        ingredientIds: ["spinach", "pineapple", "cucumber"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup spinach",
          "1/2 cup pineapple",
          "1/2 cucumber",
          "5 fresh mint leaves",
          "1/2 cup coconut water",
        ],
        boosters: ["Add spirulina for chlorophyll support"],
        steps: [
          "Blend spinach, mint, and coconut water first.",
          "Add cucumber and pineapple, blend until smooth.",
          "Serve chilled with a mint garnish.",
        ],
      },
      {
        id: "citrus-detox-refresher",
        name: "Citrus Detox Refresher",
        description: "Grapefruit, lime, and basil combine for a hydrating detox blend.",
        macros: { calories: 160, protein: 4, carbs: 35 },
        saves: 101,
        color: "#a5d8ff",
        ingredientIds: ["pineapple", "spinach"],
        boosterIds: ["booster-collagen"],
        ingredients: [
          "1 grapefruit, segmented",
          "Juice of 1 lime",
          "4 basil leaves",
          "1 small green apple",
          "1/2 cup coconut water",
        ],
        boosters: ["Add milk thistle powder for liver support"],
        steps: [
          "Blend grapefruit segments and apple.",
          "Add lime juice, basil, and coconut water.",
          "Blend briefly to keep basil bright.",
        ],
      },
      {
        id: "watercress-glow",
        name: "Watercress Glow",
        description: "Peppery greens plus pear and kiwi deliver a spring glow.",
        macros: { calories: 170, protein: 5, carbs: 33 },
        saves: 94,
        color: "#d8f5a2",
        ingredientIds: ["spinach", "avocado", "chia-seeds"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup watercress",
          "1 ripe pear",
          "1 kiwi",
          "1/2 avocado",
          "1 tsp chia seeds",
        ],
        boosters: ["Add aloe juice for extra hydration"],
        steps: [
          "Blend watercress and pear until smooth.",
          "Add kiwi, avocado, and chia.",
          "Pulse briefly to keep texture.",
        ],
      },
    ],
  },
  summer: {
    title: "Seasonal Drops · Summer Hydration",
    heading: "Cooling blends for sunny days",
    description:
      "Stay refreshed with electrolyte-rich fruits, herbs, and coconut water. Use these recipes to keep hydration levels up all season.",
    recipes: [
      {
        id: "coconut-aloe-cooler",
        name: "Coconut Aloe Cooler",
        description: "Soothing aloe and coconut water replenish electrolytes post-sun.",
        macros: { calories: 180, protein: 4, carbs: 32 },
        saves: 124,
        color: "#81d4fa",
        ingredientIds: ["pineapple", "cucumber", "avocado"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1 cup coconut water",
          "1/2 cup aloe vera juice",
          "1/2 cup pineapple",
          "1/4 avocado",
          "Juice of 1/2 lime",
        ],
        boosters: ["Add pink salt for extra minerals", "Top with chia seeds"],
        steps: [
          "Blend coconut water, aloe, and pineapple until smooth.",
          "Add avocado and lime juice; blend briefly.",
          "Serve chilled with chia sprinkle.",
        ],
      },
      {
        id: "melon-mint-splash",
        name: "Melon Mint Splash",
        description: "Watermelon, cucumber, and mint for a crisp and cooling sip.",
        macros: { calories: 150, protein: 3, carbs: 30 },
        saves: 98,
        color: "#a7ffeb",
        ingredientIds: ["pineapple", "cucumber"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup watermelon",
          "1/2 cup cucumber",
          "6 mint leaves",
          "1/2 lime",
          "4 ice cubes",
        ],
        boosters: ["Add matcha for a gentle lift", "Blend with basil for variety"],
        steps: [
          "Blend watermelon and cucumber together.",
          "Add mint leaves and lime juice.",
          "Pulse with ice for a slushy texture.",
        ],
      },
      {
        id: "pineapple-electrolyte-pop",
        name: "Pineapple Electrolyte Pop",
        description: "Tropical hydration with potassium-rich pineapple and coconut.",
        macros: { calories: 205, protein: 6, carbs: 35 },
        saves: 112,
        color: "#ffe082",
        ingredientIds: ["pineapple", "banana", "chia-seeds"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1 cup pineapple",
          "1/2 banana",
          "1 tbsp hemp seeds",
          "1 cup coconut milk",
          "1 tsp honey",
        ],
        boosters: ["Add coconut flakes", "Blend with collagen for extra protein"],
        steps: [
          "Blend pineapple, banana, and coconut milk until smooth.",
          "Add hemp seeds and honey.",
          "Serve over ice with coconut flakes.",
        ],
      },
    ],
  },
  autumn: {
    title: "Seasonal Drops · Autumn Recovery",
    heading: "Comfort blends to restore and soothe",
    description:
      "Slow down with chai spices, pumpkin, and warming adaptogens. These favorites help you reset after active months.",
    recipes: [
      {
        id: "pumpkin-spice-reboot",
        name: "Pumpkin Spice Reboot",
        description: "Creamy pumpkin-inspired blend with protein for balanced recovery.",
        macros: { calories: 260, protein: 18, carbs: 30 },
        saves: 156,
        color: "#ffcc80",
        ingredientIds: ["banana", "protein-powder", "peanut-butter"],
        boosterIds: ["booster-collagen"],
        ingredients: [
          "1/2 cup pumpkin puree",
          "1 frozen banana",
          "1 scoop vanilla protein",
          "1 tsp maple syrup",
          "1/2 tsp pumpkin pie spice",
        ],
        boosters: ["Add collagen for joint care", "Top with crushed pecans"],
        steps: [
          "Blend pumpkin, banana, and protein until smooth.",
          "Add maple and spice, blend again.",
          "Serve warm or chilled with pecan sprinkle.",
        ],
      },
      {
        id: "apple-chai-muscle-soothe",
        name: "Apple Chai Muscle Soothe",
        description: "Chai tea, apple, and greens to support muscle recovery and calm.",
        macros: { calories: 200, protein: 10, carbs: 35 },
        saves: 104,
        color: "#ffe0b2",
        ingredientIds: ["spinach", "kale", "protein-powder"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup cooled chai tea",
          "1 small apple",
          "1 handful spinach",
          "1 handful kale",
          "1 tbsp chia seeds",
        ],
        boosters: ["Add ashwagandha for stress support"],
        steps: [
          "Blend chai and greens until smooth.",
          "Add apple and chia; blend briefly.",
          "Serve with a dusting of cinnamon.",
        ],
      },
      {
        id: "cinnamon-ashwagandha-calm",
        name: "Cinnamon Ashwagandha Calm",
        description: "Adaptogen-rich blend with banana and yogurt for a soothing evening treat.",
        macros: { calories: 230, protein: 12, carbs: 28 },
        saves: 131,
        color: "#ffb74d",
        ingredientIds: ["banana", "greek-yogurt", "chia-seeds"],
        boosterIds: ["booster-collagen"],
        ingredients: [
          "1 banana",
          "1/2 cup Greek yogurt",
          "1 tbsp almond butter",
          "1/2 tsp cinnamon",
          "1/4 tsp ashwagandha powder",
        ],
        boosters: ["Add collagen for extra recovery", "Top with cacao nibs"],
        steps: [
          "Blend all ingredients until smooth.",
          "Serve warm or chilled with cacao nibs.",
        ],
      },
    ],
  },
};

const builderBySeason = {
  summer: SummerBuilder,
  autumn: AutumnBuilder,
} as const;

const SeasonalDropsPage = ({ searchParams }: { searchParams: { season?: string } }) => {
  const season = searchParams?.season ?? "winter";
  const config = SEASONAL_SETS[season] ?? SEASONAL_SETS.winter;
  const Builder = builderBySeason[season as keyof typeof builderBySeason];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/premium/library"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to premium library
      </Link>
      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          {config.title}
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          {config.heading}
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          {config.description}
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {config.recipes.map((recipe) => (
          <SeasonalRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>

      {Builder ? <Builder /> : null}
    </div>
  );
};

export default SeasonalDropsPage;
