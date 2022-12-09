import styles from './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CountryList} from './Pages/CountryList/CountryList';
import {Header} from "./Pages/Header/Header"
import {CountryDetails} from "./Pages/CountryDetails/CountryDetails"


function App() {
  return (
    <>
    <Header/>
    <Router>
        <Routes>
            <Route exact path="/" element={<CountryList />}/>
            <Route path="/:name" element={<CountryDetails/>}></Route>
        </Routes>
    </Router>
      </>
  
  )
}
export default App;


/* <Router>
  <Route path="/" component={CountryList}/>
  <Route path="country/:name" component={CountryDetails}/>
  </Router> */