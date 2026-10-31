"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./story.module.css";

/** One scroll-driven colour state keeps the rail and surrounding chapters cohesive. */
export function StoryEnvironment({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const cad = element?.querySelector<HTMLElement>("#cad");
    if (!element || !cad) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = -1;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const update = () => {
      frame = 0;
      const bounds = cad.getBoundingClientRect();
      const height = window.innerHeight;
      const enter = clamp((height * 0.85 - bounds.top) / (height * 0.6));
      const leave = clamp((bounds.bottom - height * 0.25) / (height * 0.6));
      const progress = Math.min(enter, leave);
      const amount = motion.matches ? Number(progress >= 0.5) : progress * progress * (3 - 2 * progress);
      if (amount === previous) return;
      previous = amount;
      const mix = (light: number[], dark: number[]) =>
        `rgb(${light.map((value, index) => Math.round(value + (dark[index] - value) * amount)).join(" ")})`;
      element.style.setProperty("--scene-background", mix([248, 248, 246], [5, 5, 5]));
      // Switch foreground near the midpoint to preserve readable contrast on mid-grey.
      element.style.setProperty("--scene-foreground", amount < 0.55 ? "#171717" : "#fafafa");
      element.style.setProperty("--scene-muted", amount < 0.55 ? "#525252" : "#d4d4d4");
      element.style.setProperty("--scene-line", mix([212, 212, 212], [115, 115, 115]));
      element.style.setProperty("--scene-active", mix([238, 239, 237], [64, 64, 64]));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);
  return <div ref={root} className={styles.environment}>{children}</div>;
}

