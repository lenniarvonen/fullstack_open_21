import React, { useState } from 'react'

const Buttons = (props) => {    //järjestetään napit horisontaalisesti
  return(
    <div>
      <button onClick={props.voteHandler}>vote</button>
      <button onClick={props.randomHandler}>next anecdote</button>
    </div>
  )
}

const DisplayVotes = (props) => {   //äänien määrä anekdoottejen alle
  return(
    <div>
      has {props.votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

   
  const [selected, setSelected] = useState({
    index: 0, //satunnaisluku
    votes: [0, 0, 0, 0, 0, 0], //äänet
    mostVotes: 0, //suurin äänimäärä
    mostVotesInd: 0 //indeksi, josta suurin äänimäärä löytyy

  })

  const random = () => {
    let ind = 0
    
    while (true){
      ind = Math.floor(Math.random()*10)

      if (ind <= 5){
        break
      }
    }


    //apumuuttujat äänimäärän käsittelyyn

    let most = selected.mostVotes 
    let index = selected.mostVotesInd

    //etsitään suurin äänimäärä

    selected.votes.forEach(value => {
      if (value > most){
        most = value
        index = selected.votes.indexOf(value)

      }
    })

    const newValues = {
      ...selected,
      index: ind,
      mostVotes: most,
      mostVotesInd: index
    }


    setSelected(newValues)
  }

  const handleVote = () => {

    //kasvatetaan äänimäärää ennen suurimman äänimäärän määrittämistä, jotta tulos on oikea
    
    let newValues = {
      ...selected
    }

    selected.votes[selected.index] += 1

    setSelected(newValues)

    //apumuuttujat äänimäärän käsittelyyn

    let most = selected.mostVotes
    let index = selected.mostVotesInd

    //etsitään suurin votes

    selected.votes.forEach(value => {
      if (value > most){
        most = value
        index = selected.votes.indexOf(value)

      }
    })

    newValues = {
      ...selected,
      mostVotes: most,
      mostVotesInd: index
    }

    console.log(newValues)

    setSelected(newValues)
  }
    
  
  return (
    <div>
      <h1>Anecdote of the day</h1>

      {anecdotes[selected.index]}

      <DisplayVotes votes={selected.votes[selected.index]}/>

      
      <Buttons
      randomHandler={random}
      voteHandler={handleVote}
      ></Buttons>

      <h2>Anecdote with most votes</h2>
      {anecdotes[selected.mostVotesInd]}

    </div>
  )
}

export default App
