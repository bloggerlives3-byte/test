"use client";

import { useState } from "react";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";

type ToggleOption = {
  id: string;
  label: string;
};

const FRUITS: ToggleOption[] = [
  { id: "banana", label: "Banana" },
  { id: "pineapple", label: "Pineapple" },
  { id: "mango", label: "Mango" },
];

const GREENS: ToggleOption[] = [
  { id: "spinach", label: "Spinach" },
  { id: "kale", label: "Kale" },
  { id: "avocado", label: "Avocado" },
];

const BOOSTERS: ToggleOption[] = [
  { id: "booster-collagen", label: "Collagen" },
  { id: "booster-protein", label: "Protein Powder" },
  { id: "booster-spirulina", label: "Spirulina" },
  { id: "booster-chia", label: "Chia" },
];

const AutumnBuilder = () => {
  const { saveSmoothie } = useSmoothieLibrary();
  const [name, setName] = useState("Autumn Custom Smoothie");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(["banana"]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

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
    if (!name.trim() || selectedIngredients.length === 0) {
      setStatus("Add a name and at least one ingredient.");
      return;
    }
    const result = saveSmoothie(name.trim(), selectedIngredients, selectedBoosters);
    if (result?.error) {
      setStatus(result.error);
    } else {
      setStatus("Your autumn blend is saved!");
    }
  };

  return (
    <section className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-berry)]/5 p-6">
      <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
        Craft your autumn smoothie
      </h2>
      <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
        Choose seasonal ingredients, layer boosters, and save the recipe to your library.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="autumn-name">
            Smoothie name
          </label>
          <input
            id="autumn-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Fruits</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {FRUITS.map((option) => {
              const active = selectedIngredients.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggleIngredient(option.id)}
                    className={`w-full rounded-full border px-3 py-2 transition ${
                      active
                        ? "border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10"
                        : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/60"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Greens & Creaminess</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {GREENS.map((option) => {
              const active = selectedIngredients.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggleIngredient(option.id)}
                    className={`w-full rounded-full border px-3 py-2 transition ${
                      active
                        ? "border-[color:var(--color-accent-berry)] bg-[color:var(--color-accent-berry)]/10"
                        : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-berry)]/60"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Boosters</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {BOOSTERS.map((option) => {
              const active = selectedBoosters.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggleBooster(option.id)}
                    className={`w-full rounded-full border px-3 py-2 transition ${
                      active
                        ? "border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10"
                        : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/60"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[color:var(--color-surface)] p-4 text-sm text-[color:var(--color-foreground)]/80">
        <h4 className="text-sm font-semibold text-[color:var(--color-foreground)]">Blend summary</h4>
        <p className="mt-2">Ingredients: {selectedIngredients.join(", ") || "Select ingredients"}</p>
        <p className="mt-1">Boosters: {selectedBoosters.length ? selectedBoosters.join(", ") : "Optional"}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-[color:var(--color-accent-leaf)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
        >
          Save autumn smoothie
        </button>
        {status ? (
          <p className="text-xs text-[color:var(--color-foreground)]/60">{status}</p>
        ) : null}
      </div>
    </section>
  );
};

export default AutumnBuilder;
