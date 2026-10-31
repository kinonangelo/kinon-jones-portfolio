"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../data/profile";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header id="top" className="border-b border-neutral-200">
      <nav
        aria-label="Main navigation"
        className="page-width flex flex-wrap items-center justify-between gap-x-8 gap-y-5 py-6"
      >
        <Link
          href="/"
          aria-label={`${profile.name} home`}
          className="flex min-w-0 items-center gap-3 text-xs font-semibold tracking-tight sm:text-sm"
        >
          <span className="flex size-9 shrink-0 items-center justify-center bg-neutral-950 text-xs tracking-wider text-white">
            KJ<span className="text-neutral-400">.</span>
          </span>
          <span>{profile.name}</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs sm:gap-8 sm:text-sm">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (name) => {
              const href = name === "Home" ? "/" : `/${name.toLowerCase()}`;
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`));
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {name}
                  {name === "Contact" && (
                    <span aria-hidden="true" className="ml-2">
                      ↗
                    </span>
                  )}
                </Link>
              );
            },
          )}
        </div>
      </nav>
    </header>
  );
}
