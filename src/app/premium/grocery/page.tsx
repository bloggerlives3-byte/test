const PremiumGroceryPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Premium Grocery Tools
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Shareable lists and printable exports
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Use these upgraded tools to create client-ready shopping lists, PDFs, and collaborative checklists.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Export PDF Lists
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Generate beautiful PDFs with ingredient sections, checkboxes, and optional notes for each smoothie.
          </p>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Bulk CSV Download
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Download macros, quantities, and store suggestions in CSV format for spreadsheet planning.
          </p>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Collaborative Lists
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Share real-time lists with family or clients so everyone can check off ingredients as they shop.
          </p>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Printable Pantry Labels
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Use our template to label protein jars, boosters, and superfoods for an organized smoothie station.
          </p>
        </article>
      </section>
    </div>
  );
};

export default PremiumGroceryPage;
