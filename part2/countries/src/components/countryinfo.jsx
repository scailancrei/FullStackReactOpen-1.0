/* eslint-disable react/prop-types */
import Weather from "./weather.jsx"
const CountryInfo = ({ countryData, showCountry }) => {
  const languages = Object.entries(countryData.languages)

  return (
    <div>
      {showCountry ? (
        <div key={countryData.name.common}>
          <h2 key={countryData.name.common}>{countryData.name.common}</h2>
          <p>Capital: {countryData.capital}</p>
          <p>area: {countryData.area}</p>

          <div key={countryData.languages}>
            {" "}
            <p>
              <strong>Languages: </strong>
            </p>
            {languages.map((e) => {
              return (
                <li style={{ marginLeft: "30px", fontSize: "20px" }} key={e}>
                  {e[1]}
                </li>
              )
            })}
          </div>

          <div>
            <img
              style={{ width: "200px", marginTop: "40px" }}
              src={countryData.flags.svg}
            ></img>
          </div>

          <div id="weather">
            <Weather country={countryData.name.common} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default CountryInfo
