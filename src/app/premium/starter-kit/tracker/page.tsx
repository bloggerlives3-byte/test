import Link from "next/link";

const TrackerPage = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <Link
      href="/premium/starter-kit"
      className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
    >
      ← Back to starter kit
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Challenge Tracker
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Use the tracker to monitor weekly goals, hydration, and kid-friendly rewards.
      </p>
    </header>
    <section className="mt-10 space-y-4 text-sm text-[color:var(--color-foreground)]/80">
      <p>Download the tracker to stay accountable as you progress through premium plans.</p>
      <Link
        href="/downloads/premium-challenge-tracker.pdf"
        className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
      >
        Download Tracker PDF
      </Link>
    </section>
  </div>
);

export default TrackerPage;
