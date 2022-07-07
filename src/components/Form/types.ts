export type InputType = "string" | "number" | "boolean" | "array" | "object";

export type Input = string | number | boolean | Array<any> | object;

export interface FormSchema {
  type: InputType;
  title: string;
  properties: {
    [key: string]: FormSchema;
  };
  items?: FormSchema;
}
