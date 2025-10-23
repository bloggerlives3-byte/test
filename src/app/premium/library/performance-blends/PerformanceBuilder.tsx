"use client";

import { useState } from "react";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";

const BASE_OPTIONS = [
  { id: "coconut-water", label: "Coconut Water" },
  { id: "oat-milk", label: "Oat Milk" },
  { id: "almond-milk", label: "Almond Milk" },
];

const PROTEIN_OPTIONS = [
  { id: "protein-powder", label: "Protein Powder" },
  { id: "greek-yogurt", label: "Greek Yogurt" },
  { id: "chia-seeds", label: "Chia Seeds" },
];

const BOOSTER_OPTIONS = [
  { id: "booster-collagen", label: "Collagen" },
  { id: "booster-protein", label: "Extra Protein" },
  { id: "booster-spirulina", label: "Spirulina" },
  { id: "booster-chia", label: "Chia" },
];

const PerformanceBuilder = () => {
  const { saveSmoothie } = useSmoothieLibrary();
  const [name, setName] = useState("Performance Custom Smoothie");
  const [selectedBase, setSelectedBase] = useState<string>(BASE_OPTIONS[0].id);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([PROTEIN_OPTIONS[0].id]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const toggleProtein = (id: string) => {
    setSelectedProteins((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleBooster = (id: string) => {
    setSelectedBoosters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSave = () => {
    const ingredients = [selectedBase, ...selectedProteins];
    if (!name.trim() || ingredients.length === 0) {
      setStatus("Add a name and at least one ingredient.");
      return;
    }

    // Filter out base items that are not part of ingredients dataset
    const mappedIngredients = ingredients.filter((id) =>
      ["pineapple", "banana", "spinach", "cucumber", "protein-powder", "greek-yogurt", "chia-seeds", "peanut-butter", "kale", "avocado"].includes(id),
    );

    const result = saveSmoothie(
      name.trim(),
      mappedIngredients.length ? mappedIngredients : ["banana", "protein-powder"],
      selectedBoosters,
    );

    if (result?.error) {
      setStatus(result.error);
    } else {
      setStatus("Performance smoothie saved!");
    }
  };

  return (
    <section className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-leaf)]/5 p-6">
      <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
        Build your own performance blend
      </h2>
      <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
        Choose a hydration base, layer proteins, add boosters, and save your custom recipe.
      </p>

      <div className="mt-6 space-y-3">
        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="performance-name">
          Smoothie name
        </label>
        <input
          id="performance-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Base</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {BASE_OPTIONS.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => setSelectedBase(option.id)}
                  className={`w-full rounded-full border px-3 py-2 transition ${
                    selectedBase === option.id
                      ? "border-[color:var(--color-accent-berry)] bg-[color:var(--color-accent-berry)]/10"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-berry)]/60"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Proteins & Carbs</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {PROTEIN_OPTIONS.map((option) => {
              const active = selectedProteins.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggleProtein(option.id)}
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
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Boosters</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {BOOSTER_OPTIONS.map((option) => {
              const active = selectedBoosters.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggleBooster(option.id)}
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
      </div>

      <div className="mt-6 rounded-2xl bg-[color:var(--color-surface)] p-4 text-sm text-[color:var(--color-foreground)]/80">
        <h4 className="text-sm font-semibold text-[color:var(--color-foreground)]">Blend summary</h4>
        <p className="mt-2">Base: {selectedBase}</p>
        <p className="mt-1">
          Proteins & Carbs: {selectedProteins.length ? selectedProteins.join(", ") : "Select at least one"}
        </p>
        <p className="mt-1">
          Boosters: {selectedBoosters.length ? selectedBoosters.join(", ") : "Optional"}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-[color:var(--color-accent-leaf)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
        >
          Save performance smoothie
        </button>
        {status ? (
          <p className="text-xs text-[color:var(--color-foreground)]/60">{status}</p>
        ) : null}
      </div>
    </section>
  );
};

export default PerformanceBuilder;
