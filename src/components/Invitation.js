import styles from "./Invitation.module.css";
import Countdown from "./Countdown";
import { Fragment } from "react";

let deadline = "October, 25, 2023";

const Invitation = (props) => {
  return (
    <Fragment>
      <section className={styles.invitation}>
        <p className={styles.inv}>Вы приглашены на свадьбу</p>
        <div className={styles.names}>
          <span className={styles.ilya}>Илья</span>
          <span className={styles.mary}>Мария</span>
        </div>
        <div className={styles.date}>
          <p className={styles.weekday}>Среда</p>
          <p className={`${styles.detailed} ${styles.borderGradient}`}>
            <span>25</span>
            <span>Oктября</span>
            <span>2023</span>
          </p>
          <p className={styles.time}>18:40</p>
        </div>
        <Countdown deadline={deadline} />
      </section>
    </Fragment>
  );
};

export default Invitation;
