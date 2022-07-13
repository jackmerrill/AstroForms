# Tailwind Theme

Prerequisites:

- [Tailwind CSS](https://tailwindcss.com) v3 or greater
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin

Usage:

```astro
---
import tailwind from "astro-forms/themes/tailwind";
import Form from "../components/Form/Form.astro";
---

<Form schema={schema} theme={tailwind} action="/" method="post" />
```

## Important

Make sure your Tailwind config file has the following:

```js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "./node_modules/astro-forms/themes/tailwind/*.astro",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

You can either add the `@tailwindcss/forms` plugin to your Tailwind config file, or you may import the Tailwind config from the package.

```js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "./node_modules/astro-forms/themes/tailwind/*.astro",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

// Or

module.exports = {
  presets: [require("astro-forms/themes/tailwind/tailwind.config.cjs")],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "./node_modules/astro-forms/themes/tailwind/*.astro",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
