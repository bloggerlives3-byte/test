import Link from "next/link";
import { fetchSignatureRecipes, fetchWellnessTip } from "@/lib/data-service";

const featureHighlights = [
  {
    title: "Blend Your Way",
    description:
      "Select fruit, greens, and protein in seconds with real-time nutrition estimates.",
  },
  {
    title: "Curated Favorites",
    description:
      "Lean on six signature smoothies tested for taste, health, and simplicity.",
  },
  {
    title: "Smart Shopping",
    description:
      "Turn any smoothie into a shareable grocery checklist or quick email draft.",
  },
];

export default async function Home() {
  const [tip, recipes] = await Promise.all([
    fetchWellnessTip(),
    fetchSignatureRecipes(),
  ]);

  return (
    <div className="bg-[color:var(--color-background)] pb-16">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--color-accent-leaf)] via-[#6fd19f] to-[color:var(--color-accent-mango)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-20 text-white md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-sm uppercase tracking-[0.2em]">SMU-V Guide</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Your smoothie co-pilot for fast, nutritious blends.
            </h1>
            <p className="text-base text-white/90">
              Build custom smoothies, lean on our curated recipes, and export
              grocery lists in under a minute. Designed for health-conscious
              routines and busy mornings.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/builder"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-accent-leaf)] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Build a Smoothie
              </Link>
              <Link
                href="/recipes"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Recipes
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/15 p-6 text-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Today&apos;s Wellness Tip</h2>
            <p className="mt-3 text-white/90">{tip}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4">
        <div className="grid gap-4 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-leaf)]/10"
            >
              <h3 className="text-lg font-semibold text-[color:var(--color-accent-leaf)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-foreground)]/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
              Signature Smoothies
            </h2>
            <p className="text-sm text-[color:var(--color-foreground)]/70">
              Crafted blends from the SMU-V library. Tap a recipe to view full
              ingredients and save favorites.
            </p>
          </div>
          <Link
            href="/recipes"
            className="hidden rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-sm font-medium text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)] hover:text-white md:inline-flex"
          >
            View All
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recipes.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
            >
              <div
                className="h-2 rounded-full"
                style={{ backgroundColor: recipe.color }}
              />
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]">
                  {recipe.name}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
                  {recipe.description}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs text-[color:var(--color-foreground)]/70">
                <div className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-2 py-1">
                  {recipe.calories} cal
                </div>
                <div className="rounded-full bg-[color:var(--color-accent-leaf)]/10 px-2 py-1">
                  {recipe.protein}g protein
                </div>
                <div className="rounded-full bg-[color:var(--color-accent-mango)]/10 px-2 py-1">
                  {recipe.carbs}g carbs
                </div>
              </div>
              <Link
                href={`/recipes?focus=${recipe.id}`}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-[color:var(--color-foreground)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]"
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4">
        <div className="grid gap-6 rounded-3xl bg-[color:var(--color-surface)] p-8 shadow-inner shadow-[color:var(--color-accent-berry)]/5 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
              From Blend to Basket
            </h2>
            <p className="text-sm text-[color:var(--color-foreground)]/70">
              Save any creation to build a grocery list in a tap. Stay organized
              with on-screen checklists or send ingredients to your inbox.
            </p>
            <Link
              href="/grocery"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-berry)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              Open Grocery Tools
            </Link>
          </div>
          <div className="rounded-2xl border border-dashed border-[color:var(--color-accent-berry)]/40 bg-[color:var(--color-accent-berry)]/5 p-6 text-sm text-[color:var(--color-foreground)]/70">
            <h3 className="text-base font-semibold text-[color:var(--color-accent-berry)]">
              Checklist Preview
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full border border-[color:var(--color-accent-berry)]/50" />
                1 cup strawberries
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full border border-[color:var(--color-accent-berry)]/50" />
                1 scoop vanilla protein
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full border border-[color:var(--color-accent-berry)]/50" />
                1 tbsp chia seeds
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
