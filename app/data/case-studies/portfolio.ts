import { projects, type Project } from "../projects";
import type { Chapter, Evidence } from "../../components/case-study/types";

export type PortfolioStudy = {
  overview: string;
  startDate?: string;
  endDate?: string;
  tools: string[];
  methods: string[];
  chapters: Chapter[];
};

// Existing project records remain the source for technical detail and media.
function project(slug: string): Project {
  const record = projects.find((item) => item.slug === slug);
  if (!record) throw new Error(`Missing project: ${slug}`);
  return record;
}

function chapter(id: string, title: string, intro: string, extra: Partial<Chapter> = {}): Chapter {
  return { id, label: title, title, intro, ...extra };
}

function sourceChapter(slug: string, index: number, id: string, title: string): Chapter {
  const section = project(slug).sections[index];
  return chapter(id, title, section.paragraphs[0], section.paragraphs.length > 1 ? {
    detail: { title: "Technical context", paragraphs: section.paragraphs.slice(1) },
  } : {});
}

function evidence(slug: string, index: number): Evidence {
  const photo = project(slug).gallery?.[index];
  if (!photo) throw new Error(`Missing evidence: ${slug}/${index}`);
  return { ...photo, dark: photo.presentation === "wide-dark" };
}

export const portfolioStudies: Record<string, PortfolioStudy> = {
  "uav-design-manufacturing": {
    startDate: "February 2025",
    endDate: "August 2025",
    overview: "I worked on aerofoil design, aerodynamic analysis and test planning for a surveillance UAV. The project targeted a 2 kg payload, two-hour endurance and 60 km/h, linking the aerodynamic configuration to a defined surveillance mission.",
    tools: [],
    methods: ["Aerodynamic analysis", "Geometry refinement", "Test planning"],
    chapters: [
      sourceChapter("uav-design-manufacturing", 0, "brief", "Project Brief"),
      sourceChapter("uav-design-manufacturing", 1, "contribution", "My Contribution"),
      chapter("development", "Aerodynamic Development", "I refined the aerofoil geometry, angle of attack and aerodynamic configuration against the payload, endurance and speed targets.", {
        points: [
          { title: "Geometry and configuration", text: "My design and analysis work focused on the aerofoil and its aerodynamic configuration." },
          { title: "Performance objectives", text: "The payload, endurance and speed requirements provided the design targets. They were not verified flight-performance results." },
        ],
      }),
      sourceChapter("uav-design-manufacturing", 2, "validation", "Test Planning"),
      chapter("outcome", "Outcome", "My contribution covered aerofoil refinement, aerodynamic analysis and a plan for assessing lift, drag, stability, speed and endurance. Completed wind-tunnel and flight-test results are not yet documented in this case study."),
      chapter("competencies", "Engineering Competencies", "I connected a mission brief to aerodynamic design decisions and planned the evidence needed to assess performance.", {
        points: [
          { title: "Requirements-led design", text: "I worked from explicit payload, endurance and speed objectives when refining the geometry." },
          { title: "Verification planning", text: "I planned wind-tunnel and flight testing around the aerodynamic and operational quantities to be assessed." },
        ],
      }),
    ],
  },
  "aircraft-structural-fea": {
    startDate: "2024",
    endDate: "2025",
    overview: "I modelled and assessed Piper PA-28 wing-spar alternatives to examine structural performance and weight efficiency. The study combined four geometries with steel and Aluminium 6061, producing eight configurations for comparison.",
    tools: [],
    methods: ["Finite element analysis", "Structural modelling", "Comparative assessment"],
    chapters: [
      chapter("brief", "Project Brief", "The study examined how wing-spar geometry and material choice affected structural performance and weight efficiency for the Piper PA-28."),
      sourceChapter("aircraft-structural-fea", 0, "contribution", "My Contribution"),
      sourceChapter("aircraft-structural-fea", 1, "analysis", "Structural Assessment"),
      chapter("comparison", "Comparison Framework", "I assessed the eight configurations using a common set of structural quantities.", {
        points: [
          { title: "Von Mises stress", text: "I compared the stress results as part of the structural assessment." },
          { title: "Displacement", text: "I examined displacement alongside stress to assess structural response." },
          { title: "Safety factors", text: "I included safety factors in the comparison of configurations." },
          { title: "Material and geometry", text: "I considered four spar geometries in steel and Aluminium 6061 in relation to strength and weight efficiency." },
        ],
      }),
      chapter("outcome", "Outcome", "I completed a comparative structural assessment across eight wing-spar configurations. A preferred configuration and numerical results are not specified without the supporting analysis.", {
        detail: { title: "Supporting analysis", paragraphs: project("aircraft-structural-fea").sections[2].paragraphs },
      }),
      chapter("competencies", "Engineering Competencies", "I developed structural models and interpreted stress, displacement and safety-factor results to compare material and geometry alternatives.", {
        points: [
          { title: "Structural modelling", text: "I translated alternative spar geometries and material choices into configurations for analysis." },
          { title: "Engineering comparison", text: "I assessed several response quantities together rather than using a single result to describe structural performance." },
        ],
      }),
    ],
  },
  "shimmy-damper": {
    startDate: "April 2024",
    endDate: "July 2024",
    overview: "As part of an engineering team, I designed and manufactured a functional 1:1 scale Cessna shimmy damper. The project connected mechanical design with material selection, manufacturing planning, quality assurance and practical workshop work.",
    tools: [],
    methods: ["Material selection", "Manufacturing planning", "Quality assurance", "Risk mitigation"],
    chapters: [
      chapter("brief", "Project Brief", "The team project involved designing and manufacturing a functional 1:1 scale Cessna shimmy damper, taking the work from component design into physical manufacture."),
      chapter("contribution", "My Contribution", "I contributed to the design and manufacture within the engineering team, including practical workshop activity documented in the project photographs.", {
        evidence: evidence("shimmy-damper", 1),
      }),
      chapter("development", "Design and Manufacturing", "The project involved material selection, manufacturing planning, quality assurance and risk mitigation. I gained practical experience of developing and manufacturing a component within a team.", {
        points: [
          { title: "Material and process decisions", text: "Material selection and manufacturing planning connected the design to a practical component." },
          { title: "Quality and risk", text: "Quality assurance and risk mitigation formed part of the engineering work alongside manufacture." },
        ],
        evidence: evidence("shimmy-damper", 0),
        detail: { title: "Workshop evidence", paragraphs: project("shimmy-damper").sections[2].paragraphs.map((text) => text.replace("photographs below", "photographs")) },
      }),
      chapter("outcome", "Outcome", "The team designed and manufactured a functional full-scale shimmy damper. My contribution brought together design and practical manufacture; detailed process specifications and test records have not yet been included."),
      chapter("competencies", "Engineering Competencies", "I gained experience in mechanical component development, workshop manufacture and collaborative engineering delivery.", {
        points: [
          { title: "Design for manufacture", text: "I worked on the connection between component design, material selection and manufacturing planning." },
          { title: "Practical engineering", text: "I took part in physical manufacture within a team, with quality assurance and risk mitigation included in the project." },
        ],
      }),
    ],
  },
  "dynamic-systems-modelling": {
    startDate: "2024",
    endDate: "2025",
    overview: "I developed a mass–spring–damper model from first principles and explored its response in MATLAB and Simulink. The objective was to understand how damping influenced stability, step response and transient behaviour.",
    tools: ["MATLAB", "Simulink"],
    methods: ["First-principles modelling", "Laplace transforms", "Response analysis"],
    chapters: [
      chapter("brief", "Project Brief", "The project examined a mass–spring–damper system through mathematical modelling and simulation, connecting the governing equation to the resulting dynamic response."),
      chapter("contribution", "My Contribution", "I derived the system model, obtained its transfer function and analysed the response in MATLAB. I also used Simulink to compare different damping conditions."),
      sourceChapter("dynamic-systems-modelling", 0, "modelling", "Mathematical Development"),
      sourceChapter("dynamic-systems-modelling", 1, "simulation", "Simulation and Response"),
      chapter("outcome", "Outcome", "I produced a first-principles model and compared underdamped, critically damped and overdamped responses. The work connected the mathematical description of the system to its simulated transient behaviour."),
      chapter("competencies", "Engineering Competencies", "I linked physical principles, analytical modelling and simulation to interpret a mechanical system’s response.", {
        points: [
          { title: "Mathematical modelling", text: "I applied Newton’s Second Law and Laplace transforms to obtain the differential equation and transfer function." },
          { title: "Dynamic response", text: "I analysed step response, poles, damping ratio and stability, then compared damping regimes in Simulink." },
        ],
      }),
    ],
  },
  "green-aircraft-research": {
    startDate: "2025",
    endDate: "2026",
    overview: "I investigated emerging aircraft technologies and sustainable propulsion concepts in the context of carbon-free aviation by 2050. The research considered technological challenges, environmental implications and operational feasibility to inform future aerospace design decisions.",
    tools: [],
    methods: ["Technical research", "Feasibility assessment"],
    chapters: [
      sourceChapter("green-aircraft-research", 0, "brief", "Project Brief"),
      chapter("contribution", "My Contribution", "I researched emerging aircraft technologies and sustainable propulsion concepts, considering their technical challenges and operational feasibility."),
      chapter("assessment", "Engineering Assessment", "I considered the technologies through technical, environmental and operational perspectives.", {
        points: [
          { title: "Technical challenges", text: "I examined the technological challenges relevant to future aircraft and propulsion concepts." },
          { title: "Environmental implications", text: "I considered the environmental implications within the research context of carbon-free aviation." },
          { title: "Operational feasibility", text: "I assessed operational feasibility as part of the wider engineering discussion." },
        ],
      }),
      chapter("outcome", "Outcome", "The work formed a research assessment intended to inform future aerospace design decisions. Specific technology comparisons and supporting references will be added with the project report; the 2050 ambition was the research context, not an achieved project result."),
      chapter("competencies", "Engineering Competencies", "I applied technical research and feasibility assessment to a broad aerospace design question, considering technology alongside environmental and operational constraints."),
    ],
  },
  "microsoft-teams-research": {
    startDate: "2025",
    endDate: "2026",
    overview: "I investigated fragmented undergraduate workflows and developed a proposed Microsoft Teams learning and collaboration model. The mixed-method research combined questionnaire evidence with observation and interviews from an engineering glider team, connecting the proposed system to real project-working practices.",
    tools: ["Microsoft Teams", "Microsoft 365", "Microsoft Project"],
    methods: ["Questionnaires", "Observation", "Interviews", "Descriptive statistics", "Thematic analysis"],
    chapters: [
      sourceChapter("microsoft-teams-research", 0, "brief", "Project Brief"),
      chapter("contribution", "My Contribution", "I carried out the investigation, analysed the questionnaire, observation and interview evidence, and developed the proposed learning and collaboration model. I was also a member of the six-person engineering glider team observed in the study."),
      sourceChapter("microsoft-teams-research", 1, "method", "Research Method"),
      sourceChapter("microsoft-teams-research", 2, "findings", "Research Findings"),
      sourceChapter("microsoft-teams-research", 3, "development", "Model Development"),
      sourceChapter("microsoft-teams-research", 4, "outcome", "Outcome and Limitations"),
      chapter("competencies", "Engineering Competencies", "I combined several sources of evidence to investigate a workflow problem and develop a proposed system for learning and project coordination.", {
        points: [
          { title: "Evidence-led investigation", text: "I combined descriptive statistics and thematic analysis with direct observation of engineering teamwork." },
          { title: "Project coordination", text: "I proposed ways to organise task ownership, deadlines, meeting records and risk information within shared workspaces." },
        ],
        detail: { title: "Research perspective", paragraphs: project("microsoft-teams-research").sections[5].paragraphs },
      }),
    ],
  },
};
