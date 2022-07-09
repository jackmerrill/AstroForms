/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
