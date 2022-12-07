// import styles from './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Router, Route, Switchx } from "react-router";
import {CountryList} from './component/CountryList';
import {Header} from "./component/Header"
// import {CountryDetails} from "./component/CountryDetails"


function App() {
  return (
    <Router>
    <>
      <Header />
      <Route exact path="/">
        <CountryList />
      </Route>
    </>
  </Router>
  )
}

export default App;


/* <Router>
  <Route path="/" component={CountryList}/>
  <Route path="country/:name" component={CountryDetails}/>
  </Router> */