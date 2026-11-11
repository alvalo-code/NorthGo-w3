/** Join `base` with a site path. Page routes keep a trailing slash; files do not. */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const suffix = (path.startsWith("/") ? path : `/${path}`).replace(/\/$/, "");
  if (/\.[a-z0-9]+$/i.test(suffix)) return `${base}${suffix}`;
  return `${base}${suffix}/`;
}
