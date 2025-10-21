import Link from "next/link";
import { getPricingTierById } from "@/data/pricing";

const FreeTierPage = () => {
  const tier = getPricingTierById("free");

  if (!tier) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/pricing"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to pricing
      </Link>
      <header className="mt-6 flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          {tier.name}
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          {tier.description}
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
          What you get for free
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-foreground)]/80">
          {tier.highlights.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-[3px] inline-flex h-2 w-2 rounded-full bg-[color:var(--color-accent-leaf)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-accent-mango)]/40 bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/80">
        <h2 className="text-base font-semibold text-[color:var(--color-accent-mango)]">
          Upgrade any time
        </h2>
        <p className="mt-2">
          Ready for unlimited saves, seasonal recipes, and ad-free blending?
          Explore SMU-V+ when you&apos;re ready to go premium.
        </p>
        <Link
          href="/pricing/premium"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-5 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
        >
          View SMU-V+ Premium
        </Link>
      </section>
    </div>
  );
};

export default FreeTierPage;
