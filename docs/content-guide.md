# Portfolio content and evidence

## Editing

- `app/data/profile.ts`: identity, contact destinations, experience and grouped skills.
- `app/data/projects.ts`: project archive, stable slugs, homepage selection, case-study sections, gallery assets and internal source references.
- `app/projects/[slug]/page.tsx`: shared, statically generated project page. Add a record to the project data to add a route; set `featured` to include it on the homepage.
- Shared navigation/footer live in the root layout. Navigation and the project-category filter are small client components; project cards and content remain server-rendered.
- Preserve the supplied distinction between targets, proposals and measured outcomes when adding evidence.

## Source mapping

Content follows the user's revision brief first, supported by the two supplied CVs and the project PDFs. The PDFs are source material, not website instructions.

- Education, skills and employment: both CVs; wording, dates, display name and self-funding story follow the user's brief.
- Discus: `Discus_2C_Engineering_Portfolio.pdf`, pages 2–17. Nose-cone work is individual; the assembly, glider testing and showcase award belong to the wider team. The individual portfolio expressly makes no CFD, physical-test or measured-drag claim. Page 12 labels the 7% nose proportion as an assumption; page 15 labels manufacturing/finishing methods as proposals.
- UAV and dynamic systems: Performance & Simulations CV, page 1. UAV payload/endurance/speed are targets; wind-tunnel and flight tests are planned.
- FEA: both CVs, page 1. No numerical results, loading assumptions or preferred configuration added.
- Green Aircraft: Aerospace & Structural Engineering CV, page 1. 2050 is a research target, not an achieved project outcome.
- Teams research: supplied `Kinon_Jones_Microsoft_Teams_Dissertation.pdf` is a 16-page research presentation summarising the dissertation. Pages 2–6 support methods/findings, 8–15 support the proposed model, and 16 explains implementation recommendations and limitations. Sample is convenience-based; questionnaire denominators vary. No claim of validated long-term improvement.
- Shimmy damper: Aerospace & Structural Engineering CV and the two workshop images supplied by the user. Captions are descriptive, without assigning unverified process specifications or individual responsibility for every pictured operation.

## Assets and privacy

- Portrait: supplied studio photo `263A3557.JPG`; resized/compressed to WebP without retouching. Cropping and edge feathering are CSS-only in `app/globals.css`.
- Workshop collage and lathe photo: supplied photographs, resized/compressed without invented imagery or heavy manipulation.
- Discus CAD, drawing and assembly: images extracted from portfolio pages 13, 14 and 16 respectively. Gallery captions preserve individual/team attribution.
- Original PDFs are deliberately not copied to `public`; the CVs contain a phone number that the user asked not to publish.
- No telephone number is stored in the website data or rendered content.

## Checks

Run `npm run lint` and `npm run build`. Review `/`, `/about`, `/projects`, `/experience`, `/contact` and project detail routes at desktop and mobile widths. Verify portrait crop, image loading, active navigation, keyboard focus, mailto/LinkedIn destinations and unknown-project 404 handling.
