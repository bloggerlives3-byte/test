const PerformanceBlendsPage = () => {
  const categories = [
    {
      name: "Pre-Workout",
      anchor: "pre-workout",
      description: "Carb-forward blends to fuel your session without weighing you down.",
      ideas: [
        "Banana Oat Power Up",
        "Blueberry Beet Booster",
        "Matcha Citrus Charger",
      ],
    },
    {
      name: "Post-Lift Recovery",
      anchor: "post-lift",
      description: "High-protein mixes with anti-inflammatory ingredients to rebuild and restore.",
      ideas: [
        "Tart Cherry Rebuild",
        "Chocolate Collagen Repair",
        "Pineapple Turmeric Calm",
      ],
    },
    {
      name: "Low-Glycemic Mornings",
      anchor: "low-glycemic",
      description: "Balanced smoothies that steady blood sugar and keep you focused.",
      ideas: [
        "Cinnamon Almond Steady",
        "Vanilla Hemp Focus",
        "Berry Chia Harmony",
      ],
    },
    {
      name: "Advanced Boosters",
      anchor: "advanced-boosters",
      description: "Adaptogenic add-ons to support stress response and recovery.",
      ideas: [
        "Rhodiola Sunrise Blend",
        "Ashwagandha Calm Refuel",
        "Cordyceps Endurance Shake",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Performance Blends
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Train smarter with targeted blends
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Customize each category with your preferred ingredients and boosters to match your training plan.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {categories.map((category) => (
          <article
            key={category.name}
            id={category.anchor}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              {category.name}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
              {category.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
              {category.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PerformanceBlendsPage;
