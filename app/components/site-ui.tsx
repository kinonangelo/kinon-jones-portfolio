import Link from "next/link";
import { profile } from "../data/profile";
import { EmailContact } from "./email-contact";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform group-hover:translate-x-1"
    >
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export function SectionLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow flex items-center gap-4">
      {number && <span className="text-neutral-500">{number}</span>}
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-5 border-b border-neutral-400 py-2 text-sm"
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function ContactLinks({ dark = false, children }: { dark?: boolean; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-3">
      <EmailContact
        className={dark ? "button button-light" : "button button-primary"}
      >
        Email <Arrow diagonal />
      </EmailContact>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in a new tab)"
        className={
          dark ? "button button-outline-light" : "button button-secondary"
        }
      >
        LinkedIn <Arrow diagonal />
      </a>
      {children}
    </div>
  );
}

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-width pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="hero-enter">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="page-heading mt-7 max-w-4xl">{title}</h1>
        {children && (
          <div className="mt-7 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function ContactPreview() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-neutral-950 text-white"
    >
      <div className="page-width section-space grid gap-12 lg:grid-cols-[1fr_2fr]">
        <SectionLabel>Get in touch</SectionLabel>
        <div>
          <h2
            id="contact-heading"
            className="text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.055em]"
          >
            Good engineering
            <br />
            starts with a<br />
            <span className="text-neutral-400">conversation.</span>
          </h2>
          <p className="mt-7 mb-8 max-w-md text-base leading-7 text-neutral-400">
            For engineering opportunities, project discussions or professional
            collaboration.
          </p>
          <ContactLinks dark />
          <Link
            href="/contact"
            className="mt-8 inline-block border-b border-neutral-600 pb-1 text-sm text-neutral-300"
          >
            More ways to connect <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-neutral-950 text-neutral-400">
      <div className="page-width flex flex-wrap items-center justify-between gap-6 border-t border-neutral-800 py-7 text-xs">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-white">
          Back to top{" "}
          <span aria-hidden="true" className="ml-3">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
