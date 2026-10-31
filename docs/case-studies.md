# Engineering case studies

The Discus route is the first implementation of the reusable story system. Other project pages retain their existing layout. The homepage and archive records are unchanged.

## Structure

- `app/components/case-study/types.ts`: typed story, chapter, step and evidence records.
- `project-story.tsx`: server-rendered introduction, award, chapters, always-visible technical subsections and next-project navigation.
- `chapter-nav.tsx`: active chapter tracking with a sticky desktop rail, continuous progress line and compact mobile selector.
- `visual-sequence.tsx`: a sticky desktop evidence panel that changes with the accompanying steps; smaller screens show each image inline.
- `story.module.css`: scoped layout and transitions. Reduced-motion users receive immediate evidence changes without transforms or fades. Global reduced-motion CSS also disables smooth scrolling.
- `app/data/case-studies/discus.ts`: source-based Discus narrative. A future story can supply different chapters, evidence and steps without duplicating the layout.

To add a future detailed project, create a typed case-study data file and opt that route into `ProjectStory`. Use ordinary chapters for static evidence and `steps` only where a progression benefits from linked visuals. Figures stay embedded and have no raw-file links.

## Discus source mapping

Primary individual-work source: `D:/Final thing.docx`, supplied 6 October 2026. Extracted text, embedded equations and original image media were inspected. Figure numbers below are the source's own captions, not guessed page numbers.

| Content / asset | Source |
| --- | --- |
| Brief, target span and whole-glider mass | Design Background and Scope |
| Reference-aircraft comparison | Comparison with the Carioca 2000 Model Glider |
| Flow, drag and pressure discussion | Aerodynamic Principles Governing Nose Design |
| `stagnation.png` | Figure 11, original `image10.png` |
| `form-drag.png` | Figure 7, original `image7.png` |
| `surface-friction.png` | Figures 8–9, original `image8.png` |
| `conical.png` | Figure 12, original `image11.png` |
| `elliptical.png` | Figure 13, original `image12.png` |
| `ogive.png` | Figure 14, original `image13.png` |
| Profile comparison and selection | Nose Design Development |
| `nose-cad.png` | Figure 15, original `image14.png` |
| `drawing.png` | Figure 16, original `image15.png` |
| 0.08 scale, 542.4 mm fuselage, assumed 7%, approximately 38 mm nose | CAD Modelling and Geometric Design, including Word equation objects |
| Balsa, proposed shaping/finishing, bonding and optional dowel | Manufacturing Considerations |
| Team files, meetings, roles and dimensional agreement | Risk Mitigation |
| Reflection | Individual Contribution and Reflection; explicit sizing assumption |
| Wider assembly image | Previously supplied `Discus_2C_Engineering_Portfolio.pdf`, page 16; existing site asset |
| Team testing, final-year context, 2026 and award | Explicit user brief |

New images were extracted byte-for-byte, without regeneration or cropping. Candidate and pressure diagrams are labelled as reference figures rather than original simulations. The complete assembly is explicitly a team output.

The preview cards use the existing full-glider assembly render, preserving their frame and surrounding layout. Only the introductory individual CAD image receives a narrow CSS edge mask; technical uses remain sharp and unmasked. CAD Development drives a single surrounding colour state: the full-width story environment, rail, dividers and text respond to scroll in both directions. There is no static boundary gradient. Tools and methods are separate metadata fields. Profile comparisons stay concise and qualitative, naming the selected elliptical–ogive nose profile. The revised faculty-award wording comes directly from the user brief. There are no slide counters or core-story disclosure elements.

On desktop viewports at least 560px tall, scroll position drives crossfades and restrained scale changes. Staged diagrams use object-fit contain and viewport-based height limits. Captions show only for the active image. Smaller or short viewports use inline figures; reduced motion removes transforms and uses static image changes. Animation work is scheduled only on scroll/resize and gated by IntersectionObserver.

## Editorial boundaries

The source contains an unfinished schedule placeholder; no timeline is invented. Its qualitative aerodynamic statements are presented as design reasoning, not verified performance. No CFD, measured drag change, tolerance analysis, tested adhesive-joint strength, quantified lifecycle impact or revision sequence is fabricated. Geometric scaling is not presented as proof of aerodynamic similarity. The 7% proportion remains an explicit assumption.

The final polish promotes the award to the shared H2 scale, keeps the rail sticky even on short desktop windows, and ends the rail before next-project navigation. Outcome and Reflection retain their wording with more spacing and restrained takeaway rules. Reduced motion switches the environment between static light/dark states.

