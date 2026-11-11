import { withBase } from "../base";
import { logoHtml } from "../logo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { offices, phoneLine, type Office } from "../data/offices";
import { locationsUi } from "../data/sitemap";
import {
  contactHref,
  currentLocale,
  detectLang,
  esc,
  locales,
  persistLang,
  t,
  type LangId,
} from "../i18n/t";

const CENTER_LNG = 150;

type View = {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  padX: number;
  padY: number;
};

let lang: LangId = "zh";
let selected = "taipei";
let landFeature: GeoJSON.Feature | GeoJSON.FeatureCollection | null = null;
let view: View = {
  width: 1200,
  height: 700,
  left: -180,
  right: 180,
  top: 90,
  bottom: -90,
  padX: 0,
  padY: 0,
};
let resizeTimer: ReturnType<typeof setTimeout> | null = null;
let root: HTMLElement | null = null;

function wrapLng(lng: number): number {
  let x = lng;
  while (x < -180) x += 360;
  while (x > 180) x -= 360;
  return x;
}

function rotateLng(lng: number): number {
  return wrapLng(lng - CENTER_LNG);
}

function stageSize(): { width: number; height: number } {
  const stage = document.getElementById("map-stage");
  if (!stage) return { width: 1200, height: 700 };
  const rect = stage.getBoundingClientRect();
  return {
    width: Math.max(320, Math.floor(rect.width)),
    height: Math.max(420, Math.floor(rect.height)),
  };
}

function setupView(width: number, height: number): void {
  view = {
    width,
    height,
    left: -180,
    right: 180,
    top: 78,
    bottom: -62,
    padX: width * 0.02,
    padY: height * 0.06,
  };
}

function project(lng: number, lat: number): [number, number] {
  const xLng = rotateLng(lng);
  const xRatio = (xLng - view.left) / (view.right - view.left);
  const yRatio = (view.top - lat) / (view.top - view.bottom);
  const innerW = view.width - view.padX * 2;
  const innerH = view.height - view.padY * 2;
  return [view.padX + xRatio * innerW, view.padY + yRatio * innerH];
}

function ringPath(ring: number[][]): string {
  if (!ring?.length) return "";
  let d = "";
  let prev: [number, number] | null = null;
  for (let i = 0; i < ring.length; i++) {
    const pt = project(ring[i][0], ring[i][1]);
    if (prev && Math.abs(pt[0] - prev[0]) > view.width * 0.45) {
      d += `M${pt[0].toFixed(2)},${pt[1].toFixed(2)}`;
    } else if (!d) {
      d += `M${pt[0].toFixed(2)},${pt[1].toFixed(2)}`;
    } else {
      d += `L${pt[0].toFixed(2)},${pt[1].toFixed(2)}`;
    }
    prev = pt;
  }
  return `${d}Z`;
}

function geometryPath(geometry: GeoJSON.Geometry | null | undefined): string {
  if (!geometry) return "";
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(ringPath).join("");
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map((poly) => poly.map(ringPath).join("")).join("");
  }
  if (geometry.type === "GeometryCollection") {
    return (geometry.geometries || []).map(geometryPath).join("");
  }
  return "";
}

function featurePath(
  feat: GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.Geometry | null,
): string {
  if (!feat) return "";
  if ("type" in feat && feat.type === "FeatureCollection") {
    return (feat.features || []).map(featurePath).join("");
  }
  if ("type" in feat && feat.type === "Feature") return geometryPath(feat.geometry);
  return geometryPath(feat as GeoJSON.Geometry);
}

function labelAnchor(
  office: Office,
  width: number,
  height: number,
  pin: [number, number],
): { x: number; y: number } {
  const asiaCount = offices.filter((item) => item.labelSide === "asia").length;
  if (office.labelSide === "america") {
    return {
      x: Math.min(width * 0.88, pin[0] + Math.max(70, width * 0.07)),
      y: Math.max(height * 0.26, pin[1] - height * 0.06),
    };
  }
  const top = height * 0.2;
  const gap = Math.min(46, (height * 0.5) / Math.max(asiaCount - 1, 1));
  return { x: width * 0.5, y: top + office.stack * gap };
}

function leaderPath(
  pin: [number, number],
  label: { x: number; y: number },
  side: Office["labelSide"],
): string {
  const midX =
    side === "america"
      ? pin[0] + (label.x - pin[0]) * 0.45
      : pin[0] + (label.x - pin[0]) * 0.55;
  const midY =
    side === "america" ? pin[1] : pin[1] + (label.y - pin[1]) * 0.15;
  return `M${pin[0].toFixed(1)},${pin[1].toFixed(1)} L${midX.toFixed(1)},${midY.toFixed(1)} L${label.x.toFixed(1)},${label.y.toFixed(1)}`;
}

function setLang(next: LangId): void {
  lang = next;
  persistLang(lang);
  document.documentElement.lang = currentLocale(lang).lang;
  document.title = t(locationsUi.title, lang);
  const skip = document.querySelector(".skip");
  if (skip) skip.textContent = t(locationsUi.skip, lang);
  renderChrome();
  renderDetail();
  drawOverlays();
}

function selectOffice(id: string): void {
  selected = id;
  renderDetail();
  drawOverlays();
}

function renderChrome(): void {
  const langHtml = locales
    .map(
      (item) =>
        `<button type="button" class="lang-btn" data-lang="${item.id}" aria-pressed="${
          item.id === lang ? "true" : "false"
        }">${esc(item.label)}</button>`,
    )
    .join("");

  const top = document.getElementById("topbar");
  if (top) {
    top.innerHTML =
      `${logoHtml(esc(`https://www.northgo.com${currentLocale(lang).prefix || "/"}`))}` +
      `<div class="top-actions">` +
      `<a class="chip" href="${withBase("/sitemap")}?lang=${lang}">${esc(t(locationsUi.sitemap, lang))}</a>` +
      `<a class="chip" href="${esc(contactHref(lang))}" rel="noopener" target="_blank">${esc(t(locationsUi.contact, lang))}</a>` +
      langHtml +
      `</div>`;
  }

  const copy = document.getElementById("map-copy");
  if (copy) {
    copy.innerHTML =
      `<h1>${esc(t(locationsUi.h1, lang))}</h1>` +
      `<p>${esc(t(locationsUi.lede, lang))}</p>`;
  }

  const legend = document.getElementById("legend");
  if (legend) {
    legend.innerHTML =
      `<div class="legend-item"><span class="swatch hq" aria-hidden="true"></span>${esc(t(locationsUi.hq, lang))}</div>` +
      `<div class="legend-item"><span class="swatch office" aria-hidden="true"></span>${esc(t(locationsUi.office, lang))}</div>`;
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML =
      `${esc(t(locationsUi.source, lang))} · <a href="${esc(contactHref(lang))}" rel="noopener" target="_blank">northgo.com</a>`;
  }
}

function renderDetail(): void {
  const panel = document.getElementById("detail");
  if (!panel) return;
  const office = offices.find((item) => item.id === selected) || offices[0];
  panel.innerHTML =
    `<div><h2>${esc(t(office.name, lang))}</h2><p class="meta">${esc(t(office.city, lang))}</p></div>` +
    `<div class="detail-actions">` +
    `<a class="btn btn-primary" href="mailto:${esc(office.email)}">${esc(office.email)}</a>` +
    `<a class="btn btn-ghost" href="${esc(contactHref(lang))}" rel="noopener" target="_blank">${esc(t(locationsUi.contact, lang))}</a>` +
    `</div>` +
    `<dl>` +
    `<div><dt>${esc(t(locationsUi.address, lang))}</dt><dd>${esc(office.address)}</dd></div>` +
    `<div><dt>${esc(t(locationsUi.phone, lang))}</dt><dd>${esc(phoneLine(office))}</dd></div>` +
    `<div><dt>${esc(t(locationsUi.email, lang))}</dt><dd><a href="mailto:${esc(office.email)}">${esc(office.email)}</a></dd></div>` +
    `</dl>`;
}

function drawLand(svg: SVGSVGElement): void {
  let land = svg.querySelector(".land-layer");
  if (!land) {
    land = document.createElementNS("http://www.w3.org/2000/svg", "g");
    land.setAttribute("class", "land-layer");
    svg.insertBefore(land, svg.firstChild);
  }
  land.innerHTML = "";
  if (!landFeature) return;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", "land");
  path.setAttribute("d", featurePath(landFeature));
  land.appendChild(path);
}

function drawOverlays(): void {
  const svg = document.getElementById("world-map") as SVGSVGElement | null;
  const labels = document.getElementById("labels");
  if (!svg || !labels) return;

  const { width, height } = view;
  let overlay = svg.querySelector(".overlay-layer");
  if (!overlay) {
    overlay = document.createElementNS("http://www.w3.org/2000/svg", "g");
    overlay.setAttribute("class", "overlay-layer");
    svg.appendChild(overlay);
  }
  overlay.innerHTML = "";
  labels.innerHTML = "";

  offices.forEach((office) => {
    const pin = project(office.lng, office.lat);
    const label = labelAnchor(office, width, height, pin);
    const active = office.id === selected;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute("class", "leader");
    line.setAttribute("d", leaderPath(pin, label, office.labelSide));
    overlay!.appendChild(line);

    if (office.pulse) {
      const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      halo.setAttribute("class", "halo");
      halo.setAttribute("cx", String(pin[0]));
      halo.setAttribute("cy", String(pin[1]));
      halo.setAttribute("r", "14");
      overlay!.appendChild(halo);

      const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pulse.setAttribute("class", "halo-pulse");
      pulse.setAttribute("cx", String(pin[0]));
      pulse.setAttribute("cy", String(pin[1]));
      pulse.setAttribute("r", "8");
      overlay!.appendChild(pulse);
    }

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute(
      "class",
      `dot ${office.hq ? "is-hq" : "is-office"}${active ? " is-active" : ""}`,
    );
    dot.setAttribute("cx", String(pin[0]));
    dot.setAttribute("cy", String(pin[1]));
    dot.setAttribute("r", active ? "6.5" : "5");
    dot.setAttribute("data-office", office.id);
    dot.setAttribute("role", "button");
    dot.setAttribute("tabindex", "0");
    dot.setAttribute("aria-label", t(office.name, lang));
    overlay!.appendChild(dot);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `label-btn${office.hq ? " is-hq" : ""}${active ? " is-active" : ""}`;
    btn.setAttribute("data-office", office.id);
    btn.style.left = `${label.x}px`;
    btn.style.top = `${label.y}px`;
    btn.textContent = t(office.short, lang);
    labels.appendChild(btn);
  });
}

function renderMap(): void {
  const svg = document.getElementById("world-map") as SVGSVGElement | null;
  if (!svg) return;
  const size = stageSize();
  setupView(size.width, size.height);
  svg.setAttribute("viewBox", `0 0 ${size.width} ${size.height}`);
  svg.setAttribute("width", String(size.width));
  svg.setAttribute("height", String(size.height));
  drawLand(svg);
  drawOverlays();
}

function showMapError(): void {
  const stage = document.getElementById("map-stage");
  if (!stage || stage.querySelector(".map-error")) return;
  const box = document.createElement("div");
  box.className = "map-error";
  box.textContent = t(locationsUi.mapFail, lang);
  stage.appendChild(box);
}

function clearMapError(): void {
  document.querySelector(".map-error")?.remove();
}

async function loadLand(): Promise<void> {
  try {
    const res = await fetch(withBase("/land-110m.json"));
    if (!res.ok) throw new Error(`land fetch ${res.status}`);
    const topology = (await res.json()) as Topology<{ land: GeoJSON.MultiPolygon }>;
    if (!topology.objects?.land) throw new Error("land topology missing");
    landFeature = feature(topology, topology.objects.land) as GeoJSON.Feature;
    clearMapError();
    renderMap();
  } catch {
    showMapError();
  }
}

function bind(): void {
  if (!root) return;
  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const langBtn = target?.closest?.("[data-lang]");
    if (langBtn) {
      const next = langBtn.getAttribute("data-lang");
      if (next && locales.some((item) => item.id === next)) {
        setLang(next as LangId);
      }
      return;
    }
    const officeEl = target?.closest?.("[data-office]");
    if (officeEl) {
      const id = officeEl.getAttribute("data-office");
      if (id) selectOffice(id);
    }
  });

  root.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as HTMLElement | null;
    const officeEl = target?.closest?.("[data-office]");
    if (!officeEl) return;
    event.preventDefault();
    const id = officeEl.getAttribute("data-office");
    if (id) selectOffice(id);
  });

  window.addEventListener("resize", () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderMap, 120);
  });
}

export function mountLocations(container: HTMLElement): void {
  root = container;
  lang = detectLang();
  document.documentElement.lang = currentLocale(lang).lang;
  document.title = t(locationsUi.title, lang);
  const skip = document.querySelector(".skip");
  if (skip) skip.textContent = t(locationsUi.skip, lang);

  container.innerHTML =
    `<div class="page">` +
    `<header class="topbar" id="topbar"></header>` +
    `<main class="map-stage" id="map-stage">` +
    `<div class="map-copy" id="map-copy"></div>` +
    `<svg id="world-map" role="img" aria-label="Northgo global offices map"></svg>` +
    `<div id="labels"></div>` +
    `<div class="legend" id="legend"></div>` +
    `</main>` +
    `<section class="detail-dock"><div class="detail-card" id="detail"></div></section>` +
    `<p class="footer" id="footer"></p>` +
    `</div>`;

  renderChrome();
  renderDetail();
  bind();
  void loadLand();
}
