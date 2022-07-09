🚧 **Under Development** 🚧

This component is under construction! It does work, however, bugs may be present.

Pull requests are appreciated!

# Astro Forms

A Dynamic form component for Astro.

Uses a JSON schema to generate a form.

## Themes

There are currently two themes available:

- `default`
- `tailwind` [(View README)](/packages/astro-forms/themes/tailwind/README.md)

## Usage

### Installation

```bash
yarn add astro-forms
```

or

```bash
npm install astro-forms
```

### Setup

```astro
---
import { Form } from "astro-forms";
const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    email: {
      type: "string",
      title: "Email",
    },
    password: {
      type: "string",
      title: "Password",
    },
    submit: {
      type: "submit",
      title: "Submit",
    },
  },
}; // Or whatever you want it to be, must be an object.
---

<Form schema={schema} action="/post" method="post" />
```

## Schema

The JSON schema for this form component has a single type that can repeat itself.

```ts
export type InputType =
  | "string"
  | "email"
  | "password"
  | "search"
  | "url"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "date"
  | "submit";

export interface FormSchema {
  type: InputType;
  title: string;
  subtitle?: string;
  properties: {
    [key: string]: FormSchema;
  };
  items?: FormSchema;
}
```

These types may be updated and will be marked as a breaking change if done so.

Schema example:

```json
{
  "type": "object",
  "title": "Form",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name",
      "subtitle": "Alphanumeric characters only!!!!"
    },
    "email": {
      "type": "string",
      "title": "Email",
      "subtitle": "Don't worry, we'll spam you every day!"
    },
    "password": {
      "type": "password",
      "title": "Password",
      "subtitle": "We didn't invest much into security, choose wisely."
    },
    "personalInfo": {
      "type": "object",
      "title": "Personal Info",
      "properties": {
        "age": {
          "type": "number",
          "title": "Age",
          "subtitle": "How old are you?"
        },
        "birthday": {
          "type": "date",
          "title": "Birthday",
          "subtitle": "So we can send you a cake, duh."
        },
        "misc": {
          "type": "object",
          "title": "Misc. Stuff",
          "properties": {
            "isScary": {
              "type": "boolean",
              "title": "Sus?",
              "subtitle": "Are you known by the FBI, CIA, or any governmental body?"
            }
          }
        },
        "acceptsTerms": {
          "type": "boolean",
          "title": "Accept Terms of Service",
          "subtitle": "We're not responsible for your actions."
        }
      }
    },
    "submit": {
      "type": "submit",
      "title": "Submit"
    }
  }
}
```

Input names are tokenized and have a `.` delimiter, so they can be used with HTML forms with ease.
