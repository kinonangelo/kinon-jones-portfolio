import Image from "next/image";
import Link from "next/link";
import { profile, focusAreas } from "./data/profile";
import { featuredProjects } from "./data/projects";
import {
  Arrow,
  SectionLabel,
  TextLink,
  ContactPreview,
} from "./components/site-ui";
import { ProjectCard } from "./components/project-card";
import { CvRequest } from "./components/cv-request";
import { ProjectFilm } from "./components/project-film";
import { EmailContact } from "./components/email-contact";

export default function Home() {
  return (
    <main id="main">
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="page-width relative pb-8 pt-12 sm:pt-16"
      >
        <div className="grid items-center gap-4 md:grid-cols-[1.15fr_1fr] lg:gap-3">
          <div className="hero-enter relative z-10 min-w-0 pt-5 pb-6 lg:pb-12">
            <h1 id="hero-heading" className="hero-name">
              Kinon A.
              <br />
              <span className="text-neutral-500">Southerton</span>
              <br />
              Jones<span className="text-neutral-400">.</span>
            </h1>
            <p className="mt-6 text-base font-medium tracking-tight sm:text-lg">
              {profile.qualification}
            </p>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-600">
              I enjoy understanding how things work, solving difficult problems,
              and turning ideas into designs that can be analysed, tested and
              improved. My interests span aerospace design, simulation and
              hands-on engineering, with a broader grounding in risk, finance
              and engineering decision-making.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/projects" className="button button-primary group">
                Explore my work <Arrow />
              </Link>
              <EmailContact
                className="button button-secondary"
              >
                Email <Arrow diagonal />
              </EmailContact>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="group inline-flex items-center gap-2 py-3 text-sm"
              >
                LinkedIn <Arrow diagonal />
              </a>
              <CvRequest />
            </div>
          </div>
          <div className="hero-enter portrait-wrap [animation-delay:150ms]">
            <div className="portrait-fade">
              <Image
                src="/images/portrait.webp"
                alt="Kinon A. Southerton Jones in a light suit, holding his jacket"
                width={1800}
                height={2425}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1320px) 650px, (min-width: 768px) 50vw, 100vw"
                className="portrait-image"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-end gap-4 border-t border-neutral-200 pt-6 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
          <a href="#about" className="flex items-center gap-4">
            Scroll to discover <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="section-space page-width grid gap-10 lg:grid-cols-[1fr_2fr]"
      >
        <SectionLabel>About me</SectionLabel>
        <div>
          <h2 id="about-heading" className="section-heading max-w-2xl">
            An engineering mindset.
            <br />
            <span className="text-neutral-500">An independent path.</span>
          </h2>
          <div className="mt-8 grid gap-6 text-base leading-8 text-neutral-600 sm:grid-cols-2">
            <p>
              Graduating with First-Class Honours in Aerospace Engineering from
              Kingston University was a goal I had worked towards for years. A
              50% academic scholarship during Years 1–2 helped me begin that
              journey.
            </p>
            <p>
              Building an international Mathematics and Physics tutoring career
              alongside my studies allowed me to fund my university fees and
              support myself. Balancing both shaped the independence, discipline
              and persistence I now bring to engineering.
            </p>
          </div>
          <p className="mt-7 max-w-2xl text-xs leading-7 text-neutral-500">
            {focusAreas.join(" · ")}
          </p>
          <div className="mt-7">
            <TextLink href="/about">More about my path</TextLink>
          </div>
        </div>
      </section>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="section-space border-y border-neutral-200 bg-[#eeefed]"
      >
        <div className="page-width">
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="mt-7 mb-12 flex flex-wrap items-end justify-between gap-5">
            <h2 id="projects-heading" className="section-heading">
              Ideas into engineering.
            </h2>
            <p className="text-sm text-neutral-600">
              A closer look at my work.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                title={project.homepageTitle}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/projects" className="button button-primary group">
              View All Projects <Arrow />
            </Link>
          </div>
          <div className="mt-16 border-t border-neutral-300 pt-10">
            <SectionLabel>Research in focus</SectionLabel>
            <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">An integrated Microsoft Teams model.</h3>
            <p className="mt-4 mb-7 max-w-2xl text-base leading-7 text-neutral-600">An individual dissertation connecting student evidence with a proposed academic workspace for learning and collaboration.</p>
            <ProjectFilm teaser />
            <div className="mt-7"><TextLink href="/projects/microsoft-teams-research">Explore the dissertation project</TextLink></div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="page-width section-space grid gap-10 lg:grid-cols-[1fr_2fr]"
      >
        <SectionLabel>Experience & education</SectionLabel>
        <div>
          <h2 id="experience-heading" className="section-heading">
            The foundation.
            <br />
            <span className="text-neutral-500">The practical experience.</span>
          </h2>
          <div className="mt-10 border-t border-neutral-300">
            <div className="grid gap-3 border-b border-neutral-300 py-7 sm:grid-cols-[140px_1fr]">
              <p className="eyebrow text-neutral-500">2023–2026</p>
              <div>
                <h3 className="text-lg font-medium">Kingston University</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  BSc (Hons) Aerospace Engineering · First-Class Honours
                  <br />
                  50% academic scholarship during Years 1–2.
                </p>
              </div>
            </div>
            <div className="grid gap-3 border-b border-neutral-300 py-7 sm:grid-cols-[140px_1fr]">
              <p className="eyebrow text-neutral-500">Beyond university</p>
              <div>
                <h3 className="text-lg font-medium">
                  Vehicle Diagnostics. Industrial Equipment. Technical Operations. International Tutoring.
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  I’ve worked across vehicle diagnostics, industrial equipment, technical operations and international tutoring, developing practical problem-solving, clear communication and responsibility for real outcomes — experience that now shapes how I approach engineering work.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <TextLink href="/experience">Explore my experience</TextLink>
          </div>
        </div>
      </section>
      <ContactPreview />
    </main>
  );
}
