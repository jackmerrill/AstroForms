# Tailwind Theme

Prerequisites:

- [Tailwind CSS](https://tailwindcss.com) 3.x.x or greater
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin

Usage:

```astro
---
import tailwind from "astro-forms/themes/tailwind";
import Form from "../components/Form/Form.astro";
---

<Form schema={schema} theme={tailwind} action="/" method="post" />
```
