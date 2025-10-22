import Link from "next/link";

const LowSugarSuccessPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="flex flex-col gap-4 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Low-Sugar Sips Pack
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Balanced energy, unlocked.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Bookmark this dashboard to revisit recipes, swaps, and progress trackers whenever you need them.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            1. Explore Your Recipes
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Find all Low-Sugar Sips blends in your library. Use the filter to lock in the perfect option for steady energy.
          </p>
          <Link
            href="/recipes?focus=low-sugar"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            See Pack Recipes
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            2. Track Macros with Ease
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Use the macro cheat sheet and template to log your blends and keep an eye on daily goals.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs">
            <Link
              href="/downloads/low-sugar-log.pdf"
              className="rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-center font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              Download Macro Log
            </Link>
            <Link
              href="mailto:support@smuv-guide.com"
              className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-center font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-foreground)]/10"
            >
              Need help adjusting macros?
            </Link>
          </div>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            3. Share Shopping Lists
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Export the pack to a grocery list and share it with friends or family so everyone is on the same page.
          </p>
          <Link
            href="/grocery"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Create Grocery List
          </Link>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
          Bonus: Sweetener Swap Guide
        </h2>
        <p className="mt-2">
          Use the included swap guide to adapt desserts, breakfasts, and smoothies while keeping sugar in check.
        </p>
      </section>

      <footer className="mt-10 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <p>
          Stripe return URL: <code>https://smuvvguide.vercel.app/packs/low-sugar/success</code>. Share this link with anyone in your household so they can access the pack resources instantly.
        </p>
      </footer>
    </div>
  );
};

export default LowSugarSuccessPage;
