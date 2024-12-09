/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
    	  title: ["Space Grotesk", "jf-openhuninn"],
	      mono: ["Jetbrains Mono", "jf-openhuninn"],
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          "jf-openhuninn",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
