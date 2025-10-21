import Link from "next/link";
import { addOnPacks, pricingTiers } from "@/data/pricing";

const PricingPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Pricing Plans
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Find the blend that fits your smoothie journey.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Start for free, upgrade for limitless saves and premium recipes, or
          step into SMU-V Pro for client-ready workflows. Packs add flavor any
          time.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.id}
            className={`flex flex-col gap-5 rounded-3xl border bg-[color:var(--color-surface)] p-6 shadow-sm transition ${
              tier.popular
                ? "border-[color:var(--color-accent-leaf)] shadow-[color:var(--color-accent-leaf)]/30"
                : "border-[color:var(--color-border)] hover:border-[color:var(--color-accent-leaf)]/50"
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                {tier.name}
              </h2>
              <div className="text-2xl font-semibold text-[color:var(--color-accent-leaf)]">
                {tier.price}
              </div>
              <p className="text-sm text-[color:var(--color-foreground)]/70">
                {tier.description}
              </p>
            </div>
            <ul className="flex-1 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
              {tier.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-accent-leaf)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={tier.cta.href}
              className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                tier.popular
                  ? "bg-[color:var(--color-accent-leaf)] text-white hover:bg-[color:var(--color-accent-leaf)]/90"
                  : "border border-[color:var(--color-accent-leaf)] text-[color:var(--color-accent-leaf)] hover:bg-[color:var(--color-accent-leaf)]/10"
              }`}
            >
              {tier.cta.label}
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
              Looking for bundles?
            </h2>
            <p className="text-sm text-[color:var(--color-foreground)]/70">
              Pick up add-on packs any time to chase seasonal goals, low-sugar
              routines, or kid-friendly delight.
            </p>
          </div>
          <Link
            href="https://pay.smuv-guide.com/packs"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Browse Pack Store
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {addOnPacks.map((pack) => (
            <article
              key={pack.id}
              className="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-[color:var(--color-foreground)]">
                  {pack.title}
                </h3>
                <span className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
                  {pack.price}
                </span>
              </div>
              <p className="text-sm text-[color:var(--color-foreground)]/70">
                {pack.description}
              </p>
              <ul className="space-y-2 text-xs text-[color:var(--color-foreground)]/70">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-berry)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pack.href}
                className="mt-auto inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
              >
                Go to Pay Page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
