"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/builder", label: "Smoothie Builder" },
  { href: "/recipes", label: "Signature Recipes" },
  { href: "/grocery", label: "Grocery List" },
  { href: "/pricing", label: "Pricing" },
];

export const SiteHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          onClick={closeMenu}
        >
          <span className="rounded-full bg-[color:var(--color-accent-leaf)] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
            SMU-V
          </span>
          <span className="text-[color:var(--color-foreground)]">
            Guide
          </span>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
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
        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-full border border-[color:var(--color-border)] p-2 text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent-leaf)]/60 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-full px-3 py-2 transition ${
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
      ) : null}
    </header>
  );
};
