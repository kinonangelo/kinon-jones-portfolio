# Teams dissertation film: final refinement

Runtime: **72.6 seconds at 30 fps**. This is a targeted pass over the approved second edit; `scripts/teams-film/refine.py` reuses `reedit.py` for the research and later sequences.

## Changes

- Opening: text only on the existing near-black background, with **Kinon A. Southerton Jones**. No moving UI tabs. The existing supporting line is retained.
- Setup, 3.6–9 seconds: text-only context and fragmentation statements. The original wording is retained.
- Research, 9–20.4 seconds: same research material, statistics, sequence and timing. The training result remains 36 of 54 answers, not a percentage of all 63 respondents.
- Architecture, 23.4–27 seconds: **One Team, One Module**, full-width source figure, labels and leader lines below the interface. No text backplates.
- Homepage, 27–36 seconds: **9 seconds**, with pauses and progressive attention to module information, learning resources, the class schedule, assignments, recent files and lecturer information. Schedule/date placeholders are retained as shown; no live calendar or actual class dates are invented.
- Class Notebook, 36–41.4 seconds: **5.4 seconds**, including an illustrated sidebar selection, then Content Library, Collaboration Space and individual student areas.
- Classwork, 41.4–48.6 seconds: **7.2 seconds**, including a sidebar selection and four 1.5-second workflow states: creation, attached brief, student view and rubric.
- Later sections, 48.6–67.2 seconds: original order, duration, source screens and camera movements. Captions move into the margin outside the UI.
- Ending, 67.2–72.6 seconds: centred conclusion, undergraduate-learning line and full name on black; no Teams montage or burned-in music credit. Final fade over 0.6 seconds.

All pointer actions are editorial reconstructions over supplied screens. No new live Teams interactions, completed submissions or lecturer feedback are fabricated.

## Music and attribution

The approved **Style Funk — Kevin MacLeod** recording is retained. The longer film uses a continuous longer excerpt with fades and loudness adjustment; there is no repeated short loop.

The downloaded [Commons copy](https://commons.wikimedia.org/wiki/File:Style_Funk_(ISRC_USUAN1100058).mp3) carries **CC BY 3.0 Unported**. [Section 4(b)](https://creativecommons.org/licenses/by/3.0/legalcode.en) permits credit in a reasonable manner for the medium. [Creative Commons guidance](https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution#Publishing_attribution_on_a_separate_web_page) explicitly discusses attribution on the webpage hosting video. The licence does not specifically mandate text burned into the picture.

Retain the supplied title, author, source/licence links and notices; identify adaptation/changes, avoid implying endorsement and do not impose restrictions or DRM that prevent licensed uses. Attribution belongs with the work when redistributed. The licence also addresses prominence where all contributing authors are credited together.

Credit locations:

1. Existing caption beside both website players, with track/author and licence links.
2. Existing expandable film description, with complete source and change notice.
3. `public/media/teams-dissertation/music-attribution.txt`, linked from that description.
4. MP4/WebM comment metadata, plus the same notice alongside archival exports.

Metadata alone is not relied on. When uploading the film to another platform, copy the notice into its publicly accessible description. The credit applies to the soundtrack, not a blanket licence for the portfolio or entire film.

## Outputs

The archival master and complete export set are under `artifacts/teams-dissertation/final-v3/`:

- `teams-model-master-4k.mp4`
- `teams-model-web.mp4` and `.webm`
- `teams-model-teaser.mp4` and `.webm` (12 seconds, source time 23.4–35.4)
- `teams-model-poster.jpg`
- `teams-model-captions.vtt` and `teams-model-teaser.vtt`
- `music-attribution.txt`

The verified web assets replace the same filenames under `public/media/teams-dissertation/`. Previous website assets are retained in `final-v3/prior-website-assets/`. The previous second edit also remains intact in `reedit-v2/`.

The master is a 4K composition with native-resolution text; the supplied UI recording and figures remain limited by their original resolution.

## Validation

The preview completed a 72.6-second run at playbackRate 1 in the in-app browser without a media error. Visual checks used frame sheets, full-size samples and screenshots during normal-speed playback. This is not a claim of continuous human-equivalent audiovisual viewing: audio cannot be personally auditioned through the available inspection tools.

`verify_final.py` checks full decoding, dimensions, frame rates, duration, audio codecs, MP4 fast-start and poster dimensions before installing media. Export metadata and audio measurements are retained in the export folder. The existing seven player tests passed, as did lint. No player event handling, autoplay logic, page structure or CSS was changed; component edits are limited to duration, media description and required attribution.

Final checks completed: all five video exports passed, including embedded soundtrack attribution. The production build passed. The installed dissertation player loaded the new 72.626-second WebM, played muted, paused when moved offscreen and resumed when returned to view. Public-facing credit links and the expanded source/change notice were verified in the browser. Web audio measured −17.2 LUFS integrated and −1.5 dBFS true peak. The verified assets were copied to the existing public paths; previous assets were backed up before replacement.

Reproduce with:

```text
python scripts/teams-film/refine.py --boards
python scripts/teams-film/refine.py --preview
python scripts/teams-film/refine.py
python scripts/teams-film/verify_final.py --publish
node --test scripts/teams-film/player.test.mjs
npm run lint
npm run build
```
