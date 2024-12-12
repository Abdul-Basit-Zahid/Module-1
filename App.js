const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of excercises are {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </div>
  )
}

const App = () => {
  const course = "Full stack web development course"

  const part1 = "Fundamentals of React"
  const excercises1 = 10;

  const part2 = "Using props to mass data"
  const excercises2 = 7

  const part3 = "State of a component"
  const excercises3 = 14




  return(
      <div>
      <Header course = {course}/>
      <Content 
       part1 = {part1}
       part2 = {part2}
       part3 = {part3}
      />
      <Total 
      excercises1 = {excercises1}
      excercises2 = {excercises2}
      excercises3 = {excercises3}
      />
  </div>
  )
}

export default App