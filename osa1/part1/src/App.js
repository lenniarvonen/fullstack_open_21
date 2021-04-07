import React from "react"


const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}


const App = () => {

  const now = new Date()
  var a = 2
  var b = 5

  console.log("Sheeeeeeeesh")
  return[
    <h1>Sheeeeeeeesh</h1>,
    <Hello name="Lenni"/>

  ]
}


export default App;
