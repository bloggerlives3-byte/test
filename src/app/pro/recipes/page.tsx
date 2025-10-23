import Link from "next/link";

const recipeWorkflows = [
  {
    title: "Clone a Base Recipe",
    steps: [
      "Pick a signature smoothie and duplicate it into your workspace.",
      "Add coaching notes (macros, substitutions, goals).",
      "Toggle boosters and save the Pro version.",
    ],
  },
  {
    title: "Add Client Notes",
    steps: [
      "Open the recipe notes tab and jot down flavor tweaks or macro adjustments.",
      "Attach PDF handouts or video instructions for clients.",
      "Set visibility so only selected cohorts see the change.",
    ],
  },
  {
    title: "Send Recipe in One Click",
    steps: [
      "Generate a share link or branded email preview.",
      "Schedule a send time or copy the link for chat.",
      "Track opens and saves from the analytics panel.",
    ],
  },
];

const ProRecipesPage = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <Link
      href="/pro/success"
      className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
    >
      ← Back to Pro HQ
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Curate and Send Recipes
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Duplicate our best sellers, layer on personal notes, and send client-ready recipes instantly.
      </p>
    </header>
    <section className="mt-10 space-y-6">
      {recipeWorkflows.map((flow) => (
        <article
          key={flow.title}
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
        >
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {flow.title}
          </h2>
          <ol className="mt-3 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {flow.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  </div>
);

export default ProRecipesPage;
