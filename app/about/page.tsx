import type { Metadata } from "next";
import {
  PageIntro,
  SectionLabel,
  TextLink,
  ContactPreview,
} from "../components/site-ui";
import { skillGroups } from "../data/profile";
import { ReadingFlow } from "./reading-flow";
import readingStyles from "./reading-flow.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The path, education and engineering interests of Kinon A. Southerton Jones, a First-Class Aerospace Engineering graduate from Kingston University.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageIntro
        label="About me"
        title="An engineering mindset. An independent path."
      >
        <p>
          I enjoy the problems that don’t arrive with an obvious solution — the
          ones that ask you to understand the system, question an assumption and
          work carefully towards an answer.
        </p>
      </PageIntro>
      <section
        aria-labelledby="story-heading"
        className="page-width border-t border-neutral-200 py-14"
      >
        <div className={readingStyles.intro}>
        <SectionLabel>The path so far</SectionLabel>
        <div>
          <h2 id="story-heading" className="section-heading">
            Learning to be responsible
            <br />
            <span className="text-neutral-500">for the whole process.</span>
          </h2>
        </div>
        </div>
          <ReadingFlow story stages={["Foundation", "Building\nindependently", "Work &\nresponsibility", "Engineering\ndirection"]}>
            <div data-reading-group>
              <h3 className={readingStyles.waypoint}>Foundation</h3>
              <p>
                I graduated from Kingston University with First-Class Honours in
                BSc Aerospace Engineering, a goal I had worked towards for years.
                The degree gave me experience moving between theoretical analysis,
                digital modelling and simulation, and practical engineering work.
                In the collaborative Discus 2C glider project, those strands came
                together in a team effort that won the “Winner’s Award for Best
                Group Project” at Kingston University’s ECE Showcase 2026.
              </p>
              <p>
                My development also included hands-on mechanical work:
                diagnostics, fault-finding, component removal and refitting,
                testing and troubleshooting. Working with physical systems gave me
                another way to understand how components interact and how to
                investigate a problem in practice.
              </p>
            </div>
            <div data-reading-group>
              <h3 className={readingStyles.waypoint}>Building independently</h3>
              <p>
                Making university financially possible meant building something
                alongside it. A 50% academic scholarship during Years 1–2 helped
                me begin, and I built an international Mathematics and Physics
                tutoring career, teaching students across Europe, Asia, Australia
                and North America. I used that income to pay my university fees
                and support myself through my studies.
              </p>
              <p>
                At peak periods, I managed approximately 15–20 individual students
                and around 50 hours of tutoring-related work per week alongside
                university commitments. Preparation, teaching, scheduling and
                communicating with students and parents all had to fit around
                engineering coursework and project deadlines. Running that work
                independently developed responsibility, discipline and time
                management. Teaching also strengthened my ability to explain
                technical reasoning: I had to understand a concept well enough to
                make it understandable to somebody else.
              </p>
            </div>
            <div data-reading-group>
              <h3 className={readingStyles.waypoint}>Work &amp; responsibility</h3>
              <p>
                Tutoring was one part of my professional development alongside
                university. I also spent several years working within my father’s
                industrial supplies and die-cutting technology business, Dudes Arc
                (Pvt) Ltd. Curiosity drew me into understanding how the machinery
                and specialist tooling worked, why particular materials suited an
                application and how customers made purchasing decisions. Working
                across technical demonstrations, customer support, procurement,
                inventory, logistics and financial records in QuickBooks helped me
                see how technical and commercial decisions connected across the
                whole business.
              </p>
              <p>
                I also deliberately chose to work with Smart EDU (Pvt) Ltd. while
                running my independent tutoring practice. I already had my own
                students and wanted to learn from a more established teaching
                environment. Its training, feedback and structured approach to
                lesson planning gave me opportunities to improve how I taught
                mixed abilities, communicated and delivered the curriculum. I
                carried those lessons back into my own practice, refining the
                standard of a service I was already responsible for.
              </p>
              <p>
                Across different jobs, I have found that responsibility often
                broadens once people have seen how I work. At KB Repairs, I
                initially joined in a technical capacity, working with vehicle
                diagnostics, ADAS calibration and practical fault-finding. Senior
                management subsequently trusted me with analytical and commercial
                work: reviewing the company’s website, social media, SEO and
                online/eBay operations, researching opportunities and presenting
                recommendations to senior management. It meant moving between
                workshop problems and business analysis, then explaining the
                evidence to people responsible for making decisions.
              </p>
              <p>
                After graduating, I joined Sainsbury’s as a Service Assistant
                while continuing to tutor and applying for graduate engineering
                roles. I wanted to keep working and earning, and took the role
                seriously. I became the only new colleague selected for wider
                training across almost every department, with responsibilities
                including store-opening procedures, checkout-system setup and
                cash-office work involving counting and reconciling approximately
                £15,000. Those tasks required accuracy, procedural care and
                independent judgement. Whatever the setting, I want to understand
                what I am responsible for, do it properly and earn the trust to
                take on more.
              </p>
            </div>
            <div data-reading-group>
              <h3 className={readingStyles.waypoint}>Engineering direction</h3>
              <p>
                My engineering interests span design, simulation, structural
                analysis, testing and optimisation. I enjoy moving between theory
                and practical problem-solving, whether that means comparing a
                model’s behaviour, refining a component or working through a fault
                in the workshop. I’m particularly interested in difficult problems
                where the route to an answer isn’t immediately obvious.
              </p>
              <p>
                My education also gave me a grounding in risk, commercial
                considerations, financial analysis and investment decision-making.
                It helped me understand that an engineering decision has to
                account for cost and feasibility as well as technical performance.
              </p>
            </div>
          </ReadingFlow>
          <div className={readingStyles.followingLink}>
            <TextLink href="/projects">
              See that thinking in my projects
            </TextLink>
          </div>
      </section>
      <section
        aria-labelledby="approach-heading"
        className="page-width border-t border-neutral-200 py-14"
      >
        <div className={readingStyles.intro}>
        <SectionLabel>How I work</SectionLabel>
        <div>
          <h2 id="approach-heading" className="section-heading">
            Break the problem down.
            <br />
            <span className="text-neutral-500">Build the answer up.</span>
          </h2>
          <p className={readingStyles.sequence}>
            Organise → Understand → Break down → Test → Refine
          </p>
        </div>
        </div>
          <ReadingFlow stages={["Organise", "Understand", "Break down", "Test & refine"]}>
            <div data-reading-group>
            <h3 className={readingStyles.waypoint}>Organise</h3>
            <p>
              Real work rarely arrives as one neat problem at a time. There are
              competing priorities, deadlines, incomplete information and
              requirements that change. My first response is to create order:
              identify the deliverables, distinguish urgency from importance
              and map the dependencies. I break larger tasks into smaller pieces,
              estimate the work realistically and build a schedule that leaves
              room for testing and rework where possible.
            </p>
            </div>
            <div data-reading-group>
            <h3 className={readingStyles.waypoint}>Understand</h3>
            <p>
              My aim is to find a workable route to delivery. If missing
              information, a blocked dependency or genuinely conflicting
              deadlines put that at risk, I raise it early with the team or
              manager. I explain what is affected, what can still be achieved
              and which options would help. That gives us time to act on a
              constraint before it becomes a missed commitment.
            </p>
            </div>
            <div data-reading-group>
            <h3 className={readingStyles.waypoint}>Break down</h3>
            <p>
              For the technical problem itself, I work back to fundamentals. I
              establish what is known, what needs to be found, the governing
              principles, assumptions and constraints, and the evidence still
              needed. Before starting calculations, I map how inputs,
              dependencies and processes connect to the required outputs.
              Understanding those relationships lets me divide the problem into
              smaller parts, solve and test each one, then build the complete
              answer back up and check how the parts interact.
            </p>
            </div>
            <div data-reading-group>
            <h3 className={readingStyles.waypoint}>Test &amp; refine</h3>
            <p>
              An initial model or design is a starting point. I compare its
              predictions with the available evidence and test whether the
              result meets the requirements. If an assumption fails, a model
              behaves unexpectedly or another solution performs better, I
              revisit the reasoning and refine the approach. I would rather
              correct an early idea than defend it simply because I produced it.
            </p>
            </div>
          </ReadingFlow>
      </section>
      <section
        aria-labelledby="education-heading"
        className="section-space border-y border-neutral-200 bg-[#eeefed]"
      >
        <div className="page-width grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionLabel>Education</SectionLabel>
          <div>
            <p className="eyebrow text-neutral-500">2023–2026</p>
            <h2
              id="education-heading"
              className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Kingston University
            </h2>
            <p className="mt-4 text-lg">BSc (Hons) Aerospace Engineering</p>
            <p className="mt-2 text-neutral-600">First-Class Honours</p>
            <p className="mt-6 border-l-2 border-neutral-800 pl-4 text-sm leading-7 text-neutral-600">
              50% academic scholarship during Years 1–2, based on academic
              performance.
            </p>
            <h3 className="eyebrow mt-10">Academic foundation</h3>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-neutral-600">
              Work in aircraft performance and dynamics, aerodynamic design,
              thermodynamics and fluid mechanics, and aircraft systems helped me
              connect physical principles with aircraft behaviour. Structural
              analysis and FEA developed my approach to assessing loads and
              material response, while MATLAB and Simulink modelling of dynamic
              systems helped me explore how assumptions affect a simulation’s
              response.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-neutral-600">
              Design and manufacturing projects brought those ideas into
              practical work, with testing and validation providing a way to
              assess the evidence. Project planning, risk assessment and
              engineering decision-making required me to balance technical
              performance, constraints, cost and feasibility. Together, these
              experiences developed my ability to move from analysis to a design
              decision and explain the reasoning behind it.
            </p>
            <div className="mt-10 border-t border-neutral-300 pt-7">
              <h3 className="text-lg font-medium">
                Earlier foundations in Mathematics and Physics
              </h3>
              <p className="mt-4 text-sm leading-8 text-neutral-600">
                Colombo South International College, Sri Lanka
              </p>
              <h4 className="mt-6 text-base font-medium">
                Pearson Edexcel International Advanced Levels
              </h4>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
                <li>Mathematics — A</li>
                <li>Physics — A</li>
                <li>Chemistry — A</li>
              </ul>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <p className="border-l-2 border-neutral-800 pl-4 text-sm leading-7 text-neutral-600">
                  <span className="block text-xl font-medium text-neutral-950">
                    300/300
                  </span>
                  AS Physics
                </p>
                <p className="border-l-2 border-neutral-800 pl-4 text-sm leading-7 text-neutral-600">
                  <span className="block text-xl font-medium text-neutral-950">
                    300/300
                  </span>
                  AS Chemistry
                </p>
              </div>
            </div>
            <div
              aria-labelledby="distinction-heading"
              className="mt-14 border-t border-neutral-300 pt-12 pb-4 sm:mt-16 sm:pt-14"
            >
              <p className="eyebrow text-neutral-500">Academic Distinction</p>
              <h3
                id="distinction-heading"
                className="mt-6 text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Highest Mark in Sri Lanka
              </h3>
              <p className="mt-5 text-lg text-neutral-600">
                Pearson Edexcel IGCSE Mathematics
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="skills-heading"
        className="page-width section-space"
      >
        <SectionLabel>Technical practice</SectionLabel>
        <h2 id="skills-heading" className="section-heading mt-7">
          A connected set of skills.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="border-t border-neutral-300 pt-6">
              <span className="font-mono text-xs text-neutral-500">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-tight">
                {group.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {group.description}
              </p>
              {group.tools && (
                <p className="mt-6 text-xs leading-7 text-neutral-500">
                  {group.tools}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className={readingStyles.closing}>
        <ContactPreview />
      </div>
    </main>
  );
}
