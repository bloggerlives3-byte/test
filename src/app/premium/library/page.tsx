const PremiumLibraryPage = () => {
  const sections = [
    {
      title: "Seasonal Drops",
      description:
        "Fresh blends released each season so you always have an in-season flavor on rotation.",
      highlights: [
        "Winter Immunity series with warming spices",
        "Spring greens reset featuring citrus",
        "Summer hydration with coconut and mint",
        "Autumn chai-inspired recovery blends",
      ],
    },
    {
      title: "Performance Blends",
      description:
        "Macro-balanced formulas designed for endurance, strength, and recovery goals.",
      highlights: [
        "Pre-workout carb-optimized lineup",
        "Post-lift high-protein refuelers",
        "Low-glycemic morning energy smoothies",
        "Advanced booster tips with adaptogens",
      ],
    },
    {
      title: "Kid-Friendly Favorites",
      description:
        "Playful textures and hidden veggies to keep smaller palates excited and nourished.",
      highlights: [
        "Colorful unicorn-inspired blends",
        "Nut-free school-safe options",
        "Frozen popsicle conversions",
        "DIY topping bar ideas",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Premium Library
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Curated blends at your fingertips
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Explore exclusive collections crafted for premium members. Use these sections to plan your next smoothie cycle.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
              {section.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
              {section.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumLibraryPage;
