import styles from "./Input.module.css";

function InputField(props) {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
    autoComplete,
    touched,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onClick={handleChange}
        onChange={handleChange}
        autoComplete={autoComplete}
        touched={touched}
      ></input>
      <div className={styles.error}>
        {errorMessage && !isValid && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default InputField;
