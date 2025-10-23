import Link from "next/link";

const exportOptions = [
  {
    title: "PDF Grocery Exports",
    description:
      "Generate branded grocery PDFs with ingredient sections, notes, and macro overviews. Perfect for clients who love printable lists.",
    steps: [
      "Select smoothies or packs from your cohort plan.",
      "Choose layout (two-column, detailed, minimal).",
      "Download and share via email or client portal.",
    ],
  },
  {
    title: "CSV Reporting",
    description:
      "Download detailed CSVs covering quantities, store suggestions, and macro totals for spreadsheet lovers.",
    steps: [
      "Filter by date range or cohort.",
      "Include macros and store recommendations.",
      "Import into Sheets to plan bulk orders.",
    ],
  },
  {
    title: "Live Collaboration",
    description:
      "Share live checklists so clients or assistants can check items off together in real time.",
    steps: [
      "Create a shared list link.",
      "Invite family members or team assistants.",
      "Track progress with built-in notifications.",
    ],
  },
];

const ProChecklistsPage = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <Link
      href="/pro/success"
      className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
    >
      ← Back to Pro HQ
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Premium Export Formatting
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        PDF, CSV, and collaborative lists designed to keep your clients organized and impressed.
      </p>
    </header>
    <section className="mt-10 space-y-6">
      {exportOptions.map((option) => (
        <article
          key={option.title}
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
        >
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {option.title}
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            {option.description}
          </p>
          <ol className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
            {option.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  </div>
);

export default ProChecklistsPage;
