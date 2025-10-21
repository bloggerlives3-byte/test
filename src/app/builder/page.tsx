"use client";

import { useMemo, useState } from "react";
import {
  ingredientCategories,
  ingredients,
  boosters,
} from "@/data/ingredients";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";
import { computeMacros } from "@/lib/nutrition";

const categoryOrder: Array<keyof typeof ingredientCategories> = [
  "fruit",
  "veggies",
  "proteins",
];

export default function BuilderPage() {
  const [name, setName] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([
    "banana",
    "spinach",
  ]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { saveSmoothie, smoothies, removeSmoothie } = useSmoothieLibrary();

  const macros = useMemo(
    () => computeMacros(selectedIngredients, selectedBoosters),
    [selectedIngredients, selectedBoosters],
  );

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleBooster = (id: string) => {
    setSelectedBoosters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSave = () => {
    const result = saveSmoothie(name, selectedIngredients, selectedBoosters);
    if (result?.error) {
      setFeedback(result.error);
      return;
    }

    if (result?.smoothie) {
      setFeedback(`Saved ${result.smoothie.name} to your library.`);
      setName("");
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Smoothie Builder
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Craft a custom blend in three steps.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Select your ingredients, toggle optional boosters, and save the
          smoothie for future grocery lists.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="smoothie-name"
                className="block text-sm font-semibold text-[color:var(--color-foreground)]"
              >
                Smoothie Name
              </label>
              <input
                id="smoothie-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Morning Glow"
                className="mt-2 w-full rounded-full border border-[color:var(--color-border)] px-4 py-3 text-sm focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
              />
            </div>

            {categoryOrder.map((categoryKey) => {
              const category = ingredientCategories[categoryKey];
              return (
                <div key={categoryKey}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
                      {category.label}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-foreground)]/40">
                      Select multiple
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-[color:var(--color-foreground)]/60">
                    {category.description}
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {ingredients
                      .filter((item) => item.category === categoryKey)
                      .map((item) => {
                        const selected = selectedIngredients.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleIngredient(item.id)}
                            className={`rounded-2xl border px-4 py-3 text-left transition ${
                              selected
                                ? "border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10"
                                : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/60"
                            }`}
                          >
                            <div className="flex items-center justify-between text-sm font-semibold">
                              <span>{item.name}</span>
                              <span className="text-xs font-medium text-[color:var(--color-foreground)]/60">
                                {item.calories} cal
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-[color:var(--color-foreground)]/60">
                              {item.unitDescription}
                            </p>
                          </button>
                        );
                      })}
                  </div>
                </div>
              );
            })}

            <div>
              <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
                Add-On Boosters
              </h2>
              <p className="mt-1 text-xs text-[color:var(--color-foreground)]/60">
                Toggle functional boosts to adjust your macros.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {boosters.map((booster) => {
                  const active = selectedBoosters.includes(booster.id);
                  return (
                    <button
                      key={booster.id}
                      type="button"
                      onClick={() => toggleBooster(booster.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? "border-[color:var(--color-accent-berry)] bg-[color:var(--color-accent-berry)]/10"
                          : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-berry)]/60"
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span>{booster.name}</span>
                        <span className="text-xs font-medium text-[color:var(--color-foreground)]/60">
                          {booster.calories} cal
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[color:var(--color-foreground)]/60">
                        {booster.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-foreground)]/40">
              <span>Step 3</span>
              <div className="h-px flex-1 bg-[color:var(--color-border)]" />
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
            >
              Save Smoothie
            </button>
          </div>
          {feedback && (
            <div className="rounded-2xl bg-[color:var(--color-accent-berry)]/10 px-4 py-3 text-sm text-[color:var(--color-accent-berry)]">
              {feedback}
            </div>
          )}
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[color:var(--color-accent-leaf)]/30 bg-[color:var(--color-accent-leaf)]/5 p-6">
            <h2 className="text-base font-semibold text-[color:var(--color-accent-leaf)]">
              Nutritional Estimate
            </h2>
            <p className="mt-2 text-xs text-[color:var(--color-foreground)]/60">
              Approximate values per serving. Adjust to your preferred portion
              sizes as needed.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt>Calories</dt>
                <dd className="font-semibold">{macros.calories}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Protein</dt>
                <dd className="font-semibold">{macros.protein} g</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Carbs</dt>
                <dd className="font-semibold">{macros.carbs} g</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Fat</dt>
                <dd className="font-semibold">{macros.fat} g</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
                Saved Smoothies
              </h2>
              <span className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
                {smoothies.length}
              </span>
            </div>
            <p className="mt-2 text-xs text-[color:var(--color-foreground)]/60">
              Saved smoothies sync to your grocery list when you need them.
            </p>
            <ul className="mt-4 space-y-4">
              {smoothies.length === 0 && (
                <li className="rounded-2xl border border-dashed border-[color:var(--color-border)] px-4 py-6 text-center text-xs text-[color:var(--color-foreground)]/50">
                  Your saved smoothies will appear here.
                </li>
              )}
              {smoothies.map((smoothie) => (
                <li
                  key={smoothie.id}
                  className="rounded-2xl border border-[color:var(--color-border)] px-4 py-3 text-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[color:var(--color-foreground)]">
                        {smoothie.name}
                      </p>
                      <p className="text-xs text-[color:var(--color-foreground)]/60">
                        {smoothie.ingredientIds.length} ingredients ·{" "}
                        {smoothie.boosterIds.length} boosters
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSmoothie(smoothie.id)}
                      className="text-xs font-medium text-[color:var(--color-accent-berry)] transition hover:text-[color:var(--color-accent-berry)]/80"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
