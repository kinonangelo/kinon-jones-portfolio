"use client";

import { useEffect, useState } from "react";
import styles from "./story.module.css";

export function ChapterNav({
  chapters,
}: {
  chapters: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(chapters[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.3;
      let current = chapters[0].id;
      for (const chapter of chapters) {
        const section = document.getElementById(chapter.id);
        if (section && section.getBoundingClientRect().top <= threshold)
          current = chapter.id;
      }
      setActive(current);

      const currentIndex = chapters.findIndex(
        (chapter) => chapter.id === current,
      );
      const currentSection = document.getElementById(current);
      const bounds = currentSection?.getBoundingClientRect();
      const fraction = bounds
        ? Math.min(1, Math.max(0, (threshold - bounds.top) / bounds.height))
        : 0;
      setProgress((currentIndex + fraction) / chapters.length);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [chapters]);

  return (
    <nav
      aria-label="Project chapters"

      className={styles.navigation}
    >
      <div className={styles.desktopNav}>
        <p className="eyebrow mb-6 text-neutral-500">Project story</p>
        <ol className={`${styles.progressList} space-y-1`}>
          <li aria-hidden="true" className={styles.progressTrack}>
            <span style={{ transform: `scaleY(${progress})` }} />
          </li>
          {chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={active === chapter.id ? "location" : undefined}
                className={styles.chapterLink}
              >
                <span className="font-mono text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {chapter.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <label className={styles.mobileNav}>
        <span className="eyebrow shrink-0">Jump to</span>
        <select
          aria-label="Jump to chapter"
          value={active}
          className="min-w-0 flex-1 bg-transparent py-3 text-sm"
          onChange={(event) => {
            const id = event.target.value;
            const section = document.getElementById(id);
            section?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            });
            section?.focus({ preventScroll: true });
            history.replaceState(null, "", `#${id}`);
            setActive(id);
          }}
        >
          {chapters.map((chapter, index) => (
            <option key={chapter.id} value={chapter.id}>
              {String(index + 1).padStart(2, "0")} — {chapter.label}
            </option>
          ))}
        </select>
      </label>
    </nav>
  );
}

