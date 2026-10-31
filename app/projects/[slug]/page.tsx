import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../data/projects";
import { ProjectStory } from "../../components/case-study/project-story";
import { discusCaseStudy } from "../../data/case-studies/discus";
import { portfolioStudies } from "../../data/case-studies/portfolio";
import { PortfolioProjectStory } from "../../components/portfolio-project-story";
import { DissertationStory } from "../../components/dissertation/dissertation-story";
import { dissertationTitle } from "../../data/case-studies/dissertation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Project not found" };
  if (project.slug === "microsoft-teams-research") return {
    title: dissertationTitle,
    description: "An individual mixed-methods dissertation investigating Microsoft Teams in undergraduate education, from student evidence to a proposed module and group-work model.",
  };
  return {
    title: project.detailTitle ?? project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  if (project.slug === "discus-2c-glider")
    return <ProjectStory study={discusCaseStudy} />;
  if (project.slug === "microsoft-teams-research")
    return <DissertationStory />;
  const study = portfolioStudies[project.slug];
  if (!study) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <PortfolioProjectStory project={project} study={study} next={next} />;
}
