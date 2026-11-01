import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", "/about", "/projects", "/experience", "/contact",
    ...projects.map(({ slug }) => `/projects/${slug}`),
  ].map((pathname) => ({ url: `https://kinonjones.uk${pathname}` }));
}
