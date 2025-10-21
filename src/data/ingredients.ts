export type IngredientCategory = "fruit" | "veggies" | "proteins";

export type Ingredient = {
  id: string;
  name: string;
  category: IngredientCategory;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  unitDescription: string;
};

export type Booster = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description: string;
};

export const ingredients: Ingredient[] = [
  {
    id: "banana",
    name: "Banana",
    category: "fruit",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.4,
    unitDescription: "1 medium banana",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    category: "fruit",
    calories: 50,
    protein: 1,
    carbs: 12,
    fat: 0.5,
    unitDescription: "1 cup sliced",
  },
  {
    id: "mango",
    name: "Mango",
    category: "fruit",
    calories: 99,
    protein: 1.4,
    carbs: 25,
    fat: 0.6,
    unitDescription: "1 cup diced",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    category: "fruit",
    calories: 82,
    protein: 0.9,
    carbs: 22,
    fat: 0.2,
    unitDescription: "1 cup chunks",
  },
  {
    id: "spinach",
    name: "Spinach",
    category: "veggies",
    calories: 7,
    protein: 0.9,
    carbs: 1.1,
    fat: 0.1,
    unitDescription: "1 cup raw",
  },
  {
    id: "kale",
    name: "Kale",
    category: "veggies",
    calories: 33,
    protein: 2.9,
    carbs: 6,
    fat: 0.6,
    unitDescription: "1 cup chopped",
  },
  {
    id: "cucumber",
    name: "Cucumber",
    category: "veggies",
    calories: 16,
    protein: 0.8,
    carbs: 3.8,
    fat: 0.2,
    unitDescription: "1 cup sliced",
  },
  {
    id: "avocado",
    name: "Avocado",
    category: "veggies",
    calories: 120,
    protein: 1.5,
    carbs: 6.4,
    fat: 10.5,
    unitDescription: "1/2 medium avocado",
  },
  {
    id: "protein-powder",
    name: "Vanilla Protein Powder",
    category: "proteins",
    calories: 120,
    protein: 24,
    carbs: 3,
    fat: 2,
    unitDescription: "1 scoop",
  },
  {
    id: "greek-yogurt",
    name: "Greek Yogurt",
    category: "proteins",
    calories: 100,
    protein: 17,
    carbs: 6,
    fat: 0.7,
    unitDescription: "3/4 cup",
  },
  {
    id: "peanut-butter",
    name: "Natural Peanut Butter",
    category: "proteins",
    calories: 188,
    protein: 8,
    carbs: 6,
    fat: 16,
    unitDescription: "2 tbsp",
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "proteins",
    calories: 138,
    protein: 4.7,
    carbs: 12,
    fat: 8.6,
    unitDescription: "2 tbsp",
  },
];

export const boosters: Booster[] = [
  {
    id: "booster-chia",
    name: "Chia Seeds",
    calories: 60,
    protein: 2,
    carbs: 5,
    fat: 3,
    description: "Fiber-rich omega boost.",
  },
  {
    id: "booster-collagen",
    name: "Collagen",
    calories: 35,
    protein: 9,
    carbs: 0,
    fat: 0,
    description: "Supports skin, joints, and recovery.",
  },
  {
    id: "booster-spirulina",
    name: "Spirulina",
    calories: 30,
    protein: 6,
    carbs: 1,
    fat: 0.5,
    description: "Algae-based antioxidant powerhouse.",
  },
  {
    id: "booster-protein",
    name: "Protein Powder",
    calories: 90,
    protein: 20,
    carbs: 2,
    fat: 1,
    description: "Extra protein for muscle support.",
  },
];

export const ingredientCategories: Record<
  IngredientCategory,
  { label: string; description: string }
> = {
  fruit: {
    label: "Fruit",
    description: "Base sweetness and vitamins.",
  },
  veggies: {
    label: "Veggies",
    description: "Greens and hydrating produce.",
  },
  proteins: {
    label: "Proteins & Boosters",
    description: "Protein and healthy fats.",
  },
};
