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

export type Input = string | number | boolean | Array<any> | object | Date;

export interface FormSchema {
  type: InputType;
  title: string;
  subtitle?: string;
  properties: {
    [key: string]: FormSchema;
  };
  items?: FormSchema;
}

export interface Theme {
  String: any;
  Boolean: any;
  Array: any;
  Generic: any;
  Date: any;
  Number: any;
  Submit: any;
}
