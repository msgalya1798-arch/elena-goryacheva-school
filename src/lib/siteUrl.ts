const FALLBACK_SITE_URL = "https://elena-goryacheva.vercel.app";

function normalizeSiteUrl(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

/**
 * Один источник origin для metadata, sitemap, robots и schema.
 * При подключении собственного домена задайте NEXT_PUBLIC_SITE_URL в Vercel.
 */
export function getSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    FALLBACK_SITE_URL;

  return normalizeSiteUrl(configured);
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
