import Modal from "./UI/Modal";
import ConfirmationButton from "./UI/ConfirmationButton";
import ConfirmMessage from "./UI/ConfirmMessage";
import {
  REACT_APP_TELEGRAM_BOT_TOKEN,
  REACT_APP_CHAT_ID,
} from "./config/config";
import { useState, Fragment } from "react";
import styles from "./Form.module.css";

const url = `https://api.telegram.org/bot${REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`;

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredSurnameIsValid, setEnteredSurnameIsValid] = useState(false);

  const [formSubmited, setFormSubmited] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const surnameInputChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const sendDataToTelegram = (data) => {
    fetch(`${url}?chat_id=${REACT_APP_CHAT_ID}&text=${data}`, {
      method: "POST",
    }).then(
      (success) => {
        console.log("Message sent");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" && enteredSurname.trim() === "") {
      return;
    }

    sendDataToTelegram(`${enteredName} ${enteredSurname}`);

    setEnteredName("");
    setEnteredSurname("");
    setFormSubmited(true);
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <button className={styles["close-button"]} onClick={props.onClose}>
          <span>&times;</span>
        </button>
        {formSubmited && <ConfirmMessage />}
        {!formSubmited && (
          <Fragment>
            <h2>Заполните форму</h2>
            <label htmlFor="fname">Имя</label>
            <input
              type="text"
              name="fname"
              onChange={nameInputChangeHandler}
              value={enteredName}
              autoComplete="given-name"
            />
            <label htmlFor="lname">Фамилия</label>
            <input
              type="text"
              name="lname"
              onChange={surnameInputChangeHandler}
              value={enteredSurname}
              autoComplete="family-name"
            />
            <ConfirmationButton type="submit">Отправить</ConfirmationButton>
          </Fragment>
        )}
      </form>
    </Modal>
  );
};

export default Form;
