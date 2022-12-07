import { useState, useEffect } from "react";
import styles from "./CountryList.module.css"
import { Link } from "react-router-dom";
import {CountryDetails} from "./CountryDetails"



const Url = "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions";

export function CountryList() {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        setCountry(json);
      });
  }, []);

  return (
    <>
      <div className={styles.list}>
        {countries.map((country) => {
          const {name, capital, population, flag
          } = country
            return (
              <div>
                <h2>{name}</h2>
                <p>Stolica: {capital}</p>
                <p>Populacja: {population}</p>
                <img src={flag} className={styles.flag} alt="flag" />
                
              </div>
              
            )
})}
        
      </div>
    </>
  );
}

