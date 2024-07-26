import Header from "./header.jsx"
import Content from "./content.jsx"
import Total from "./total.jsx"

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {course.map((e, i) => {
        return (
          <div key={i}>
            <Header course={e} />
            <Content course={e} />
            <Total course={e} />
          </div>
        )
      })}
    </div>
  )
}

export default Course
