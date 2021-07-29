import React, { useState, useEffect } from "react"
import "./ShowCountries.css"
import axios from "axios"

const ShowInfo = (props) => {
    const {country, showCountry} = props

    const languages = country.languages
    const [weather, setWeather] = useState(undefined)


    useEffect(() => {
        const capital = country.capital

        const baseUrl = `http://api.weatherstack.com/current`
        const key = process.env.REACT_APP_KEY
  
        axios
        .get(`${baseUrl}?access_key=${key}&query=${capital}`)
        .then(response => {
          const weatherConditions = response.data    
            
          setWeather(weatherConditions)
          
        })
      }, [])


    //Jos maa tulee näyttää, palautetaan tiedot
    if (showCountry && weather !== undefined) {
       return (
        <div>
                <div>
                    languages
                    {languages.map(language => <li key={language.name}>
                        {language.name}</li>)}
                </div>
                <div>
                    <img src={country
                        .flag} alt="Flag"></img>

                </div>

                {/*sää*/}
                <div>
                    <h2>Weather in {country.capital}</h2>
                    temperature: {weather.current.temperature}
                    
                </div> 
                <div>
                    <img
                        src={weather.current.weather_icons[0]}
                        alt="Weather"/>
                </div>
                <div>
                    wind: {weather.current.wind_speed} direction {weather.current.wind_dir}
                </div>
    
        </div>
    ) 
    }

    //Jos maata ei näytetä, palautetaan tyhjä div
    else return (
        <div>
        </div>
    )
    
}

export default ShowInfo;

