import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мой Сайт-Визитка</h1>
        <nav className={styles.nav}>
          <a href="#about" className={styles.link}>
            <PersonIcon
              sx={{ fontSize: 16, verticalAlign: "middle", marginRight: 1 }}
            />
            Обо мне
          </a>
          <a href="#skills" className={styles.link}>
            <CodeIcon
              sx={{ fontSize: 16, verticalAlign: "middle", marginRight: 1 }}
            />
            Навыки
          </a>
          <a href="#contact" className={styles.link}>
            <EmailIcon
              sx={{ fontSize: 16, verticalAlign: "middle", marginRight: 1 }}
            />
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};
