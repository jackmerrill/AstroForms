export default JSON.parse(`
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
			"scaryStuff": {
				"type": "object",
				"title": "Scary Stuff",
				"properties": {
					"isScary": {
						"type": "boolean",
						"title": "Is Scary?",
						"subtitle": "Are you really scary?"
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
`);
