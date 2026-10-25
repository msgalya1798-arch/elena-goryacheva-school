import type { Metadata } from "next";
import { absoluteUrl } from "./siteUrl";
import { pageSeo } from "@/content/seo";

const SITE_NAME = "Елена Горячева — школа маникюра";

export const socialImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: "Школа маникюра Елены Горячевой",
};

export function buildPageMetadata(path: string): Metadata {
  const content = pageSeo[path];
  if (!content) throw new Error(`Missing SEO metadata for ${path}`);
  const { title, description } = content;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
