import Link from "next/link";
import { redirect } from "next/navigation";
import { getCheckoutProduct } from "@/data/pricing";

const CheckoutPage = ({ searchParams }: { searchParams: { product?: string } }) => {
  const productId = searchParams.product;

  if (!productId) {
    redirect("/pricing");
  }

  const product = getCheckoutProduct(productId);

  if (!product) {
    redirect("/pricing");
  }

  const stripePriceEnv = product.stripePriceEnv;
  const stripePriceId = stripePriceEnv ? process.env[stripePriceEnv] : undefined;

  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <Link
        href="/pricing"
        className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
      >
        ← Back to pricing
      </Link>
      <div className="mt-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
        <h1 className="text-2xl font-semibold text-[color:var(--color-foreground)]">
          Checkout
        </h1>
        <div className="mt-4 rounded-2xl border border-[color:var(--color-accent-leaf)]/40 bg-[color:var(--color-accent-leaf)]/10 p-4">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {product.name}
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            {product.description}
          </p>
          <p className="mt-4 text-sm font-semibold text-[color:var(--color-accent-leaf)]">
            Total due today: {product.price}
          </p>
        </div>

        <section className="mt-6 space-y-3 rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-foreground)]/5 p-4 text-xs text-[color:var(--color-foreground)]/70">
          <p className="font-semibold text-[color:var(--color-foreground)]">
            Stripe set-up checklist
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Create the product/price in Stripe and copy the price ID (looks like
              <code className="ml-1 rounded bg-white/60 px-1 py-[1px] text-[10px] font-mono text-[color:var(--color-foreground)]">price_...</code>).
            </li>
            {stripePriceEnv ? (
              <li>
                Add
                <code className="ml-1 rounded bg-white/60 px-1 py-[1px] text-[10px] font-mono text-[color:var(--color-foreground)]">
                  {stripePriceEnv}
                </code>
                to your
                <code className="ml-1 rounded bg-white/60 px-1 py-[1px] text-[10px] font-mono text-[color:var(--color-foreground)]">
                  .env.local
                </code>
                {stripePriceId ? (
                  <span>
                    ; detected <strong>{stripePriceId}</strong>
                  </span>
                ) : (
                  <span> and set it to the Stripe price ID you copied.</span>
                )}
              </li>
            ) : null}
            <li>
              Replace this demo form with Stripe Elements or call your API route that
              creates a Checkout Session using the configured price ID.
            </li>
          </ol>
        </section>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Replace this handler with your Stripe checkout call.");
          }}
        >
          <div className="space-y-2 text-sm">
            <label className="block font-semibold" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-[color:var(--color-border)] px-4 py-3 focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label className="block font-semibold" htmlFor="card">
              Card details
            </label>
            <input
              id="card"
              type="text"
              required
              placeholder="1234 1234 1234 1234"
              className="w-full rounded-full border border-[color:var(--color-border)] px-4 py-3 focus:border-[color:var(--color-accent-leaf)] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--color-accent-leaf)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Complete Purchase
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-[color:var(--color-foreground)]/60">
          This is a demo checkout. Connect Stripe to process live payments.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
