import { signatureRecipes } from "@/data/recipes";
import type { SmoothieRecipe } from "@/data/recipes";
import { wellnessTips } from "@/data/tips";
import type { SmoothieRecord } from "@/types/smoothie";
import { getSupabaseClient } from "./supabaseClient";

const SAVED_SMOOTHIES_KEY = "smuv-saved-smoothies";
const FAVORITE_RECIPES_KEY = "smuv-favorite-recipes";

const getTodayIndex = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const fetchWellnessTip = async (): Promise<string> => {
  const client = getSupabaseClient();
  const fallbackTip = wellnessTips[getTodayIndex() % wellnessTips.length];

  if (!client) {
    return fallbackTip;
  }

  try {
    const { data, error } = await client
      .from("wellness_tips")
      .select("tip")
      .order("created_at", { ascending: true });

    if (error || !data?.length) {
      return fallbackTip;
    }

    return data[getTodayIndex() % data.length]?.tip ?? fallbackTip;
  } catch (error_) {
    console.error("Failed to fetch tip from Supabase", error_);
    return fallbackTip;
  }
};

export const fetchSignatureRecipes = async (): Promise<SmoothieRecipe[]> => {
  const client = getSupabaseClient();

  if (!client) {
    return signatureRecipes;
  }

  try {
    const { data, error } = await client
      .from("signature_recipes")
      .select(
        "id, name, description, color, calories, protein, carbs, fat, instructions, ingredients, boosters",
      );

    if (error || !data?.length) {
      return signatureRecipes;
    }

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      color: row.color ?? "#ed4c78",
      calories: Number(row.calories ?? 0),
      protein: Number(row.protein ?? 0),
      carbs: Number(row.carbs ?? 0),
      fat: Number(row.fat ?? 0),
      instructions: (row.instructions ?? []) as SmoothieRecipe["instructions"],
      ingredients: (row.ingredients ?? []) as SmoothieRecipe["ingredients"],
      boosters: (row.boosters ?? []) as SmoothieRecipe["boosters"],
    }));
  } catch (error_) {
    console.error("Failed to fetch recipes from Supabase", error_);
    return signatureRecipes;
  }
};

export const loadSavedSmoothies = (): SmoothieRecord[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(SAVED_SMOOTHIES_KEY);
    if (!raw) {
      return [];
    }
    return JSON.parse(raw) as SmoothieRecord[];
  } catch (error) {
    console.warn("Unable to parse saved smoothies", error);
    return [];
  }
};

export const persistSavedSmoothies = (
  smoothies: SmoothieRecord[],
): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(SAVED_SMOOTHIES_KEY, JSON.stringify(smoothies));
};

export const syncSmoothieToSupabase = async (
  smoothie: SmoothieRecord,
): Promise<void> => {
  const client = getSupabaseClient();
  if (!client) {
    return;
  }

  try {
    await client.from("custom_smoothies").insert({
      id: smoothie.id,
      name: smoothie.name,
      ingredients: smoothie.ingredientIds,
      boosters: smoothie.boosterIds,
      calories: smoothie.macros.calories,
      protein: smoothie.macros.protein,
      carbs: smoothie.macros.carbs,
      fat: smoothie.macros.fat,
    });
  } catch (error) {
    console.error("Unable to sync smoothie to Supabase", error);
  }
};

export const loadFavoriteRecipeIds = (): string[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(FAVORITE_RECIPES_KEY);
    if (!raw) {
      return [];
    }
    return JSON.parse(raw) as string[];
  } catch (error) {
    console.warn("Unable to parse favorite recipes", error);
    return [];
  }
};

export const persistFavoriteRecipeIds = (ids: string[]): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(FAVORITE_RECIPES_KEY, JSON.stringify(ids));
};

export const syncFavoriteRecipe = async (
  recipeId: string,
): Promise<void> => {
  const client = getSupabaseClient();
  if (!client) {
    return;
  }

  try {
    await client
      .from("favorite_recipes")
      .upsert({ recipe_id: recipeId }, { onConflict: "recipe_id" });
  } catch (error) {
    console.error("Unable to sync favorite recipe to Supabase", error);
  }
};
