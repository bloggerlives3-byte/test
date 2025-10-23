import Link from "next/link";

const TipsPage = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <Link
      href="/premium/starter-kit"
      className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
    >
      ← Back to starter kit
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Premium Tips Deck
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Swipe through tips covering booster pairings, ingredient storage, and time-saving hacks.
      </p>
    </header>
    <section className="mt-10 space-y-4 text-sm text-[color:var(--color-foreground)]/80">
      <p>Download the tips deck to keep your premium smoothie routine exciting.</p>
      <Link
        href="/downloads/premium-tips.pdf"
        className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
      >
        Download Tips Deck
      </Link>
    </section>
  </div>
);

export default TipsPage;
