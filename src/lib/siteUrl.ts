const PRODUCTION_SITE_URL = "https://goryacheva.online";

/**
 * Один источник origin для metadata, sitemap, robots и schema.
 * Фиксированный основной домен не зависит от Host и переменных окружения хостинга.
 */
export function getSiteUrl(): string {
  return PRODUCTION_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
