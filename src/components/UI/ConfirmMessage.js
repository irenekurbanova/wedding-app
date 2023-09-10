import styles from "./ConfirmMessage.module.css";

const ConfirmMessage = () => {
  return (
    <div className={styles.message}>
      <p>Спасибо!</p>
      <p>Ваши данные успешно отправлены</p>
    </div>
  );
};

export default ConfirmMessage;
