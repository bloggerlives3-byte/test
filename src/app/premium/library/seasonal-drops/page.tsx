const winterRecipes = [
  {
    id: "ginger-citrus-shield",
    name: "Ginger Citrus Shield",
    description: "Zesty vitamin C boost with warming ginger for circulation.",
    macros: { calories: 240, protein: 8, carbs: 45 },
    ingredients: [
      "1 orange, peeled",
      "1/2 grapefruit",
      "1 knob fresh ginger",
      "1/2 cup Greek yogurt",
      "1 tbsp local honey",
    ],
    boosters: ["Add turmeric for anti-inflammatory support"],
    steps: [
      "Blend citrus with honey and yogurt until smooth.",
      "Add ginger, pulse for 10 seconds.",
      "Serve over ice with a turmeric sprinkle.",
    ],
  },
  {
    id: "maple-chai-recovery",
    name: "Maple Chai Recovery",
    description: "Comforting chai spices paired with protein for post-workout recovery.",
    macros: { calories: 310, protein: 22, carbs: 38 },
    ingredients: [
      "1 frozen banana",
      "1 scoop vanilla protein",
      "1 cup chai tea (cooled)",
      "1 tsp maple syrup",
      "1 tbsp almond butter",
    ],
    boosters: ["Add collagen for joint support", "Top with cinnamon"],
    steps: [
      "Blend cooled chai tea with banana and protein.",
      "Add almond butter and maple until creamy.",
      "Dust with cinnamon before serving.",
    ],
  },
  {
    id: "spiced-beet-glow",
    name: "Spiced Beet Glow",
    description: "Earthy beet with warming spices to promote circulation and glow.",
    macros: { calories: 210, protein: 6, carbs: 40 },
    ingredients: [
      "1 small roasted beet",
      "1 cup frozen berries",
      "1/2 cup kefir",
      "1 tsp cacao powder",
      "1/8 tsp cayenne",
    ],
    boosters: ["Add maca powder for hormone support"],
    steps: [
      "Blend beet and kefir until smooth.",
      "Add berries and cacao, blend again.",
      "Finish with a pinch of cayenne for warmth.",
    ],
  },
];

const SeasonalDropsPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <a
        href="/premium/library"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to premium library
      </a>
      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Seasonal Drops · Winter Immunity
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Cozy blends for immune support
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Rotate these feature recipes into your routine when the temperatures drop. Each card highlights ingredients, boosters, and step-by-step guidance.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {winterRecipes.map((recipe) => (
          <article
            key={recipe.id}
            className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-berry)]/10"
          >
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
          </article>
        ))}
      </section>
    </div>
  );
};

export default SeasonalDropsPage;
