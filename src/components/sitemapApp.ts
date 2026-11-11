import { offices, phoneLine } from "../data/offices";
import {
  jumps,
  sections,
  sitemapTree,
  sitemapUi,
  type Card,
  type TreeNode,
} from "../data/sitemap";
import {
  allPaths,
  bag,
  currentLocale,
  detectLang,
  esc,
  locales,
  pathLabel,
  persistLang,
  rich,
  siteUrl,
  t,
  type LangId,
} from "../i18n/t";

export type SitemapMode = "map" | "tree";

let lang: LangId = "zh";
let mode: SitemapMode = "map";
let app: HTMLElement | null = null;
let query = "";
let bound = false;
let firstPaint = true;

function langsHtml(): string {
  const buttons = locales
    .map((item) => {
      const on = item.id === lang;
      return `<button type="button" data-set-lang="${item.id}" role="radio" aria-checked="${on ? "true" : "false"}">${esc(item.label)}</button>`;
    })
    .join("");
  return `<div class="langs" role="radiogroup" aria-label="${esc(t(sitemapUi.langLabel, lang))}">${buttons}</div>`;
}

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function viewsHtml(): string {
  const detail = `${withBase("/sitemap")}?lang=${lang}`;
  const treeHref = `${withBase("/sitemap/tree")}?lang=${lang}`;
  const worldHref = `${withBase("/locations")}?lang=${lang}`;
  const detailCurrent = mode === "map" ? ' aria-current="page"' : "";
  const treeCurrent = mode === "tree" ? ' aria-current="page"' : "";
  return `<nav class="views" aria-label="${esc(t(sitemapUi.viewLabel, lang))}">` +
    `<a href="${detail}"${detailCurrent}>${esc(t(sitemapUi.detailView, lang))}</a>` +
    `<a href="${treeHref}"${treeCurrent}>${esc(t(sitemapUi.treeView, lang))}</a>` +
    `<a href="${worldHref}">${esc(t(sitemapUi.worldView, lang))}</a>` +
    `</nav>`;
}

function chrome(compact: boolean): string {
  const h1 = compact ? sitemapUi.treeH1 : sitemapUi.mapH1;
  const lede = compact ? sitemapUi.treeLede : sitemapUi.mapLede;
  const jumpsHtml = compact
    ? ""
    : `<nav class="jumps" aria-label="${esc(t(sitemapUi.jumpLabel, lang))}">${jumps
        .map((item) => `<a href="#${item.id}">${esc(t(item.label, lang))}</a>`)
        .join("")}</nav>`;
  const statsHtml = compact
    ? ""
    : `<div class="stats">${sitemapUi.stats
        .map((item) => `<div class="stat"><b>${item.n}</b><span>${esc(t(item.label, lang))}</span></div>`)
        .join("")}</div>`;
  const searchLabel = compact ? sitemapUi.searchTree : sitemapUi.search;
  const prefix = currentLocale(lang).prefix;
  return (
    `<a class="skip" href="#content">${esc(t(sitemapUi.skip, lang))}</a>` +
    `<header class="hero${compact ? " hero-compact" : ""}"><div class="wrap">` +
    `<div class="brand"><a class="logo" href="${esc(siteUrl("/", undefined, prefix))}">North<span>GO</span></a>` +
    `<div class="meta-note">${esc(t(sitemapUi.date, lang))}</div></div>` +
    `<h1>${esc(t(h1, lang))}<br><em>${esc(t(sitemapUi.tagline, lang))}</em></h1>` +
    `<p class="lede">${esc(t(lede, lang))}</p>` +
    statsHtml +
    `</div></header>` +
    `<div class="toolbar"><div class="wrap">` +
    `<div class="tools">${langsHtml()}${viewsHtml()}</div>` +
    `<input class="search" id="q" type="search" placeholder="${esc(t(searchLabel, lang))}" aria-label="${esc(t(searchLabel, lang))}" value="${esc(query)}">` +
    jumpsHtml +
    `</div></div>`
  );
}

function pointsHtml(card: Card): string {
  if (!card.points?.length) return "";
  const prefix = currentLocale(lang).prefix;
  return `<ul class="sub">${card.points
    .map((point) => {
      const text = esc(t(point.text, lang));
      if (point.hash) {
        return `<li><a href="${esc(siteUrl(point.path || card.path, point.hash, prefix))}">${text}</a></li>`;
      }
      return `<li>${text}</li>`;
    })
    .join("")}</ul>`;
}

function cardHay(card: Card): string {
  const bits = [bag(card.name), bag(card.desc), allPaths(card.path), card.path];
  (card.points || []).forEach((point) => {
    bits.push(bag(point.text), point.hash || "");
  });
  return bits.join(" ");
}

function cardHtml(card: Card): string {
  const badge = card.status === "bad"
    ? '<span class="badge bad">404</span>'
    : '<span class="badge ok">200</span>';
  const prefix = currentLocale(lang).prefix;
  return (
    `<article class="card" data-text="${esc(cardHay(card))}"><div class="card-top"><div>` +
    `<h3>${esc(t(card.name, lang))}</h3>` +
    `<a class="path" href="${esc(siteUrl(card.path, undefined, prefix))}">${esc(pathLabel(card.path, undefined, prefix))}</a>` +
    `<p class="desc">${esc(t(card.desc, lang))}</p></div>${badge}</div>` +
    pointsHtml(card) +
    `</article>`
  );
}

function officeHtml(office: (typeof offices)[number]): string {
  const hay = `${bag(office.name)} ${office.address} ${phoneLine(office)} ${office.email}`;
  return (
    `<article class="card office" data-text="${esc(hay)}"><strong>${esc(t(office.name, lang))}</strong><p>` +
    `${esc(office.address)}</p><small>${esc(phoneLine(office))}<br><a href="mailto:${esc(office.email)}">` +
    `${esc(office.email)}</a></small></article>`
  );
}

function mapHtml(): string {
  const body = sections
    .map((section) => {
      const cards = (section.cards || []).map(cardHtml).join("");
      const officeBlock = section.offices
        ? `<div class="offices" style="margin-top:0.85rem">${offices.map(officeHtml).join("")}</div>`
        : "";
      const warn = section.warn ? `<div class="note">${esc(t(section.warn, lang))}</div>` : "";
      const notes = section.notes
        ? `<article class="card" data-text="${esc(section.notes.map((n) => bag(n)).join(" "))}"><ul class="findings">${section.notes
            .map((item) => `<li>${rich(item, lang)}</li>`)
            .join("")}</ul></article>`
        : "";
      const layout = section.layout ? ` ${section.layout}` : "";
      const grid = section.cards?.length ? `<div class="grid${layout}">${cards}</div>` : "";
      return (
        `<section id="${section.id}"><div class="section-head"><h2>${esc(t(section.title, lang))}</h2>` +
        `<p>${esc(t(section.note, lang))}</p></div>${warn}${notes}${grid}${officeBlock}</section>`
      );
    })
    .join("");
  return (
    chrome(false) +
    `<main id="content"><div class="wrap">${body}` +
    `<p class="empty" id="empty">${esc(t(sitemapUi.empty, lang))}</p></div></main>` +
    `<footer><div class="wrap">${esc(t(sitemapUi.footer, lang))}</div></footer>`
  );
}

function treeRow(item: TreeNode): string {
  const label = `<span class="label${item.path ? "" : " group"}">${esc(t(item.name, lang))}</span>`;
  const prefix = currentLocale(lang).prefix;
  const path = item.path
    ? `<span class="path">${esc(pathLabel(item.path, item.hash, prefix))}</span>`
    : "";
  const badge = item.status === "bad" ? '<span class="badge bad">404</span>' : "";
  if (!item.path) return `<div class="row">${label}</div>`;
  return `<a class="row tree-row" href="${esc(siteUrl(item.path, item.hash, prefix))}">${label}${path}${badge}</a>`;
}

function treeItems(items: TreeNode[]): string {
  return `<ul>${items
    .map((item) => {
      const kids = item.children?.length ? treeItems(item.children) : "";
      const hay = `${bag(item.name)} ${item.path ? allPaths(item.path, item.hash) : ""} ${item.hash || ""}`;
      return `<li data-text="${esc(hay)}">${treeRow(item)}${kids}</li>`;
    })
    .join("")}</ul>`;
}

function treeHtml(): string {
  const prefix = currentLocale(lang).prefix;
  const root = siteUrl("/", undefined, prefix);
  return (
    chrome(true) +
    `<main id="content"><div class="wrap"><article class="card tree-card">` +
    `<p class="desc"><a href="${esc(root)}">www.northgo.com</a> · ${esc(pathLabel("/", undefined, prefix))}</p>` +
    `<nav class="tree" aria-label="${esc(t(sitemapUi.treeH1, lang))}">${treeItems(sitemapTree)}</nav></article>` +
    `<p class="empty" id="empty">${esc(t(sitemapUi.empty, lang))}</p></div></main>` +
    `<footer><div class="wrap">${esc(t(sitemapUi.footer, lang))}</div></footer>`
  );
}

function applyFilter(): void {
  if (!app) return;
  const term = query.trim().toLowerCase();
  const empty = app.querySelector("#empty");
  if (mode === "tree") {
    const items = Array.from(app.querySelectorAll<HTMLElement>(".tree li"));
    if (!term) {
      items.forEach((li) => {
        li.hidden = false;
      });
      empty?.classList.remove("show");
      return;
    }
    for (let i = items.length - 1; i >= 0; i--) {
      const li = items[i];
      const self = (li.getAttribute("data-text") || "").toLowerCase().includes(term);
      if (self) {
        li.hidden = false;
        li.querySelectorAll("li").forEach((child) => {
          (child as HTMLElement).hidden = false;
        });
      } else {
        const lists = Array.from(li.children).filter((el) => el.tagName === "UL");
        const childHit = lists.some((ul) =>
          Array.from(ul.children).some(
            (child) => child.tagName === "LI" && !(child as HTMLElement).hidden,
          ),
        );
        li.hidden = !childHit;
      }
    }
    empty?.classList.toggle("show", items.length > 0 && items.every((li) => li.hidden));
    return;
  }

  const cards = Array.from(app.querySelectorAll<HTMLElement>(".card"));
  let shown = 0;
  cards.forEach((card) => {
    const hay = (card.getAttribute("data-text") || "").toLowerCase();
    const hit = !term || hay.includes(term);
    card.hidden = !hit;
    if (hit) shown += 1;
  });
  app.querySelectorAll("main section").forEach((section) => {
    const any = Array.from(section.querySelectorAll<HTMLElement>(".card")).some((card) => !card.hidden);
    (section as HTMLElement).hidden = Boolean(term) && !any;
  });
  empty?.classList.toggle("show", shown === 0);
}

function render(): void {
  if (!app) return;
  const y = window.scrollY;
  const focusLang =
    document.activeElement instanceof HTMLElement
      ? document.activeElement.getAttribute("data-set-lang")
      : "";
  document.documentElement.lang = currentLocale(lang).lang;
  document.title = t(mode === "tree" ? sitemapUi.treeTitle : sitemapUi.mapTitle, lang);
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute(
      "content",
      t(mode === "tree" ? sitemapUi.treeLede : sitemapUi.mapLede, lang),
    );
  }
  app.innerHTML = mode === "tree" ? treeHtml() : mapHtml();
  const field = app.querySelector<HTMLInputElement>("#q");
  if (field) field.value = query;
  applyFilter();
  if (focusLang) {
    const button = app.querySelector<HTMLElement>(`[data-set-lang="${focusLang}"]`);
    button?.focus();
  }
  if (firstPaint) {
    firstPaint = false;
    const id = (location.hash || "").replace(/^#/, "");
    const target = id && document.getElementById(id);
    if (target) target.scrollIntoView();
    return;
  }
  window.scrollTo(0, y);
}

function onClick(event: MouseEvent): void {
  const target = event.target as HTMLElement | null;
  const button = target?.closest?.("[data-set-lang]");
  if (!button) return;
  const next = button.getAttribute("data-set-lang");
  if (!next || !locales.some((item) => item.id === next) || next === lang) return;
  lang = next as LangId;
  persistLang(lang);
  render();
}

function onInput(event: Event): void {
  const target = event.target as HTMLInputElement | null;
  if (!target || target.id !== "q") return;
  query = target.value;
  applyFilter();
}

export function mountSitemap(nextMode: SitemapMode, root: HTMLElement): void {
  mode = nextMode === "tree" ? "tree" : "map";
  app = root;
  lang = detectLang();
  persistLang(lang);
  if (!bound) {
    bound = true;
    document.addEventListener("click", onClick);
    document.addEventListener("input", onInput);
  }
  render();
}
