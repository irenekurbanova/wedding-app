import { useState, useEffect } from "react";
import styles from "./Countdown.module.css";

const deadline = "October, 25, 2023";

const Countdown = () => {
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setWeeks(0);
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setWeeks(Math.floor(time / (1000 * 60 * 60 * 24 * 7)));
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)) % 7);
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  });

  return (
    <div className={styles.countdown}>
      <div className={styles.clock}>
        <span>{leading0(weeks)}</span>
        <p>Недель</p>
      </div>
      <div className={styles.clock}>
        <span>{leading0(days)}</span>
        <p>Дней</p>
      </div>
      <div className={styles.clock}>
        <span>{leading0(hours)}</span>
        <p>Часов</p>
      </div>
      <div className={styles.clock}>
        <span>{leading0(minutes)}</span>
        <p>Минут</p>
      </div>
      <div className={styles.clock}>
        <span>{leading0(seconds)} </span>
        <p>Секунд</p>
      </div>
    </div>
  );
};

export default Countdown;
