(function () {
  const locales = [
    { id: "en", label: "EN", lang: "en" },
    { id: "zh", label: "繁中", lang: "zh-Hant" },
    { id: "ja", label: "日本語", lang: "ja" },
    { id: "vi", label: "Tiếng Việt", lang: "vi" }
  ];

  function P(en, zh, ja, vi) {
    return { en: en, zh: zh, ja: ja, vi: vi };
  }

  const ui = {
    title: P("Northgo · Global", "Northgo · 全球", "Northgo · グローバル", "Northgo · Toàn cầu"),
    h1: P("Global", "全球", "グローバル", "Toàn cầu"),
    lede: P(
      "7 offices are on this map",
      "7 個辦公室都在這張地圖上",
      "7つのオフィスがこの地図上にあります",
      "7 văn phòng đều trên bản đồ này"
    ),
    hq: P("HQ", "總部", "本社", "Trụ sở"),
    office: P("Office", "辦公室", "オフィス", "Văn phòng"),
    address: P("Address", "地址", "住所", "Địa chỉ"),
    phone: P("Phone", "電話", "電話", "Điện thoại"),
    email: P("Email", "電子郵件", "メール", "Email"),
    contact: P("Contact page", "聯絡頁", "お問い合わせ", "Trang liên hệ"),
    sitemap: P("Sitemap", "網站地圖", "サイトマップ", "Sơ đồ trang"),
    source: P(
      "Office details from www.northgo.com/zh-tw/contact.",
      "據點資料來源 www.northgo.com/zh-tw/contact。",
      "拠点情報は www.northgo.com/zh-tw/contact に基づきます。",
      "Thông tin văn phòng từ www.northgo.com/zh-tw/contact."
    ),
    skip: P("Skip to map", "跳至地圖", "地図へ移動", "Tới bản đồ"),
    mapFail: P(
      "Could not load the world map. Check your network and reload.",
      "無法載入世界地圖，請確認網路後重新整理。",
      "世界地図を読み込めませんでした。ネットワークを確認して再読み込みしてください。",
      "Không tải được bản đồ thế giới. Kiểm tra mạng rồi tải lại."
    )
  };

  const offices = [
    {
      id: "tokyo",
      hq: false,
      lat: 35.6702,
      lng: 139.7764,
      short: P("Tokyo", "東京", "東京", "Tokyo"),
      name: P("Tokyo Office", "東京辦公室", "東京オフィス", "Văn phòng Tokyo"),
      city: P("Tokyo, Japan", "東京，日本", "東京、日本", "Tokyo, Nhật Bản"),
      address: "104-0041 6FL., Gran+Ginza-East 1-5-1 Shintomi, Chuo-Ku, Tokyo City, Japan",
      phone: "+81-3-6260-3944",
      fax: "+81-3-6260-3945",
      email: "info.tyo@northgo.com",
      labelSide: "asia",
      stack: 0
    },
    {
      id: "osaka",
      hq: false,
      lat: 34.6994,
      lng: 135.4972,
      short: P("Osaka", "大阪", "大阪", "Osaka"),
      name: P("Osaka Office", "大阪辦公室", "大阪オフィス", "Văn phòng Osaka"),
      city: P("Osaka, Japan", "大阪，日本", "大阪、日本", "Osaka, Nhật Bản"),
      address: "530-0002 3FL., -B MF Sakura-Bashi Build, 2-6-23 Sonezaki Shinchi, kita-ku, Osaka City, Japan",
      phone: "+81-6-6676-8395",
      fax: "+81-6-6676-8397",
      email: "info.osa@northgo.com",
      labelSide: "asia",
      stack: 1
    },
    {
      id: "taipei",
      hq: true,
      lat: 25.0579,
      lng: 121.5445,
      short: P("Taipei", "台北", "台北", "Đài Bắc"),
      name: P("Taipei Office (Head Office)", "台北辦公室（總部）", "台北オフィス（本社）", "Văn phòng Đài Bắc (trụ sở)"),
      city: P("Taipei, Taiwan", "台北，台灣", "台北、台湾", "Đài Bắc, Đài Loan"),
      address: "7F., No. 10, Sec. 3, Minsheng E. Rd., Taipei City 104511, Taiwan",
      phone: "+886-2-2531-8677",
      fax: "+886-2-2531-8577",
      email: "info.tpe@northgo.com",
      labelSide: "asia",
      stack: 2
    },
    {
      id: "taichung",
      hq: false,
      lat: 24.2475,
      lng: 120.5568,
      short: P("Taichung", "台中", "台中", "Đài Trung"),
      name: P("Taichung Office", "台中辦公室", "台中オフィス", "Văn phòng Đài Trung"),
      city: P("Taichung, Taiwan", "台中，台灣", "台中、台湾", "Đài Trung, Đài Loan"),
      address: "No. 4, Zhongheng 11th Rd., Taichung City 435058, Taiwan",
      phone: "+886-4-2326-2580",
      fax: "+886-4-2326-0308",
      email: "info.txg@northgo.com",
      labelSide: "asia",
      stack: 3
    },
    {
      id: "kaohsiung",
      hq: false,
      lat: 22.6193,
      lng: 120.2788,
      short: P("Kaohsiung", "高雄", "高雄", "Cao Hùng"),
      name: P("Kaohsiung Office", "高雄辦公室", "高雄オフィス", "Văn phòng Cao Hùng"),
      city: P("Kaohsiung, Taiwan", "高雄，台灣", "高雄、台湾", "Cao Hùng, Đài Loan"),
      address: "19F-2, No.31 Hai-Pien Rd., Kaohsiung City 802609, Taiwan",
      phone: "+886-7-335-0730",
      fax: "+886-7-336-4536",
      email: "info.khh@northgo.com",
      labelSide: "asia",
      stack: 4
    },
    {
      id: "hcmc",
      hq: false,
      lat: 10.7964,
      lng: 106.7191,
      short: P("Ho Chi Minh City", "胡志明市", "ホーチミン", "TP. Hồ Chí Minh"),
      name: P("Ho Chi Minh Office", "胡志明市辦公室", "ホーチミンオフィス", "Văn phòng TP. Hồ Chí Minh"),
      city: P("Ho Chi Minh City, Vietnam", "胡志明市，越南", "ホーチミン、ベトナム", "TP. Hồ Chí Minh, Việt Nam"),
      address: "5th Floor, No. 92D Nguyen Huu Canh Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam",
      phone: "+84-28-9995-7368",
      fax: "",
      email: "info.hcmc@northgo.com",
      labelSide: "asia",
      stack: 5
    },
    {
      id: "lax",
      hq: false,
      lat: 34.0626,
      lng: -118.1229,
      short: P("Los Angeles", "洛杉磯", "ロサンゼルス", "Los Angeles"),
      name: P("Los Angeles Office", "洛杉磯辦公室", "ロサンゼルスオフィス", "Văn phòng Los Angeles"),
      city: P("Monterey Park, USA", "蒙市，美國", "モンテレーパーク、米国", "Monterey Park, Hoa Kỳ"),
      address: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA",
      phone: "+1-714-853-1088",
      fax: "",
      email: "info.lax@northgo.com",
      labelSide: "america",
      stack: 0,
      pulse: true
    }
  ];

  // Pacific-centered equirectangular (same idea as d3.geoEquirectangular().rotate([-150, 0])).
  const CENTER_LNG = 150;

  let lang = "zh";
  let selected = "taipei";
  let landFeature = null;
  let view = { width: 1200, height: 700, left: -180, right: 180, top: 90, bottom: -90 };
  let resizeTimer = null;

  function t(item) {
    if (!item) return "";
    return item[lang] || item.en || "";
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function readLang() {
    let q = "";
    try { q = new URLSearchParams(location.search).get("lang") || ""; } catch (e) {}
    if (locales.some(function (item) { return item.id === q; })) return q;
    try {
      const saved = localStorage.getItem("ng-sitemap-lang");
      if (locales.some(function (item) { return item.id === saved; })) return saved;
    } catch (e) {}
    return "zh";
  }

  function contactHref() {
    const prefix = { en: "", zh: "/zh-tw", ja: "/ja", vi: "/vi" }[lang] || "/zh-tw";
    return "https://www.northgo.com" + prefix + "/contact#locations";
  }

  function phoneLine(office) {
    let line = "Tel " + office.phone;
    if (office.fax) line += " · Fax " + office.fax;
    return line;
  }

  function wrapLng(lng) {
    let x = lng;
    while (x < -180) x += 360;
    while (x > 180) x -= 360;
    return x;
  }

  function rotateLng(lng) {
    return wrapLng(lng - CENTER_LNG);
  }

  function stageSize() {
    const stage = document.getElementById("map-stage");
    if (!stage) return { width: 1200, height: 700 };
    const rect = stage.getBoundingClientRect();
    return {
      width: Math.max(320, Math.floor(rect.width)),
      height: Math.max(420, Math.floor(rect.height))
    };
  }

  function setupView(width, height) {
    // Fit a slightly cropped world so land fills the stage like the reference.
    const padX = width * 0.02;
    const padY = height * 0.06;
    view = {
      width: width,
      height: height,
      left: -180,
      right: 180,
      top: 78,
      bottom: -62,
      padX: padX,
      padY: padY
    };
  }

  function project(lng, lat) {
    const xLng = rotateLng(lng);
    const xRatio = (xLng - view.left) / (view.right - view.left);
    const yRatio = (view.top - lat) / (view.top - view.bottom);
    const innerW = view.width - view.padX * 2;
    const innerH = view.height - view.padY * 2;
    return [
      view.padX + xRatio * innerW,
      view.padY + yRatio * innerH
    ];
  }

  function ringPath(ring) {
    if (!ring || !ring.length) return "";
    let d = "";
    let prev = null;
    for (let i = 0; i < ring.length; i++) {
      const pt = project(ring[i][0], ring[i][1]);
      // Break path when antimeridian wrap jumps across the map.
      if (prev && Math.abs(pt[0] - prev[0]) > view.width * 0.45) {
        d += "M" + pt[0].toFixed(2) + "," + pt[1].toFixed(2);
      } else if (!d) {
        d += "M" + pt[0].toFixed(2) + "," + pt[1].toFixed(2);
      } else {
        d += "L" + pt[0].toFixed(2) + "," + pt[1].toFixed(2);
      }
      prev = pt;
    }
    return d + "Z";
  }

  function geometryPath(geometry) {
    if (!geometry) return "";
    if (geometry.type === "Polygon") {
      return geometry.coordinates.map(ringPath).join("");
    }
    if (geometry.type === "MultiPolygon") {
      return geometry.coordinates.map(function (poly) {
        return poly.map(ringPath).join("");
      }).join("");
    }
    if (geometry.type === "GeometryCollection") {
      return (geometry.geometries || []).map(geometryPath).join("");
    }
    return "";
  }

  function featurePath(feature) {
    if (!feature) return "";
    if (feature.type === "FeatureCollection") {
      return (feature.features || []).map(featurePath).join("");
    }
    if (feature.type === "Feature") return geometryPath(feature.geometry);
    return geometryPath(feature);
  }

  function labelAnchor(office, width, height, pin) {
    const asiaCount = offices.filter(function (item) { return item.labelSide === "asia"; }).length;
    if (office.labelSide === "america") {
      return {
        x: Math.min(width * 0.88, pin[0] + Math.max(70, width * 0.07)),
        y: Math.max(height * 0.26, pin[1] - height * 0.06)
      };
    }
    const top = height * 0.2;
    const gap = Math.min(46, (height * 0.5) / Math.max(asiaCount - 1, 1));
    return {
      x: width * 0.5,
      y: top + office.stack * gap
    };
  }

  function leaderPath(pin, label, side) {
    const midX = side === "america"
      ? pin[0] + (label.x - pin[0]) * 0.45
      : pin[0] + (label.x - pin[0]) * 0.55;
    const midY = side === "america"
      ? pin[1]
      : pin[1] + (label.y - pin[1]) * 0.15;
    return "M" + pin[0].toFixed(1) + "," + pin[1].toFixed(1) +
      " L" + midX.toFixed(1) + "," + midY.toFixed(1) +
      " L" + label.x.toFixed(1) + "," + label.y.toFixed(1);
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem("ng-sitemap-lang", lang); } catch (e) {}
    try {
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (e) {}
    const locale = locales.find(function (item) { return item.id === lang; });
    document.documentElement.lang = locale ? locale.lang : "zh-Hant";
    document.title = t(ui.title);
    const skip = document.querySelector(".skip");
    if (skip) skip.textContent = t(ui.skip);
    renderChrome();
    renderDetail();
    drawOverlays();
  }

  function selectOffice(id) {
    selected = id;
    renderDetail();
    drawOverlays();
  }

  function renderChrome() {
    const langHtml = locales.map(function (item) {
      return '<button type="button" class="lang-btn" data-lang="' + item.id + '" aria-pressed="' +
        (item.id === lang ? "true" : "false") + '">' + esc(item.label) + "</button>";
    }).join("");

    const top = document.getElementById("topbar");
    if (top) {
      top.innerHTML =
        '<a class="logo" href="https://www.northgo.com/zh-tw/" rel="noopener">North<span>GO</span></a>' +
        '<div class="top-actions">' +
          '<a class="chip" href="sitemap.html?lang=' + lang + '">' + esc(t(ui.sitemap)) + "</a>" +
          '<a class="chip" href="' + esc(contactHref()) + '" rel="noopener" target="_blank">' + esc(t(ui.contact)) + "</a>" +
          langHtml +
        "</div>";
    }

    const copy = document.getElementById("map-copy");
    if (copy) {
      copy.innerHTML =
        "<h1>" + esc(t(ui.h1)) + "</h1>" +
        "<p>" + esc(t(ui.lede)) + "</p>";
    }

    const legend = document.getElementById("legend");
    if (legend) {
      legend.innerHTML =
        '<div class="legend-item"><span class="swatch hq" aria-hidden="true"></span>' + esc(t(ui.hq)) + "</div>" +
        '<div class="legend-item"><span class="swatch office" aria-hidden="true"></span>' + esc(t(ui.office)) + "</div>";
    }

    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = esc(t(ui.source)) + ' · <a href="' + esc(contactHref()) + '" rel="noopener" target="_blank">northgo.com</a>';
    }
  }

  function renderDetail() {
    const panel = document.getElementById("detail");
    if (!panel) return;
    const office = offices.find(function (item) { return item.id === selected; }) || offices[0];
    panel.innerHTML =
      "<div><h2>" + esc(t(office.name)) + '</h2><p class="meta">' + esc(t(office.city)) + "</p></div>" +
      '<div class="detail-actions">' +
        '<a class="btn btn-primary" href="mailto:' + esc(office.email) + '">' + esc(office.email) + "</a>" +
        '<a class="btn btn-ghost" href="' + esc(contactHref()) + '" rel="noopener" target="_blank">' + esc(t(ui.contact)) + "</a>" +
      "</div>" +
      "<dl>" +
        "<div><dt>" + esc(t(ui.address)) + "</dt><dd>" + esc(office.address) + "</dd></div>" +
        "<div><dt>" + esc(t(ui.phone)) + "</dt><dd>" + esc(phoneLine(office)) + "</dd></div>" +
        "<div><dt>" + esc(t(ui.email)) + '</dt><dd><a href="mailto:' + esc(office.email) + '">' +
          esc(office.email) + "</a></dd></div>" +
      "</dl>";
  }

  function drawLand(svg) {
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

  function drawOverlays() {
    const svg = document.getElementById("world-map");
    const labels = document.getElementById("labels");
    if (!svg || !labels) return;

    const width = view.width;
    const height = view.height;

    let overlay = svg.querySelector(".overlay-layer");
    if (!overlay) {
      overlay = document.createElementNS("http://www.w3.org/2000/svg", "g");
      overlay.setAttribute("class", "overlay-layer");
      svg.appendChild(overlay);
    }
    overlay.innerHTML = "";
    labels.innerHTML = "";

    offices.forEach(function (office) {
      const pin = project(office.lng, office.lat);
      const label = labelAnchor(office, width, height, pin);
      const active = office.id === selected;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      line.setAttribute("class", "leader");
      line.setAttribute("d", leaderPath(pin, label, office.labelSide));
      overlay.appendChild(line);

      if (office.pulse) {
        const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        halo.setAttribute("class", "halo");
        halo.setAttribute("cx", pin[0]);
        halo.setAttribute("cy", pin[1]);
        halo.setAttribute("r", 14);
        overlay.appendChild(halo);

        const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pulse.setAttribute("class", "halo-pulse");
        pulse.setAttribute("cx", pin[0]);
        pulse.setAttribute("cy", pin[1]);
        pulse.setAttribute("r", 8);
        overlay.appendChild(pulse);
      }

      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "dot " + (office.hq ? "is-hq" : "is-office") + (active ? " is-active" : ""));
      dot.setAttribute("cx", pin[0]);
      dot.setAttribute("cy", pin[1]);
      dot.setAttribute("r", active ? 6.5 : 5);
      dot.setAttribute("data-office", office.id);
      dot.setAttribute("role", "button");
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("aria-label", t(office.name));
      overlay.appendChild(dot);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "label-btn" +
        (office.hq ? " is-hq" : "") +
        (active ? " is-active" : "");
      btn.setAttribute("data-office", office.id);
      btn.style.left = label.x + "px";
      btn.style.top = label.y + "px";
      btn.textContent = t(office.short);
      labels.appendChild(btn);
    });
  }

  function renderMap() {
    const svg = document.getElementById("world-map");
    if (!svg) return;
    const size = stageSize();
    setupView(size.width, size.height);
    svg.setAttribute("viewBox", "0 0 " + size.width + " " + size.height);
    svg.setAttribute("width", size.width);
    svg.setAttribute("height", size.height);
    drawLand(svg);
    drawOverlays();
  }

  function showMapError() {
    const stage = document.getElementById("map-stage");
    if (!stage || stage.querySelector(".map-error")) return;
    const box = document.createElement("div");
    box.className = "map-error";
    box.textContent = t(ui.mapFail);
    stage.appendChild(box);
  }

  function clearMapError() {
    const box = document.querySelector(".map-error");
    if (box) box.remove();
  }

  function loadLand() {
    try {
      const topology = window.NG_LAND_TOPOLOGY;
      if (!topology || !topology.objects || !topology.objects.land) {
        throw new Error("land topology missing");
      }
      if (!window.topojson || !topojson.feature) {
        throw new Error("topojson missing");
      }
      landFeature = topojson.feature(topology, topology.objects.land);
      clearMapError();
      renderMap();
    } catch (e) {
      showMapError();
    }
  }

  function bind() {
    document.getElementById("app").addEventListener("click", function (event) {
      const langBtn = event.target.closest("[data-lang]");
      if (langBtn) {
        setLang(langBtn.getAttribute("data-lang"));
        return;
      }
      const officeEl = event.target.closest("[data-office]");
      if (officeEl) {
        selectOffice(officeEl.getAttribute("data-office"));
      }
    });

    document.getElementById("app").addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      const officeEl = event.target.closest("[data-office]");
      if (!officeEl) return;
      event.preventDefault();
      selectOffice(officeEl.getAttribute("data-office"));
    });

    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderMap, 120);
    });
  }

  function mount() {
    lang = readLang();
    document.documentElement.lang = (locales.find(function (item) { return item.id === lang; }) || locales[1]).lang;
    document.title = t(ui.title);
    const skip = document.querySelector(".skip");
    if (skip) skip.textContent = t(ui.skip);

    document.getElementById("app").innerHTML =
      '<div class="page">' +
        '<header class="topbar" id="topbar"></header>' +
        '<main class="map-stage" id="map-stage">' +
          '<div class="map-copy" id="map-copy"></div>' +
          '<svg id="world-map" role="img" aria-label="Northgo global offices map"></svg>' +
          '<div id="labels"></div>' +
          '<div class="legend" id="legend"></div>' +
        "</main>" +
        '<section class="detail-dock"><div class="detail-card" id="detail"></div></section>' +
        '<p class="footer" id="footer"></p>' +
      "</div>";

    renderChrome();
    renderDetail();
    bind();
    loadLand();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
