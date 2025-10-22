import Link from "next/link";
import { notFound } from "next/navigation";
import StripeBuyButton from "@/components/stripe-buy-button";
import { getPackBySlug } from "@/data/pricing";

const PackDetailPage = ({ params }: { params: { slug: string } }) => {
  const pack = getPackBySlug(params.slug);

  if (!pack) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/pricing/packs"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to packs
      </Link>
      <header className="mt-6 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <span className="w-fit rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
          {pack.price}
        </span>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          {pack.title}
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          {pack.description}
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            What&apos;s included
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-foreground)]/80">
            {pack.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-[3px] inline-flex h-2 w-2 rounded-full bg-[color:var(--color-accent-leaf)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/80">
          <h3 className="text-base font-semibold text-[color:var(--color-accent-mango)]">
            How it works
          </h3>
          <ol className="mt-3 space-y-2">
            <li>Purchase the pack to unlock recipes instantly.</li>
            <li>Access the pack from the SMU-V app under &quot;My Library&quot;.</li>
            <li>Print or share add-ons straight from the pack dashboard.</li>
          </ol>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-3 rounded-3xl border border-[color:var(--color-accent-leaf)] bg-[color:var(--color-accent-leaf)]/10 p-6 text-center">
        <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
          Ready to blend?
        </h2>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Complete your purchase and the pack will be available instantly in
          your account.
        </p>
        {pack.stripeBuyButton ? (
          <StripeBuyButton
            buyButtonId={pack.stripeBuyButton.buyButtonId}
            publishableKey={pack.stripeBuyButton.publishableKey}
            fallbackUrl={pack.stripeBuyButton.fallbackUrl}
            className="mx-auto w-full max-w-sm"
          />
        ) : (
          <Link
            href={`/pricing/checkout?product=${pack.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Buy Now – {pack.price}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PackDetailPage;
