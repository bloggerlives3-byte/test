const PremiumGoalPlansPage = () => {
  const templates = [
    {
      name: "Muscle Build",
      summary: "Higher protein templates with optional creatine and collagen add-ons.",
      steps: [
        "Morning fuel blend with 30g protein",
        "Pre-lift quick carbs smoothie",
        "Post-session recovery with glutamine",
        "Weekly progression tracker",
      ],
    },
    {
      name: "Detox Reset",
      summary: "Light, hydrating blends focused on greens, citrus, and fiber.",
      steps: [
        "Daily greens anchor smoothie",
        "Midday liver support blend",
        "Evening calm blend with magnesium",
        "Hydration checklist and journaling prompts",
      ],
    },
    {
      name: "Steady Energy",
      summary: "Low-glycemic approach for consistent focus and stamina.",
      steps: [
        "Balanced breakfast smoothie with oats",
        "Snack-sized pick-me-up with matcha",
        "Electrolyte afternoon refresher",
        "Macro log template for the week",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Goal Plan Templates
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Personalize your smooth journey
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Pick a template, duplicate it, and customize each step with your saved smoothies. Track progress in your own copy.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {templates.map((template) => (
          <article
            key={template.name}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              {template.name}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
              {template.summary}
            </p>
            <ol className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
              {template.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumGoalPlansPage;
