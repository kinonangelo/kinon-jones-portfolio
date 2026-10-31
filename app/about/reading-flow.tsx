"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./reading-flow.module.css";

export function ReadingFlow({ children, stages, story = false }: {
  children: ReactNode;
  stages: string[];
  story?: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = container.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const groups = Array.from(element.querySelectorAll<HTMLElement>("[data-reading-group]"));
    const desktop = window.matchMedia("(min-width: 1024px)");
    let observer: IntersectionObserver | undefined;

    function observe() {
      observer?.disconnect();
      element!.removeAttribute("data-enhanced");
      if (!desktop.matches) return;

      const readingLine = Math.round(window.innerHeight * .45);
      observer = new IntersectionObserver(() => {
        // Keep the preceding stage through a gap; switch at the central reading line.
        let next = 0;
        groups.forEach((group, index) => {
          if (group.getBoundingClientRect().top <= readingLine + 2) next = index;
        });
        setActive(next);
      }, {
        rootMargin: `-${readingLine}px 0px -${Math.max(0, window.innerHeight - readingLine - 2)}px 0px`,
        threshold: 0,
      });
      element!.setAttribute("data-enhanced", "");
      groups.forEach((group) => observer!.observe(group));
    }

    observe();
    window.addEventListener("resize", observe);
    desktop.addEventListener("change", observe);
    return () => {
      observer?.disconnect();
      element.removeAttribute("data-enhanced");
      window.removeEventListener("resize", observe);
      desktop.removeEventListener("change", observe);
    };
  }, []);

  return (
    <div ref={container} className={`${styles.flow} ${story ? "" : styles.process}`}>
      <div className={styles.rail} aria-hidden="true">
        <div className={styles.sticky}>
          {stages.map((stage, index) => (
            <div key={stage} className={styles.stage} data-active={active === index}>
              <span>{stage}</span>
              {!story && <span className={styles.underline} />}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
