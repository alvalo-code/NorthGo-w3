import {
  DEFAULT_LANG,
  LANG_ORDER,
  LANG_STORAGE_KEY,
  ORIGIN,
  isLangId,
  locales,
  type LangId,
  type Localized,
  type Locale,
} from "../data/locales";

export function detectLang(): LangId {
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (isLangId(q)) return q;
  } catch {
    /* ignore */
  }
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLangId(saved)) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

export function persistLang(lang: LangId): void {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  try {
    const next = new URL(location.href);
    if (next.searchParams.get("lang") !== lang) {
      next.searchParams.set("lang", lang);
      history.replaceState(null, "", next);
    }
  } catch {
    /* ignore */
  }
}

export function currentLocale(lang: LangId): Locale {
  return locales.find((item) => item.id === lang) ?? locales[1];
}

export function t(pack: Localized | string | null | undefined, lang: LangId): string {
  if (pack == null) return "";
  if (typeof pack === "string") return pack;
  return pack[lang] || pack.en || "";
}

export function bag(...values: Array<Localized | string | null | undefined>): string {
  const parts: string[] = [];
  for (const value of values) {
    if (value == null) continue;
    if (typeof value === "string") parts.push(value);
    else LANG_ORDER.forEach((key) => {
      if (value[key]) parts.push(value[key]);
    });
  }
  return parts.join(" ");
}

export function esc(value: string | null | undefined): string {
  return String(value ?? "").replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!,
  );
}

export function rich(value: Localized | string, lang: LangId): string {
  return esc(t(value, lang)).replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function pathLabel(
  path: string | undefined,
  hash: string | undefined,
  prefix: string,
): string {
  if (!path || path === "/") {
    if (hash) return `${prefix || ""}/${hash}`;
    return prefix || "/";
  }
  return `${prefix}${path}${hash || ""}`;
}

export function allPaths(path: string | undefined, hash?: string): string {
  return locales.map((item) => pathLabel(path, hash, item.prefix)).join(" ");
}

export function siteUrl(path: string | undefined, hash: string | undefined, prefix: string): string {
  return ORIGIN + pathLabel(path, hash, prefix);
}

export function contactHref(lang: LangId): string {
  const prefix = currentLocale(lang).prefix;
  return `${ORIGIN}${prefix}/contact#locations`;
}

export { LANG_ORDER, locales, ORIGIN };
export type { LangId, Localized };
