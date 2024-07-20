/* eslint-disable react/prop-types */
import { useState } from "react"

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const AnecdoteMostVoted = ({ copyAnecdotes, maxVoted, votes }) => {
  if (votes[1] === 0) {
    return
  }
  return (
    <div>
      <h3>{votes[0]}</h3>
      <p>
        The anecdote most voted with: {copyAnecdotes.reduce(maxVoted)} votes
      </p>
    </div>
  )
}

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([anecdotes[0], 0])
  const [copyAnecdotes, setCopyAnecdotes] = useState(
    [...anecdotes].fill(0, 0, anecdotes.length)
  )

  const handleNumber = () => {
    const randomNumber = Math.floor(Math.random() * copyAnecdotes.length)
    setSelected(randomNumber)
  }
  const voteAnecdote = (props) => {
    let object1 = [...copyAnecdotes]
    object1[props] += 1
    let max = Math.max(...object1)
    setCopyAnecdotes(object1)
    setVotes([anecdotes[object1.indexOf(max)], max]) //set in votes state ([anecdote[], his votes])
  }

  const maxVoted = (first, second) => Math.max(first, second)

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <p>Has {copyAnecdotes[selected]} votes</p>
      <div style={{ display: "flex" }}>
        <Button handleClick={() => voteAnecdote(selected)} text={"vote"} />
        <Button handleClick={() => handleNumber()} text={"next anecdote"} />
      </div>

      <div>
        <h2>Anecdote of the day</h2>
        <AnecdoteMostVoted
          votes={votes}
          copyAnecdotes={copyAnecdotes}
          maxVoted={maxVoted}
        />
      </div>
    </div>
  )
}

export default App
