import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionLabel, Arrow } from "../components/site-ui";
import { ProjectCard } from "../components/project-card";
import { ProjectGrid } from "../components/project-grid";
import { projects, projectCategories } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by Kinon A. Southerton Jones, spanning aerodynamic design, structural FEA, manufacturing, simulation and research.",
};

export default function ProjectsPage() {
  const dissertation = projects.find(
    (project) => project.slug === "microsoft-teams-research",
  )!;
  const engineeringProjects = projects.filter(
    (project) => project.slug !== dissertation.slug,
  );
  return (
    <main id="main">
      <PageIntro label="Project archive" title="Ideas into engineering.">
        <p>
          A closer look at my work — from aircraft design and structural
          analysis to hands-on manufacture, dynamic modelling and research.
        </p>
      </PageIntro>
      <section
        aria-labelledby="dissertation-heading"
        className="page-width grid gap-8 border-t border-neutral-200 py-14 sm:py-20 lg:grid-cols-[1fr_2fr]"
      >
        <div>
          <SectionLabel>Final-Year Dissertation</SectionLabel>
        </div>
        <div>
          <h2
            id="dissertation-heading"
            className="text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl"
          >
            {dissertation.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
            {dissertation.summary}
          </p>
          <Link
            href={`/projects/${dissertation.slug}`}
            className="group mt-7 inline-flex items-center gap-5 border-b border-neutral-400 py-2 text-sm"
          >
            View dissertation project <Arrow />
          </Link>
        </div>
      </section>
      <section
        aria-labelledby="projects-heading"
        className="border-y border-neutral-200 bg-[#eeefed] py-14 sm:py-20"
      >
        <div className="page-width">
          <ProjectGrid
            categories={projectCategories}
            items={engineeringProjects.map((project, index) => ({
              slug: project.slug,
              categories: project.categories,
              card: <ProjectCard project={project} index={index} />,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
