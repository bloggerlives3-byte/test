"use client";

import { useState } from "react";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";

const FRUIT_OPTIONS = [
  { id: "banana", label: "Banana" },
  { id: "pineapple", label: "Pineapple" },
  { id: "mango", label: "Mango" },
  { id: "spinach", label: "Hidden Spinach" },
];

const EXTRA_OPTIONS = [
  { id: "chia-seeds", label: "Chia Seeds" },
  { id: "greek-yogurt", label: "Yogurt" },
  { id: "peanut-butter", label: "Nut/Seed Butter" },
];

const BOOSTER_OPTIONS = [
  { id: "booster-chia", label: "Chia" },
  { id: "booster-protein", label: "Protein (kid-friendly)" },
  { id: "booster-spirulina", label: "Spirulina" },
];

const KidsBuilder = () => {
  const { saveSmoothie } = useSmoothieLibrary();
  const [name, setName] = useState("Kid Custom Smoothie");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(["banana"]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const toggle = (
    id: string,
    list: string[],
    setter: (items: string[]) => void,
  ) => {
    setter(list.includes(id) ? list.filter((item) => item !== id) : [...list, id]);
  };

  const handleSave = () => {
    const allIngredients = [...selectedIngredients, ...selectedExtras];
    if (!name.trim() || allIngredients.length === 0) {
      setStatus("Give it a name and pick at least one ingredient.");
      return;
    }

    const result = saveSmoothie(name.trim(), allIngredients, selectedBoosters);
    if (result?.error) {
      setStatus(result.error);
    } else {
      setStatus("Saved! Let the kids taste-test it.");
    }
  };

  return (
    <section className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-berry)]/5 p-6">
      <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
        Build a kid-friendly smoothie
      </h2>
      <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
        Mix fruity bases, sneak in greens, add fun boost options, and save the recipe for future mornings.
      </p>

      <div className="mt-6 space-y-3">
        <label className="block text-sm font-semibold text-[color:var(--color-foreground)]" htmlFor="kids-name">
          Smoothie name
        </label>
        <input
          id="kids-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Fruits & Colors</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {FRUIT_OPTIONS.map((option) => {
              const active = selectedIngredients.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggle(option.id, selectedIngredients, setSelectedIngredients)}
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
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Extras</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {EXTRA_OPTIONS.map((option) => {
              const active = selectedExtras.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggle(option.id, selectedExtras, setSelectedExtras)}
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
            {BOOSTER_OPTIONS.map((option) => {
              const active = selectedBoosters.includes(option.id);
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => toggle(option.id, selectedBoosters, setSelectedBoosters)}
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
        <p className="mt-2">
          Ingredients: {selectedIngredients.concat(selectedExtras).join(", ") || "Select ingredients"}
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
          Save kid smoothie
        </button>
        {status ? (
          <p className="text-xs text-[color:var(--color-foreground)]/60">{status}</p>
        ) : null}
      </div>
    </section>
  );
};

export default KidsBuilder;
