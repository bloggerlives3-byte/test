export const SiteFooter = () => (
  <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
    <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-[color:var(--color-foreground)]/70 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} SMU-V Guide. Blending joy in every cup.</p>
      <p className="font-medium">Made with wellness in mind.</p>
    </div>
  </footer>
);
