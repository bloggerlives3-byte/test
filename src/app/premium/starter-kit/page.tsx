import Link from "next/link";

const RESOURCES = [
  {
    title: "Quick-Start Guide",
    description:
      "Learn how to set up your bar, store ingredients, and schedule blends to make premium workflows a habit.",
    badge: "PDF",
    href: "/premium/starter-kit/quick-start",
  },
  {
    title: "Challenge Tracker",
    description:
      "Stay accountable with weekly goals, hydration checkboxes, and reward ideas built for premium members.",
    badge: "TRACK",
    href: "/premium/starter-kit/tracker",
  },
  {
    title: "Premium Tips Deck",
    description:
      "Swipe through exclusive tips covering booster pairings, ingredient storage, and time-saving hacks.",
    badge: "TIPS",
    href: "/premium/starter-kit/tips",
  },
];

const PremiumStarterKitPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/premium/success"
        className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
      >
        ← Back to premium hub
      </Link>

      <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
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

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {RESOURCES.map((resource) => (
          <article
            key={resource.title}
            className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-berry)]/10"
          >
            <span className="w-fit rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
              {resource.badge}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                {resource.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
                {resource.description}
              </p>
            </div>
            <Link
              href={resource.href}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              View resource
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumStarterKitPage;
