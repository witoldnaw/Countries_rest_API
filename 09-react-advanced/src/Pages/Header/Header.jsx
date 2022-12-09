
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
        <h1>Where in the world?</h1>
        <button className={styles.btnDarkMode}>Dark Mode</button>
        </div>
    )
}