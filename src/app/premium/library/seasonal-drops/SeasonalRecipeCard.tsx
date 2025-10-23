"use client";

import { useState } from "react";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";
import type { SeasonalRecipe } from "./types";

const SeasonalRecipeCard = ({ recipe }: { recipe: SeasonalRecipe }) => {
  const { saveSmoothie } = useSmoothieLibrary();
  const [status, setStatus] = useState<string | null>(null);
  const hasIngredients = recipe.ingredientIds.length > 0;

  const handleSave = () => {
    if (!hasIngredients) {
      setStatus("Add ingredient IDs to enable saving.");
      return;
    }
    const result = saveSmoothie(
      recipe.name,
      recipe.ingredientIds,
      recipe.boosterIds ?? [],
    );
    if (result?.error) {
      setStatus(result.error);
    } else {
      setStatus("Saved to your library!");
    }
  };

  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-berry)]/10">
      {recipe.color ? (
        <div
          className="mb-2 h-2 w-full rounded-full"
          style={{ backgroundColor: recipe.color }}
          aria-hidden
        />
      ) : null}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {recipe.name}
          </h2>
          <p className="mt-1 text-sm text-[color:var(--color-foreground)]/70">
            {recipe.description}
          </p>
        </div>
        <div className="text-right text-xs text-[color:var(--color-foreground)]/60">
          <p>{recipe.macros.calories} cal</p>
          <p>{recipe.macros.protein}g protein</p>
          <p>{recipe.macros.carbs}g carbs</p>
          {typeof recipe.saves === "number" ? (
            <p className="mt-1 font-semibold text-[color:var(--color-accent-berry)]">
              {recipe.saves} saves
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
          Ingredients
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-foreground)]/80">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
          Recommended Boosters
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-foreground)]/80">
          {recipe.boosters.map((booster) => (
            <li key={booster}>{booster}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
          Steps
        </h3>
        <ol className="mt-2 space-y-1 text-sm text-[color:var(--color-foreground)]/80">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90 disabled:bg-[color:var(--color-border)]"
        disabled={!hasIngredients}
      >
        Save to My Library
      </button>
      {status ? (
        <p className="text-xs text-[color:var(--color-foreground)]/60">{status}</p>
      ) : null}
    </article>
  );
};

export default SeasonalRecipeCard;
