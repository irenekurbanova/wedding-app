import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        Copyright © 2023{" "}
        <a href="https://github.com/irenekurbanova">Irene Kurbanova</a>
      </small>
      <small>
        <a href="https://www.freepik.com/free-psd/beautiful-vintage-watercolor-floral-wedding-invitation-card_63061686.htm#&position=37&from_view=author">
          Image by mariadetarosarinda
        </a>{" "}
        on Freepik
      </small>
    </footer>
  );
};

export default Footer;
