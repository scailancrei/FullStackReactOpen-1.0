const Total = ({ course }) => {
  const total = course.parts.reduce(
    (prevNum, nextNum) => prevNum + nextNum.exercises,
    0
  )

  return <h4>Total of {total} Exercises </h4>
}

export default Total
