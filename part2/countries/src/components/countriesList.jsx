/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react"
import CountryInfo from "./countryinfo"
import Weather from "./weather.jsx"
const CountriesList = ({ countries, country }) => {
  const [showCountry, setShowCountry] = useState(false)
  const [idCountry, setIdCountry] = useState(null)

  const handleCountryInformation = (props) => {
    setIdCountry(props)
    setShowCountry(!showCountry)
  }

  const countryList = countries
    .filter((e) => e.name.common.toLowerCase().includes(country))
    .map((e) => {
      return e
    })

  return (
    <div>
      <h1>List of Countries</h1>

      {countryList.length > 10 ? (
        <p>Too many data, specify another filter</p>
      ) : countryList.length > 1 && countryList.length < 10 ? (
        countryList.map((e, i) => {
          return (
            <li
              style={{ listStyle: "none", marginLeft: "50px", padding: "5px" }}
              key={i}
            >
              {idCountry === i && showCountry ? (
                <CountryInfo
                  key={i}
                  countryData={e}
                  showCountry={showCountry}
                  handleCountryInformation={handleCountryInformation}
                />
              ) : (
                e.name.common
              )}
              <button onClick={() => handleCountryInformation(i)}>
                {showCountry ? "close" : "show"}
              </button>
            </li>
          )
        })
      ) : (
        countryList.map((e) => {
          const languages = Object.entries(e.languages)
          return (
            <div key={e.name}>
              <h2 key={e.name}>{e.name.common}</h2>
              <p>Capital: {e.capital}</p>
              <p>area: {e.area}</p>

              <div key={e.languages}>
                {" "}
                <p>
                  <strong>Languages: </strong>
                </p>
                {languages.map((e) => {
                  return (
                    <li
                      style={{ marginLeft: "30px", fontSize: "20px" }}
                      key={e}
                    >
                      {e[1]}
                    </li>
                  )
                })}
              </div>

              <div>
                <img
                  style={{ width: "200px", marginTop: "40px" }}
                  src={e.flags.svg}
                ></img>
              </div>
              <div>
                <Weather country={e.name.common} />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default CountriesList
