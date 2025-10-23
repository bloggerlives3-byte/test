import Link from "next/link";

export const SiteFooter = () => (
  <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
    <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-[color:var(--color-foreground)]/70 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} SMU-V Guide. Blending joy in every cup.</p>
      <div className="flex items-center gap-4 font-medium">
        <Link
          href="/privacy"
          className="hover:text-[color:var(--color-accent-berry)]"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="hover:text-[color:var(--color-accent-berry)]"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </footer>
);
