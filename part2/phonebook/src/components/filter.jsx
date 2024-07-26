const Filter = ({ handleFilter, nameFilter }) => {
  return (
    <div>
      names: {""}
      <input
        onChange={(e) => handleFilter(e.target.value)}
        value={nameFilter}
      />
    </div>
  )
}

export default Filter
