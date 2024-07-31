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
  const [text, setText] = useState("")

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
      console.log(sendData)
      let person = persons.filter((person) => person.name === sendData.name)
      console.log(person)
      if (person.length != 0) {
        window.confirm("Number already in Database do you want update it?")
          ? numbersService
              .updateNumber(person[0].id, sendData)
              .then((response) => {
                console.log(response)
                setSendData({})
                setText("good")
                setStatus(true)
                setServerMessage(`${response.data.name} was updated correctly!`)
                setTimeout(() => {
                  setStatus(false)
                }, 3000)
              })
              .catch((error) => {
                console.log(error)
              })
          : false
      } else {
        saveData(sendData)
      }
    }
  }, [sendData])

  const handleSubmit = (event) => {
    event.preventDefault()

    setSendData({ name: newName, number: newNumber })
  }

  const saveData = (sendData) => {
    console.log(sendData)
    numbersService
      .sendNumbers(sendData)
      .then((response) => {
        console.log(response)
        setText("good")
        setStatus(true)
        setSendData({})
        setServerMessage(`Added ${response.data.name} `)
        setNewName("")
        setNewNumber("")
        setTimeout(() => {
          setStatus(false)
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
        setText("bad")
        setStatus(true)
        setServerMessage(`${error.request.response}`)
        setTimeout(() => {
          setStatus(false)
        }, 3000)
      })
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

  const handleDelete = async (id) => {
    const user = await numbersService.getName(id).then((response) => {
      if (response) {
        return response.data
      }
    })

    console.log(user)
    if (window.confirm(`Do you want delete ${user.name} ?`)) {
      await numbersService
        .deleteNumbers(id)
        .then((response) => {
          console.log(response)
          console.log(` element deleted`)
          setSendData({})
        })
        .catch((error) => {
          setServerMessage(
            `Element ${user.name} has already been removed from server `
          )
        })
    }
  }

  const listToShow = filter
    ? persons.filter((person) => person.name.toLowerCase() === nameFilter)
    : persons
  return (
    <div>
      <h2>Phonebook</h2>
      <Status message={serverMessage} messageStatus={status} text={text} />

      <Filter handleFilter={handleFilter} nameFilter={nameFilter} />

      <Form
        status={status}
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
