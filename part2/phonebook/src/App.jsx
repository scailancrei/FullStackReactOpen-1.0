import { useState, useEffect } from "react"
import numbersService from "./services/numbers"
import Persons from "./components/persons.jsx"
import Filter from "./components/filter.jsx"
import Form from "./components/form.jsx"
import Status from "./components/status.jsx"

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [nameFilter, setNameFilter] = useState("")
  const [filter, setFilter] = useState(false)
  const [sendData, setSendData] = useState({})
  const [serverMessage, setServerMessage] = useState("")
  const [status, setStatus] = useState(false)

  useEffect(() => {
    numbersService
      .getNumbers()
      .then((response) => {
        console.log(response)
        setPersons(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    if (Object.keys(sendData).length > 0) {
      numbersService
        .sendNumbers(sendData)
        .then((response) => {
          setPersons(persons.concat(response.data))
          setSendData({})
          setStatus(true)
          setServerMessage(`Added ${response.data.name} `)
          setTimeout(() => {
            setStatus(false)
          }, 3000)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [sendData])

  const handleSubmit = (event) => {
    event.preventDefault()
    const personList = persons.some((e, i) => {
      if (e.name === newName) {
        if (
          window.confirm(
            `${e.name} is already added to phonebook, replace older number with a new one?`
          )
        ) {
          const person = persons[i]
          person.number = newNumber
          numbersService.updateNumber(person.id, person).then((response) => {
            console.log(response)
            setNewName("")
            setNewNumber("")
          })
          return true
        }
        return true
      } else if (newName === "" || newNumber === "") {
        return true
      }
      return false
    })
    if (!personList) {
      console.log(sendData)

      setSendData({ name: newName, number: newNumber })

      setNewName("")
      setNewNumber("")
    }
  }

  const handleFilter = (props) => {
    if (props) {
      setNameFilter(props)
      setFilter(true)
    } else {
      setFilter(false)
      setNameFilter("")
    }
  }

  const handleNewName = (props) => {
    setNewName(props)
  }
  const handleNewNumber = (props) => {
    setNewNumber(props)
  }

  const handleDelete = (id) => {
    const number = persons.find((e) => e.id === id)
    if (window.confirm(`Do you want delete ${number.name} ?`)) {
      const person = persons.filter((e) => e.id !== id)
      numbersService
        .deleteNumbers(id)
        .then((response) => {
          console.log(` element deleted`)
        })
        .catch((error) => {
          setServerMessage(
            `Element ${person.name} has already been removed from server `
          )
        })
      setPersons([...person])
    }
  }

  const listToShow = filter
    ? persons.filter((person) => person.name.toLowerCase() === nameFilter)
    : persons
  return (
    <div>
      <h2>Phonebook</h2>
      <Status message={serverMessage} messageStatus={status} text={"good"} />

      <Filter handleFilter={handleFilter} nameFilter={nameFilter} />

      <Form
        handleNewName={handleNewName}
        newName={newName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>

      <Persons persons={listToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App
