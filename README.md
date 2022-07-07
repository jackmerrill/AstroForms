# Astro Forms

🚧 **This is a work in progress.**

Pure Astro form component.

Uses a JSON schema to generate a form.

Schema example:

```json
{
  "type": "object",
  "title": "Form",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    },
    "email": {
      "type": "string",
      "title": "Email"
    },
    "password": {
      "type": "string",
      "title": "Password"
    },
    "personalInfo": {
      "type": "object",
      "title": "Personal Info",
      "properties": {
        "age": {
          "type": "string",
          "title": "Age"
        }
      }
    }
  }
}
```

Input names are tokenized and have a `.` delimiter, so they can be used with HTML forms with ease.
