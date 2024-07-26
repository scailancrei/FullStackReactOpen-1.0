const Form = ({
  handleNewName,
  newName,
  handleSubmit,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form>
      <h2>Add a new Phone</h2>
      <div>
        name:{" "}
        <input
          onChange={(e) => handleNewName(e.target.value)}
          value={newName}
        />
      </div>
      <div>
        number: {""}
        <input
          onChange={(e) => handleNewNumber(e.target.value)}
          value={newNumber}
        />
      </div>
      <div>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          add
        </button>
      </div>
    </form>
  )
}

export default Form
