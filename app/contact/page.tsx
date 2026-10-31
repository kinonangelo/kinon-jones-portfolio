import type { Metadata } from "next";
import { ContactLinks, SectionLabel, TextLink } from "../components/site-ui";
import { profile } from "../data/profile";
import { EmailContact } from "../components/email-contact";
import { CvRequest } from "../components/cv-request";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kinon A. Southerton Jones to discuss engineering opportunities, projects or professional collaboration.",
};

export default function ContactPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <section className="page-width flex-1 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <SectionLabel>Get in touch</SectionLabel>
        <div className="mt-9 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="hero-enter">
            <h1 className="page-heading">
              Interested in
              <br />
              my work?<br />
              <span className="text-neutral-500">Let’s talk.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-neutral-600">
              I’m open to graduate engineering opportunities, project discussions and professional connections. If you’d like to discuss my work, experience or potential opportunities, feel free to get in touch.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-neutral-300 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="eyebrow mb-6">Let’s connect</p>
            <ContactLinks><CvRequest /></ContactLinks>
            <EmailContact
              className="mt-7 text-sm break-all text-neutral-600 underline decoration-neutral-300 underline-offset-4"
            >
              {profile.email}
            </EmailContact>
            <p className="mt-4 text-sm leading-7 text-neutral-500">
              Email me directly or connect on LinkedIn.
            </p>
          </div>
        </div>
        <div className="mt-20 border-t border-neutral-300 pt-7">
          <TextLink href="/projects">
            Explore the work behind the introduction
          </TextLink>
        </div>
      </section>
    </main>
  );
}
