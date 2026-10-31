"use client";

import { useState, type ReactNode } from "react";
import type { ProjectCategory } from "../data/projects";

type GridItem = {
  slug: string;
  categories: ProjectCategory[];
  card: ReactNode;
};

export function ProjectGrid({
  items,
  categories,
}: {
  items: GridItem[];
  categories: readonly ProjectCategory[];
}) {
  const [category, setCategory] = useState("All Projects");
  const visible = items.filter(
    (item) =>
      category === "All Projects" ||
      item.categories.some((value) => value === category),
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h2 id="projects-heading" className="eyebrow">
          Engineering Projects
        </h2>
        <div className="flex items-center gap-3">
          <label
            htmlFor="project-category"
            className="text-xs text-neutral-600"
          >
            Filter by
          </label>
          <select
            id="project-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-controls="project-grid"
            className="max-w-full border border-neutral-400 bg-transparent px-3 py-3 text-sm text-neutral-800"
          >
            <option>All Projects</option>
            {categories.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <p role="status" className="sr-only">
        {visible.length} projects shown — {category}
      </p>
      <div id="project-grid" className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {visible.map((item) => (
          <div key={item.slug} className="min-w-0">
            {item.card}
          </div>
        ))}
      </div>
    </>
  );
}
