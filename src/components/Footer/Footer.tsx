import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2025 Мой Сайт-Визитка. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
