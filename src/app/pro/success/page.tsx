import Link from "next/link";

const ProSuccessPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex flex-col gap-4 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent-leaf)]">
          Welcome to SMU-V Pro
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
          Your coaching HQ is ready to go.
        </h1>
        <p className="text-sm text-[color:var(--color-foreground)]/70">
          Bookmark this page to revisit client tools, templates, and support resources any time.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            1. Configure Your Workspace
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Set team roles, upload branding, and create client cohorts so everyone sees the right smoothies and plans.
          </p>
          <Link
            href="/builder"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-leaf)] transition hover:bg-[color:var(--color-accent-leaf)]/10"
          >
            Open Workspace Tools
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            2. Share Branded Recipes
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Clone signature blends, add your notes, and send client-ready recipe links in one click.
          </p>
          <Link
            href="/recipes"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Curate Recipes
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            3. Automate Grocery Exports
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Turn client plans into shareable grocery PDFs or CSVs with premium export formatting.
          </p>
          <Link
            href="/grocery"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent-berry)] px-4 py-2 text-xs font-semibold text-[color:var(--color-accent-berry)] transition hover:bg-[color:var(--color-accent-berry)]/10"
          >
            Generate Checklists
          </Link>
        </article>

        <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            4. Download Client Starter Assets
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            Access intake forms, kickoff email templates, and challenge roadmaps.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs">
            <Link
              href="/downloads/smuv-pro-starter-kit.zip"
              className="rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-center font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
            >
              Download Pro Starter Kit
            </Link>
            <Link
              href="mailto:success@smuv-guide.com"
              className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-center font-semibold text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-foreground)]/10"
            >
              Book onboarding session
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
          Pro Perks Checklist
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-foreground)]/80">
          <li>✔ Unlimited client seats with team roles</li>
          <li>✔ Branded recipe sharing and analytics dashboard</li>
          <li>✔ Bulk grocery exports (PDF + CSV)</li>
          <li>✔ Priority concierge support</li>
        </ul>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-mango)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <h2 className="text-lg font-semibold text-[color:var(--color-accent-mango)]">
          Next Steps
        </h2>
        <ol className="mt-3 space-y-2 list-decimal pl-5">
          <li>Invite your team and assign roles within the next 24 hours.</li>
          <li>Send the client onboarding email template to your active roster.</li>
          <li>Join the quarterly Pro mastermind—look for the calendar invite in your inbox.</li>
        </ol>
      </section>

      <footer className="mt-10 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6 text-sm text-[color:var(--color-foreground)]/70">
        <p>
          Use this return URL in Stripe: <code>https://smuvvguide.vercel.app/pro/success</code>. Clients will arrive here immediately after payment.
        </p>
      </footer>
    </div>
  );
};

export default ProSuccessPage;
