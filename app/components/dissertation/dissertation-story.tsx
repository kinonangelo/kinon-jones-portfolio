import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "../site-ui";
import { ChapterNav } from "../case-study/chapter-nav";
import { NextProject } from "../case-study/project-story";
import shared from "../case-study/story.module.css";
import styles from "./dissertation.module.css";
import { EvidenceWalkthrough } from "./evidence-walkthrough";
import { ResearchDiagram, ResearchEnvironment } from "./research-motion";
import { ProjectFilm } from "../project-film";
import { dissertationTitle, dissertationChapters, questionnaireSequences, observationSequence, modelOverview, moduleSequences, groupSequences } from "../../data/case-studies/dissertation";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const index = dissertationChapters.findIndex((chapter) => chapter.id === id);
  return <section id={id} tabIndex={-1} aria-labelledby={`${id}-title`} className={styles.section}>
    <SectionLabel number={String(index + 1).padStart(2, "0")}>{dissertationChapters[index].label}</SectionLabel>
    <h2 id={`${id}-title`} className="mt-5 max-w-3xl">{title}</h2>
    {children}
  </section>;
}

function Points({ items }: { items: [string, string][] }) {
  return <div className={styles.points}>{items.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>;
}

export function DissertationStory() {
  const facts = [
    ["My role", "Independent Researcher & Author"],
    ["Project", "Final-Year Dissertation"],
    ["Year", "2026 · Academic year 2025–2026"],
    ["Tools explored", "Microsoft Teams · Word · PowerPoint · OneNote · Planner · Excel · Whiteboard"],
    ["Methods", "Literature review · Questionnaire · Semi-structured interviews · Direct observation · Descriptive statistics · Thematic analysis"],
  ];
  return <main id="main" className={`${shared.story} ${styles.page}`}>
    <header className="page-width pt-12 pb-16 sm:pt-16 sm:pb-24">
      <Link href="/projects" className="text-sm text-neutral-600">← All projects</Link>
      <div className="hero-enter mt-12">
        <SectionLabel>Research · Digital collaboration · System design</SectionLabel>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.1] font-medium tracking-[-0.045em]">{dissertationTitle}</h1>
        <p className="mt-7 max-w-3xl text-neutral-600">I investigated how Microsoft Teams and its integrated tools could support undergraduate communication, collaboration, productivity and engagement. I combined student evidence with an observed engineering project to develop a more structured model for module delivery and group work.</p>
      </div>
      <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-neutral-300 pt-7 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map(([label, value]) => <div key={label}><dt className="eyebrow text-neutral-500">{label}</dt><dd className="mt-3">{value}</dd></div>)}
      </dl>
      <dl className={styles.overview} aria-label="Research scope">
        <div><dt>Questionnaire</dt><dd><strong>63 responses</strong> across different academic levels and disciplines.</dd></div>
        <div><dt>Interviews</dt><dd><strong>5 semi-structured interviews</strong> with engineering project participants.</dd></div>
        <div><dt>Observation</dt><dd><strong>One six-member glider project</strong>, including me as a participant and researcher.</dd></div>
        <div><dt>Research outcome</dt><dd><strong>Proposed integrated Teams model</strong> and implementation recommendations, informed by quantitative and qualitative evidence.</dd></div>
      </dl>
      <div className={styles.quickRead}>
        <SectionLabel>The research at a glance</SectionLabel>
        <p>Teams offered a broad, integrated toolset, but much of it remained underused while everyday communication continued across other platforms. This evidence informed a proposed integrated Teams model to make better use of existing capabilities and reduce fragmented academic workflows.</p>
        <p>The model was a research proposal. It was not evaluated over a sustained period in a live module, so improvements in learning or productivity were not demonstrated.</p>
        <div><a href="#synthesis">Read the central finding</a><a href="#proposed">Explore the model</a><a href="#limitations">Understand the limitations</a></div>
      </div>
    </header>
    <div className="page-width pb-16 sm:pb-24"><ProjectFilm /></div>
    <ResearchEnvironment>
      <div className={`page-width ${shared.storyLayout} ${styles.layout}`}>
        <ChapterNav chapters={dissertationChapters} />
        <div className="min-w-0">
          <Section id="problem" title="A connected project, spread across disconnected tools">
            <p>Undergraduate work brings together lectures, resources, assignments, meetings and group decisions. When those activities sit in separate applications, students have to move between platforms to find information and reconstruct the progress of their work.</p>
            <p>I examined whether Teams could provide a more coherent academic workspace. The research focused on how it was actually used, what students found useful or difficult, and how a structured implementation could make better use of its existing capabilities.</p>
            <ResearchDiagram inputs={["Learning resources", "Communication", "Group work"]} output="A more coherent academic workspace" caption="Conceptual research objective: connect related activities without assuming one platform can replace every university system." />
            <p>The question was broader than whether students could access Teams. I wanted to understand whether its organisation, integrated tools and everyday use supported the work students needed to complete.</p>
          </Section>
          <Section id="gap" title="From platform capability to practical implementation">
            <p>My literature review considered digital learning environments, collaborative platforms and the reported use of Teams in higher education. It identified potential benefits for communication and shared work, alongside usability, adoption and implementation challenges.</p>
            <Points items={[
              ["What the literature established", "Teams offered an environment for meetings, communication and collaborative documents. Studies also discussed engagement, access and the challenges of digital learning."],
              ["What needed closer examination", "Comparisons with face-to-face teaching and studies of specific courses did not fully explain how a module workspace should be structured or how students would use its tools in everyday group work."],
              ["The research gap", "I focused on the relationship between available functionality, actual student behaviour and the practical organisation of an academic workspace."],
              ["The boundary of the proposal", "Teams was considered as a central collaboration environment. Formal assessment and other institutional functions could still require dedicated learning-management systems and appropriate integration."],
            ]} />
          </Section>
          <Section id="methodology" title="Three evidence streams, one research question">
            <p>I used a mixed-methods approach to compare broader patterns with detailed accounts and direct evidence of use. The literature review provided context; the questionnaire, interviews and observation informed the analysis and the proposed model.</p>
            <ResearchDiagram inputs={["63 questionnaire responses", "5 participant interviews", "Direct group observation"]} output="Descriptive patterns + contextual themes → proposed model" caption="Research process reconstructed from the dissertation. The evidence streams were complementary, not interchangeable measures of effectiveness." />
            <Points items={[
              ["Questionnaire design", "I used closed-ended and Likert-scale questions to explore platform use, perceptions, difficulties and potential improvements. The questionnaire reached students across Levels 3–7+ and several disciplines, with most respondents at undergraduate levels."],
              ["Interviews and observation", "I interviewed five members of the engineering project and observed the six-person group, including myself, over its academic work. Interviews explored communication, collaboration and productivity; observation examined channels, files, tabs and usage patterns."],
              ["Analysis", "I used frequencies and percentages to describe questionnaire responses. I reviewed interview and observation evidence thematically, grouping material around communication, collaboration, productivity and practical barriers before comparing the findings."],
              ["Sampling and ethics", "I used convenience sampling based on access and relevance. Participation was voluntary, the study purpose was explained, informed consent was obtained and responses were anonymised. My involvement in the observed group also required acknowledging possible researcher bias."],
            ]} />
            <p className={styles.sourceNote}>The charts preserve the original dissertation evidence. Question branches and response totals differ: percentages refer to the answers shown for that question, not automatically to all 63 respondents. Multiple-response questions should not be read as exclusive categories.</p>
          </Section>
          <Section id="questionnaire" title="What students used, valued and struggled with">
            <p>I grouped the questionnaire findings into five themes. Together they show the sample, its platform habits, perceptions of usability, barriers and priorities for a more integrated environment.</p>
            <p className={styles.sourceNote}>Figures 5–19 are the original charts. Each can be opened at full size to inspect its labels and legend. These are descriptive findings from this sample, not causal evidence of improved learning.</p>
            {questionnaireSequences.map((sequence) => <EvidenceWalkthrough key={sequence.title} sequence={sequence} />)}
          </Section>
          <Section id="qualitative" title="Why a useful platform was not always the preferred workspace">
            <p>The interviews explained behaviour that the questionnaire alone could not. Participants valued shared files and organised academic work, but often preferred familiar messaging tools for quick exchanges. Their views were not uniform: positive experiences coexisted with frustrations about navigation, speed of communication and engagement.</p>
            <Points items={[
              ["Formal and informal communication", "Participants distinguished structured academic work from everyday conversation. Teams supported organised material and formal exchanges, while WhatsApp often felt quicker and more familiar. Threaded discussion did not suit every interaction."],
              ["Documents and coordination", "Shared files reduced the need to exchange separate versions and gave participants a common working location. Some coordination and deadline management nevertheless remained outside Teams."],
              ["Habit and attention", "Familiarity influenced platform choice. One participant had disabled notifications, illustrating how individual settings and routines could affect communication independently of the workspace structure."],
              ["Participation remained a human issue", "Participants did not attribute all collaboration problems to software. Unequal participation could reflect individual engagement; simply adding a tool would not ensure that every member used it."],
            ]} />
            <blockquote className={styles.quote}><p>“The main reason is habit.”</p><cite>Interview participant 1, on using other platforms alongside Teams.</cite></blockquote>
            <blockquote className={styles.quote}><p>“equal participation depended more on individual engagement rather than the platform itself.”</p><cite>Interview participant 3, on group participation.</cite></blockquote>
            <p>The observed glider workspace made this distinction tangible. The group adopted shared report and presentation documents, but several other available features did not become part of its routine.</p>
            <EvidenceWalkthrough sequence={observationSequence} />
          </Section>
          <Section id="synthesis" title="The gap was between available capability and everyday practice">
            <p>The evidence pointed towards an implementation problem as well as a technology problem. Students recognised useful capabilities, yet familiarity, unclear organisation, limited guidance and practical difficulties shaped what they actually used.</p>
            <ResearchDiagram inputs={["Survey: organisation and guidance", "Interviews: habits and usability", "Observation: selective tool use"]} output="Consistent structure + purposeful tools + supported adoption" caption="Analytical synthesis informing the proposal. This relationship was not tested as a causal model." />
            <Points items={[
              ["Retain what already worked", "The observed use of shared Word and PowerPoint documents supported keeping those tools prominent in the proposed group workspace."],
              ["Address retrieval and navigation", "Requests for clearer organisation and difficulties finding files informed consistent channels, topic-based resources and purposeful tabs."],
              ["Support adoption rather than assume it", "Low reported training and unused project tools informed workshops, lecturer guidance and examples of effective practice."],
              ["Respect different communication needs", "The preference for quick informal messaging informed a distinction between structured posts and chat. Whether this would change established habits remained an open question."],
            ]} />
          </Section>
          <Section id="proposed" title="A structured Teams environment for modules and group work">
            <p>I translated the findings into a proposed model built around a consistent module workspace and dedicated group channels. The aim was to give each activity a clear location while allowing project teams to adapt the details to their work.</p>
            <p className={styles.sourceNote}>The following walkthrough uses original still screenshots from the proposed model, Figures 23–50. It demonstrates configuration and intended workflows, not a live institutional deployment or a recorded user trial.</p>
            <EvidenceWalkthrough sequence={modelOverview} />
            <ResearchDiagram inputs={["Module information", "Teaching and assessment", "Private group channels"]} output="A consistent module-level Team" caption="Conceptual overview of the proposed architecture; specific features and workflows are illustrated below." />
            <h3 className="mt-12">The wider capability considered</h3>
            <p>Alongside the illustrated model, I reviewed the platform capabilities that could support a connected academic environment.</p>
            <Points items={[
              ["Communication and meetings", "Channels and chat, searchable conversation history, scheduled or instant meetings, screen sharing, breakout rooms, recordings and transcription were among the capabilities considered in the dissertation."],
              ["Shared work and integrations", "The review considered file sharing and co-authoring through Microsoft 365, OneDrive and SharePoint, shared notes, Whiteboard and integrations with Microsoft and third-party tools."],
              ["Access across contexts", "Multi-device access was relevant to students moving between teaching spaces and independent work. Reported mobile and performance difficulties remained practical constraints."],
              ["Accessibility and inclusion", "The dissertation discussed live captions, high-contrast options and identity-related features such as pronouns and name pronunciation. These formed part of the wider capability review rather than tested outcomes of the model."],
            ]} />
          </Section>
          <Section id="module" title="From the module homepage to learning, assessment and feedback">
            <p>The module-level experience brought information, teaching resources and structured communication into a predictable environment. The sequence below follows the proposed student and lecturer workflows rather than presenting an isolated list of features.</p>
            {moduleSequences.map((sequence) => <EvidenceWalkthrough key={sequence.title} sequence={sequence} />)}
          </Section>
          <Section id="group" title="A shared working environment for the project team">
            <p>The group model extended the module structure into the work of an assessed team: organising evidence, co-authoring outputs, allocating tasks, recording decisions and maintaining project risks.</p>
            <p>These tools had different evidential foundations. Shared documents had been used extensively in the observed group; wider use of Planner, Whiteboard and meeting records was proposed as a better-supported workflow.</p>
            {groupSequences.map((sequence) => <EvidenceWalkthrough key={sequence.title} sequence={sequence} />)}
          </Section>
          <Section id="implementation" title="A workspace needs an implementation approach, not just a template">
            <p>I recommended coordinated support for institutions, lecturers and students. Consistency would establish a recognisable starting point, while training and flexibility would help groups use the workspace for their actual tasks.</p>
            <ol className={styles.roadmap}>
              <li><SectionLabel>01 · Establish the structure</SectionLabel><h3>Set a consistent module framework</h3><p>Use a General channel for module communication, private channels for group work, clear tabs and organised files. Provide staff guidelines and review the structure periodically so consistency is maintained.</p></li>
              <li><SectionLabel>02 · Support teaching staff</SectionLabel><h3>Combine functionality with effective module design</h3><p>Provide lecturer training on teaching, assessment and workspace organisation. Example templates and practical guidance would support consistent use rather than leave each lecturer to configure the environment independently.</p></li>
              <li><SectionLabel>03 · Introduce student workflows</SectionLabel><h3>Demonstrate, practise and reinforce</h3><p>Run introductory workshops at the start of a degree and follow-up sessions. Demonstrate well-structured module and group spaces, including good examples from previous students with appropriate credit.</p></li>
              <li><SectionLabel>04 · Encourage meaningful adoption</SectionLabel><h3>Connect use to the work students are doing</h3><p>Explain the professional relevance of collaborative working. The dissertation also proposed possible assessment credit for evidenced effective use and optional small competitions with modest prizes. These were recommendations for consideration, not implemented policies or tested incentives.</p></li>
              <li><SectionLabel>05 · Preserve flexibility</SectionLabel><h3>Allow the framework to fit the project</h3><p>Encourage groups to adapt the tools and structure to their requirements. A common template should establish a useful foundation without requiring identical workflows for every assignment.</p></li>
            </ol>
          </Section>
          <Section id="limitations" title="What the study could establish—and what still needed testing">
            <p>The research developed an evidence-informed proposal. Its scale, sampling and evaluation limits constrained the conclusions that could be drawn about broader adoption or measurable educational outcomes.</p>
            <Points items={[
              ["Sample and setting", "The questionnaire was relatively small and used convenience sampling. Interviews and observation centred on one engineering group, limiting how far the findings could be generalised to other courses or universities."],
              ["Researcher involvement", "I was a member of the observed project. This provided access to real working practices, but introduced the possibility of bias in what I noticed and how I interpreted it."],
              ["Perceptions and outcomes", "Questionnaire and interview evidence reflected individual experiences and perceptions. It did not establish that a particular configuration caused improved attainment, productivity or engagement."],
              ["Model evaluation", "The proposed model was not tested over a sustained period in a real module. Its effectiveness, adoption and compatibility with institutional systems remained to be evaluated."],
            ]} />
            <h3 className="mt-12">Further work</h3>
            <p>A larger study across courses and universities would provide a broader evidence base. Applying the model within a live module and evaluating it over time would test the proposed workflows in practice. Further investigation of lecturer perspectives and integration with university systems would also be needed.</p>
          </Section>
          <Section id="reflection" title="Research translated into a practical system proposal">
            <p>I completed an individual dissertation that connected a literature review, questionnaire analysis, interviews and direct observation to a detailed Teams model and implementation recommendations.</p>
            <p>The central conclusion was that available functionality alone did not determine effective use. Organisation, guidance, established habits and the way tools fitted academic work were central to the implementation challenge.</p>
            <p>This work developed my approach to defining a problem, gathering complementary evidence, analysing user needs and translating findings into a structured proposal. It also required me to distinguish a plausible design response from a demonstrated result, and to identify what a subsequent evaluation would need to address.</p>
            <p className={styles.sourceNote}>Source: Kinon Jones, <em>{dissertationTitle}</em>, final-year dissertation, April 2026. Figures 5–50 are reproduced from the supplied dissertation, with their original numbering. Conceptual diagrams on this page summarise the research process and proposed structure.</p>
          </Section>
        </div>
      </div>
    </ResearchEnvironment>
    <div className={`page-width ${shared.storyLayout}`}><div className="min-w-0 lg:col-start-2"><NextProject project={{ href: "/projects/discus-2c-glider", title: "Discus 2C Glider — Nose-Cone Design & Integration" }} /></div></div>
  </main>;
}
