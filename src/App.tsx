import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";
import "./global.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff88",
    },
    secondary: {
      main: "#00b4d8",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },
    error: {
      main: "#ff0055",
    },
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#00ff88",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#00ff88",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#00ff88",
    },
    body1: {
      fontSize: "1rem",
      color: "#ccd6f6",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Profile
            name="John Doe"
            bio="Frontend Developer | React Enthusiast"
            email="john.doe@example.com"
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
