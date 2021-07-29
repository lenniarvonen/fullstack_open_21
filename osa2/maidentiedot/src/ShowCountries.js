import {React, useState} from "react"
import "./ShowCountries.css"
import ShowInfo from "./CountryInfo"


const Country = (props) => {
    const {name, countries, index} = props

    //maa jota käsitellään ja tieto siitä, näytetäänkö info
    const targetCountry = countries[index]
    const [show, setShow] = useState(false)

    //Suoritetaan klikattaessa 'show'-nappia
    const clickHandler = () => {
      
      if (!show){
        setShow(true)
      } else {
        setShow(false)
      }

      
    }

    //jos info näytetään
    if (show){
      return(
        <div>
          <div>
            {name}
            <button onClick={clickHandler}>show</button>
          </div>
          <div>
            <ShowInfo
            country={targetCountry}
            showCountry={show}
            />

          </div>
        
       </div>
      )
    }
  
    //jos infoa ei näytetä
    return(
      <div>
        {name}
        <button onClick={clickHandler}>show</button>
      </div>
    )
  }
  
  //renderöi maat "listana"
  const ShowCountries = (props) => {
    const {countries, search} = props  

    const showCountries = countries.filter(
      country => country.name.includes(search)
    )

  
    
    //käytetään maan indeksinä ja key-arvona
    let id = -1

    if (showCountries.length === 1){
        return(
            <div>
                <div>
                    {showCountries.map(country => {
                      id += 1

                        return(
                            <Country
                            name={country.name}
                            countries={showCountries}
                            key={id}
                            index={id}

                            />
                        )
                    })}
                </div>
                
            </div>
        )
    }
  
    if (showCountries.length > 10){
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    return (
      <div>
        {showCountries.map(country => {
  
          id += 1

          return(
              <Country
              name={country.name}
              countries={showCountries}
              key={id}
              index={id}
              />
          )
        
        })}
  
      </div>
    )
  }

  export default ShowCountries;