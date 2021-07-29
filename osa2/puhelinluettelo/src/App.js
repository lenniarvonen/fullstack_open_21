import React, { useEffect, useState } from 'react'
import Contacts from "./Contact"
import Filter from "./Search"
import AddContact from "./AddContact"
import numberService from "./NumberService"
import {SuccessNotification, ErrorNotification} from "./Notification"


const App = () => {
  //Tilamuuttujat

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ search, setSearch ] = useState("")

  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    numberService
      .getAll()
      .then(response => {
        console.log(response.data);
        setPersons(response.data)
      })
  }, [])
  

  //Lisää hlön

  const addPerson = (event) => {    
    event.preventDefault()
 

    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.map(person => console.log(person.name))

    const found = persons.find(person => person.name === newName)

    if (found !== undefined){

      if (window.confirm(`${newName} is already added to the phonebook. Do you want to replace the old number with a new one?`)){


        console.log(found.id);
        const url = `http://localhost:3001/persons/${found.id}`

        numberService
          .update(url, personObject)
          .then(response => {
          console.log(response);
          
          setSuccessMessage(`Updated ${newName}`)

          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000);

         })
         .catch(error => {
           console.log("fail");

           setErrorMessage(`The information of ${newName} is already deleted from the server`)

           setTimeout(() => {
             setErrorMessage(null)
           }, 5000);
         })

        let replaceContacts = persons.map(person => {
          if (person === found){
            person = {
              ...personObject,
              id: person.id
            }
          }

          return person

      })

      console.log(replaceContacts);
      setPersons(replaceContacts)


      return
      }

      

    }


    numberService
      .create(personObject)
      .then(response => {
        console.log(response.data);
        
        setPersons(persons.concat(response.data))
        setNewNumber("")
        setNewName("")

        //viesti
        setSuccessMessage(`Added ${newName}`)

        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000);

      })

  }

  const removePerson = (id) => {

    console.log("poistetaan ", id);
    let name = ""

    persons.filter(person => {
      if (person.id === id){
        name = person.name
      }
    })

    const url = `http://localhost:3001/persons/${id}`
    
    if (window.confirm(`Delete ${name}?`)){
      numberService
        .remove(url)
        .catch(error => 
            console.log("poistettu"))

      numberService
        .getAll(url)
        .then(resp => {
          const filteredPesons = persons.filter(person => person.id !== id)
          setPersons(filteredPesons)

        })

    }

    //viesti
    setSuccessMessage(`Deleted ${name}`)

        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000);


  }

  //Handlerit
  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const handleRemove = (id) => {
    removePerson(id)

  }


  return (
    <div>      
      <h2>Phonebook</h2>
      <Filter
      condition={search}
      handleSearch={handleSearch}/>

      <SuccessNotification message={successMessage}/>
      <ErrorNotification message={errorMessage}/>

      <h2>add a new</h2>
      
      <AddContact
      newContact={addPerson}
      name ={newName}
      changeName={handleNameChange} 
      number={newNumber}
      changeNumber={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Contacts
      contacts={persons}
      condition={search}
      remove={handleRemove}/>
      
    </div>
  )

}

export default App;
