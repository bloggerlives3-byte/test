const PremiumLibraryPage = () => {
  const sections = [
    {
      title: "Seasonal Drops",
      description:
        "Fresh blends released each season so you always have an in-season flavor on rotation.",
      highlights: [
        { label: "Winter Immunity series with warming spices", href: "/premium/library/seasonal-drops#winter-immunity" },
        { label: "Spring greens reset featuring citrus", href: "/premium/library/seasonal-drops#spring-reset" },
        { label: "Summer hydration with coconut and mint", href: "/premium/library/seasonal-drops#summer-hydration" },
        { label: "Autumn chai-inspired recovery blends", href: "/premium/library/seasonal-drops#autumn-recovery" },
      ],
    },
    {
      title: "Performance Blends",
      description:
        "Macro-balanced formulas designed for endurance, strength, and recovery goals.",
      highlights: [
        { label: "Pre-workout carb-optimized lineup", href: "/premium/library/performance-blends#pre-workout" },
        { label: "Post-lift high-protein refuelers", href: "/premium/library/performance-blends#post-lift" },
        { label: "Low-glycemic morning energy smoothies", href: "/premium/library/performance-blends#low-glycemic" },
        { label: "Advanced booster tips with adaptogens", href: "/premium/library/performance-blends#advanced-boosters" },
      ],
    },
    {
      title: "Kid-Friendly Favorites",
      description:
        "Playful textures and hidden veggies to keep smaller palates excited and nourished.",
      highlights: [
        { label: "Colorful unicorn-inspired blends", href: "/premium/library/kid-friendly#colorful-creations" },
        { label: "Nut-free school-safe options", href: "/premium/library/kid-friendly#school-safe" },
        { label: "Frozen popsicle conversions", href: "/premium/library/kid-friendly#frozen-fun" },
        { label: "DIY topping bar ideas", href: "/premium/library/kid-friendly#topping-bar" },
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
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
              {section.highlights.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumLibraryPage;
