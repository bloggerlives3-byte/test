"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import type { SmoothieRecipe } from "@/data/recipes";
import { boosters } from "@/data/ingredients";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";

type RecipesExplorerProps = {
  recipes: SmoothieRecipe[];
};

const RecipesExplorerContent = ({ recipes }: RecipesExplorerProps) => {
  const searchParams = useSearchParams();
  const focusRecipeId = searchParams.get("focus");
  const focusRef = useRef<HTMLDivElement | null>(null);
  const { favorites, toggleFavoriteRecipe } = useSmoothieLibrary();

  const favoriteSet = useMemo(
    () => new Set(favorites),
    [favorites],
  );

  useEffect(() => {
    if (focusRecipeId && focusRef.current) {
      focusRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [focusRecipeId]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Signature Library
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Chef-tested smoothies ready to blend.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Favoriting recipes keeps them pinned for quick access across SMU-V
          Guide. Each blend is balanced for flavor, macros, and accessible
          ingredients.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {recipes.map((recipe) => {
          const isFocused = recipe.id === focusRecipeId;
          const recipeRef = isFocused ? focusRef : undefined;
          const isFavorite = favoriteSet.has(recipe.id);
          const boosterDetails = recipe.boosters?.map((boosterId) =>
            boosters.find((item) => item.id === boosterId)?.name ?? "",
          );

          return (
            <article
              key={recipe.id}
              ref={recipeRef}
              className={`flex flex-col gap-4 rounded-3xl border bg-[color:var(--color-surface)] p-6 transition ${
                isFocused
                  ? "border-[color:var(--color-accent-berry)] shadow-lg shadow-[color:var(--color-accent-berry)]/20"
                  : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/60"
              }`}
            >
              <div
                className="h-2 rounded-full"
                style={{ backgroundColor: recipe.color }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
                    {recipe.name}
                  </h2>
                  <p className="mt-1 text-sm text-[color:var(--color-foreground)]/70">
                    {recipe.description}
                  </p>
                </div>
                <button
                  type="button"
                  aria-pressed={isFavorite}
                  onClick={() => toggleFavoriteRecipe(recipe.id)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    isFavorite
                      ? "bg-[color:var(--color-accent-berry)] text-white"
                      : "border border-[color:var(--color-border)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent-berry)]/60"
                  }`}
                >
                  {isFavorite ? "Favorited" : "Save"}
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs text-[color:var(--color-foreground)]/70">
                <div className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-2 py-1">
                  {recipe.calories} cal
                </div>
                <div className="rounded-full bg-[color:var(--color-accent-leaf)]/10 px-2 py-1">
                  {recipe.protein}g protein
                </div>
                <div className="rounded-full bg-[color:var(--color-accent-mango)]/10 px-2 py-1">
                  {recipe.carbs}g carbs
                </div>
                <div className="rounded-full bg-[color:var(--color-foreground)]/10 px-2 py-1">
                  {recipe.fat}g fat
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
                  Ingredients
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
                  {recipe.ingredients.map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="flex items-start justify-between gap-4"
                    >
                      <span>{ingredient.name}</span>
                      <span className="text-xs text-[color:var(--color-foreground)]/50">
                        {ingredient.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {boosterDetails?.filter(Boolean)?.length ? (
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
                    Recommended Boosters
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {boosterDetails.map((label) =>
                      label ? (
                        <span
                          key={label}
                          className="rounded-full bg-[color:var(--color-accent-leaf)]/10 px-3 py-1 font-medium text-[color:var(--color-accent-leaf)]"
                        >
                          {label}
                        </span>
                      ) : null,
                    )}
                  </div>
                </div>
              ) : null}
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">
                  Steps
                </h3>
                <ol className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
                  {recipe.instructions.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-[2px] h-6 w-6 shrink-0 rounded-full bg-[color:var(--color-accent-berry)]/10 text-center text-xs font-semibold leading-6 text-[color:var(--color-accent-berry)]">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

const RecipesExplorer = (props: RecipesExplorerProps) => (
  <Suspense fallback={<div className="px-4 py-16 text-sm text-[color:var(--color-foreground)]/60">Loading recipes...</div>}>
    <RecipesExplorerContent {...props} />
  </Suspense>
);

export default RecipesExplorer;
