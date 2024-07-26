const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => {
        return (
          <li
            style={{ listStyleType: "none" }}
            key={part.id}
          >{`${part.name} ${part.exercises}`}</li>
        )
      })}
    </div>
  )
}

export default Content
