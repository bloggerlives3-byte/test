import Link from "next/link";

const KidsPackSuccessPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="flex flex-col gap-4 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Smoothies for Kids Pack
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Snack time just got more fun.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Keep this page handy for kid-friendly recipes, swaps, and printable rewards.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            1. Explore Kid Favorites
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Visit the recipe library and filter for &quot;Kids&quot; to find blends packed with hidden greens and fun toppings.
          </p>
          <Link
            href="/recipes?focus=kids"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            View Recipes
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            2. Plan Allergy-Friendly Swaps
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Use the swap guide to adjust nut milks, sweeteners, or fruits based on your family’s needs.
          </p>
          <Link
            href="/downloads/kids-swap-guide.pdf"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Download Swap Guide
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            3. Print the Reward Chart
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Track smoothie adventures with stickers or coloring badges to keep kids excited.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs">
            <Link
              href="/downloads/kids-reward-chart.pdf"
              className="rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-center font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
            >
              Download Reward Chart
            </Link>
            <Link
              href="mailto:family@smuv-guide.com"
              className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-center font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-foreground)]/10"
            >
              Share your kid creations
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
          Quick Tip
        </h2>
        <p className="mt-2">
          Let kids pick one topping (granola, mini chia sprinkle, or fruit stars) to make every blend feel like a mini celebration.
        </p>
      </section>

      <footer className="mt-10 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <p>
          Stripe return URL: <code>https://smuvvguide.vercel.app/packs/kids/success</code>. Share this page with parents or caregivers for instant access.
        </p>
      </footer>
    </div>
  );
};

export default KidsPackSuccessPage;
