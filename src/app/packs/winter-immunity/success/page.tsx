import Link from "next/link";

const WinterImmunitySuccessPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="flex flex-col gap-4 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Winter Immunity Pack
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Your cold-season toolkit has arrived.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Bookmark this page to revisit recipes, prep guides, and extra resources whenever you need a boost.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            1. Access Your Recipes
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            The pack is now live in your library. Jump into the recipe explorer and filter by &quot;Winter Immunity&quot; to start blending.
          </p>
          <Link
            href="/recipes?focus=winter-immunity"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Open Recipes
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            2. Prep with the Shopping Checklist
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Turn the pack into a ready-to-print grocery list and check off ingredients as you stock up.
          </p>
          <Link
            href="/grocery"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Build Your List
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            3. Download Support Guides
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Grab immune-support tips, scheduling templates, and printable wellness reminders.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs">
            <Link
              href="/downloads/winter-immunity-guide.pdf"
              className="rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-center font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              Download Guide
            </Link>
            <Link
              href="mailto:support@smuv-guide.com"
              className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-center font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-foreground)]/10"
            >
              Need help? Contact support
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
          Tip: Stay consistent
        </h2>
        <p className="mt-2">
          Blend a Winter Immunity smoothie three times a week and pair it with the hydration checklist included in your download for optimal results.
        </p>
      </section>

      <footer className="mt-10 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <p>
          Stripe return URL: <code>https://smuvvguide.vercel.app/packs/winter-immunity/success</code>. Share this page with anyone on your plan for easy access.
        </p>
      </footer>
    </div>
  );
};

export default WinterImmunitySuccessPage;
