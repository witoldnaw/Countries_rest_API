import { useState, useEffect, useContext } from "react";
import styles from "./CountryList.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import PacmanLoader from "react-spinners/PacmanLoader";

const Url =
  "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions";



export function CountryList() {
  const [countries, setCountry] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((json) => {
        setCountry(json);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PacmanLoader color={"#36d7b7"} loading={loading} size={100}/>
      ) : (
        <div className={styles.list}>
          {countries.map((country) => {
            const { name, capital, population, flag } = country;
            return (
              <Link to={`/${name}`}>
                <div
                  className={
                    darkMode ? "darkCountryWrapper" : "lightCountryWrapper"
                  }
                >
                  <img src={flag} className={styles.flag} alt="flag" />
                  <h2>{name}</h2>
                  <p>Stolica: {capital}</p>
                  <p>Populacja: {population}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
