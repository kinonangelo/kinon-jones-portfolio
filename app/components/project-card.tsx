import Link from "next/link";
import Image from "next/image";
import { EngineeringDrawing } from "./engineering-drawing";
import { Arrow } from "./site-ui";
import type { Project } from "../data/projects";

export function ProjectCard({
  project,
  index,
  title = project.title,
}: {
  project: Project;
  index: number;
  title?: string;
}) {
  return (
    <article className="group flex h-full min-w-0 flex-col">
      {project.slug === "discus-2c-glider" ? (
        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="project-drawing relative flex shrink-0 items-center overflow-hidden border border-neutral-300 bg-neutral-800 px-5 sm:px-7"
        >
          <Image
            src="/images/discus-assembly.png"
            width={1646}
            height={398}
            alt=""
            sizes="(min-width: 1320px) 580px, (min-width: 768px) 45vw, 90vw"
            className="h-auto w-full object-contain"
          />
        </Link>
      ) : project.drawing ? (
        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="project-drawing relative block shrink-0 overflow-hidden border border-neutral-300 bg-[#e5e7e4]"
        >
          <span className="absolute top-5 left-5 z-10 font-mono text-[10px] text-neutral-600">
            {String(index + 1).padStart(2, "0")} /{" "}
            {project.discipline.toUpperCase()}
          </span>
          <EngineeringDrawing kind={project.drawing} />
          <span className="absolute right-5 bottom-4 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
            Concept illustration
          </span>
        </Link>
      ) : (
        <div
          aria-hidden="true"
          className="project-drawing relative flex shrink-0 flex-col justify-center border border-neutral-300 bg-[#e5e7e4] px-6 sm:px-10"
        >
          <span className="absolute top-5 left-5 font-mono text-[10px] text-neutral-600">
            {String(index + 1).padStart(2, "0")} /{" "}
            {project.discipline.toUpperCase()}
          </span>
          <p className="text-2xl font-medium tracking-tight text-neutral-600 sm:text-3xl">
            {project.discipline}
          </p>
          <p className="mt-4 text-xs leading-6 text-neutral-500">
            {project.tools.join(" · ")}
          </p>
        </div>
      )}
      <div className="mt-6 flex flex-1 flex-col pb-5">
        <p className="eyebrow text-neutral-500">{project.discipline}</p>
        <h3 className="mt-3 text-2xl leading-tight font-medium tracking-[-0.04em] sm:text-[28px]">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-neutral-500"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-neutral-600 md:min-h-21">
          {project.summary}
        </p>
        {project.award && (
          <p className="mt-4 border-l-2 border-neutral-800 pl-3 text-xs leading-6 text-neutral-600">
            {project.award}
            <br />
            Kingston University · ECE Showcase 2026 · Team award
          </p>
        )}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-300 py-4 text-xs font-medium"
        aria-label={`View project: ${title}`}
      >
        View project <Arrow />
      </Link>
    </article>
  );
}
