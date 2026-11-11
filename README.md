# NorthGo-w3

Astro 靜態專案：Northgo 官網 sitemap 分析工具與全球據點地圖。資料自既有 IIFE 頁面遷移而來，作為後續官網重建基礎。

## 開發

```bash
npm install
npm run dev
```

本機預設：http://localhost:4321

- `/` → 導向 `/sitemap`
- `/sitemap` 詳細地圖
- `/sitemap/tree` 樹狀地圖
- `/locations` 全球據點地圖

語系以 `?lang=en|zh|ja|vi` 與 `localStorage`（`ng-sitemap-lang`）共用。

## 建置

```bash
npm run build
npm run preview
```

靜態輸出在 `dist/`。

## 目錄

- `src/data/` — 語系、sitemap、據點資料（單一來源）
- `src/i18n/` — 語系偵測與翻譯 helper
- `src/components/sitemapApp.ts` — sitemap 客戶端渲染
- `src/components/LocationsMap.ts` — 據點地圖（topojson-client + `/land-110m.json`）
- `legacy/` — 遷移前的靜態 HTML／IIFE 備份
