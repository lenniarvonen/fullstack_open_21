import React, {useEffect, useState} from "react"
import axios from "axios"
import ShowCountries from "./ShowCountries"

require('dotenv').config()





const App = () => {

  //tilamuuttujat
  const [showCountries, setShowable] = useState([])
  const [searchCountry, setSearch] = useState("")
  

  useEffect(() => {

    //haetaan maat
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        const countries = response.data
        setShowable(countries)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value) 
  }


  return(
    <div>
      find countries 
      <input
      value={searchCountry}
      onChange={handleSearch}/>

      <ShowCountries
      countries={showCountries}
      search={searchCountry}
      />


    </div>
  )
}


export default App;
