export const PRIMARY_HOST = "goryacheva.online";
export const PRIMARY_ORIGIN = `https://${PRIMARY_HOST}`;

const REDIRECT_HOSTS = new Set([
  "www.goryacheva.online",
  "elena-goryacheva.vercel.app",
  "elena-goryacheva-galina123.msk1.amvera.tech",
]);

function normalizeHost(value: string | null): string {
  if (!value) return "";
  const [firstHost = ""] = value.split(",");
  return firstHost.trim().toLowerCase().replace(/\.$/, "").replace(/:\d+$/, "");
}

export function getCanonicalRedirectTarget(
  forwardedHost: string | null,
  host: string | null,
  pathname: string,
  search = "",
): string | null {
  const effectiveHost = normalizeHost(forwardedHost) || normalizeHost(host);
  if (!REDIRECT_HOSTS.has(effectiveHost)) return null;

  const target = new URL(pathname || "/", `${PRIMARY_ORIGIN}/`);
  target.search = search.startsWith("?") || search === "" ? search : `?${search}`;
  return target.toString();
}
