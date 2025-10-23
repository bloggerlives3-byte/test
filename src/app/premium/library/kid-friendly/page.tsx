import Link from "next/link";
import SeasonalRecipeCard from "../seasonal-drops/SeasonalRecipeCard";
import type { SeasonalRecipe } from "../seasonal-drops/types";
import KidsBuilder from "./KidsBuilder";

const GROUPS: Array<{
  id: string;
  title: string;
  description: string;
  recipes: SeasonalRecipe[];
}> = [
  {
    id: "colorful-creations",
    title: "Colorful Creations",
    description: "Bright smoothies that make nutrition feel magical.",
    recipes: [
      {
        id: "galaxy-grape-swirl",
        name: "Galaxy Grape Swirl",
        description: "Swirled layers of grape and banana with a starry chia topping.",
        macros: { calories: 180, protein: 6, carbs: 34 },
        saves: 145,
        color: "#ce93d8",
        ingredientIds: ["banana", "spinach", "pineapple"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup frozen grapes",
          "1/2 banana",
          "1/2 cup coconut yogurt",
          "1/4 cup blueberries",
          "1 tbsp chia seeds",
        ],
        boosters: ["Add spirulina for a galaxy hue", "Top with star-shaped fruit"],
        steps: [
          "Blend grapes and yogurt until smooth.",
          "Add banana and blueberries; pulse briefly.",
          "Layer in a glass and sprinkle chia stars.",
        ],
      },
      {
        id: "rainbow-mango-spin",
        name: "Rainbow Mango Spin",
        description: "Layered smoothie with mango, berries, and dragon fruit swirls.",
        macros: { calories: 210, protein: 7, carbs: 38 },
        saves: 132,
        color: "#ffcc80",
        ingredientIds: ["mango", "pineapple", "banana"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup mango",
          "1/2 cup dragon fruit",
          "1/2 cup strawberries",
          "1/2 banana",
          "1/2 cup coconut water",
        ],
        boosters: ["Add chia pudding pearls", "Top with rainbow sprinkles"],
        steps: [
          "Blend mango and coconut water.",
          "Blend dragon fruit and strawberries separately.",
          "Layer colors in a clear cup for a rainbow effect.",
        ],
      },
      {
        id: "dragon-fruit-sparkler",
        name: "Dragon Fruit Sparkler",
        description: "Vibrant dragon fruit smoothie with hidden spinach and citrus.",
        macros: { calories: 170, protein: 5, carbs: 30 },
        saves: 118,
        color: "#f48fb1",
        ingredientIds: ["banana", "spinach", "pineapple"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup dragon fruit",
          "1/2 orange",
          "1 handful spinach",
          "1/2 banana",
          "1 tsp honey",
        ],
        boosters: ["Add spirulina for sparkle", "Top with edible glitter"],
        steps: [
          "Blend dragon fruit, orange, and banana.",
          "Add spinach and honey; pulse until smooth.",
          "Serve with glitter rimmed glass.",
        ],
      },
    ],
  },
  {
    id: "school-safe",
    title: "School-Safe Sips",
    description: "Nut-free and allergy-aware recipes perfect for lunchboxes.",
    recipes: [
      {
        id: "sunflower-butter-delight",
        name: "Sunflower Butter Delight",
        description: "Creamy sunflower seed smoothie that’s classroom safe.",
        macros: { calories: 190, protein: 8, carbs: 28 },
        saves: 124,
        color: "#ffe082",
        ingredientIds: ["banana", "spinach", "pineapple"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 banana",
          "1 tbsp sunflower butter",
          "1/2 cup frozen peaches",
          "1/2 cup oat milk",
          "1 tsp chia seeds",
        ],
        boosters: ["Add hemp seeds for protein"],
        steps: [
          "Blend all ingredients until smooth.",
          "Serve in a thermos for school.",
        ],
      },
      {
        id: "apple-cinnamon-crunch",
        name: "Apple Cinnamon Crunch",
        description: "Apple pie inspired smoothie with a crunchy topping.",
        macros: { calories: 180, protein: 6, carbs: 32 },
        saves: 110,
        color: "#d7ccc8",
        ingredientIds: ["banana", "spinach"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 apple",
          "1/2 banana",
          "1/2 cup unsweetened yogurt",
          "1/2 tsp cinnamon",
          "1 tbsp oats",
        ],
        boosters: ["Add chia for extra fiber", "Top with oat crumble"],
        steps: [
          "Blend apple, banana, and yogurt.",
          "Add cinnamon and oats.",
          "Serve with crunchy oat topping.",
        ],
      },
      {
        id: "berry-oat-school-smoothie",
        name: "Berry Oat School Smoothie",
        description: "Berries and oats create a satiating, nut-free breakfast.",
        macros: { calories: 195, protein: 7, carbs: 34 },
        saves: 103,
        color: "#a5d6a7",
        ingredientIds: ["pineapple", "chia-seeds"],
        boosterIds: ["booster-protein"],
        ingredients: [
          "1/2 cup blueberries",
          "1/2 cup raspberries",
          "1 tbsp oats",
          "1/2 cup oat milk",
          "1 tsp maple syrup",
        ],
        boosters: ["Add protein powder", "Top with freeze-dried berries"],
        steps: [
          "Blend berries and oat milk.",
          "Add oats and maple; blend briefly.",
          "Serve with freeze-dried berry crumble.",
        ],
      },
    ],
  },
  {
    id: "frozen-fun",
    title: "Frozen Fun",
    description: "Turn smoothies into popsicles or slushies for warm days.",
    recipes: [
      {
        id: "watermelon-slush-pop",
        name: "Watermelon Slush Pop",
        description: "Slushy watermelon blend that doubles as a popsicle base.",
        macros: { calories: 140, protein: 3, carbs: 30 },
        saves: 116,
        color: "#ff8a80",
        ingredientIds: ["pineapple", "cucumber"],
        boosterIds: ["booster-spirulina"],
        ingredients: [
          "1 cup watermelon",
          "1/2 cup strawberries",
          "Juice of 1/2 lime",
          "1 handful mint",
          "4 ice cubes",
        ],
        boosters: ["Add spirulina for color", "Freeze leftovers into pops"],
        steps: [
          "Blend all ingredients until slushy.",
          "Serve immediately or freeze in molds.",
        ],
      },
      {
        id: "peachy-freeze-bar",
        name: "Peachy Freeze Bar",
        description: "Creamy peach smoothie that pours perfectly into freezer molds.",
        macros: { calories: 160, protein: 4, carbs: 28 },
        saves: 97,
        color: "#ffcc80",
        ingredientIds: ["mango", "banana", "greek-yogurt"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup peaches",
          "1/2 banana",
          "1/2 cup Greek yogurt",
          "1/4 cup coconut milk",
          "1 tsp honey",
        ],
        boosters: ["Add chia for frozen texture"],
        steps: [
          "Blend all ingredients until creamy.",
          "Pour into popsicle molds and freeze.",
        ],
      },
      {
        id: "blueberry-yogurt-pop",
        name: "Blueberry Yogurt Pop",
        description: "Blueberry smoothie that converts into yogurt pops.",
        macros: { calories: 155, protein: 6, carbs: 27 },
        saves: 105,
        color: "#9fa8da",
        ingredientIds: ["spinach", "blueberry", "greek-yogurt"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 cup blueberries",
          "1/2 cup Greek yogurt",
          "1/2 banana",
          "1 tbsp maple syrup",
          "1 tsp lemon zest",
        ],
        boosters: ["Add chia for fiber"],
        steps: [
          "Blend blueberries, yogurt, and banana.",
          "Sweeten with maple syrup.",
          "Freeze leftover smoothie for pops.",
        ],
      },
    ],
  },
  {
    id: "topping-bar",
    title: "DIY Topping Bar",
    description: "Encourage kids to add healthy toppings and boost creativity.",
    recipes: [
      {
        id: "granola-crunch-bowl",
        name: "Granola Crunch Bowl",
        description: "Creamy smoothie base topped with crunchy granola and fruit confetti.",
        macros: { calories: 240, protein: 9, carbs: 38 },
        saves: 98,
        color: "#ffecb3",
        ingredientIds: ["banana", "greek-yogurt", "pineapple"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1 banana",
          "1/2 cup Greek yogurt",
          "1/2 cup pineapple",
          "1/4 cup oat milk",
          "1 tsp honey",
        ],
        boosters: ["Add chia for texture", "Top with granola and diced berries"],
        steps: [
          "Blend banana, yogurt, pineapple, and oat milk.",
          "Pour into a bowl and drizzle honey.",
          "Finish with granola and berry sprinkle.",
        ],
      },
      {
        id: "chia-sprinkle-sip",
        name: "Chia Sprinkle Sip",
        description: "A drinkable smoothie with layers of chia pudding and fruit toppings.",
        macros: { calories: 195, protein: 7, carbs: 30 },
        saves: 87,
        color: "#d1c4e9",
        ingredientIds: ["banana", "spinach", "pineapple"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1/2 banana",
          "1/2 cup pineapple",
          "1 handful spinach",
          "1 cup almond milk",
          "2 tbsp chia pudding pearls",
        ],
        boosters: ["Add chia or flax sprinkles", "Garnish with sliced strawberries"],
        steps: [
          "Blend banana, pineapple, spinach, and almond milk.",
          "Layer chia pudding pearls in a cup.",
          "Top with sliced strawberries and colorful sprinkles.",
        ],
      },
      {
        id: "fruit-confetti-parfait",
        name: "Fruit Confetti Parfait",
        description: "Layered parfait with smoothie base and mix-and-match toppings.",
        macros: { calories: 230, protein: 8, carbs: 36 },
        saves: 92,
        color: "#ffccbc",
        ingredientIds: ["banana", "mango", "greek-yogurt"],
        boosterIds: ["booster-chia"],
        ingredients: [
          "1/2 cup mango",
          "1/2 banana",
          "1/2 cup Greek yogurt",
          "1/4 cup coconut water",
          "1 tsp maple syrup",
        ],
        boosters: ["Add chia or flax crunch", "Top with kiwi stars and shredded coconut"],
        steps: [
          "Blend mango, banana, yogurt, and coconut water.",
          "Layer smoothie with maple drizzle in a jar.",
          "Top with coconut, kiwi stars, and flax crunch.",
        ],
      },
    ],
  },
];

const KidsLibraryPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/premium/library"
        className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
      >
        ← Back to premium library
      </Link>

      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Kid-Friendly Favorites
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Keep little smoothie lovers inspired
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Mix and match collections to build excitement around nutrient-packed smoothies for kids.
        </p>
      </header>

      {GROUPS.map((group) => (
        <section key={group.id} id={group.id} className="mt-10 space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
              {group.title}
            </h2>
            <p className="text-sm text-[color:var(--color-foreground)]/70">
              {group.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {group.recipes.map((recipe) => (
              <SeasonalRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      ))}

      <KidsBuilder />
    </div>
  );
};

export default KidsLibraryPage;
