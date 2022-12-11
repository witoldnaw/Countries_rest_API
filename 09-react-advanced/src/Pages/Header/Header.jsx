import styles from "./Header.module.css"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext/ThemeContext"
import App from "../../App"
import Switch from "react-js-switch"


export const Header = () => {
    

    return (
        <div className={styles.headerWrapper}>
        <h1>Where in the world?</h1>
       
        <button className={styles.btnDarkMode}>Light Mode</button>
        </div>
    )
}