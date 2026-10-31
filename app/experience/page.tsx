import type { Metadata } from "next";
import { PageIntro, ContactPreview } from "../components/site-ui";
import { experience } from "../data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience in international tutoring, automotive diagnostics, industrial equipment and customer operations.",
};

export default function ExperiencePage() {
  return (
    <main id="main">
      <PageIntro
        label="Experience"
        title="Experience across engineering, technical education and operations"
      >
        <p>
          My experience ranges from hands-on automotive engineering and
          industrial equipment to international Mathematics and Physics tutoring
          and customer operations. Each role has shaped a different part of how
          I work: technical problem-solving, communication, organisation,
          practical judgement and responsibility.
        </p>
      </PageIntro>
      <section
        aria-label="Professional experience"
        className="page-width pb-20 sm:pb-28"
      >
        {experience.map((item, index) => (
          <article
            key={item.organisation}
            className="grid gap-7 border-t border-neutral-300 py-10 sm:py-12 lg:grid-cols-[1fr_2fr]"
          >
            <div>
              <p className="eyebrow text-neutral-500">
                0{index + 1} / {item.period}
              </p>
              <h2 className="mt-4 text-xl font-medium tracking-tight">
                {item.organisation}
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">
                {item.role}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                {item.theme}
              </h3>
              <div className="mt-5 grid gap-5 text-sm leading-7 text-neutral-600 sm:grid-cols-2">
                <p>{item.description}</p>
                <p>{item.detail}</p>
              </div>
              <p className="mt-6 text-xs leading-6 text-neutral-500">
                {item.skills}
              </p>
            </div>
          </article>
        ))}
      </section>
      <ContactPreview />
    </main>
  );
}
