import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { absoluteUrl } from "@/lib/siteUrl";
import { legalDocuments } from "@/content/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/online",
    "/offline",
    "/about",
    "/reviews",
    "/faq",
    "/legal/details",
  ];

  const courseRoutes = courses.map((course) => `/${course.format}/${course.slug}`);

  const legalRoutes = legalDocuments.map(({ slug }) => `/legal/${slug}`);

  return [...staticRoutes, ...courseRoutes, ...legalRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/online" ? 0.9 : 0.7,
  }));
}
