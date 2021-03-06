import { InputType } from "../../types";
import StringInput from "./StringInput.astro";
import BooleanInput from "./BooleanInput.astro";
import ArrayInput from "./ArrayInput.astro";
import GenericInput from "./GenericInput.astro";
import DateInput from "./DateInput.astro";
import NumberInput from "./NumberInput.astro";
import Submit from "./Submit.astro";

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
    case "submit":
      return Submit;
    default:
      return StringInput;
  }
}

export default {
  String: StringInput,
  Boolean: BooleanInput,
  Array: ArrayInput,
  Generic: GenericInput,
  Date: DateInput,
  Number: NumberInput,
  Submit: Submit,
};
