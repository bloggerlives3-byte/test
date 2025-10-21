"use client";

import Link from "next/link";
import { monetizationStrategies } from "@/data/monetization";

const MonetizationPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-4 border-b border-[color:var(--color-border)] pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent-mango)]">
          Monetization Playbook
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Revenue streams tuned for SMU-V Guide.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Layer premium value without disrupting the wellness-first experience.
          Combine subscriptions, packs, partnerships, and rewards to serve both
          everyday sippers and pro coaches.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-[color:var(--color-foreground)]/50">
          <span className="rounded-full bg-[color:var(--color-accent-leaf)]/10 px-3 py-1 font-semibold text-[color:var(--color-accent-leaf)]">
            SMU-V+
          </span>
          <span className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 font-semibold text-[color:var(--color-accent-berry)]">
            Sponsored content
          </span>
          <span className="rounded-full bg-[color:var(--color-foreground)]/10 px-3 py-1 font-semibold text-[color:var(--color-foreground)]">
            Affiliate
          </span>
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {monetizationStrategies.map((strategy) => (
          <article
            key={strategy.id}
            className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm shadow-[color:var(--color-accent-leaf)]/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                  <span className="mr-2 text-xl">{strategy.emoji}</span>
                  {strategy.title}
                </h2>
                <p className="mt-1 text-sm text-[color:var(--color-foreground)]/70">
                  {strategy.summary}
                </p>
              </div>
              {strategy.pricing ? (
                <span className="rounded-full bg-[color:var(--color-accent-berry)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-accent-berry)]">
                  {strategy.pricing}
                </span>
              ) : null}
            </div>
            {strategy.details?.length ? (
              <ul className="space-y-2 text-sm text-[color:var(--color-foreground)]/80">
                {strategy.details.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-accent-leaf)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {strategy.highlight ? (
              <p className="rounded-2xl bg-[color:var(--color-accent-mango)]/10 px-4 py-3 text-xs font-semibold text-[color:var(--color-accent-mango)]">
                {strategy.highlight}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-leaf)]/10 p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-leaf)]">
          Rollout roadmap
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-[color:var(--color-foreground)]/80">
          <li className="flex gap-3">
            <span className="mt-[2px] h-6 w-6 shrink-0 rounded-full bg-[color:var(--color-accent-leaf)]/80 text-center text-xs font-semibold leading-6 text-white">
              1
            </span>
            <span>
              Launch SMU-V+ freemium tier—meter saved smoothies and bundle the
              premium recipe library.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[2px] h-6 w-6 shrink-0 rounded-full bg-[color:var(--color-accent-berry)]/80 text-center text-xs font-semibold leading-6 text-white">
              2
            </span>
            <span>
              Drop seasonal recipe packs to test purchase appetite and collect
              user feedback.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[2px] h-6 w-6 shrink-0 rounded-full bg-[color:var(--color-accent-mango)]/90 text-center text-xs font-semibold leading-6 text-white">
              3
            </span>
            <span>
              Integrate affiliate links into grocery exports and secure the
              first sponsor partnership.
            </span>
          </li>
        </ol>
        <p className="mt-4 text-xs text-[color:var(--color-foreground)]/60">
          Want a deep-dive deck?{" "}
          <Link
            href="mailto:hello@smuv-guide.com?subject=SMU-V%20Guide%20Monetization"
            className="font-semibold text-[color:var(--color-accent-berry)] underline-offset-4 hover:underline"
          >
            Contact the product team
          </Link>{" "}
          for projections and KPI targets.
        </p>
      </section>
    </div>
  );
};

export default MonetizationPage;
