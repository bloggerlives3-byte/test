import type { Booster, Ingredient } from "./ingredients";

export type SmoothieRecipe = {
  id: string;
  name: string;
  color: string;
  description: string;
  ingredients: Array<Pick<Ingredient, "id" | "name" | "unitDescription"> & {
    quantity: string;
  }>;
  instructions: string[];
  boosters?: Booster["id"][];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export const signatureRecipes: SmoothieRecipe[] = [
  {
    id: "berry-blast",
    name: "Berry Blast",
    color: "#ed4c78",
    description: "Tangy berries with protein for a post-workout boost.",
    calories: 320,
    protein: 22,
    carbs: 45,
    fat: 6,
    ingredients: [
      {
        id: "strawberry",
        name: "Strawberries",
        unitDescription: "1 cup sliced",
        quantity: "1 cup",
      },
      {
        id: "banana",
        name: "Banana",
        unitDescription: "1 medium banana",
        quantity: "1",
      },
      {
        id: "greek-yogurt",
        name: "Greek Yogurt",
        unitDescription: "3/4 cup",
        quantity: "3/4 cup",
      },
      {
        id: "chia-seeds",
        name: "Chia Seeds",
        unitDescription: "2 tbsp",
        quantity: "1 tbsp",
      },
    ],
    boosters: ["booster-chia"],
    instructions: [
      "Add berries, banana, and yogurt to blender.",
      "Blend on high until smooth.",
      "Finish with chia seeds and pulse 3–4 times.",
    ],
  },
  {
    id: "tropical-delight",
    name: "Tropical Delight",
    color: "#f8b400",
    description: "Bright mango and pineapple with hydrating cucumber.",
    calories: 285,
    protein: 8,
    carbs: 60,
    fat: 3,
    ingredients: [
      {
        id: "mango",
        name: "Mango",
        unitDescription: "1 cup diced",
        quantity: "1 cup",
      },
      {
        id: "pineapple",
        name: "Pineapple",
        unitDescription: "1 cup chunks",
        quantity: "1 cup",
      },
      {
        id: "cucumber",
        name: "Cucumber",
        unitDescription: "1 cup sliced",
        quantity: "1/2 cup",
      },
      {
        id: "spinach",
        name: "Spinach",
        unitDescription: "1 cup raw",
        quantity: "1 cup",
      },
    ],
    boosters: ["booster-spirulina"],
    instructions: [
      "Layer mango, pineapple, and cucumber in blender.",
      "Add spinach and 1 cup coconut water.",
      "Blend until smooth; add spirulina and blend for 10 seconds.",
    ],
  },
  {
    id: "green-energizer",
    name: "Green Energizer",
    color: "#2e7d60",
    description: "Greens, protein, and healthy fats for sustained energy.",
    calories: 340,
    protein: 20,
    carbs: 30,
    fat: 12,
    ingredients: [
      {
        id: "kale",
        name: "Kale",
        unitDescription: "1 cup chopped",
        quantity: "1 cup",
      },
      {
        id: "spinach",
        name: "Spinach",
        unitDescription: "1 cup raw",
        quantity: "1 cup",
      },
      {
        id: "avocado",
        name: "Avocado",
        unitDescription: "1/2 medium avocado",
        quantity: "1/2",
      },
      {
        id: "protein-powder",
        name: "Vanilla Protein Powder",
        unitDescription: "1 scoop",
        quantity: "1 scoop",
      },
    ],
    boosters: ["booster-collagen"],
    instructions: [
      "Blend greens with 1 cup almond milk until smooth.",
      "Add avocado and protein powder.",
      "Blend until creamy and garnish with hemp seeds.",
    ],
  },
  {
    id: "detox-green",
    name: "Detox Green",
    color: "#74b49b",
    description: "Light and refreshing greens with detoxifying spirulina.",
    calories: 240,
    protein: 9,
    carbs: 32,
    fat: 7,
    ingredients: [
      {
        id: "cucumber",
        name: "Cucumber",
        unitDescription: "1 cup sliced",
        quantity: "1 cup",
      },
      {
        id: "spinach",
        name: "Spinach",
        unitDescription: "1 cup raw",
        quantity: "1 cup",
      },
      {
        id: "pineapple",
        name: "Pineapple",
        unitDescription: "1 cup chunks",
        quantity: "1/2 cup",
      },
      {
        id: "banana",
        name: "Banana",
        unitDescription: "1 medium banana",
        quantity: "1/2",
      },
    ],
    boosters: ["booster-spirulina"],
    instructions: [
      "Blend cucumber and spinach with 1 cup coconut water.",
      "Add pineapple and banana for sweetness.",
      "Stir in spirulina before serving.",
    ],
  },
  {
    id: "muscle-builder",
    name: "Muscle Builder",
    color: "#f7844a",
    description: "Protein-packed blend to accelerate muscle recovery.",
    calories: 410,
    protein: 32,
    carbs: 36,
    fat: 15,
    ingredients: [
      {
        id: "banana",
        name: "Banana",
        unitDescription: "1 medium banana",
        quantity: "1",
      },
      {
        id: "peanut-butter",
        name: "Natural Peanut Butter",
        unitDescription: "2 tbsp",
        quantity: "2 tbsp",
      },
      {
        id: "protein-powder",
        name: "Vanilla Protein Powder",
        unitDescription: "1 scoop",
        quantity: "1 scoop",
      },
      {
        id: "greek-yogurt",
        name: "Greek Yogurt",
        unitDescription: "3/4 cup",
        quantity: "1/2 cup",
      },
    ],
    boosters: ["booster-protein"],
    instructions: [
      "Add banana, peanut butter, and yogurt to blender.",
      "Include 1 cup milk of choice and protein powder.",
      "Blend until smooth; add ice for thickness.",
    ],
  },
  {
    id: "post-workout-power",
    name: "Post-Workout Power",
    color: "#ff9770",
    description: "Balanced macros to replenish energy after intense sessions.",
    calories: 360,
    protein: 28,
    carbs: 40,
    fat: 9,
    ingredients: [
      {
        id: "strawberry",
        name: "Strawberries",
        unitDescription: "1 cup sliced",
        quantity: "1 cup",
      },
      {
        id: "banana",
        name: "Banana",
        unitDescription: "1 medium banana",
        quantity: "1",
      },
      {
        id: "protein-powder",
        name: "Vanilla Protein Powder",
        unitDescription: "1 scoop",
        quantity: "1 scoop",
      },
      {
        id: "spinach",
        name: "Spinach",
        unitDescription: "1 cup raw",
        quantity: "1 cup",
      },
    ],
    boosters: ["booster-collagen"],
    instructions: [
      "Blend strawberries, banana, and 1 cup oat milk.",
      "Add protein powder and spinach.",
      "Blend until smooth; serve over ice.",
    ],
  },
];
