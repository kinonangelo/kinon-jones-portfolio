# Dissertation project story

The `microsoft-teams-research` detail route uses the dedicated renderer in `app/components/dissertation/`. It reuses the approved story typography, chapter navigation and next-project navigation without modifying any Discus component or data. The archive and other project routes retain their existing content.

## Source and scope

Primary source: `D:/Final Year Project/Jones_Kinon_K2381771_Dissertation.docx`, **Optimising the Use of Microsoft Teams in Undergraduate Education**, Kinon Jones, April 2026. The full body and interview appendices informed the page. All embedded images were inspected. The user confirmed the academic-year range 2025–2026; no more precise start month is inferred.

The page separates questionnaire findings, five interview accounts, observation of a six-member glider group including the author, analytical synthesis, and the proposed model. It does not claim a live institutional deployment or measured improvements in attainment, productivity or wellbeing.

## Original figures

`public/images/dissertation/figure-5.png` through `figure-50.png` are byte-identical copies of the corresponding original embedded DOCX image files. Figures 5–19 are questionnaire charts, 20–22 are observed-workspace evidence, and 23–50 illustrate the proposed model. Captions, dimensions and paths are recorded in `app/data/case-studies/dissertation-figures.json`; the interpretation and alt text are in `dissertation.ts`.

The original source already obscures participant names in Figures 22 and 49. No interview transcripts, consent forms or complete source document are copied into the public directory. Conceptual HTML/CSS diagrams are clearly labelled as summaries rather than original research figures.

Survey bases vary between questions and branches. The page uses displayed counts and question-level percentages, and does not use 63 as a universal denominator. Qualitative evidence remains contextual, and adoption recommendations are distinguished from proven effects.

## Presentation and maintenance

The twelve chapters move from problem and methodology through evidence, synthesis, the model, implementation and limitations. The overview provides a brief reading path; detailed content stays expanded.

Desktop walkthroughs use a sticky visual area and scroll-driven opacity/transform interpolation. Mobile, short viewports and reduced-motion layouts show every figure inline with its text. All source images use contain sizing and lazy loading; full-resolution images are mounted in a native modal dialog on request. The dialog supports keyboard dismissal and fit/original-size views. No animation library or generated media is used.

The model chapters have an isolated scroll-driven neutral-to-dark environment. No global styles or shared interaction logic are changed.
