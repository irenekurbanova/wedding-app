import { useState, useCallback } from "react";

const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`;

function useForm(formObj) {
  const [form, setForm] = useState(formObj);
  const [formSubmited, setFormSubmited] = useState(false);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput, touched } =
        inputObj;
      return renderInput(
        onInputChange,
        value,
        valid,
        errorMessage,
        label,
        touched
      );
    });
  }

  const isInputFieldValid = useCallback((inputField) => {
    for (const rule of inputField.validationRules) {
      if (!rule.validate(inputField.value)) {
        inputField.errorMessage = rule.message;
        return false;
      }
    }

    return true;
  }, []);

  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      // copy input object whose value was changed
      const inputObj = { ...form[name] };
      // update value
      inputObj.value = value;

      // update input field's validity
      const isValidInput = isInputFieldValid(inputObj);
      // if input is valid and it was previously set to invalid
      // set its valid status to true
      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        // if input is not valid and it was previously valid
        // set its valid status to false
        inputObj.valid = false;
      }

      // mark input field as touched
      inputObj.touched = true;

      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  /**
   * returns boolean value indicating whether overall form is valid
   *
   * @param {object} formObj - object representation of a form
   */
  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  const onSubmitForm = useCallback(
    async (event) => {
      event.preventDefault();
      let textMessage = "";
      const arr = Object.values(form);

      for (let i = 0; i < arr.length; i++) {
        textMessage += arr[i].value + " ";
      }

      try {
        const response = await fetch(
          `${url}?chat_id=${process.env.REACT_APP_CHAT_ID}&text=${textMessage}`,
          {
            method: "POST",
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        setFormSubmited(true);
      } catch (err) {
        console.log(err);
      }
    },
    [form]
  );

  return { renderFormInputs, isFormValid, onSubmitForm, formSubmited };
}

export default useForm;
