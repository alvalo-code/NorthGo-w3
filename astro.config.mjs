import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alvalo-code.github.io",
  base: "/NorthGo-w3",
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/": "/sitemap",
  },
});
