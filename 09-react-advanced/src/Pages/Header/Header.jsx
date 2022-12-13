import styles from "./Header.module.css";
import { Btn } from "../ThemeSwitch/ThemeSwitch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "headerDark" : "headerLight"}>
      <h1>Where in the world?</h1>
      <div className={styles.switch}>
        <Btn />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}
