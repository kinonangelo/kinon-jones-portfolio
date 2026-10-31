import Link from "next/link";
import type { Project } from "../data/projects";
import type { PortfolioStudy } from "../data/case-studies/portfolio";
import { SectionLabel } from "./site-ui";
import { ChapterNav } from "./case-study/chapter-nav";
import { ProjectSection, NextProject } from "./case-study/project-story";
import styles from "./case-study/story.module.css";
import portfolioStyles from "./portfolio-project-story.module.css";

/** Reuses the approved story primitives without changing the Discus renderer. */
export function PortfolioProjectStory({ project, study, next }: {
  project: Project;
  study: PortfolioStudy;
  next: Project;
}) {
  const facts = [
    { label: "My role", value: project.role },
    { label: "Project", value: project.discipline },
    { label: "Tools", value: study.tools.join(" · ") || "Not specified in the supplied material" },
    { label: "Methods", value: study.methods.join(" · ") },
  ];
  return (
    <main id="main" className={styles.story}>
      <header className="page-width pt-12 pb-16 sm:pt-16 sm:pb-24">
        <Link href="/projects" className="text-sm text-neutral-600">← All projects</Link>
        <div className="hero-enter mt-12">
          <SectionLabel>{project.discipline}</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.1] font-medium tracking-[-0.045em]">
            {project.detailTitle ?? project.title}
          </h1>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div><dt className="eyebrow text-neutral-500">Start date</dt><dd className="mt-2">{study.startDate ?? "To be confirmed"}</dd></div>
            <div><dt className="eyebrow text-neutral-500">End date</dt><dd className="mt-2">{study.endDate ?? "To be confirmed"}</dd></div>
          </dl>
          <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">{study.overview}</p>
        </div>
        <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-neutral-300 pt-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_.8fr_1.5fr]">
          {facts.map((fact) => (
            <div key={fact.label}><dt className="eyebrow text-neutral-500">{fact.label}</dt><dd className="mt-3 text-sm leading-7">{fact.value}</dd></div>
          ))}
        </dl>
      </header>
      <div className={styles.environment}>
        <div className={`page-width ${styles.storyLayout}`}>
          <ChapterNav chapters={study.chapters.map(({ id, label }) => ({ id, label }))} />
          <div className={`min-w-0 ${project.slug === "shimmy-damper" ? portfolioStyles.workshop : ""}`}>
            {study.chapters.map((item) => <ProjectSection key={item.id} chapter={item} />)}
          </div>
        </div>
      </div>
      <div className={`page-width ${styles.storyLayout}`}>
        <div className="min-w-0 lg:col-start-2"><NextProject project={{ href: `/projects/${next.slug}`, title: next.detailTitle ?? next.title }} /></div>
      </div>
    </main>
  );
}
