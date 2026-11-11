import { defineConfig } from "astro/config";

const base = "/NorthGo-w3";

export default defineConfig({
  site: "https://alvalo-code.github.io",
  base,
  output: "static",
  trailingSlash: "never",
  // Astro does not auto-prefix `base` onto redirect targets.
  redirects: {
    "/": `${base}/sitemap`,
  },
});
