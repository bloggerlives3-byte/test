"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/builder", label: "Smoothie Builder" },
  { href: "/recipes", label: "Signature Recipes" },
  { href: "/grocery", label: "Grocery List" },
];

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="rounded-full bg-[color:var(--color-accent-leaf)] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
            SMU-V
          </span>
          <span className="text-[color:var(--color-foreground)]">
            Guide
          </span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 transition ${
                  isActive
                    ? "bg-[color:var(--color-accent-leaf)] text-white"
                    : "text-[color:var(--color-foreground)] hover:bg-[color:var(--color-accent-leaf)]/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
