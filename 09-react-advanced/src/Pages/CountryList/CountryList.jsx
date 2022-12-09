import { useState, useEffect } from "react";
import styles from "./CountryList.module.css"
import { Link } from "react-router-dom";


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
              <Link className={styles.link} to={`/${name}`}>
              <div className={styles.countryWrapper}>
                <img src={flag} className={styles.flag} alt="flag" />
                <h2>{name}</h2>
                <p>Stolica: {capital}</p>
                <p>Populacja: {population}</p>
                
                
              </div>
              </Link>
            )
})}
        
      </div>
    </>
  );
}

