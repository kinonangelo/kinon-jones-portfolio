"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { researchFigure, type ResearchSequence, type ResearchStep } from "../../data/case-studies/dissertation";
import styles from "./dissertation.module.css";

export function EvidenceWalkthrough({ sequence }: { sequence: ResearchSequence }) {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [inspected, setInspected] = useState<ResearchStep | null>(null);
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const steps = [...element.querySelectorAll<HTMLElement>("[data-research-step]")];
    const headings = steps.map((step) => step.querySelector<HTMLElement>("h3")!);
    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 600px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let near = false;
    const update = () => {
      frame = 0;
      if (!near || !desktop.matches || reduced.matches) return;
      // The heading (not the step's leading padding) must reach the reading
      // midpoint. The same boundary applies when scrolling in either direction.
      const readingLine = window.innerHeight * 0.5;
      let next = 0;
      headings.forEach((heading, index) => {
        if (heading.getBoundingClientRect().top <= readingLine) next = index;
      });
      // CSS completes the crossfade in time, so pausing scroll cannot leave
      // two figures indefinitely blended between adjacent explanations.
      setActive(next);
    };
    const schedule = () => { if (near && !frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { near = entry.isIntersecting; schedule(); }, { rootMargin: "200px" });
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);
  const inspect = (step: ResearchStep) => {
    setInspected(step); setZoom(false); dialog.current?.showModal();
  };
  const figure = (step: ResearchStep, inline = false) => {
    const source = researchFigure(step.figure);
    return <figure>
      <div className={styles.figureSurface}>
        <Image src={source.src} width={source.width} height={source.height} alt={step.alt}
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 90vw" loading="lazy" />
      </div>
      <figcaption>{source.caption}. {step.figure < 20 ? "Questionnaire evidence." : step.figure < 23 ? "Observed workspace." : "Proposed model."}</figcaption>
      {inline && <button className={styles.inspect} onClick={() => inspect(step)}>Inspect Figure {step.figure} <span aria-hidden="true">↗</span></button>}
    </figure>;
  };
  return <div className={styles.walkthrough} ref={root}>
    <div className={styles.sequenceHeading}>
      <p className="eyebrow">{sequence.context}</p>
      <h3>{sequence.title}</h3>
    </div>
    <div className={styles.sequenceGrid}>
      <div className={styles.pinned}>
        <div className={styles.visualStack}>
          {sequence.steps.map((step, index) => <div key={step.figure} data-research-layer
            aria-hidden={index !== active}
            className={`${styles.visualLayer} ${index === active ? styles.activeLayer : ""}`}>
            {figure(step)}
          </div>)}
        </div>
        <button className={styles.inspect} onClick={() => inspect(sequence.steps[active])}>Inspect Figure {sequence.steps[active].figure} <span aria-hidden="true">↗</span></button>
      </div>
      <div>
        {sequence.steps.map((step) => <div key={step.figure} data-research-step className={styles.researchStep}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          <p className={styles.implication}>{step.implication}</p>
          <div className={styles.inlineFigure}>{figure(step, true)}</div>
        </div>)}
      </div>
    </div>
    <dialog ref={dialog} className={styles.figureDialog} aria-label={inspected ? `Inspect Figure ${inspected.figure}: ${inspected.title}` : "Inspect research figure"}>
      <div className={styles.dialogControls}>
        <span>Figure {inspected?.figure} · Original dissertation evidence</span>
        <div><button onClick={() => setZoom(!zoom)}>{zoom ? "Fit to screen" : "Original size"}</button><button onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button></div>
      </div>
      {inspected && <div className={`${styles.dialogImage} ${zoom ? styles.originalSize : ""}`}>
        <Image src={researchFigure(inspected.figure).src} width={researchFigure(inspected.figure).width} height={researchFigure(inspected.figure).height}
          sizes="95vw" alt={inspected.alt} loading="eager" unoptimized />
      </div>}
      <p>{inspected?.alt}</p>
    </dialog>
  </div>;
}
