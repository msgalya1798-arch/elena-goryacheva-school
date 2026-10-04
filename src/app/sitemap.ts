import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { absoluteUrl } from "@/lib/siteUrl";

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

  return [...staticRoutes, ...courseRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/online" ? 0.9 : 0.7,
  }));
}
