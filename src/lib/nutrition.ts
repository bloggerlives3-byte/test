import { boosters, ingredients } from "@/data/ingredients";
import type { MacroProfile } from "@/types/smoothie";

export const getIngredientById = (id: string) =>
  ingredients.find((item) => item.id === id);

export const getBoosterById = (id: string) =>
  boosters.find((item) => item.id === id);

const round = (value: number) => Math.round(value * 10) / 10;

export const computeMacros = (
  ingredientIds: string[],
  boosterIds: string[],
): MacroProfile => {
  const macroTotals = ingredientIds.reduce(
    (totals, currentId) => {
      const ingredient = getIngredientById(currentId);
      if (!ingredient) {
        return totals;
      }

      return {
        calories: totals.calories + ingredient.calories,
        protein: totals.protein + ingredient.protein,
        carbs: totals.carbs + ingredient.carbs,
        fat: totals.fat + ingredient.fat,
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  const withBoosters = boosterIds.reduce((totals, boosterId) => {
    const booster = getBoosterById(boosterId);
    if (!booster) {
      return totals;
    }

    return {
      calories: totals.calories + booster.calories,
      protein: totals.protein + booster.protein,
      carbs: totals.carbs + booster.carbs,
      fat: totals.fat + booster.fat,
    };
  }, macroTotals);

  return {
    calories: round(withBoosters.calories),
    protein: round(withBoosters.protein),
    carbs: round(withBoosters.carbs),
    fat: round(withBoosters.fat),
  };
};
