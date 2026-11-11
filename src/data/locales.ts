export const LANG_ORDER = ["en", "zh", "ja", "vi"] as const;

export type LangId = (typeof LANG_ORDER)[number];

export type Localized<T = string> = Record<LangId, T>;

export function P(en: string, zh: string, ja: string, vi: string): Localized {
  return { en, zh, ja, vi };
}

export type Locale = {
  id: LangId;
  label: string;
  lang: string;
  prefix: string;
};

export const locales: Locale[] = [
  { id: "en", label: "EN", lang: "en", prefix: "" },
  { id: "zh", label: "繁中", lang: "zh-Hant", prefix: "/zh-tw" },
  { id: "ja", label: "日本語", lang: "ja", prefix: "/ja" },
  { id: "vi", label: "Tiếng Việt", lang: "vi", prefix: "/vi" },
];

export const ORIGIN = "https://www.northgo.com";
export const LANG_STORAGE_KEY = "ng-sitemap-lang";
export const DEFAULT_LANG: LangId = "zh";

export function isLangId(value: string | null | undefined): value is LangId {
  return !!value && (LANG_ORDER as readonly string[]).includes(value);
}
