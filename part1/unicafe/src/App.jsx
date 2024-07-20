import { useState } from "react"

const Buttons = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const NoFeedBack = () => {
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticDiv = ({ statiticline }) => {
  return (
    <div>
      <StatisticLine
        text={"good"}
        all={statiticline.props.all}
        state={statiticline.props.good}
      />
      <StatisticLine
        text={"neutral"}
        all={statiticline.props.all}
        state={statiticline.props.neutral}
      />
      <StatisticLine
        text={"bad"}
        all={statiticline.props.all}
        state={statiticline.props.bad}
      />
      <StatisticLine
        text={"all"}
        all={statiticline.props.all}
        state={statiticline.props.all}
      />
      <StatisticLine
        text={"average"}
        all={statiticline.props.all}
        state={statiticline.props.average}
        good={statiticline.props.good}
        bad={statiticline.props.bad}
      />
      <StatisticLine
        text={"positive"}
        all={statiticline.props.all}
        state={statiticline.props.positive}
        good={statiticline.props.good}
      />
    </div>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <div>
        <p>
          {props.text}: {(props.good / props.all) * 100} %
        </p>
      </div>
    )
  }
  if (props.text === "average") {
    return (
      <div>
        <p>
          {props.text}: {(props.good - props.bad) / props.all}
        </p>
      </div>
    )
  }
  return (
    <div>
      <p>
        {props.text}: {props.state}
      </p>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGood = (props) => {
    setGood(props + 1)
    setAll(all + 1)
  }
  const increaseNeutral = (props) => {
    setNeutral(props + 1)
    setAll(all + 1)
  }
  const increaseBad = (props) => {
    setBad(props + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div style={{ display: "flex" }}>
        <Buttons handleClick={() => increaseGood(good)} text={"good"} />
        <Buttons
          handleClick={() => increaseNeutral(neutral)}
          text={"neutral"}
        />
        <Buttons handleClick={() => increaseBad(bad)} text={"bad"} />
      </div>

      <h2>Statistics</h2>

      {all === 0 ? (
        <NoFeedBack />
      ) : (
        <StatisticDiv
          statiticline={
            <StatisticLine
              good={good}
              bad={bad}
              all={all}
              neutral={neutral}
              positive={positive}
              average={average}
            />
          }
        />
      )}
    </div>
  )
}

export default App
