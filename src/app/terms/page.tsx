const TermsPage = () => (
  <div className="mx-auto max-w-4xl px-4 py-16 space-y-8 text-sm text-[color:var(--color-foreground)]/80">
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold text-[color:var(--color-foreground)]">
        Terms & Conditions
      </h1>
      <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
    </header>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Acceptance of Terms
      </h2>
      <p>
        By accessing SMU-V Guide, you agree to these terms. If you do not agree, you must not use the
        service. We may update the terms periodically and will notify you of any material changes.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Use of Service
      </h2>
      <p>
        You agree to use SMU-V Guide only for lawful purposes and in accordance with applicable
        regulations. Accounts are intended for individual or organisational use and must not be shared
        outside your authorised team.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Intellectual Property
      </h2>
      <p>
        All content, recipes, and design elements provided by SMU-V Guide are the property of SMU-V or
        its licensors. You may not copy, modify, or resell any materials without written consent.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Disclaimer & Limitation of Liability
      </h2>
      <p>
        Smoothie recommendations are informational only and do not substitute professional medical or
        nutritional advice. SMU-V Guide is not liable for damages arising from use of the service or any
        linked resources.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
        Contact
      </h2>
      <p>
        For questions about these terms, contact legal@smuv-guide.com.
      </p>
    </section>
  </div>
);

export default TermsPage;
