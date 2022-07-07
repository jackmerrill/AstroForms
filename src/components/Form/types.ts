export type InputType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "date";

export type Input = string | number | boolean | Array<any> | object | Date;

export interface FormSchema {
  type: InputType;
  title: string;
  properties: {
    [key: string]: FormSchema;
  };
  items?: FormSchema;
}

export interface Components {
  String: any;
  Boolean: any;
  Array: any;
}
