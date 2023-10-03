import { lazy } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import ConfirmationButton from "./UI/ConfirmationButton";
import styles from "./Programm.module.css";

const MapComponent = lazy(() => import("./Map"));

const Programm = (props) => {
  return (
    <section className={styles.programm}>
      <h3>Свадебное расписание</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>18:40</th>
            <td>
              <span>Торжественная роспись</span>
              <span className={styles.address}>
                Дворец бракосочетания №1, Английская наб., 28
              </span>
            </td>
          </tr>
          <tr>
            <th>20:00</th>
            <td>
              <span>Ужин</span>
              <span className={styles.address}>Большая Конюшенная ул. 31</span>
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
          buttonStyle="default"
        />
        <ConfirmationButton type="button" onClick={props.onShowForm}>
          Подтвердить присутствие
        </ConfirmationButton>
      </div>
      <MapComponent />
    </section>
  );
};

export default Programm;
