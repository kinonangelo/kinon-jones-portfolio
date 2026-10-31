import figures from "./dissertation-figures.json";

export type ResearchStep = {
  title: string;
  text: string;
  implication: string;
  figure: number;
  alt: string;
};
export type ResearchSequence = {
  title: string;
  context: string;
  steps: ResearchStep[];
};
export function researchFigure(number: number) {
  return figures[String(number) as keyof typeof figures];
}
function step(figure: number, title: string, text: string, implication: string, alt: string): ResearchStep {
  return { figure, title, text, implication, alt };
}
export const dissertationTitle = "Optimising the Use of Microsoft Teams in Undergraduate Education";
export const dissertationChapters = [
  ["problem", "Research Problem"], ["gap", "Research Gap"], ["methodology", "Methodology"],
  ["questionnaire", "Questionnaire Findings"], ["qualitative", "Interviews & Observation"],
  ["synthesis", "Evidence Synthesis"], ["proposed", "Proposed Teams Model"],
  ["module", "Module Experience"], ["group", "Group Collaboration"],
  ["implementation", "Implementation"], ["limitations", "Limitations & Further Work"],
  ["reflection", "Conclusion & Reflection"],
].map(([id, label]) => ({ id, label }));

export const questionnaireSequences: ResearchSequence[] = [
  {
    title: "Who responded", context: "Questionnaire evidence · Figures 5–6",
    steps: [
      step(5, "A sample weighted towards later study", "I collected 63 responses across Levels 3–7+. Level 6 was the largest group: 25 respondents, compared with 13 each at Level 5 and Level 7+, eight at Level 4 and four at foundation level.", "The results describe this sample, with its strong later-year representation, rather than every undergraduate cohort.", "Original chart of study levels: foundation 4, Year 1 8, Year 2 13, Year 3 25, Year 4 or above 13."),
      step(6, "Several disciplines, with an engineering emphasis", "Engineering accounted for 22 responses and IT/Computer Science for 13. Business, Science and Arts & Humanities were also represented, with smaller numbers in other fields.", "This broadened the questionnaire beyond the observed glider team, while leaving engineering-related courses particularly prominent.", "Original field-of-study chart, with engineering and IT/Computer Science the largest respondent groups."),
    ],
  },
  {
    title: "Platform use", context: "Questionnaire evidence · Figures 7–10",
    steps: [
      step(7, "A mixed platform environment", "Microsoft Teams was the most frequently selected learning platform, with 29 responses. Canvas received 13, Zoom seven and Google Classroom five; WhatsApp groups, email-based learning and other tools were also reported.", "Teams was prominent, but the range of platforms supported the research question about fragmented workflows.", "Original learning-platform chart: Teams 29, Canvas 13, Zoom 7, Google Classroom 5 and smaller groups using WhatsApp, email and other tools."),
      step(8, "Experience did not mean exclusive adoption", "The prior-use chart recorded 25 yes responses and nine no responses: approximately 74% of the 34 answers shown. This is the base for this question, not 74% of all 63 survey participants.", "Prior experience provided a starting point for exploring adoption; it did not establish that Teams was a student's sole academic platform.", "Original prior-use chart showing 25 respondents had used Teams and nine had not, labelled 74% and 26%."),
      step(9, "Use was often intermittent", "The most common frequency was a few times a week, with 14 responses. Five reported weekly use, four daily use, four rare use and two use every two weeks.", "An available platform was not necessarily embedded in daily study routines. The proposed model therefore needed useful recurring entry points.", "Original frequency chart: daily 4, a few times a week 14, weekly 5, every two weeks 2, rarely 4 and never 0."),
      step(10, "Structured activities dominated", "Online lectures received eight responses; group meetings and assignment collaboration each received six. Communicating with classmates received one response, while communication with lecturers received four.", "This suggested a distinction between formal academic activity and everyday peer conversation, later explored through interviews and observation.", "Original academic-use chart, led by online lectures, group meetings and collaboration on assignments."),
    ],
  },
  {
    title: "Experience and preference", context: "Questionnaire evidence · Figures 11–14",
    steps: [
      step(11, "Existing platforms already met many needs", "The satisfaction chart showed 20 satisfied and seven very satisfied responses, alongside five neutral and two dissatisfied responses. The displayed percentages were 59% and 21% for the two positive categories.", "An integrated model needed to address specific problems rather than assume students were dissatisfied with every existing tool.", "Original satisfaction chart showing 7 very satisfied, 20 satisfied, 5 neutral, 2 dissatisfied and no very dissatisfied responses."),
      step(12, "Ease of use and familiarity mattered", "Ease of use and familiarity each received 11 responses as reasons for preferring other platforms. Better communication with lecturers received seven; the option about features unavailable in Teams received no responses.", "The findings directed attention towards the experience of using the system, including guidance and predictable organisation.", "Original alternative-platform preference chart, with ease of use and familiarity jointly highest at 11 responses each."),
      step(13, "Habit competed with available capability", "Being comfortable with another platform received 15 responses. Seven found Teams confusing or difficult, six reported slow operation or crashes, and other answers concerned features, audio/video and suitability for their course.", "The proposed structure addressed navigation and familiar routines, while recognising that configuration alone would not resolve performance problems.", "Original chart of factors influencing preference over Teams, led by comfort with another platform."),
      step(14, "Perceptions were mixed", "The Likert-style figure compared perceptions of organisation, communication, engagement, collaboration, learning support and suitability for academic use. I interpreted the responses as recognition of benefits that were not consistently experienced in practice.", "I carried this qualified assessment into the model rather than treating a single positive perception as proof of improved learning.", "Original diverging response chart comparing six perceptions of Teams, with a full strongly-agree to strongly-disagree legend."),
    ],
  },
  {
    title: "Barriers to effective use", context: "Questionnaire evidence · Figures 15–17",
    steps: [
      step(15, "The problem extended beyond one application", "Technical issues received 12 responses and poor mobile experience ten. Limited integration, the use of multiple platforms, communication problems and difficulties locating materials were also reported.", "The model needed to reduce avoidable searching and switching without claiming to remove every technical or institutional constraint.", "Original digital-platform challenges chart, including technical issues, mobile experience, integration and navigation."),
      step(16, "Teams had practical usability barriers", "The Teams-specific chart recorded eight responses for slow operation or crashes, five each for finding files and navigating channels, and four for difficulty communicating through the app.", "Clear channels, purposeful tabs and topic-based files became practical parts of the proposed response to these reported difficulties.", "Original Teams-difficulty chart showing performance, file finding, channel navigation, communication and other issues."),
      step(17, "Formal training was uncommon", "Of the 54 answers shown in the training chart, 36 reported no formal training and 18 reported training: 67% and 33% respectively.", "I recommended introductory and follow-up support. The survey suggested a relationship worth addressing, but did not prove that lack of training caused the other reported problems.", "Original training chart showing 18 yes and 36 no responses, labelled 33% and 67%."),
    ],
  },
  {
    title: "Potential for a central workspace", context: "Questionnaire evidence · Figures 18–19",
    steps: [
      step(18, "Interest in a more integrated approach", "The centralised-platform question showed 25 positive and nine negative responses, approximately 74% and 26% of the 34 answers displayed.", "This expressed perceived value, not a measured improvement. It supported exploring an integrated model that could subsequently be tested.", "Original chart of perceived centralised-platform value, showing 25 yes and nine no responses."),
      step(19, "Organisation was the strongest request", "Clearer organisation of modules, channels and files received 33 responses. More effective feature use received 26, improved communication 24 and better guidance 23. Primary-platform use, faster feedback and integration with university systems were also requested.", "These priorities became the model's structure, communication choices and training recommendations.", "Original improvement chart with clearer organisation highest, followed by feature use, communication, training and other suggestions."),
    ],
  },
];

export const observationSequence: ResearchSequence = {
  title: "The intended workspace and the workspace in use", context: "Direct observation · Figures 20–22",
  steps: [
    step(20, "Channels existed; behaviour stayed in General", "I observed a six-member undergraduate glider project, including myself. General was created for announcements, Design & CAD for file submissions, and Discussions for communication. Most interactions nevertheless remained in General.", "Providing a structure did not guarantee that the group would adopt it. The proposed model needed guidance on how each space should be used.", "Original observed glider workspace showing General, Design and CAD, and Discussions channels."),
    step(21, "Shared documents became part of the workflow", "The workspace included a shared Word report, a PowerPoint presentation, OneNote meeting minutes and a Planner-based Schedule tab. Report and Presentation were used extensively, whereas Schedule and Whiteboard were not actively used.", "The model retained the successful document tabs but treated wider tool adoption as something requiring introduction and support.", "Original tab strip from the observed project: Posts, Shared, Final Report, Presentation, Meeting Minutes, Schedule and Whiteboard."),
    step(22, "Meeting records depended on individual use", "I used OneNote to record meeting minutes, but this did not become a shared group habit. Day-to-day discussion largely continued on WhatsApp, separating ongoing communication from structured work in Teams.", "The minutes provided a structured record, but my individual use did not show that the whole group had adopted the workflow.", "Original OneNote meeting-minutes screenshot from the glider project, with participant names redacted in the dissertation."),
  ],
};

export const modelOverview: ResearchSequence = {
  title: "A module-level hub with dedicated group spaces", context: "Proposed model · Figure 23",
  steps: [
    step(23, "One Team for each university module", "I proposed a consistent module-level Team with General for lecturer announcements and module communication, alongside private channels for assessed groups. Each group would have its own collaboration space within the wider module environment.", "The structure aimed to make navigation familiar across modules while keeping group-specific materials within the relevant membership. This was a proposal, not an institution-wide deployment.", "Original proposed overall Teams structure showing a module workspace and private group channels."),
  ],
};

export const moduleSequences: ResearchSequence[] = [
  { title: "A useful first screen", context: "Proposed module homepage · Figures 24–25", steps: [
    step(24, "Module context and important information", "I proposed a homepage that brought the module description, key announcements and relevant resources into the first screen students opened. Lecturers could include external material such as supporting videos.", "A clear starting point responded to the need to find academic information without searching across several systems.", "Original proposed module homepage with module overview, resources and class schedule."),
    step(25, "Current information, maintained by the lecturer", "The homepage included calendar-synchronised class schedules, recent files and upcoming assignments. Lecturers could customise sections, save and review edits, and publish the revised content when ready.", "The homepage was intended to bring current information together; institutional compatibility and effectiveness would still need evaluation in a live module.", "Original continuation of the homepage showing assignments, class schedule, recent files and customisable module information."),
  ] },
  { title: "Class Notebook", context: "Proposed teaching and learning spaces · Figures 26–27", steps: [
    step(26, "Four areas with different purposes", "The proposed notebook separated a Content Library for lecturer material, a Collaboration Space for shared work, a teacher-only area and individual student notebooks. Suggested student sections included lecture notes, tutorial work, assignment drafts and personal notes.", "Separating these purposes gave students an organised working space alongside the shared module resources.", "Original Class Notebook setup showing Collaboration Space, Content Library, Teacher-Only Section and Student Notebooks."),
    step(27, "Work through a problem together", "The Collaboration Space could support live teaching: a lecturer could share and solve a problem while students contributed in the same space. The example showed a gradient exercise and handwritten working.", "This was a proposed use of a shared notebook, extending the model beyond storing lecture files.", "Original Collaboration Space example with a gradient exercise and handwritten mathematical working."),
  ] },
  { title: "From assignment setup to feedback", context: "Proposed assessment workflow · Figures 28–31", steps: [
    step(28, "Create and publish", "The proposed Classwork workflow let lecturers enter a description, deadline and marks, attach supporting material, and publish immediately or schedule release. Work could be directed to selected students where appropriate.", "Clear setup brought the brief, timing and assessment information together. The screenshot is a sample assessment from the proposed environment.", "Original sample assignment creation screen showing description, marking information, deadline, recipients and publishing controls."),
    step(29, "Keep the brief with the task", "An attached coursework brief and supporting links could remain accessible from the assignment itself rather than being distributed separately.", "The design connected the task instructions to the place students would return to when completing the work.", "Original screenshot of a sample coursework assessment brief attached to the assignment."),
    step(30, "Open, complete and submit", "From the student view, the assignment could be opened to read the description and attached brief, then used to submit work. The proposed lecturer workflow included tracking submissions, marking and feedback.", "These were model features, not a validated replacement for formal university assessment systems. Institutional requirements would determine the appropriate integration.", "Original student-facing sample assessment post with due date and View assignment control."),
    step(31, "Make assessment criteria visible", "The model included a marking rubric to communicate criteria and support feedback within the assignment workflow.", "The rubric connected the assessment instructions to how work would be reviewed; the dissertation did not test its effect on student outcomes.", "Original Create rubric interface with a title and description field."),
  ] },
  { title: "Reflect and student wellbeing", context: "Proposed supporting features · Figures 32–33", steps: [
    step(32, "A brief student check-in", "Reflect was included as a way to gather student feedback and consider engagement through a short check-in.", "It formed one supporting part of the learning environment; the dissertation did not measure wellbeing or engagement improvements from its use.", "Original Reflect check-in preview asking how a student feels about an assignment."),
    step(33, "Access to guided resources", "The proposed environment also linked to self-growth and wellbeing material, including short podcasts and guided resources described in the dissertation.", "This broadened the module's support resources without making wellbeing tools the central purpose of the project.", "Original Reflect wellbeing-resource screen with guided content and resource categories."),
  ] },
  { title: "Structured module communication", context: "Proposed posts workflow · Figures 34–36", steps: [
    step(34, "Posts with a clear audience", "Lecturers could use standard posts and formatted messages for module communication. Channel mentions could address the class, individual mentions could direct attention to specific students, and important-message emphasis could distinguish urgent information.", "The intention was to make formal communication easier to organise and revisit; a notification was not a guarantee that every student would engage.", "Original standard post example showing assignment guidance, an important marker and a channel mention."),
    step(35, "Announcements for prominent updates", "Announcement posts offered headings and formatting for significant updates such as deadlines. The proposed example used a clearly structured announcement rather than another undifferentiated message.", "This gave module-level notices a more deliberate presentation while retaining the General channel as their shared location.", "Original announcement-post example demonstrating a prominent heading and formatted event details."),
    step(36, "Update and reference earlier information", "Posts could be edited after publication, and quoted replies could refer back to the message being discussed.", "This supported traceable formal discussion. The model separately included informal chat because threaded posts did not suit every conversation.", "Original quoted-post example referencing earlier assignment guidance."),
  ] },
  { title: "Learning materials and meetings", context: "Proposed resource organisation · Figures 37–39", steps: [
    step(37, "Organise around the topic", "I proposed topic-based folders in the Shared tab so students could use the subject being studied as the organising principle for resources.", "The structure addressed reported difficulties with finding files and inconsistent organisation across learning environments.", "Original Shared-tab example with topic-based folders for digital learning and technology-enhanced learning."),
    step(38, "Keep related materials together", "Each topic folder could hold lecture slides, supporting PDFs or documents, and a subfolder for lecture recordings. Scheduled Teams meetings could support teaching, with recordings and transcripts available for later review as described in the dissertation.", "Students would have a consistent place to revisit the material for a topic instead of reconstructing it from several locations.", "Original topic-folder contents showing a lecture recordings folder and a lecture PDF."),
    step(39, "Support retrieval as well as storage", "Search and filtering complemented the folder structure. The illustrated tools included media-type and location-related ways to find material and files shared in messages.", "A clear filing system and retrieval tools were complementary parts of the proposed response to navigation problems.", "Original file-filter interface showing All documents, In messages and format-related filters."),
  ] },
];

export const groupSequences: ResearchSequence[] = [
  { title: "A private project workspace", context: "Proposed group structure · Figures 40–42", steps: [
    step(40, "Keep assessed group work together", "Each assessment group would receive a private channel for its conversations, files and integrated tools. Group-specific work would sit within the module structure without being shared with unrelated student groups.", "This connected the module-level framework to a dedicated space for the practical work of each team.", "Original proposed private Group 01 channel within the module workspace."),
    step(41, "A file structure that can be adapted", "The suggested folders were Admin & Documentation for briefs and guidelines; Data & Figures for outputs; Drafts & Working Files for work in progress; and Research Materials for sources and references.", "I proposed a general starting framework, with flexibility for the requirements of different projects rather than a mandatory folder structure for every assignment.", "Original proposed group folders: Admin and Documentation, Data and Figures, Drafts and Working Files, Research Materials and Shared Documents."),
    step(42, "Bring the working tools into view", "The workspace tabs linked to the report, presentation, project plan, Whiteboard, meeting minutes and risk register alongside posts and shared files.", "The tabs made the working environment explicit. Their usefulness still depended on students understanding and adopting them.", "Original proposed navigation tabs for report, presentation, project plan, Whiteboard, meeting minutes and risk registry."),
  ] },
  { title: "Shared documents with one working location", context: "Proposed co-authoring workflow · Figures 43–44", steps: [
    step(43, "Work on the report together", "A Word report could be added directly as a tab so several students could work in the same document, with the current file accessible from the group environment.", "This built on the observed success of the shared Report tab and aimed to reduce conflicting copies of the same work.", "Original shared Word report tab displaying a sample report and table of contents."),
    step(44, "Keep the presentation alongside the report", "A shared PowerPoint tab provided the same common working location for the presentation, allowing students to edit it collaboratively.", "Report and Presentation were among the features used extensively in the observed project, giving these recommendations a direct connection to the evidence.", "Original shared PowerPoint presentation tab in the proposed group environment."),
  ] },
  { title: "Coordinate tasks and retain decisions", context: "Proposed project tools · Figures 45–48", steps: [
    step(45, "Planner for responsibility and progress", "The proposed Planner workflow covered creating tasks, assigning responsibilities, setting deadlines and monitoring progress.", "The observed Schedule tab was not actively used. This was a recommendation for better-supported adoption, not a claim that Planner had already solved the group's coordination problems.", "Original Planner project board with planning stages and task cards."),
    step(46, "OneNote for meeting continuity", "OneNote could hold agendas, discussion summaries and structured meeting records. The example organised progress updates, task allocation, issues and next steps in a common place.", "I had used OneNote individually during the observed project. The model proposed making meeting records part of the wider group's routine.", "Original proposed meeting-minutes page with date, time, attendees, agenda and discussion summary."),
    step(47, "Whiteboard for visual discussion", "Microsoft Whiteboard was included for brainstorming and developing ideas during meetings. The example used sketches, notes and shared visual working.", "This was a proposed collaborative activity; Whiteboard had not been actively used in the observed glider workspace.", "Original Whiteboard example showing aircraft-force sketches, notes and drawing tools."),
    step(48, "An Excel-based risk register", "The proposed register recorded risk descriptions, categories, likelihood, impact, risk scores, mitigation, contingency actions and ownership within an Excel sheet opened from the workspace.", "This was an integrated spreadsheet for project teams to maintain, not a specialised native Teams risk-management system or evidence that the sample risks had been resolved.", "Original Excel risk-register example with likelihood, impact, mitigation, contingency and owner columns."),
  ] },
  { title: "Make room for informal interaction", context: "Proposed chat and personalisation · Figures 49–50", steps: [
    step(49, "Chat for quick exchanges", "The model included Teams chat as a messaging-style space for informal discussion and direct communication, alongside formal channel posts.", "This responded to participants' preference for quick WhatsApp exchanges. It did not establish that Teams chat would replace those habits; that would need testing with students.", "Original informal chat example from the proposed environment; participant names are obscured in the source."),
    step(50, "A more personal interface", "The walkthrough included theme and appearance settings as options for adjusting the workspace experience.", "This addressed feedback about a rigid or dull interface at the level of a proposal. Personalisation alone was not presented as a proven route to better engagement.", "Original appearance settings screen showing theme and colour options."),
  ] },
];
