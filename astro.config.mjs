import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  redirects: {
    '/en': '/en/20241208v',
    '/zh-tw': '/zh-tw/20241208v',
  },
  i18n: {
    defaultLocale: "en",
    locales: ["zh-tw", "pt-br", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  }
});
