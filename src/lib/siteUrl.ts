const PRODUCTION_SITE_URL = "https://goryacheva.online";

function normalizeSiteUrl(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

/**
 * Single origin source for metadata, sitemap, robots and structured data.
 * Production defaults to the canonical custom domain. NEXT_PUBLIC_SITE_URL
 * remains an explicit override for tests or intentionally isolated environments.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL;
  return normalizeSiteUrl(configured);
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
