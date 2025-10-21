"use client";

import { useMemo, useState } from "react";
import { ingredients, boosters } from "@/data/ingredients";
import { useSmoothieLibrary } from "@/hooks/useSmoothieLibrary";

type ChecklistItem = {
  label: string;
  detail?: string;
  count: number;
};

const formatItems = (items: ChecklistItem[]): string =>
  items
    .map((item) =>
      item.count > 1
        ? `${item.count} × ${item.label}${item.detail ? ` (${item.detail})` : ""}`
        : `${item.label}${item.detail ? ` (${item.detail})` : ""}`,
    )
    .join("\n");

export default function GroceryPage() {
  const { smoothies } = useSmoothieLibrary();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const ingredientLookup = useMemo(() => {
    const lookup = new Map(
      ingredients.map((item) => [
        item.id,
        { name: item.name, unit: item.unitDescription },
      ]),
    );
    boosters.forEach((booster) => {
      lookup.set(booster.id, {
        name: booster.name,
        unit: booster.description,
      });
    });
    return lookup;
  }, []);

  const checklist = useMemo(() => {
    const ingredientMap = new Map<string, ChecklistItem>();

    selectedIds.forEach((smoothieId) => {
      const smoothie = smoothies.find((item) => item.id === smoothieId);
      if (!smoothie) {
        return;
      }

      smoothie.ingredientIds.forEach((ingredientId) => {
        const info = ingredientLookup.get(ingredientId);
        if (!info) {
          return;
        }
        const key = `ingredient-${ingredientId}`;
        const existing = ingredientMap.get(key);
        ingredientMap.set(key, {
          label: info.name,
          detail: info.unit,
          count: existing ? existing.count + 1 : 1,
        });
      });

      smoothie.boosterIds.forEach((boosterId) => {
        const info = ingredientLookup.get(boosterId);
        if (!info) {
          return;
        }
        const key = `booster-${boosterId}`;
        const existing = ingredientMap.get(key);
        ingredientMap.set(key, {
          label: info.name,
          detail: info.unit,
          count: existing ? existing.count + 1 : 1,
        });
      });
    });

    return Array.from(ingredientMap.values());
  }, [selectedIds, smoothies, ingredientLookup]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
    setCheckedItems(new Set());
  };

  const toggleChecklistItem = (label: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const handleCopy = async () => {
    if (!checklist.length || typeof navigator === "undefined") {
      return;
    }
    try {
      await navigator.clipboard.writeText(formatItems(checklist));
    } catch (error) {
      console.warn("Unable to copy checklist", error);
    }
  };

  const handleEmail = () => {
    if (!checklist.length || typeof window === "undefined") {
      return;
    }

    const body = encodeURIComponent(
      `SMU-V Grocery List:\n\n${formatItems(checklist)}`,
    );
    window.location.href = `mailto:?subject=SMU-V Grocery List&body=${body}`;
  };

  const handleDownload = () => {
    if (!checklist.length || typeof document === "undefined") {
      return;
    }
    const blob = new Blob(
      [`SMU-V Grocery List\n\n${formatItems(checklist)}`],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "smuv-grocery-list.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-mango)]">
          Grocery Tools
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Turn blends into a ready-to-shop list.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Select saved smoothies to instantly generate a checklist. Export to
          clipboard, email, or download for quick access.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
            Saved Smoothies
          </h2>
          <p className="mt-2 text-xs text-[color:var(--color-foreground)]/60">
            Choose one or multiple smoothies to merge ingredient lists.
          </p>
          <ul className="mt-4 space-y-3">
            {smoothies.length === 0 && (
              <li className="rounded-2xl border border-dashed border-[color:var(--color-border)] px-4 py-6 text-center text-xs text-[color:var(--color-foreground)]/50">
                Save smoothies in the builder to see them here.
              </li>
            )}
            {smoothies.map((smoothie) => {
              const active = selectedIds.includes(smoothie.id);
              return (
                <li key={smoothie.id}>
                  <button
                    type="button"
                    onClick={() => toggleSelection(smoothie.id)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      active
                        ? "border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10"
                        : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between text-sm font-semibold text-[color:var(--color-foreground)]">
                      <span>{smoothie.name}</span>
                      <span className="text-xs font-medium text-[color:var(--color-foreground)]/60">
                        {smoothie.ingredientIds.length} items
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[color:var(--color-foreground)]/50">
                      {smoothie.macros.calories} cal · {smoothie.macros.protein}
                      g protein
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
                On-screen Checklist
              </h2>
              <span className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
                {checklist.length} items
              </span>
            </div>
            <p className="mt-2 text-xs text-[color:var(--color-foreground)]/60">
              Tap items as you shop. Selections reset when you change smoothies.
            </p>
            <ul className="mt-4 space-y-3">
              {checklist.length === 0 && (
                <li className="rounded-2xl border border-dashed border-[color:var(--color-border)] px-4 py-6 text-center text-xs text-[color:var(--color-foreground)]/50">
                  Select at least one smoothie to generate a list.
                </li>
              )}
              {checklist.map((item) => {
                const key = `${item.label}-${item.detail ?? ""}`;
                const checked = checkedItems.has(key);
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => toggleChecklistItem(key)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        checked
                          ? "border-[color:var(--color-accent-mango)] bg-[color:var(--color-accent-mango)]/10 text-[color:var(--color-foreground)]/60 line-through"
                          : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-mango)]/60"
                      }`}
                    >
                      <span>
                        {item.count > 1 ? `${item.count} × ` : ""}
                        {item.label}
                      </span>
                      {item.detail ? (
                        <span className="text-xs text-[color:var(--color-foreground)]/50">
                          {item.detail}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
            <h2 className="text-base font-semibold text-[color:var(--color-foreground)]">
              Exports
            </h2>
            <p className="mt-2 text-xs text-[color:var(--color-foreground)]/60">
              Choose the format that fits your flow—copy, email, or download.
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full bg-[color:var(--color-accent-leaf)] px-5 py-3 font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90 disabled:cursor-not-allowed disabled:bg-[color:var(--color-accent-leaf)]/40"
                disabled={!checklist.length}
              >
                Copy Checklist
              </button>
              <button
                type="button"
                onClick={handleEmail}
                className="rounded-full border border-[color:var(--color-accent-leaf)] px-5 py-3 font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10 disabled:cursor-not-allowed disabled:border-[color:var(--color-border)] disabled:text-[color:var(--color-foreground)]/40"
                disabled={!checklist.length}
              >
                Draft Email
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="rounded-full border border-[color:var(--color-accent-berry)] px-5 py-3 font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10 disabled:cursor-not-allowed disabled:border-[color:var(--color-border)] disabled:text-[color:var(--color-foreground)]/40"
                disabled={!checklist.length}
              >
                Download .txt
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
