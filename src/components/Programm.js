import styles from "./Programm.module.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import AddressMap from "./Map";
import ConfirmationButton from "./UI/ConfirmationButton";

const Programm = (props) => {
  return (
    <section className={styles.programm}>
      <table className={styles.table}>
        <caption>Свадебное расписание</caption>
        <tbody>
          <tr>
            <th>18:40</th>
            <td>
              <span>Торжественная роспись ЗАГС</span>
              <span className={styles.address}>
                Адрес: Дворец бракосочетания №1, Английская наб., 28
              </span>
            </td>
          </tr>
          <tr>
            <th>20:00</th>
            <td>
              <span>Ужин</span>
              <span className={styles.address}>
                Адрес: ул. Гороховая 40, Греми
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.action}>
        <AddToCalendarButton
          name="Свадьба Илья и Мария"
          label="Добавить в календарь"
          options={["Apple", "Google"]}
          location="Дворец бракосочетания №1, Английская наб., 28, Санкт-Петербург, Россия, 190000"
          organizer="Irene Kurbanova|kirina2504@gmail.com"
          startDate="2023-10-25"
          endDate="2023-10-25"
          startTime="18:40"
          endTime="23:30"
          timeZone="currentBrowser"
          buttonStyle="text"
        />
        <ConfirmationButton type="button" onClick={props.onShowForm}>
          Подтвердить присутствие
        </ConfirmationButton>
      </div>
      <AddressMap />
    </section>
  );
};

export default Programm;
