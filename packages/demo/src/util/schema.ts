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
	"randomArray": {
		"type": "array",
		"title": "Random Array",
		"subtitle": "This is a random array, don't worry about it.",
		"items": {
			"type": "string"
		}
	},
	"submit": {
		"type": "submit",
		"title": "Submit"
	}
  }
}
`);

export const sampleData = {
  name: "John Doe",
  email: "johndoe@email.com",
  password: "123456",
  personalInfo: {
    age: 30,
    birthday: "2020-01-01",
    scaryStuff: {
      isScary: true,
    },
    acceptsTerms: true,
  },
  randomArray: ["a", "b", "c", "d", "e"],
  arrayOfObjects: [
    {
      key: "a",
      value: "A",
    },
    {
      key: "b",
      value: "B",
    },
  ],
};
