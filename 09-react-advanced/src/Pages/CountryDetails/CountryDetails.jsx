import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./CountryDetails.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

export const CountryDetails = () => {
  let [countries, setCountry] = useState([]);
  let { name } = useParams();
  const [loading, setLoading] = useState(false);
  console.log(countries);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${name}?fields=name,capital,region,subregion,borders,flag&fullText=true`
    )
      .then((res) => res.json())
      .then((json) => {
        setCountry(json);
      });
  }, [name]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Link to="/">
        <button className={styles.btn}>BACK</button>
      </Link>
      <div className={styles.loading}>
        {loading ? (
          <PacmanLoader color={"#36d7b7"} loading={loading} size={80} />
        ) : (
          <div>
            {countries.map((e) => {
              let { name, capital, region, flag, subregion, borders } = e;

              return (
                <>
                  <div className={styles.detailsWrapper}>
                    <img src={flag} className={styles.flag} alt="flag" />
                    <div>
                      <h1>{name}</h1>
                      <p>
                        <b>Stolica:</b> {capital}
                      </p>
                      <p>
                        <b>Region:</b> {region}
                      </p>
                      <p>
                        <b>Subregion:</b> {subregion}
                      </p>

                      {borders && (
                        <>
                          <p>
                            <b>Borders:</b>{" "}
                          </p>
                          <ul>
                            {borders.map((border, index) => (
                              <li key={index}>{border}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
