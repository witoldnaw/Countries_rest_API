import { Btn } from "../ThemeSwitch/ThemeSwitch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./Header.module.css"

export function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? styles.headerDark : styles.headerLight }>
      <h1>Where in the world?</h1>
      <div className={styles.switch}>
        <Btn />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}
