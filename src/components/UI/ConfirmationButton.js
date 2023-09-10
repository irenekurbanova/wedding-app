import styles from "./ConfirmationButton.module.css";

const ConfirmationButtonButton = (props) => {
  return (
    <div className={styles.init}>
      <div className={styles.wrapper}>
        <button
          type={props.type}
          className={styles.button}
          onClick={props.onClick}
        >
          <span>{props.children}</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationButtonButton;
