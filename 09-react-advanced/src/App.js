import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryList } from "./Pages/CountryList/CountryList";
import { Header } from "./Pages/Header/Header";
import { CountryDetails } from "./Pages/CountryDetails/CountryDetails";

import { useState } from "react";
import Switch from "react-js-switch";
import { useContext } from "react";
import { ThemeContext } from "./Pages/ThemeContext/ThemeContext";
import { Btn } from "./Pages/ThemeSwitch/ThemeSwitch"


function App() {

const {darkMode} = useContext(ThemeContext)
console.log(darkMode)
  return (

      <div className={darkMode ? "lightMode" : "darkMode"}>
        <div className={darkMode ? "headerLight" : "headerDark"}>
        <Header/>
        </div>
        <Router>
          <Routes>
            <Route exact path="/" element={<CountryList />} />
            <Route path="/:name" element={<CountryDetails />}></Route>
          </Routes>
        </Router>

        </div>


      
  );
}
export default App;
