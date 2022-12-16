import { useContext } from "react";
import Switch from "react-js-switch";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const Btn = ({ theme, toggleTheme }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return <Switch onChange={handleTheme}></Switch>;
};
