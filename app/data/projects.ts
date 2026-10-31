export const projectCategories = [
  "Design & Manufacturing",
  "Analysis & Simulation",
  "Testing & Validation",
  "Research",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  presentation?: "wide-dark";
};

export type Project = {
  slug: string;
  title: string;
  homepageTitle?: string;
  categories: ProjectCategory[];
  detailTitle?: string;
  discipline: string;
  featured: boolean;
  drawing?: "glider" | "uav" | "structure" | "damper";
  summary: string;
  role: string;
  tools: string[];
  award?: string;
  sections: { title: string; paragraphs: string[] }[];
  gallery?: ProjectImage[];
  // Internal provenance, not displayed as public document downloads.
  sources: { document: string; pages?: string }[];
};

export const projects: Project[] = [
  {
    slug: "discus-2c-glider",
    title: "Discus 2C Glider — Nose-Cone Design & Integration",
    homepageTitle: "Discus 2C Glider Project",
    categories: ["Design & Manufacturing", "Research"],
    discipline: "Glider engineering",
    featured: true,
    drawing: "glider",
    summary:
      "A collaborative 1.2 m hand-launched glider, with my individual work focused on nose-cone research, profile evaluation, CAD development and fuselage integration.",
    role: "Individual nose-cone development within a multidisciplinary team",
    tools: [
      "Autodesk Inventor",
      "Aerodynamic research",
      "Engineering drawings",
    ],
    award: "Winner’s Award for Best Group Project",
    sections: [
      {
        title: "The wider project",
        paragraphs: [
          "Our multidisciplinary team designed and tested a 1.2 m hand-launched glider, using the Schempp-Hirth Discus 2C as an aerodynamic reference. The brief specified a target glider mass of 225 g, making low mass, practical manufacture and component integration important constraints.",
          "The overall collaborative project won the “Winner’s Award for Best Group Project” at Kingston University’s ECE Showcase 2026.",
        ],
      },
      {
        title: "My responsibility",
        paragraphs: [
          "I was responsible for the nose cone: researching its aerodynamic behaviour, comparing candidate profiles, developing the geometry in Autodesk Inventor and producing a dimensioned engineering drawing. I coordinated the rear cross-section with the fuselage team so the components would meet at a continuous external interface.",
        ],
      },
      {
        title: "From research to profile selection",
        paragraphs: [
          "I considered stagnation pressure, boundary-layer development, separation, surface finish and the different sources of drag. Conical, elliptical and ogive profiles were evaluated qualitatively against low-speed aerodynamic considerations and the practical constraints of shaping balsa.",
          "The selected Discus-inspired profile combined elliptical and ogive characteristics. Continuous curvature and a gradual taper were intended to support smooth flow and reduce separation risk; these were theory-based design intentions rather than measured aerodynamic improvements.",
        ],
      },
      {
        title: "CAD, scale and integration",
        paragraphs: [
          "Geometric scaling provided a starting point for the component. An assumed nose proportion of 7% of the scaled fuselage length led to a nominal 38 mm axial length. That proportion was an engineering assumption, not a published nose dimension, and geometric scaling alone does not establish aerodynamic similarity.",
          "The Inventor model and orthographic drawing documented the geometry. Agreement with the fuselage team established the rear cross-sectional shape and area, with a flat rear face providing the bonding interface.",
        ],
      },
      {
        title: "Material and manufacturing considerations",
        paragraphs: [
          "Balsa was selected for its low density, workability and suitability for shaping and sanding. The proposed manufacturing route included shaping the contour, bonding the rear face with wood adhesive and considering a filler or resin finish. These manufacturing and finishing methods were proposals in my individual portfolio.",
          "Early dimensional agreement, clear responsibilities, internal deadlines and shared project files addressed integration, delay and data-loss risks.",
        ],
      },
      {
        title: "The engineering output",
        paragraphs: [
          "My individual output was a justified, scaled and documented nose-cone design, supported by aerodynamic research, CAD and an engineering drawing. The wider assembled aircraft was a team output. My nose-cone portfolio does not claim CFD validation, individual physical testing or a measured drag reduction.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/discus-nose-cad.png",
        width: 775,
        height: 665,
        alt: "Autodesk Inventor model of the Discus-inspired nose cone",
        caption:
          "My individual nose-cone CAD model. Extracted from the engineering portfolio, page 13.",
      },
      {
        src: "/images/discus-nose-drawing.png",
        width: 1178,
        height: 625,
        alt: "Dimensioned orthographic drawing of the nose cone",
        caption:
          "My dimensioned engineering drawing. Extracted from the engineering portfolio, page 14; dimensions in millimetres.",
      },
      {
        src: "/images/discus-assembly.png",
        presentation: "wide-dark",
        width: 1646,
        height: 398,
        alt: "CAD view of the complete team glider assembly",
        caption:
          "Wider team glider assembly, portfolio page 16. My individual CAD responsibility was the nose cone.",
      },
    ],
    sources: [
      { document: "Discus_2C_Engineering_Portfolio.pdf", pages: "2–17" },
      { document: "Aerospace & Structural Engineering CV", pages: "1" },
      { document: "User-provided project brief" },
    ],
  },
  {
    slug: "uav-design-manufacturing",
    categories: [
      "Design & Manufacturing",
      "Analysis & Simulation",
      "Testing & Validation",
    ],
    title: "UAV Design & Manufacturing",
    detailTitle: "UAV Performance Design & Testing",
    discipline: "Design & manufacturing",
    featured: true,
    drawing: "uav",
    summary:
      "Aerodynamic design, geometry refinement and test planning for a surveillance UAV targeting a 2 kg payload, 2-hour endurance and 60 km/h.",
    role: "Aerofoil design, analysis and test planning",
    tools: ["Aerodynamic analysis", "Geometry refinement", "Test planning"],
    sections: [
      {
        title: "The design brief",
        paragraphs: [
          "The surveillance UAV was developed around a 2 kg payload, 2-hour endurance and 60 km/h performance target. These figures describe the design objectives, not verified performance results.",
        ],
      },
      {
        title: "My contribution",
        paragraphs: [
          "I led aerofoil design, analysis and test planning, refining the geometry, angle of attack and aerodynamic configuration against the project targets.",
        ],
      },
      {
        title: "Planning the evidence",
        paragraphs: [
          "Wind-tunnel and flight tests were planned to assess lift, drag, stability, speed and endurance. Detailed test data and build documentation will be added when available.",
        ],
      },
    ],
    sources: [
      { document: "Performance & Simulations CV", pages: "1" },
      { document: "User-provided project brief" },
    ],
  },
  {
    slug: "aircraft-structural-fea",
    categories: ["Analysis & Simulation"],
    title: "Aircraft Structural FEA",
    detailTitle: "Aircraft Structural FEA — Piper PA-28",
    discipline: "Structural analysis",
    featured: true,
    drawing: "structure",
    summary:
      "Four Piper PA-28 wing-spar geometries, assessed in steel and Aluminium 6061 across eight configurations for structural performance and weight efficiency.",
    role: "Wing-spar modelling and comparative structural assessment",
    tools: [
      "Finite element analysis",
      "Structural analysis",
      "Comparative assessment",
    ],
    sections: [
      {
        title: "The structural question",
        paragraphs: [
          "I modelled four wing-spar geometries for the Piper PA-28 using steel and Aluminium 6061, creating eight configurations for comparative assessment.",
        ],
      },
      {
        title: "The analysis",
        paragraphs: [
          "I compared Von Mises stress, displacement and safety factors to examine the relationship between strength, structural performance and weight efficiency.",
        ],
      },
      {
        title: "Further evidence",
        paragraphs: [
          "The load cases, boundary conditions, mesh details and numerical comparison will be added with the supporting analysis. No preferred configuration or numerical result is claimed here without that evidence.",
        ],
      },
    ],
    sources: [
      { document: "Aerospace & Structural Engineering CV", pages: "1" },
      { document: "Performance & Simulations CV", pages: "1" },
    ],
  },
  {
    slug: "shimmy-damper",
    categories: ["Design & Manufacturing", "Testing & Validation"],
    title: "Shimmy Damper Design & Build",
    discipline: "Mechanical design",
    featured: true,
    drawing: "damper",
    summary:
      "Team design and manufacture of a functional 1:1 scale Cessna shimmy damper, bringing material selection, manufacturing planning and quality assurance into practical work.",
    role: "Engineering team member — design and manufacture",
    tools: [
      "Material selection",
      "Manufacturing planning",
      "Quality assurance",
      "Risk mitigation",
    ],
    sections: [
      {
        title: "From design to a physical component",
        paragraphs: [
          "Within an engineering team, I designed and manufactured a functional 1:1 scale Cessna shimmy damper. The work connected component design with the decisions and planning needed to manufacture it.",
        ],
      },
      {
        title: "Engineering considerations",
        paragraphs: [
          "The project involved material selection, manufacturing planning, quality assurance and risk mitigation. It provided practical experience of component development and manufacture within a team.",
        ],
      },
      {
        title: "Workshop evidence",
        paragraphs: [
          "The photographs below come from the actual project and show workshop activity and component work. Detailed process specifications and test records can be added alongside the images as the case study develops.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/shimmy-workshop.webp",
        width: 1800,
        height: 1447,
        alt: "Collage of project workshop photographs showing lathe work, a metal component, grinding and welding",
        caption:
          "Workshop photographs from the Shimmy Damper Design & Build project.",
      },
      {
        src: "/images/shimmy-lathe.webp",
        width: 257,
        height: 264,
        alt: "Kinon working at a lathe during the shimmy damper project",
        caption: "At the lathe during the project.",
      },
    ],
    sources: [
      { document: "Aerospace & Structural Engineering CV", pages: "1" },
      { document: "User-supplied shimmy damper photographs and brief" },
    ],
  },
  {
    slug: "dynamic-systems-modelling",
    categories: ["Analysis & Simulation"],
    title: "Dynamic Systems Modelling & Simulation",
    discipline: "Simulation & modelling",
    featured: false,
    summary:
      "A mass–spring–damper model developed from first principles and explored in MATLAB and Simulink to understand response, damping, stability and transient behaviour.",
    role: "Mathematical modelling and simulation",
    tools: ["MATLAB", "Simulink", "Laplace transforms"],
    sections: [
      {
        title: "From first principles to a model",
        paragraphs: [
          "I used Newton’s Second Law to derive the system differential equation, then applied Laplace transforms to obtain a transfer function for the mass–spring–damper system.",
        ],
      },
      {
        title: "Understanding the response",
        paragraphs: [
          "In MATLAB, I analysed step response, poles, damping ratio, stability and transient behaviour. In Simulink, I compared underdamped, critically damped and overdamped responses to examine how damping changes system behaviour.",
        ],
      },
    ],
    sources: [{ document: "Performance & Simulations CV", pages: "1" }],
  },
  {
    slug: "green-aircraft-research",
    categories: ["Research"],
    title: "Green Aircraft Research Project",
    discipline: "Aerospace research",
    featured: false,
    summary:
      "Research into emerging aircraft technologies and sustainable propulsion concepts targeting carbon-free aviation by 2050, considering technical challenges and operational feasibility.",
    role: "Technology research and engineering assessment",
    tools: ["Technical research", "Feasibility assessment"],
    sections: [
      {
        title: "Research focus",
        paragraphs: [
          "I investigated emerging aircraft technologies and sustainable propulsion concepts targeting carbon-free aviation by 2050. This was the research context, not a claimed outcome of the project.",
        ],
      },
      {
        title: "Assessment approach",
        paragraphs: [
          "The work considered technological challenges, environmental implications and operational feasibility to inform future aerospace design decisions. Specific technology comparisons and supporting references will be added with the project report.",
        ],
      },
    ],
    sources: [
      { document: "Aerospace & Structural Engineering CV", pages: "1" },
    ],
  },
  {
    slug: "microsoft-teams-research",
    categories: ["Research"],
    title:
      "Optimisation of Microsoft Teams within the Undergraduate Learning Environment",
    discipline: "Final-year research project",
    featured: false,
    summary:
      "Mixed-method research into fragmented academic workflows, leading to a proposed Microsoft Teams learning and collaboration model with consistent module and project-group workspaces.",
    role: "Final-year researcher — investigation, analysis and proposed model",
    tools: [
      "Microsoft Teams",
      "Microsoft 365",
      "Microsoft Project",
      "Descriptive statistics",
      "Thematic analysis",
    ],
    sections: [
      {
        title: "The problem and objective",
        paragraphs: [
          "Students used several platforms for academic work, separating resources, communication and project coordination. I investigated how Microsoft Teams and integrated Microsoft 365 tools could bring more of that work into a consistent undergraduate learning environment.",
        ],
      },
      {
        title: "Research method",
        paragraphs: [
          "I combined 63 questionnaire responses with direct observation of a six-member engineering glider project, including myself, and five semi-structured interviews with the other group members. Descriptive statistics and thematic analysis were used alongside observation of the group’s real use of Teams.",
          "The questionnaire used convenience sampling and conditional pathways, so the response base varied by question. The findings offer evidence about the participants and observed project rather than a representative claim about all undergraduate students.",
        ],
      },
      {
        title: "What the evidence showed",
        paragraphs: [
          "Teams supported meetings, file sharing and real-time work on shared Word and PowerPoint documents. Students still preferred WhatsApp for quick informal conversation, and available Teams features did not automatically become part of their working habits.",
          "The observed group mainly used the General channel; Schedule and Whiteboard were not actively used, participation differed between members and meeting records depended on my use of OneNote. Questionnaire findings also highlighted file organisation, navigation, familiarity and a need for training.",
        ],
      },
      {
        title: "The proposed model",
        paragraphs: [
          "I proposed one Team per university module, with a consistent homepage and structure for teaching material, assignments, feedback and communication. Private assessment-group channels would bring shared documents and project coordination into dedicated workspaces.",
          "Planner would make task ownership and deadlines visible; OneNote would hold shared meeting records; Whiteboard would support visual discussion; and an Excel risk register would track likelihood, impact, mitigation and ownership. Formal posts and informal group chat would serve different communication needs within the same environment.",
        ],
      },
      {
        title: "Recommendations and limits",
        paragraphs: [
          "Implementation recommendations included standardised module templates, staff training, student workshops and ongoing support. The model was intended to reduce fragmented workflows and make resources, responsibilities and progress easier to follow.",
          "This is a proposed model developed from the research. Long-term implementation within a real university module would still need to be tested; improvements in adoption, productivity or learning outcomes were not established by the proposal.",
        ],
      },
      {
        title: "Research perspective",
        paragraphs: [
          "The investigation highlighted the gap between making a tool available and embedding it in a useful shared routine. Observing actual work alongside questionnaire and interview evidence helped connect the proposed design to how students organised and communicated in practice.",
        ],
      },
    ],
    sources: [
      {
        document:
          "Kinon_Jones_Microsoft_Teams_Dissertation.pdf (supplied research presentation)",
        pages: "1–16",
      },
      { document: "Aerospace & Structural Engineering CV", pages: "1" },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
