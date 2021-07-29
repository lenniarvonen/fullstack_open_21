import React, {useState} from "react"

const StatisticsLine = (props) => {
  return(
    <div>
      <p>{props.level} {props.amount}</p>
    </div>
  )
}

const Button = (props) => {

  return(
    <div>
      <button onClick={props.handle}>{props.level}</button>
    </div>
  )
}

const Table = (props) => {

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>

          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>

          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>

          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>

          <tr>
            <td>average</td>
            <td>{props.average}</td>
          </tr>

          <tr>
            <td>positive</td>
            <td>{props.positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {

  //nappien arvot
  const [good, setGood] = useState(0) // Hyvä
  const [neutral, setNeutral] = useState(0) // Neutraali
  const [bad, setBad] = useState(0) // Huono

  const [score, setScore] = useState(0) // Pisteet yhteensä
  const [all, setAll] = useState(0) // Arvostelujen määrä

  let average = score/all
  let positive = (good/all)*100


  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setScore(score + 1)

  }

  console.log(good)

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setScore(score - 1)
  }

  if (all === 0){
    return(
      <div>
        <h1>Give feedback</h1>

        <Button handle={handleGood} level="good"/>
        <Button handle={handleNeutral} level="neutral"/>
        <Button handle={handleBad} level="bad"/>

        <h2>Statistics</h2>
        
        <p>No feedback given</p>

      </div>
    )
  }

  return(
    <div>
      <h1>Give feedback</h1>

      <Button handle={handleGood} level="good"/>
      <Button handle={handleNeutral} level="neutral"/>
      <Button handle={handleBad} level="bad"/>

      <h2>Statistics</h2>

      <Table
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive}
      >

      </Table>

    </div>
  )

}

export default App;
