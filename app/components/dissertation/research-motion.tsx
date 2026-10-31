"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./dissertation.module.css";
import storyStyles from "../case-study/story.module.css";

export function ResearchEnvironment({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const start = element.querySelector<HTMLElement>("#proposed");
    const end = element.querySelector<HTMLElement>("#group");
    if (!start || !end) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, previous = -1;
    const update = () => {
      frame = 0;
      const height = innerHeight;
      const clamp = (n: number) => Math.max(0, Math.min(1, n));
      const value = Math.min(clamp((height * .8 - start.getBoundingClientRect().top) / (height * .6)), clamp((end.getBoundingClientRect().bottom - height * .2) / (height * .6)));
      const amount = reduced.matches ? Number(value >= .5) : value * value * (3 - 2 * value);
      if (amount === previous) return;
      previous = amount;
      const mix = (a: number, b: number) => Math.round(a + (b - a) * amount);
      element.style.setProperty("--scene-background", `rgb(${mix(248, 5)} ${mix(248, 5)} ${mix(246, 5)})`);
      element.style.setProperty("--scene-foreground", amount < .5 ? "#171717" : "#fafafa");
      element.style.setProperty("--scene-muted", amount < .5 ? "#525252" : "#d4d4d4");
      element.style.setProperty("--scene-line", amount < .5 ? "#d4d4d4" : "#737373");
      element.style.setProperty("--scene-active", amount < .5 ? "#eeefed" : "#333");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", schedule); reduced.addEventListener("change", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); };
  }, []);
  return <div ref={root} className={`${storyStyles.environment} ${styles.researchEnvironment}`}>{children}</div>;
}

export function ResearchDiagram({ inputs, output, caption }: { inputs: string[]; output: string; caption: string }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let frame = 0, near = false;
    const update = () => {
      frame = 0;
      const p = Math.max(0, Math.min(1, (innerHeight * .9 - element.getBoundingClientRect().top) / (innerHeight * .6)));
      element.style.setProperty("--diagram-progress", String(p));
    };
    const schedule = () => { if (near && !frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { near = entry.isIntersecting; schedule(); });
    observer.observe(element); window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", schedule);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);
  return <figure ref={root} className={styles.diagram}>
    <div className={styles.diagramInputs}>{inputs.map((input) => <span key={input}>{input}</span>)}</div>
    <div className={styles.diagramLine} aria-hidden="true" />
    <div className={styles.diagramOutput}>{output}</div>
    <figcaption>{caption}</figcaption>
  </figure>;
}
