export type SeasonalRecipe = {
  id: string;
  name: string;
  description: string;
  macros: { calories: number; protein: number; carbs: number };
  saves?: number;
  color?: string;
  ingredientIds: string[];
  boosterIds?: string[];
  ingredients: string[];
  boosters: string[];
  steps: string[];
};
