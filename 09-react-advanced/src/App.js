import styles from './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CountryList} from './component/CountryList';
import {Header} from "./component/Header"
import {CountryDetails} from "./component/CountryDetails"


function App() {
  return (
    <>
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