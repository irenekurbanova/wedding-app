import useForm from "../hooks/useForm";
import { registrationForm } from "../utils/formConfig";
import Modal from "./UI/Modal";
import ConfirmationButton from "./UI/ConfirmationButton";
import ConfirmMessage from "./UI/ConfirmMessage";

import styles from "./Form.module.css";

export default function RegistrationForm(props) {
  const { renderFormInputs, isFormValid, onSubmitForm, formSubmited } =
    useForm(registrationForm);

  return (
    <Modal onClose={props.onClose}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <button className={styles["close-button"]} onClick={props.onClose}>
          <span>&times;</span>
        </button>
        {formSubmited && <ConfirmMessage />}
        {!formSubmited && (
          <>
            <h2>Заполните форму</h2>
            {renderFormInputs()}
            <ConfirmationButton type="submit" disabled={!isFormValid()}>
              Отправить
            </ConfirmationButton>
          </>
        )}
      </form>
    </Modal>
  );
}
