import styles from "./Header.module.css";
import Switch from "react-js-switch";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Btn } from "../ThemeSwitch/ThemeSwitch";




export const Header = () => {



  return (
    <div className={styles.headerWrapper}>
    <h1>Where in the world?</h1>
    <div className={styles.switch}>
    <Btn/>
    </div>
    </div>
  );
};
