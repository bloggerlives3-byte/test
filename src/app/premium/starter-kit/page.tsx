import Link from "next/link";

const PremiumStarterKitPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Premium Starter Kit
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Resources to kick off your routine
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Download PDFs, trackers, and premium-exclusive tips to keep your smoothie practice consistent and fun.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Quick-Start Guide
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Learn how to set up your bar, store ingredients, and schedule blends to make premium workflows a habit.
          </p>
          <Link
            href="/downloads/smuv-premium-starter.pdf"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
          >
            Download Quick-Start
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Challenge Tracker
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Stay accountable with weekly goals, hydration checkboxes, and reward ideas built for premium members.
          </p>
          <Link
            href="/downloads/premium-challenge-tracker.pdf"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
          >
            Download Tracker
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Premium Tips Deck
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Swipe through exclusive tips covering booster pairings, ingredient storage, and time-saving hacks.
          </p>
          <Link
            href="/downloads/premium-tips.pdf"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Download Tips Deck
          </Link>
        </article>
      </section>
    </div>
  );
};

export default PremiumStarterKitPage;
