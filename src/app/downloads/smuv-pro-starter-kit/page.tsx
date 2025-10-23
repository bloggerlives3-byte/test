import Link from "next/link";

const assets = [
  {
    title: "Intake Forms",
    description: "Client questionnaires covering goals, nutrition preferences, allergies, and scheduling.",
    link: "/downloads/files/smuv-pro-intake.pdf",
    points: [
      "Client profile and health history",
      "Nutrition and schedule preferences",
      "Goal-setting worksheet with signature block",
    ],
  },
  {
    title: "Email Templates",
    description: "Kickoff, week-one check-in, and monthly recap emails ready to customize and send.",
    link: "/downloads/files/smuv-pro-email-templates.docx",
    points: [
      "Kickoff welcome email with next steps",
      "Week-one accountability note",
      "Monthly recap + renewal message",
    ],
    sample: `Subject: Welcome to SMU-V Pro!\\n\\nHi {{client_name}},\\n\\nWe’re excited to start your smoothie coaching journey. Attached you’ll find your first blends and the grocery list for week one. Let me know if you have questions before our kickoff call tomorrow!\\n\\n– {{coach_name}}`,
  },
  {
    title: "Challenge Roadmap",
    description: "4-week challenge plan including incentives, milestones, and accountability prompts.",
    link: "/downloads/files/smuv-pro-challenge-roadmap.pdf",
    points: [
      "Week-by-week milestone tracker",
      "Prize and incentive ideas",
      "Printable progress board",
    ],
  },
];

const ProStarterKitDownloadPage = () => (
  <div className="mx-auto max-w-4xl px-4 py-16">
    <Link
      href="/pro/success"
      className="text-xs font-semibold text-[color:var(--color-accent-leaf)] underline-offset-4 hover:underline"
    >
      ← Back to Pro HQ
    </Link>
    <header className="mt-4 flex flex-col gap-3 rounded-3xl bg-[color:var(--color-accent-leaf)]/10 p-6">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        SMU-V Pro Starter Kit
      </h1>
      <p className="text-sm text-[color:var(--color-foreground)]/70">
        Download intake forms, email templates, and challenge roadmaps to fast-track your coaching workflows.
      </p>
    </header>
    <section className="mt-10 space-y-6">
      {assets.map((asset) => (
        <article
          key={asset.title}
          className="flex flex-col gap-3 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
        >
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {asset.title}
          </h2>
          <p className="text-sm text-[color:var(--color-foreground)]/70">
            {asset.description}
          </p>
          {asset.points ? (
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-foreground)]/80">
              {asset.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {asset.sample ? (
            <pre className="whitespace-pre-wrap rounded-2xl bg-[color:var(--color-foreground)]/5 p-4 text-xs text-[color:var(--color-foreground)]/80">
              {asset.sample}
            </pre>
          ) : null}
          <Link
            href={asset.link}
            className="inline-flex w-fit items-center justify-center rounded-full bg-[color:var(--color-accent-leaf)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-accent-leaf)]/90"
          >
            Download {asset.title}
          </Link>
        </article>
      ))}
    </section>
  </div>
);

export default ProStarterKitDownloadPage;
