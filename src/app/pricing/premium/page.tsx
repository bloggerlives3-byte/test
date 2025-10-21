import Link from "next/link";
import { getPricingTierById } from "@/data/pricing";

const PremiumTierPage = () => {
  const tier = getPricingTierById("premium");

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
          Premium benefits
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

      <section className="mt-10 rounded-3xl border border-[color:var(--color-accent-berry)]/40 bg-[color:var(--color-accent-berry)]/10 p-6 text-sm text-[color:var(--color-foreground)]/80">
        <h2 className="text-base font-semibold text-[color:var(--color-accent-berry)]">
          Perfect for
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Daily smoothie makers who want variety on autopilot</li>
          <li>Users craving deeper nutrition guidance and goal-tracking</li>
          <li>Families balancing multiple preferences</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 rounded-3xl border border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10 p-6 text-center">
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Subscribe to SMU-V+ Premium and your benefits unlock immediately.
        </p>
        <Link
          href="/pricing/checkout?product=premium"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
        >
          Upgrade Now – {tier.price}
        </Link>
      </div>
    </div>
  );
};

export default PremiumTierPage;
