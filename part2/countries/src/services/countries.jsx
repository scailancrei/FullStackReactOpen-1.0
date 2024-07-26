import axios from "axios"

const url = "https://studies.cs.helsinki.fi/restcountries/api/"
const getCountry = (countryName) => {
  return axios.get(`${url}/name/${countryName}`)
}

const getAllCountries = () => {
  return axios.get(`${url}/all`)
}

export default { getCountry: getCountry, getAllCountries: getAllCountries }
