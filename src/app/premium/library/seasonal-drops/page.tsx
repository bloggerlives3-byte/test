const SeasonalDropsPage = () => {
  const seasons = [
    {
      name: "Winter Immunity",
      anchor: "winter-immunity",
      description:
        "Warm up with spices, citrus, and immune-support boosters to keep energy levels high during colder months.",
      blends: [
        "Ginger Citrus Shield",
        "Maple Chai Recovery",
        "Spiced Beet Glow",
      ],
    },
    {
      name: "Spring Reset",
      anchor: "spring-reset",
      description:
        "Fresh herbs, greens, and vitamin-rich citrus blends to help your body reset after winter.",
      blends: [
        "Minty Green Awakening",
        "Citrus Detox Refresher",
        "Watercress Glow",
      ],
    },
    {
      name: "Summer Hydration",
      anchor: "summer-hydration",
      description:
        "Cooling blends with coconut water, mint, and electrolytes for hot days and outdoor adventures.",
      blends: [
        "Coconut Aloe Cooler",
        "Melon Mint Splash",
        "Pineapple Electrolyte Pop",
      ],
    },
    {
      name: "Autumn Recovery",
      anchor: "autumn-recovery",
      description:
        "Comforting flavors with chai spices, pumpkin, and adaptogens to help you wind down and restore.",
      blends: [
        "Pumpkin Spice Reboot",
        "Apple Chai Muscle Soothe",
        "Cinnamon Ashwagandha Calm",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Seasonal Drops
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Rotate flavors with the seasons
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Each collection prioritizes in-season produce and functional boosters so your smoothies stay vibrant year-round.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {seasons.map((season) => (
          <article
            key={season.name}
            id={season.anchor}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              {season.name}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
              {season.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
              {season.blends.map((blend) => (
                <li key={blend}>{blend}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default SeasonalDropsPage;
