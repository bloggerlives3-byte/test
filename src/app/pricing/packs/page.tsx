import Link from "next/link";
import { addOnPacks } from "@/data/pricing";

const PackStorePage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-berry)]">
          Add-On Packs
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Expand your library with curated smoothie packs.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Choose the theme that matches your routine. Each pack includes unique
          recipes, tips, and printable goodies.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {addOnPacks.map((pack) => (
          <article
            key={pack.id}
            className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                {pack.title}
              </h2>
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
              href={`/pricing/packs/${pack.slug}`}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
            >
              Buy Now
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PackStorePage;
