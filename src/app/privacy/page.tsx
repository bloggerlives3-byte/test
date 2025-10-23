const PrivacyPolicyPage = () => (
  <div className="mx-auto max-w-4xl px-4 py-16 space-y-8 text-sm text-[color:var(--color-foreground)]/80">
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Privacy Policy
      </h1>
      <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
    </header>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Overview
      </h2>
      <p>
        SMU-V Guide (“we” or “our”) respects your privacy. This policy explains how we collect,
        use, and secure personal information when you interact with our websites, mobile
        experiences, and smoothie planning tools.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Information We Collect
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Account details you provide (name, email, organisation).</li>
        <li>Smoothie preferences, saved recipes, and grocery exports you create.</li>
        <li>Usage analytics such as page visits, device information, and interaction logs.</li>
        <li>Payment details handled securely by our payment processors.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        How We Use Information
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Deliver personalised smoothie recommendations and grocery tools.</li>
        <li>Communicate product updates, tips, and support responses.</li>
        <li>Analyse usage to improve features and resolve technical issues.</li>
        <li>Comply with legal requirements and enforce our terms.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Sharing & Security
      </h2>
      <p>
        We do not sell personal data. We share information with service providers (hosting,
        analytics, payments, email delivery) under strict confidentiality agreements. Data is
        encrypted in transit and at rest, and access is limited to authorised team members.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Your Choices
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Update account details or delete saved smoothies at any time.</li>
        <li>Opt out of marketing emails via the unsubscribe link.</li>
        <li>Request data export or deletion by contacting privacy@smuv-guide.com.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Contact Us
      </h2>
      <p>
        For privacy questions or requests, email privacy@smuv-guide.com or reach us by mail at
        SMU-V Guide, 123 Wellness Way, London, UK.
      </p>
    </section>
  </div>
);

export default PrivacyPolicyPage;
