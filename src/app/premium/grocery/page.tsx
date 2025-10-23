import Link from "next/link";

const FEATURES = [
  {
    title: "Export PDF Lists",
    description:
      "Generate branded PDF grocery lists with ingredient sections, checkboxes, and notes for each smoothie.",
    badge: "PDF",
  },
  {
    title: "Bulk CSV Download",
    description:
      "Download macros, quantities, and store suggestions in CSV format for deeper planning and analysis.",
    badge: "CSV",
  },
  {
    title: "Collaborative Lists",
    description:
      "Share real-time lists with family or clients so everyone can check off ingredients as they shop.",
    badge: "LIVE",
  },
  {
    title: "Printable Pantry Labels",
    description:
      "Label protein jars, boosters, and superfoods with our printable templates for an organized smoothie station.",
    badge: "LABELS",
  },
];

const PremiumGroceryPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/premium/success"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to premium hub
      </Link>

      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Premium Grocery Tools
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Shareable lists and printable exports
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Use these upgraded tools to create client-ready shopping lists, PDFs, and collaborative checklists tailored to your smoothie plans.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-leaf)]/10"
          >
            <span className="w-fit rounded-full bg-[color:var(--color-accent-leaf)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-leaf)]">
              {feature.badge}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
                {feature.description}
              </p>
            </div>
            <div className="flex gap-2 text-xs text-[color:var(--color-foreground)]/50">
              <span>✓ Premium only</span>
              <span>•</span>
              <span>Includes scheduled reminders</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumGroceryPage;
