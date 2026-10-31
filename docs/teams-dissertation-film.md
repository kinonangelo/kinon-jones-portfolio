# Microsoft Teams dissertation film

> Historical first-edit notes. The current final media, music licence and timing are documented in [Final refinement](teams-dissertation-final-refinement.md).

48-second, 30 fps showcase for **Optimising the Use of Microsoft Teams in Undergraduate Education**. A 12-second homepage excerpt uses seconds 15–27 of the same edit, with a short audio/video fade at the end.

## Exports

| File | Purpose |
| --- | --- |
| `artifacts/teams-dissertation/master/teams-model-master-4k.mp4` | 3840 × 2160 archival master with AAC music; deliberately outside public assets |
| `artifacts/teams-dissertation/master/teams-model-original-score.wav` | Separate 48 kHz stereo original score, easily replaceable |
| `public/media/teams-dissertation/teams-model-web.mp4` | 1920 × 1080 H.264/AAC, fast-start web film |
| `public/media/teams-dissertation/teams-model-web.webm` | 1920 × 1080 VP9/Opus alternative |
| `public/media/teams-dissertation/teams-model-teaser.mp4` | 12-second H.264/AAC homepage excerpt |
| `public/media/teams-dissertation/teams-model-teaser.webm` | VP9/Opus homepage excerpt |
| `public/media/teams-dissertation/teams-model-poster.jpg` | 1920 × 1080 final model view |
| `public/media/teams-dissertation/teams-model-captions.vtt` | Full film's on-screen headings |
| `public/media/teams-dissertation/teams-model-teaser.vtt` | Excerpt's on-screen headings |

The archival master and production intermediates are ignored by Git. Back up the master separately when moving or publishing the project. The website only references the compressed web assets.

## Sources and editorial scope

- User-supplied `D:/Final Year Project/Team.mp4`, 335.7 seconds, 1918 × 866, 30 fps.
- User-supplied `D:/Final Year Project/Jones_Kinon_K2381771_Dissertation.docx`; figures already extracted into `public/images/dissertation/`.
- Existing portfolio Geist font, extracted from the local Next font assets with complete Latin character coverage.
- No downloaded footage, music or graphics from the YouTube references. Their videos could not be played through the available tools; editing followed the written brief instead.

The master is a 4K composition with native-resolution titles. Source interface footage is upscaled from its original resolution; this does not create additional interface detail.

## Story and features

| Time | Content |
| --- | --- |
| 0–7 s | Opening model reveal and separate academic work surfaces |
| 7–11.5 s | Research: 63 questionnaire responses, five interviews, observation of a six-member group including the researcher |
| 11.5–15 s | Available capability versus uneven adoption; structure, familiarity and implementation |
| 15–21 s | Proposed module Team, General/private channels, homepage, overview, schedule, resources and assignments |
| 21–28 s | Notebook, collaboration/individual spaces, assignment setup, brief, student view, rubric and Reflect |
| 28–36 s | Posts, announcements, topic resources, recordings, private group files, shared Word report and PowerPoint presentation |
| 36–44 s | Planner, OneNote minutes, Whiteboard, Excel risk register, chat and appearance |
| 44–48 s | Convergence into the complete proposed workspace and final hold |

The model is presented as a research proposal, not as a validated improvement to educational outcomes. Questionnaire chart response bases vary. The original charts are retained rather than synthesising new percentages.

## Audio and privacy

The music is an original programmatically composed electronic cue: synthesised oscillators, seeded noise, percussion, bass, arpeggios and quiet transition sounds. It contains no sampled recording, reference-video audio, stock music or speech. No third-party music licence is relied upon. It is separate from the visual edit and may be replaced with a supplied licensed track. The master is normalised toward −16 LUFS / −1.5 dBTP.

Account chrome is cropped out. The raw notebook/student-name views are excluded. Clean dissertation figures substitute for assignment creation and Notebook views. Chat messages, avatars and the embedded animation are masked in a private film-only derivative, then cropped to header/composer strips. Original dissertation figures and source files remain unchanged. Personal photographs in presentation thumbnails are excluded by cropping. Visible author credits and generic example group labels are retained.

## Website behaviour

- Full film directly after the existing dissertation introduction/metadata, before the research content.
- Teaser inside homepage Featured Projects with project context and a link to the dissertation. Hero unchanged.
- Shared `ProjectFilm` component, scoped CSS, responsive 16:9 frame, controls below the picture.
- Sources attach within 300 px of the player; metadata preload; poster reserves layout.
- Autoplay at 50% visibility, initially muted; pause offscreen, on hidden document and on unmount.
- Manual pause persists. Ended films do not restart automatically. Reduced-motion users must explicitly play.
- Play/pause, sound, seek and fullscreen use keyboard-accessible native buttons/range input. A text description is available without playing.

## Reproduction and verification

Python dependencies: Pillow, numpy, imageio-ffmpeg, fonttools and brotli. Run from the repository root:

```text
python scripts/teams-film/inspect_sources.py
python scripts/teams-film/render.py --preview
python scripts/teams-film/review.py
python scripts/teams-film/render.py
python scripts/teams-film/review.py --final
python scripts/teams-film/verify.py
node --test scripts/teams-film/player.test.mjs
npm run lint
npm run build
```

`render.py` defines the timeline, source selections, privacy crop, motion, score and exports. It caches source clips using their timing/crop signature. Source inspections and review sheets stay outside public assets.

The component tests exercise its actual hooks and events with mocked browser APIs: visibility thresholds, manual pause, reduced motion, lazy play, tab visibility, pending-play races, sound, seek, fullscreen calls and end/replay. They do not substitute for testing actual browser codecs, rendering, audio output or fullscreen permissions.

Live browser/mobile verification and real-time end-to-end playback remain unavailable because the browser automation tool fails to initialise (`failed to write kernel assets`). Sequential decoded-frame review, media decoding/metadata checks and build checks provide partial verification only.

Completed checks: production build and lint passed; seven component-behaviour tests passed. All five video files decoded fully without FFmpeg errors, with the expected dimensions, 30 fps, runtime and audio streams. MP4s have their metadata before media data for progressive playback. The poster is 1920 × 1080. Both page routes and all seven public media/caption URLs returned HTTP 200. The full web MP4 was visually inspected through sequential frames at 0.5-second intervals across the entire film. MP4 audio uses 48 kHz stereo; no audio clipping was reported by the analysis.

Approximate export sizes: 4K master 25.91 MB; full web MP4 8.00 MB; full WebM 7.38 MB; teaser MP4 2.68 MB; teaser WebM 2.51 MB; poster 185 kB.
