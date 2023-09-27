/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */

function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export function requiredRule(inputName) {
  return createValidationRule(
    "не может быть пустым",
    `${inputName} не может быть пустым`,
    (inputValue) => inputValue.length !== 0
  );
}

export function lettersRule(inputName) {
  return createValidationRule(
    "не должно содержать цифры или пробелы",
    `${inputName} не должно содержать цифры или пробелы`,
    (inputValue) =>
      inputValue.length !== 0 &&
      inputValue.match(/[a-zA-Z,а-яА-Я+]/) &&
      !inputValue.match(/[\d\s]/)
  );
}

export function minLengthRule(inputName, minCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} должно содержать минимум ${minCharacters} букв`,
    (inputValue) => inputValue.length >= minCharacters
  );
}

export function maxLengthRule(inputName, maxCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} должно содержать максимум ${maxCharacters} букв`,
    (inputValue) => inputValue.length <= maxCharacters
  );
}
