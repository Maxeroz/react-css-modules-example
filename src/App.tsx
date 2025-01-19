import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

import "./global.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
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
