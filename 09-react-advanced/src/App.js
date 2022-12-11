import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CountryList} from './Pages/CountryList/CountryList';
import {Header} from "./Pages/Header/Header"
import {CountryDetails} from "./Pages/CountryDetails/CountryDetails"
import {ThemeContext} from "./Pages/ThemeContext/ThemeContext"

import { useState } from 'react';
import Switch from 'react-js-switch';



function App() {

  const [theme, setTheme] = useState("lightMode")
  const toggleTheme = () => {
    setTheme((currently) => (currently === "lightMode" ? "darkMode" : "lightMode"))
  }

  return (

<ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
    <Header/>
      
    <Switch onChange={toggleTheme} checked={theme === "darkMode"}/>
    <Router>
        <Routes>
            <Route exact path="/" element={<CountryList />}/>
            <Route path="/:name" element={<CountryDetails/>}></Route>
        </Routes>
    </Router>
    </div>
    </ThemeContext.Provider>

  )
}
export default App;

