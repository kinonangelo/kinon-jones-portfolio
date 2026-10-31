import type { CaseStudy, Evidence } from "../../components/case-study/types";

const cad: Evidence = {
  src: "/images/discus/nose-cad.png",
  unframed: true,
  width: 1691,
  height: 779,
  alt: "Individual nose-cone model developed in Autodesk Inventor",
  caption: "My nose-cone CAD model — individual portfolio, Figure 15.",
};
const assembly: Evidence = {
  src: "/images/discus-assembly.png",
  width: 1646,
  height: 398,
  alt: "Wider collaborative glider assembly showing the nose in aircraft context",
  caption:
    "The wider team assembly, from the previously supplied engineering portfolio. My CAD responsibility was the nose cone.",
  dark: true,
};

export const discusCaseStudy: CaseStudy = {
  label: "Aircraft Design Project",
  title: "Discus 2C Glider — Nose-Cone Design & Integration",
  summary:
    "A multidisciplinary team project to design and develop a 1.2 m hand-launched glider based on the Schempp-Hirth Discus 2C. My individual responsibility was the nose cone: aerodynamic profile research, geometry development in CAD and coordination with the fuselage interface.",
  facts: [
    { label: "My role", value: "Nose-Cone Research, Design & Integration" },
    {
      label: "Project",
      value: "Collaborative Glider Design",
    },
    {
      label: "Tools",
      value: "Autodesk Inventor",
    },
    {
      label: "Methods",
      value:
        "Aerodynamic Research · Profile Comparison · Engineering Drawings · Interface Coordination",
    },
    { label: "Year", value: "2026" },
  ],
  award: "Winner’s Award for Best Group Project within the Faculty",
  awardContext: "Kingston University ECE Showcase 2026",
  hero: cad,
  chapters: [
    {
      id: "brief",
      label: "Project Brief",
      title: "Project Brief",
      intro:
        "The wider team was tasked with developing a lightweight, hand-launched aircraft with a 1.2 m wingspan and a target whole-glider mass of 225 g. The Schempp-Hirth Discus 2C provided the reference geometry. Within that shared design, I was responsible for the nose cone, where airflow first meets the fuselage.",
      points: [
        {
          title: "The engineering problem",
          text: "The nose needed a justified aerodynamic profile, dimensions appropriate to the model and a practical route to manufacture in lightweight material. Its rear section also had to match the fuselage: the aircraft’s external contour depended on both components meeting continuously.",
        },
        {
          title: "My contribution",
          text: "I compared profiles, researched airflow and drag, developed the Inventor model and orthographic drawing, and coordinated the rear cross-section with the fuselage team.",
        },
        {
          title: "The design direction",
          text: "A Discus-inspired combination of elliptical and ogive characteristics, chosen for smooth curvature, gradual tapering and a continuous transition into the fuselage.",
        },
      ],
      evidence: assembly,
      detail: {
        title: "Choosing the reference aircraft",
        paragraphs: [
          "I reviewed the Carioca 2000 model glider alongside the full-scale Discus 2C. The Carioca provided a useful small-model reference, while the Discus offered a more refined, smoothly contoured nose. The team selected the Discus as the geometric reference, and I examined its rounded leading contour and gradual taper for adaptation to the model.",
        ],
      },
    },
    {
      id: "constraints",
      label: "Design Constraints",
      title: "Design Constraints",
      intro:
        "The nose could not be designed in isolation. Its shape, material and rear interface had to support the wider glider brief.",
      points: [
        {
          title: "1.2 m wingspan",
          text: "The model wingspan set the geometric scale used as the starting point for the nose design.",
        },
        {
          title: "225 g target mass",
          text: "This was the whole-glider design target, not a nose-cone mass or a measured final aircraft mass. It supported the choice of a lightweight material.",
        },
        {
          title: "A continuous interface",
          text: "The rear cross-sectional shape and area needed agreement with the fuselage team. A locally smooth nose would be insufficient if the joint introduced a geometric discontinuity.",
        },
        {
          title: "A shape that could be made",
          text: "The proposed route was shaping and sanding balsa to the CAD profile. The contour needed to balance aerodynamic intent with this practical manufacturing approach.",
        },
      ],
    },
    {
      id: "research",
      label: "Aerodynamic Research",
      title: "Aerodynamic Research",
      intro:
        "My research connected the nose profile to the way airflow develops over the fuselage. For a small hand-launched glider, the design discussion centred on low-speed flow, drag and the practical quality of the finished surface.",
      steps: [
        {
          title: "Pressure and the leading contour",
          text: "I examined the stagnation region at the front of the nose, where the oncoming flow slows, and the acceleration of air around its curved surface. This made the leading contour and the transition into the fuselage central to the profile comparison.",
          takeaway:
            "Design implication: favour continuous curvature and gradual changes in the external profile.",
          evidence: {
            src: "/images/discus/stagnation.png",
            width: 823,
            height: 260,
            alt: "Reference diagram of stagnation and flow around a body",
            caption:
              "Reference illustration from my research, Figure 11. This is not a computed flow field for my nose cone.",
          },
        },
        {
          title: "Form drag and separation",
          text: "The assignment considers how separation leaves a wake behind a body and contributes to form drag. I compared the effects of blunt and streamlined shapes in the reference material, then used the same question to assess the candidate noses: how abruptly does the contour ask the flow to change direction?",
          takeaway:
            "Design implication: a gradual taper supported the elliptical–ogive direction.",
          evidence: {
            src: "/images/discus/form-drag.png",
            width: 986,
            height: 944,
            alt: "Reference flow diagrams comparing wakes around different body shapes",
            caption:
              "Shape and wake reference reproduced in the assignment, Figure 7. These are explanatory examples, not tests of the project.",
          },
        },
        {
          title: "Boundary layers and surface finish",
          text: "I researched laminar and turbulent flow and the effect of roughness on skin-friction drag. Geometry alone was not the whole design problem: the proposed balsa surface also needed shaping, sanding and consideration of a filler or resin finish.",
          takeaway:
            "Design implication: consider the achievable surface alongside the CAD contour.",
          evidence: {
            src: "/images/discus/surface-friction.png",
            width: 253,
            height: 307,
            alt: "Reference illustration comparing smooth and rough surfaces and frictional drag",
            caption:
              "Surface-friction reference from the assignment, Figures 8–9. Original source resolution retained.",
          },
        },
      ],
      points: [
        {
          title: "Interference at component junctions",
          text: "The research examined how airflow interacts at airframe junctions. For the nose, this reinforced the need to agree a continuous external interface with the fuselage team rather than optimise the part in isolation.",
        },
        {
          title: "From research to selection",
          text: "The comparison therefore considered curvature, taper, surface finish, shaping practicality and the fuselage junction together. These criteria connected the aerodynamic discussion to choices I could make in CAD and in the manufacturing proposal.",
        },
      ],
      detail: {
        title: "Research method and scope",
        paragraphs: [
          "The work used aerodynamic literature and reference diagrams to develop a qualitative design rationale. Laminar flow, attachment and reduced separation were design objectives; no pressure field, boundary-layer measurements or CFD results were produced for the individual nose cone.",
          "The assignment discusses low-Reynolds-number operation without calculating a Reynolds number. Geometric scaling supplied a dimensional starting point; aerodynamic similarity was not established by the scale factor alone.",
        ],
      },
    },
    {
      id: "selection",
      label: "Profile Selection",
      title: "Profile Comparison",
      intro:
        "I evaluated conical, elliptical and ogive profiles qualitatively. The decision balanced the smoothness of the contour against the practicality of forming a small balsa component.",
      steps: [
        {
          title: "Conical",
          text: "Straight sides made the conical profile simple to form. Its abrupt geometry was less suited to the smooth contour sought for this low-speed glider.",
          takeaway: "Simple to form; not the selected direction.",
          evidence: {
            src: "/images/discus/conical.png",
            width: 1240,
            height: 421,
            alt: "Conical candidate profile with straight sides",
            caption:
              "Candidate-profile reference from the individual portfolio, Figure 12.",
          },
        },
        {
          title: "Elliptical",
          text: "Continuous curvature supported gradual changes in flow direction and pressure. Reproducing that contour would require careful shaping and sanding.",
          takeaway: "Continuous curvature informed the design.",
          evidence: {
            src: "/images/discus/elliptical.png",
            width: 1278,
            height: 448,
            alt: "Elliptical candidate profile with continuous curvature",
            caption:
              "Candidate-profile reference from the individual portfolio, Figure 13.",
          },
        },
        {
          title: "Ogive",
          text: "An arc-based contour offered a smoother transition than the conical candidate, balancing aerodynamic intent with practical shaping.",
          takeaway: "Curved taper with practical shaping considerations.",
          evidence: {
            src: "/images/discus/ogive.png",
            unframed: true,
            width: 789,
            height: 300,
            alt: "Ogive nose reference with a curved taper",
            caption:
              "Candidate-profile reference from the individual portfolio, Figure 14.",
          },
        },
        {
          eyebrow: "Selected geometry",
          title: "Elliptical–ogive nose profile",
          text: "The selected elliptical–ogive nose geometry combined smooth curvature and gradual tapering with a rear section coordinated to the fuselage. Selection was based on qualitative aerodynamic research and practical integration constraints.",
          takeaway: "Research became a geometric design direction.",
          evidence: cad,
        },
      ],
      detail: {
        title: "Comparison methodology",
        paragraphs: [
          "The source discusses low-Reynolds-number operation, but does not provide a Reynolds-number calculation or a quantified comparison of candidate drag. The comparisons above describe the reasoning recorded in the portfolio, not experimentally established rankings.",
          "Geometric scaling from a full-size sailplane gives a dimensional starting point. It does not, by itself, demonstrate equivalent aerodynamic behaviour at model scale.",
        ],
      },
    },
    {
      id: "cad",
      tone: "dark",
      steps: [
        {
          title: "From profile to geometry",
          text: "The selected direction combined elliptical and ogive characteristics. I carried the intended smooth curvature into a scaled component while coordinating the rear section with the fuselage team.",
          evidence: {
            src: "/images/discus/elliptical.png",
            width: 1278,
            height: 448,
            alt: "Elliptical reference profile informing the selected geometry",
            caption:
              "One of the reference profiles informing the selected direction — Figure 13.",
          },
        },
        {
          title: "Model the component in Inventor",
          text: "I developed the scaled nose geometry in Autodesk Inventor. The model defines the external contour and rear face; the orthographic drawing below then communicates the geometry through multiple views and dimensions.",
          evidence: cad,
          takeaway:
            "The CAD is the output of the profile research and interface decisions.",
        },
      ],
      label: "CAD Development",
      title: "CAD Development",
      intro:
        "I developed the nose cone in Autodesk Inventor, scaling and shaping the geometry and documenting it in an orthographic engineering drawing.",
      points: [
        {
          title: "0.08 scale factor",
          text: "The portfolio uses the 1.2 m model wingspan divided by a 15 m reference wingspan to establish the geometric scale.",
        },
        {
          title: "38 mm nominal nose length",
          text: "With no official nose dimension available, I assumed a nose length of 7% of the scaled fuselage length. The resulting 37.968 mm was rounded to 38 mm.",
        },
      ],
      evidence: {
        src: "/images/discus/drawing.png",
        width: 1544,
        height: 711,
        alt: "Nose-cone orthographic drawing with a 38.00 mm axial dimension and multiple views",
        caption:
          "My orthographic engineering drawing — individual portfolio, Figure 16. Dimensions shown in millimetres.",
      },
      detail: {
        title: "Dimensional development",
        paragraphs: [
          "Scale factor = 1.2 m ÷ 15 m = 0.08",
          "Scaled fuselage length = 6.78 m × 0.08 = 0.5424 m = 542.4 mm",
          "Assumed nose length = 0.07 × 542.4 mm = 37.968 mm ≈ 38 mm",
          "The 7% proportion is an explicit design assumption. The drawing communicates the chosen geometry; the source does not provide a tolerance analysis or a sequence of separate CAD revisions.",
        ],
      },
    },
    {
      id: "integration",
      label: "Fuselage Integration",
      title: "Fuselage Integration",
      intro:
        "The rear face of the nose was both a physical joint and a transition in the external aerodynamic surface. I coordinated its cross-sectional shape and area with the fuselage team. Matching these features mattered because the intended smooth contour depended on the two independently developed parts meeting correctly.",
      steps: [
        {
          title: "Define the individual part",
          text: "The nose model establishes the contour and rear interface. The manufacturing proposal uses a flat rear face for wood-adhesive bonding; a locating peg or dowel is described as an option to assist alignment.",
          evidence: cad,
          takeaway: "The nose cone was my design responsibility.",
        },
        {
          title: "Place it in the team assembly",
          reveal: true,
          text: "The wider assembly provides context for the interface. Early dimensional agreement reduced integration risk, while shared files and team meetings kept the component work coordinated.",
          evidence: assembly,
          takeaway: "The complete aircraft was a collaborative output.",
        },
      ],
      detail: {
        title: "Manufacture and team coordination",
        paragraphs: [
          "Balsa was selected for low density, workability and the ability to shape and sand the contour. A filler or resin coating was proposed for durability. More complex composite routes were not prioritised because of cost, manufacturing complexity and the expected low loads of the model.",
          "The report proposes adhesive bonding and an optional locating feature; it does not include a joint-strength test. These details describe the intended manufacturing route, not evidence that I manufactured the complete glider.",
          "The documented coordination measures include Microsoft Teams and cloud file storage, regular meetings, clear responsibilities, internal checkpoints and early agreement on dimensions.",
          "Repair by sanding or material replacement and eventual repurposing were considered at the concept level. The portfolio does not quantify lifecycle impacts.",
        ],
      },
    },
    {
      id: "outcome",
      label: "Outcome",
      title: "Outcome",
      intro:
        "My output connected a qualitative aerodynamic comparison to a defined CAD component, an engineering drawing and an agreed fuselage interface.",
      points: [
        {
          title: "Individual output",
          text: "Profile evaluation, a justified design direction, dimensional scaling, the Inventor nose-cone model and an orthographic drawing.",
        },
        {
          title: "Contribution to the aircraft",
          text: "A component developed around the wider fuselage geometry and a practical proposed manufacturing route. The team designed and tested the complete glider.",
        },
        {
          title: "Evidence boundary",
          text: "The individual portfolio supports the design rationale and CAD output. It does not establish a measured drag reduction, CFD validation or individual physical-test results.",
        },
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      title: "Reflection",
      intro:
        "This work developed my ability to turn aerodynamic research into CAD decisions. Comparing alternatives gave me a reason for the contour before I began refining the model.",
      points: [
        {
          title: "Research into geometry",
          text: "Comparing conical, elliptical and ogive profiles gave me a basis for the geometry before modelling it. In Inventor, that research had to become a defined contour and dimensions that another team member could interpret.",
        },
        {
          title: "Engineering across an interface",
          text: "The fuselage team controlled the adjoining geometry, so I had to resolve the rear section through discussion rather than treating it as an independent design choice. This connected CAD development with the practical task of making components fit.",
        },
        {
          title: "Making assumptions explicit",
          text: "The 7% sizing assumption and the proposed balsa process show where judgement entered the design. Keeping those distinct from verified dimensions and test results makes the work easier to review and develop.",
        },
      ],
    },
  ],
  next: {
    title: "UAV Design & Manufacturing",
    href: "/projects/uav-design-manufacturing",
  },
};

