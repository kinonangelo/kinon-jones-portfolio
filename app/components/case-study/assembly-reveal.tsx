"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { StoryStep } from "./types";
import styles from "./story.module.css";

export function AssemblyReveal({ step }: { step: StoryStep }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 560px)");
    let frame = 0;
    let visible = true;
    const ease = (value: number) => value * value * (3 - 2 * value);
    const update = () => {
      frame = 0;
      if (!visible) return;
      const top = (desktop.matches ? track.current ?? element : element).getBoundingClientRect().top;
      const height = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (height * 0.85 - top) / (height * (desktop.matches ? 0.7 : 1.1))));
      const scale = motion.matches ? 1 : desktop.matches
        ? progress < 0.65
          ? 0.8 + 0.25 * ease(progress / 0.65)
          : 1.05 - 0.05 * ease((progress - 0.65) / 0.35)
        : 0.9 + 0.1 * ease(progress);
      element.style.setProperty("--aircraft-scale", String(scale));
      element.style.setProperty("--aircraft-opacity", String(motion.matches ? 1 : 0.6 + 0.4 * ease(Math.min(1, progress / 0.65))));
      element.style.setProperty("--reveal-copy-opacity", String(motion.matches ? 1 : 1 - 0.35 * ease(progress)));
    };
    const schedule = () => { if (!frame && visible) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { rootMargin: "100px" });
    observer.observe(element);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <div ref={root} className={styles.assemblyReveal}>
      <div className={styles.revealCopy}>
        <h3 className="font-medium">{step.title}</h3>
        <p className="mt-5 max-w-2xl">{step.text}</p>
        {step.takeaway && <p className="mt-6 border-l border-current/40 pl-4">{step.takeaway}</p>}
      </div>
      <div ref={track} className={styles.revealTrack}>
        <figure className={styles.revealStage}>
          <div className={styles.aircraftSurface}>
            <Image src={step.evidence.src} alt={step.evidence.alt}
              width={step.evidence.width} height={step.evidence.height}
              sizes="(min-width: 1280px) 1000px, 90vw"
              className={styles.revealAircraft} />
          </div>
          <figcaption className="mt-4 max-w-2xl">{step.evidence.caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}
