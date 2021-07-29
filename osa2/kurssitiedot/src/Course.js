
  
  const Header = (props) =>{
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  
  }

  const Total = (props) => {
    const parts = props.parts
  
    const total = parts.map(part => part.exercises)
    .reduce((total, current) => total+current)
  
  
    return(
      <div>
        <ul>
          total of {total} exercises
        </ul>
        
      </div>
    )
  }
  
  const Content = (props) =>{
    const parts = props.parts
  
    return(
      <div>
        <ul>
          {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
  
        </ul>
      </div>
    )
  
  }
  

const Course = (props) =>{
    const {name,
      parts} = props
    return(
      <div>
        <Header course={name}></Header>
  
        <Content
        parts={parts}
        />
  
      <Total
        parts={parts}
        />
      </div>
    )
  }

  export default Course;