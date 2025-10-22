import Link from "next/link";

const PremiumSuccessPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="flex flex-col gap-4 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Welcome to SMU-V+ Premium
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          You&apos;re officially part of the crew.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Save this page—you can return anytime for your exclusive resources and onboarding steps.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            1. Unlock the Premium Library
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Explore seasonal drops, performance blends, and kid-friendly favorites curated just for premium members.
          </p>
          <Link
            href="/recipes?focus=premium"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Browse Signature Recipes
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            2. Build Your Goal Plan
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Access tailored templates (muscle, detox, energy) and personalize them with your saved smoothies.
          </p>
          <Link
            href="/builder"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
          >
            Start Building
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            3. Supercharge Grocery Planning
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Premium bundles include boosted grocery exports and printable PDFs to share with family or clients.
          </p>
          <Link
            href="/grocery"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Open Grocery Tools
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            4. Download Your Starter Kit
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Grab quick-start PDFs, challenge tracker, and premium-exclusive tips.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs">
            <Link
              href="/downloads/smuv-premium-starter.pdf"
              className="rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-center font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              Download Starter Kit
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

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
          Premium Perks Recap
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
          <li>✔ Unlimited smoothie saves with cloud sync</li>
          <li>✔ Exclusive recipe drops and seasonal pack releases</li>
          <li>✔ Goal-based coaching templates and wellness challenges</li>
          <li>✔ Ad-free experience plus priority support</li>
        </ul>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
          Bonus Resources
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/70">
          <li>
            🧾 Premium recipe pack updates arrive monthly. Watch your inbox for drop alerts and add them in
            <Link
              href="/pricing/packs"
              className="ml-1 font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
            >
              the Pack Store
            </Link>
            .
          </li>
          <li>🎧 Join the SMU-V+ Soundscapes playlist for focus while prepping ingredients.</li>
          <li>💬 Exclusive Q&A sessions hosted quarterly—invites go to your premium email.</li>
        </ul>
      </section>

      <footer className="mt-10 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <p>
          Bookmark this page: <code>https://smuvvguide.vercel.app/premium/success</code>. After checkout, redirect your Stripe payment link here so members land on their resources instantly.
        </p>
      </footer>
    </div>
  );
};

export default PremiumSuccessPage;
