import Image from "next/image";
import type { Evidence } from "./types";
import styles from "./story.module.css";

export function EvidenceFigure({
  evidence,
  priority = false,
  presentation = "technical",
}: {
  evidence: Evidence;
  priority?: boolean;
  presentation?: "technical" | "intro" | "stage";
}) {
  return (
    <figure
      className={`min-w-0 ${presentation === "stage" ? styles.stageFigure : ""} ${evidence.unframed && presentation !== "intro" ? styles.unframed : ""}`}
    >
      <div
        className={
          presentation === "intro"
            ? styles.blendedCad
            : evidence.dark
              ? "bg-neutral-800 px-5 py-10 sm:px-8"
              : "overflow-hidden bg-white"
        }
      >
        <Image
          src={evidence.src}
          alt={evidence.alt}
          width={evidence.width}
          height={evidence.height}
          className="h-auto w-full object-contain"
          sizes="(min-width: 1280px) 880px, (min-width: 1024px) 70vw, 90vw"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      <figcaption className={`${styles.supporting} mt-4 max-w-2xl`}>
        {evidence.caption}
      </figcaption>
    </figure>
  );
}
