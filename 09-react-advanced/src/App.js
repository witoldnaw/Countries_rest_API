import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryList } from "./Pages/CountryList/CountryList";
import { Header } from "./Pages/Header/Header";
import { CountryDetails } from "./Pages/CountryDetails/CountryDetails";
import { useContext } from "react";
import { ThemeContext } from "./Pages/ThemeContext/ThemeContext";


function App() {
const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "darkMode" : "lightMode"}>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<CountryList />} />
          <Route path="/:name" element={<CountryDetails />}></Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}
export default App;
