import { useEffect, useState } from "react"
import weather from "../services/weather"
const Weather = ({ country }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (country) {
      weather
        .getWeather(country)
        .then((response) => {
          console.log(response.data)
          setData([...data, response.data])
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [country])

  console.log(data)
  return (
    <div>
      <h1>Weather in {`${country}`}</h1>

      <p>Temperature: {data[0] ? `${data[0].main.temp} celsius` : ""}</p>
      <div id="icon">
        <img
          src={
            data[0]
              ? `https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`
              : ""
          }
          alt=""
        />
      </div>
      <p>wind: {data[0] ? `${data[0].wind.speed} m/s` : ""}</p>
    </div>
  )
}

export default Weather
