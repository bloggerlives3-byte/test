import Link from "next/link";

const QuickStartPage = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <Link
      href="/premium/starter-kit"
      className="text-xs font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
    >
      ← Back to starter kit
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-berry)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Quick-Start Guide
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Learn how to set up your smoothie bar, store ingredients, and schedule blends for premium efficiency.
      </p>
    </header>
    <section className="mt-10 space-y-4 text-sm text-[color:var(--color-foreground)]/80">
      <p>Download the quick-start PDF to dive deeper into setup tips and weekly scheduling.</p>
      <Link
        href="/downloads/smuv-premium-starter.pdf"
        className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-berry)]/90"
      >
        Download Quick-Start PDF
      </Link>
    </section>
  </div>
);

export default QuickStartPage;
