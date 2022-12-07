import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import styles from "./CountryList.module.css"


export const CountryDetails = () => {
    

let [countries, setCountry] = useState([]);
let { name } = useParams()


  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,region,subregion,borders,flag&fullText=true`)
      .then((res) => res.json())
      .then((json) => {
        setCountry(json)
        
      });
  }, [name]);

  return (
    <>
    <Link to="/">
    <button>BACK</button>
    </Link>
      <div className={styles.list}>
        {countries.map((e) => {
          const {name, capital, region, flag, subregion, borders
          } = e
            return ( 
                <>
              <div>
                <h2>{name}</h2>
                <p>Stolica: {capital}</p>
                <p>Region: {region}</p>
                <p>Region: {subregion}</p>
                <p>Borders</p>
                {borders.map((item) =>{
                    return (
                        <li>{item}</li>
                    )
                })}
                <img src={flag} className={styles.flag} alt="flag" />
                
              </div>
              </>
            )
})}
        
      </div>
    </>
  );
}

