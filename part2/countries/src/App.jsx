import { useEffect, useState } from "react"
import services from "./services/countries.jsx"

import CountriesList from "./components/countriesList.jsx"

function App() {
  const [country, setCountry] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    services
      .getAllCountries()
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    if (country) {
      services
        .getCountry(country)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [country])

  return (
    <div>
      find countries{" "}
      <input
        placeholder="enter country"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <CountriesList countries={countries} country={country} />
    </div>
  )
}

export default App
