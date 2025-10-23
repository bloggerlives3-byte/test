import Link from "next/link";

const sections = [
  {
    title: "Team Roles",
    description:
      "Assign admins, coaches, and assistants. Control who can edit smoothies, send client emails, or export grocery lists.",
    checklist: [
      "Invite your coaches via email",
      "Set role permissions (edit, view, export)",
      "Create cohorts for different programs",
    ],
  },
  {
    title: "Brand Uploads",
    description:
      "Upload logos, colors, and hero imagery so every recipe and grocery export carries your branding.",
    checklist: [
      "Add logo + secondary mark",
      "Select accent and background colors",
      "Upload cover image for recipe cards",
    ],
  },
  {
    title: "Client Cohorts",
    description:
      "Group clients by goal (strength, detox, family) and assign default smoothie packs and schedules.",
    checklist: [
      "Create cohort templates",
      "Map default smoothies and packs",
      "Schedule check-ins and reminders",
    ],
  },
];

const ProWorkspacePage = () => (
  <div className="mx-auto max-w-4xl px-4 py-16">
    <Link
      href="/pro/success"
      className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
    >
      ← Back to Pro HQ
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Workspace Tools
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Configure team access, branding, and cohorts before sharing your first premium plan.
      </p>
    </header>
    <section className="mt-10 space-y-6">
      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
        >
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {section.title}
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
            {section.description}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
            {section.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  </div>
);

export default ProWorkspacePage;
