import { defineConfig } from "astro/config";

const base = "/NorthGo-w3";

export default defineConfig({
  site: "https://alvalo-code.github.io",
  base,
  output: "static",
  trailingSlash: "always",
  // Astro does not auto-prefix `base` onto redirect targets.
  // GitHub Pages serves each route from a folder index, so the slash is required.
  redirects: {
    "/": `${base}/sitemap/`,
  },
});
