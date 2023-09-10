import Modal from "./UI/Modal";
import ConfirmationButton from "./UI/ConfirmationButton";
import ConfirmMessage from "./UI/ConfirmMessage";
import {
  REACT_APP_TELEGRAM_BOT_TOKEN,
  REACT_APP_CHAT_ID,
} from "./config/config";
import { useState, Fragment } from "react";
import styles from "./Form.module.css";

const url = `https://api.telegram.org/${REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`;

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
    console.log(data);
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
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              onChange={nameInputChangeHandler}
              value={enteredName}
            />
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              id="surname"
              onChange={surnameInputChangeHandler}
              value={enteredSurname}
            />
            <ConfirmationButton type="submit">Отправить</ConfirmationButton>
          </Fragment>
        )}
      </form>
    </Modal>
  );
};

export default Form;
