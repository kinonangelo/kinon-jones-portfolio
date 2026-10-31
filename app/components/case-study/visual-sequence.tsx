"use client";

import { useEffect, useRef, useState } from "react";
import { EvidenceFigure } from "./evidence";
import type { StoryStep } from "./types";
import styles from "./story.module.css";

export function VisualSequence({ steps }: { steps: StoryStep[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const elements =
      root.current?.querySelectorAll<HTMLElement>("[data-story-step]");
    if (!elements) return;
    const layers = root.current?.querySelectorAll<HTMLElement>(
      "[data-visual-layer]",
    );
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia(
      "(min-width: 1024px) and (min-height: 560px)",
    );
    let frame = 0;
    let inView = true;
    const update = () => {
      frame = 0;
      if (!inView || !desktop.matches) return;
      const height = window.innerHeight;
      let position = 0;
      elements.forEach((element, index) => {
        if (!index) return;
        const blend = Math.min(
          1,
          Math.max(
            0,
            (height * 0.55 - element.getBoundingClientRect().top) /
              (height * 0.25),
          ),
        );
        if (blend > 0) position = index - 1 + blend;
      });
      const current = Math.round(position);
      setActive(current);
      layers?.forEach((layer, index) => {
        const distance = Math.min(1, Math.abs(position - index));
        const opacity = motion.matches
          ? Number(index === current)
          : 1 - distance;
        layer.style.opacity = String(opacity);
        layer.style.visibility = opacity > 0 ? "visible" : "hidden";
        layer.style.transform = motion.matches
          ? "none"
          : `translateY(${distance * 10}px) scale(${1 - distance * 0.025})`;
      });
    };
    const schedule = () => {
      if (!frame && inView) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        schedule();
      },
      { rootMargin: "100px" },
    );
    if (root.current) observer.observe(root.current);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, [steps]);
  return (
    <div ref={root} className={styles.sequence}>
      <div className={styles.stickyVisual}>
        <div className="mb-5 flex items-center justify-between gap-4 text-xs text-neutral-500">
          <span>{steps[active].title}</span>
        </div>
        <div className={styles.visualStack}>
          {steps.map((step, index) => (
            <div
              key={step.title}
              data-visual-layer
              aria-hidden={index !== active}
              className={`${styles.visualLayer} ${index === active ? styles.visible : ""}`}
            >
              <EvidenceFigure evidence={step.evidence} presentation="stage" />
            </div>
          ))}
        </div>
      </div>
      <div>
        {steps.map((step) => (
          <div data-story-step key={step.title} className={styles.step}>
            {step.eyebrow && <p className="eyebrow">{step.eyebrow}</p>}
            <h3 className="mt-4 text-2xl font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              {step.text}
            </p>
            {step.comparison && (
              <dl className="mt-6 space-y-4">
                {step.comparison.map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-neutral-300 pt-3"
                  >
                    <dt className="eyebrow text-neutral-500">{item.label}</dt>
                    <dd className="mt-2 text-sm leading-7 text-neutral-700">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            {step.takeaway && (
              <p className="mt-6 border-l border-neutral-400 pl-4 text-sm leading-7">
                {step.takeaway}
              </p>
            )}
            <div className={styles.inlineVisual}>
              <EvidenceFigure evidence={step.evidence} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

