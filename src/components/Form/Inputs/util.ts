import { InputType } from "../types";
import StringInput from "./StringInput.astro";
import BooleanInput from "./BooleanInput.astro";
import ArrayInput from "./ArrayInput.astro";
import GenericInput from "./GenericInput.astro";
import DateInput from "./DateInput.astro";
import NumberInput from "./NumberInput.astro";

export function GetInput(type: InputType) {
  switch (type) {
    case "string":
      return StringInput;
    case "number":
      return NumberInput;
    case "date":
      return DateInput;
    case "boolean":
      return BooleanInput;
    case "array":
      return ArrayInput;
    case "object":
      return GenericInput;
    default:
      return StringInput;
  }
}
