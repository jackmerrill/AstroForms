/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "./node_modules/astro-forms/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "../astro-forms/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
