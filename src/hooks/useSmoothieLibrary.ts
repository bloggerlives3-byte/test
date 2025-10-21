import { useCallback, useEffect, useState } from "react";
import {
  loadFavoriteRecipeIds,
  loadSavedSmoothies,
  persistFavoriteRecipeIds,
  persistSavedSmoothies,
  syncFavoriteRecipe,
  syncSmoothieToSupabase,
} from "@/lib/data-service";
import { computeMacros } from "@/lib/nutrition";
import type { SmoothieRecord } from "@/types/smoothie";

const createSmoothieId = (name: string) =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;

export const useSmoothieLibrary = () => {
  const [smoothies, setSmoothies] = useState<SmoothieRecord[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setSmoothies(loadSavedSmoothies());
    setFavorites(loadFavoriteRecipeIds());
  }, []);

  const saveSmoothie = useCallback(
    (name: string, ingredientIds: string[], boosterIds: string[]) => {
      if (!name.trim() || ingredientIds.length === 0) {
        return { error: "Add a name and at least one ingredient." };
      }

      const macros = computeMacros(ingredientIds, boosterIds);
      const smoothie: SmoothieRecord = {
        id: createSmoothieId(name),
        name: name.trim(),
        ingredientIds,
        boosterIds,
        macros,
        createdAt: new Date().toISOString(),
      };

      setSmoothies((prev) => {
        const next = [smoothie, ...prev];
        persistSavedSmoothies(next);
        return next;
      });

      syncSmoothieToSupabase(smoothie).catch((error) => {
        console.warn("Smoothie sync skipped", error);
      });

      return { smoothie };
    },
    [],
  );

  const removeSmoothie = useCallback((id: string) => {
    setSmoothies((prev) => {
      const next = prev.filter((item) => item.id !== id);
      persistSavedSmoothies(next);
      return next;
    });
  }, []);

  const toggleFavoriteRecipe = useCallback((recipeId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(recipeId);
      const next = exists
        ? prev.filter((id) => id !== recipeId)
        : [recipeId, ...prev];
      persistFavoriteRecipeIds(next);

      if (!exists) {
        syncFavoriteRecipe(recipeId).catch((error) => {
          console.warn("Favorite recipe sync skipped", error);
        });
      }

      return next;
    });
  }, []);

  return {
    smoothies,
    favorites,
    saveSmoothie,
    removeSmoothie,
    toggleFavoriteRecipe,
  };
};
