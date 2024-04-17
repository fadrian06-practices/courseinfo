const Header = ({ course }) => {
  return <h2>{course}</h2>
}

const Part = ({ part: { name, exercises } }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course
