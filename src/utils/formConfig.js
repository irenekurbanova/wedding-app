import InputField from "../components/Input";
import { requiredRule, minLengthRule, maxLengthRule } from "./inputValidation";

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} autoComplete - property for autocomplition
 * @param {string} defaultValue - default value for the input
 */

function createFormFieldConfig(
  label,
  name,
  type,
  autoComplete,
  defaultValue = ""
) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <InputField
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
          autoComplete={autoComplete}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
    validationRules: [],
  };
}

// object representation of registration form
export const registrationForm = {
  firstName: {
    ...createFormFieldConfig("Имя", "firstName", "text", "given-name"),
    validationRules: [
      requiredRule("Имя"),
      minLengthRule("Имя", 2),
      maxLengthRule("Имя", 25),
    ],
  },
  lastName: {
    ...createFormFieldConfig("Фамилия", "lastName", "text", "family-name"),
    validationRules: [
      requiredRule("Фамилия"),
      minLengthRule("Фамилия", 3),
      maxLengthRule("Фамилия", 25),
    ],
  },
};
