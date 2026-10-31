import Link from "next/link";
import { SectionLabel, TextLink } from "../site-ui";
import { ChapterNav } from "./chapter-nav";
import { EvidenceFigure } from "./evidence";
import { VisualSequence } from "./visual-sequence";
import { StoryEnvironment } from "./story-environment";
import { AssemblyReveal } from "./assembly-reveal";
import type { CaseStudy, Chapter } from "./types";
import styles from "./story.module.css";

export function ProjectHero({ study }: { study: CaseStudy }) {
  return (
    <header className="page-width pt-12 pb-16 sm:pt-16 sm:pb-24">
      <Link href="/projects" className="text-sm text-neutral-600">
        ← All projects
      </Link>
      <div className="hero-enter mt-12">
        <SectionLabel>{study.label}</SectionLabel>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.1] font-medium tracking-[-0.045em]">
          {study.title}
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
          {study.summary}
        </p>
      </div>
      <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-neutral-300 pt-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_.8fr_1.5fr_.4fr]">
        {study.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow text-neutral-500">{fact.label}</dt>
            <dd className="mt-3 text-sm leading-7">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12">
        <EvidenceFigure evidence={study.hero} priority presentation="intro" />
      </div>
      <AwardCallout title={study.award} context={study.awardContext} />
    </header>
  );
}

export function AwardCallout({
  title,
  context,
}: {
  title: string;
  context: string;
}) {
  return (
    <aside
      aria-label="Project award"
      className="mt-16 grid gap-8 border-y border-neutral-300 py-12 sm:grid-cols-[1fr_2fr] sm:py-16"
    >
      <p className="eyebrow text-neutral-500">Project distinction</p>
      <div>
        <h2 className="max-w-2xl font-medium">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7">{context}</p>
        <p className="mt-2 text-xs leading-6 text-neutral-500">
          Awarded to the wider collaborative aircraft project.
        </p>
      </div>
    </aside>
  );
}

export function ProjectSection({ chapter }: { chapter: Chapter }) {
  return (
    <section
      id={chapter.id}
      tabIndex={-1}
      aria-labelledby={`${chapter.id}-title`}
      className={`${styles.chapter} ${chapter.tone === "dark" ? styles.darkChapter : ""} ${chapter.id === "outcome" || chapter.id === "reflection" ? styles.conclusion : ""}`}
    >
      <h2
        id={`${chapter.id}-title`}
        className="max-w-3xl text-3xl leading-[1.15] font-medium tracking-[-0.04em] sm:text-4xl"
      >
        {chapter.title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
        {chapter.intro}
      </p>
      {chapter.points && (
        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {chapter.points.map((point) => (
            <div key={point.title} className="border-t border-current/20 pt-5">
              <h3 className="text-base font-medium">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 opacity-75">{point.text}</p>
            </div>
          ))}
        </div>
      )}
      {chapter.steps && <VisualSequence steps={chapter.steps.filter((step) => !step.reveal)} />}
      {chapter.steps?.filter((step) => step.reveal).map((step) => (
        <AssemblyReveal key={step.title} step={step} />
      ))}
      {chapter.evidence && (
        <div className="mt-10">
          <EvidenceFigure evidence={chapter.evidence} />
        </div>
      )}
      {chapter.detail && <TechnicalDetail detail={chapter.detail} />}
    </section>
  );
}

export function TechnicalDetail({
  detail,
}: {
  detail: NonNullable<Chapter["detail"]>;
}) {
  return (
    <div className="mt-10 border-t border-current/20 pt-7">
      <h3 className="text-lg font-medium leading-7">{detail.title}</h3>
      <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 opacity-75">
        {detail.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function NextProject({ project }: { project: CaseStudy["next"] }) {
  return (
    <div className="border-t border-neutral-300 py-12 sm:py-16">
      <p className="eyebrow text-neutral-500">Continue exploring</p>
      <Link
        href={project.href}
        className="group mt-5 flex items-center justify-between gap-5 text-2xl font-medium tracking-tight sm:text-3xl"
      >
        <span>
          <span className="mb-3 block text-sm font-normal tracking-normal text-neutral-500">
            Next project
          </span>
          {project.title}
        </span>
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <TextLink href="/projects">Back to all projects</TextLink>
        <Link href="/contact" className="text-sm underline underline-offset-4">
          Discuss this work
        </Link>
      </div>
    </div>
  );
}

export function ProjectStory({ study }: { study: CaseStudy }) {
  return (
    <main id="main" className={styles.story}>
      <ProjectHero study={study} />
      <StoryEnvironment>
      <div className={`page-width ${styles.storyLayout}`}>
        <ChapterNav
          chapters={study.chapters.map(({ id, label }) => ({ id, label }))}
        />
        <div className="min-w-0">
          {study.chapters.map((chapter) => (
            <ProjectSection key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
      </StoryEnvironment>
      <div className={`page-width ${styles.storyLayout}`}>
        <div className="min-w-0 lg:col-start-2"><NextProject project={study.next} /></div>
      </div>
    </main>
  );
}
