const Persons = ({ persons, handleDelete }) => {
  const personsList = [...persons]

  const list = personsList.map((person, i) => {
    return (
      <div key={i}>
        <p key={person.id}>
          {person.name} {person.number}
        </p>
        <button onClick={() => handleDelete(person.id)}>Delete user</button>
      </div>
    )
  })
  return list
}

export default Persons
