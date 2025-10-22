const KidFriendlyLibraryPage = () => {
  const experiences = [
    {
      title: "Colorful Creations",
      anchor: "colorful-creations",
      description: "Bright smoothies that make nutrition feel magical.",
      items: [
        "Galaxy Grape Swirl",
        "Rainbow Mango Spin",
        "Dragon Fruit Sparkler",
      ],
    },
    {
      title: "School-Safe Sips",
      anchor: "school-safe",
      description: "Nut-free and allergy-aware recipes perfect for lunchboxes.",
      items: [
        "Sunflower Butter Delight",
        "Apple Cinnamon Crunch",
        "Berry Oat School Smoothie",
      ],
    },
    {
      title: "Frozen Fun",
      anchor: "frozen-fun",
      description: "Turn smoothies into popsicles or slushies for warm days.",
      items: [
        "Watermelon Slush Pop",
        "Peachy Freeze Bar",
        "Blueberry Yogurt Pop",
      ],
    },
    {
      title: "DIY Topping Bar",
      anchor: "topping-bar",
      description: "Encourage kids to add healthy toppings and boost creativity.",
      items: [
        "Granola sprinkle station",
        "Chia & flax crunchy mix",
        "Fruit confetti bowl",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Kid-Friendly Favorites
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Keep little smoothie lovers inspired
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Mix and match categories to build excitement around nutrient-packed smoothies for kids.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            id={experience.anchor}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              {experience.title}
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
              {experience.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
              {experience.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default KidFriendlyLibraryPage;
