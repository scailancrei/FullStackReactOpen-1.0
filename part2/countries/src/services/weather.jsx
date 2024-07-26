import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const url = `https://api.openweathermap.org/data/2.5/weather`

const getWeather = async (country) => {
  return await axios.get(`${url}?q=${country}&APPID=${apiKey}&units=metric`)
}

export default { getWeather: getWeather }
