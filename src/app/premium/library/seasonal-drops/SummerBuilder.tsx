"use client";

import { useMemo, useState } from "react";

const baseIngredients = {
  base: ["Coconut water", "Aloe juice", "Sparkling water"],
  fruit: ["Watermelon", "Pineapple", "Mango", "Cucumber"],
  boosters: ["Chia seeds", "Pink salt", "Mint leaves", "Collagen"],
};

const SummerBuilder = () => {
  const [base, setBase] = useState("Coconut water");
  const [fruits, setFruits] = useState<string[]>(["Watermelon"]);
  const [boosters, setBoosters] = useState<string[]>([]);

  const summary = useMemo(
    () => ({
      base,
      fruits,
      boosters,
    }),
    [base, fruits, boosters],
  );

  const toggleItem = (value: string, list: string[], setter: (items: string[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  return (
    <section className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-leaf)]/5 p-6">
      <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
        Build a custom summer smoothie
      </h2>
      <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
        Select a hydration base, layer fruit, and finish with boosters. Use this as a quick worksheet, then save your blend in the builder.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Base</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {baseIngredients.base.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => setBase(option)}
                  className={`w-full rounded-full border px-3 py-2 transition ${
                    summary.base === option
                      ? "border-[color:var(--color-accent-berry)] bg-[color:var(--color-accent-berry)]/10"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-berry)]/50"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Fruit & Veg</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {baseIngredients.fruit.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => toggleItem(option, fruits, setFruits)}
                  className={`w-full rounded-full border px-3 py-2 transition ${
                    summary.fruits.includes(option)
                      ? "border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/50"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-foreground)]">Boosters</h3>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {baseIngredients.boosters.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => toggleItem(option, boosters, setBoosters)}
                  className={`w-full rounded-full border px-3 py-2 transition ${
                    summary.boosters.includes(option)
                      ? "border-[color:var(--color-accent-berry)] bg-[color:var(--color-accent-berry)]/10"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-berry)]/50"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[color:var(--color-surface)] p-4 text-sm text-[color:var(--color-foreground)]/80">
        <h4 className="text-sm font-semibold text-[color:var(--color-foreground)]">Your blend summary</h4>
        <p className="mt-2">
          Base: <span className="font-semibold text-[color:var(--color-accent-berry)]">{summary.base}</span>
        </p>
        <p className="mt-1">
          Fruit & Veg: {summary.fruits.length ? summary.fruits.join(", ") : "Select at least one"}
        </p>
        <p className="mt-1">
          Boosters: {summary.boosters.length ? summary.boosters.join(", ") : "Optional"}
        </p>
      </div>
    </section>
  );
};

export default SummerBuilder;
