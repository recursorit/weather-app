import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Switch, useHistory } from 'react-router-dom'
import Select from './Select';
import Weather from './Weather';
import axios from 'axios'

function App() {
  const [cityName, setCityName] = useState('')
  const [cityID, setCityID] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [zipCode, setZipcode] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const [hourlyData, setHourlyData] = useState({})
  const [loading,setloading] = useState(false)

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'


  const history = useHistory()
  console.log(history)
  const searchWeather = () => {
    setloading(true)
    const generateURL = (searchItem) => {
      if (searchItem === cityName) {
        return `q=${encodeURIComponent(`${searchItem}`)}&appid=3aac6eb9863a0faa25f6bc45af606c06&units=metric`
      }
      else if (searchItem === cityID) {
        return `id=${encodeURIComponent(`${searchItem}`)}&appid=3aac6eb9863a0faa25f6bc45af606c06&units=metric`
      }
      else if (searchItem === (longitude && latitude)) {
        return `lat=${encodeURIComponent(`${searchItem}`)}&lon=${encodeURIComponent(`${searchItem}`)}&appid=3aac6eb9863a0faa25f6bc45af606c06&units=metric`
      }
      else if (searchItem === zipCode) {
        return `zip=${encodeURIComponent(`${searchItem}`)}&appid=3aac6eb9863a0faa25f6bc45af606c06&units=metric`
      }
    }
    axios.get(`${BASE_URL}?${generateURL(cityName || cityID || (longitude && latitude) || zipCode)}`)
      .then(res => {
        // console.log(res.data)
        // console.log(res.data.weather)
        // console.log(res.data.coord)
        // console.log(res.data.main)
        setWeatherData(res.data)
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=current,minutely,daily,alerts&appid=024ecc6440cd9a41acb53bbd67258569&units=metric`)
          .then(response => setHourlyData(response.data.hourly))
          .catch(error => console.log(error))

        if (cityName) {
          history.push(`/cityName/${cityName}`)
        }
        else if (cityID) {
          history.push(`/cityID/${cityID}`)
        }
        else if (longitude && latitude) {
          history.push(`cityCoordinates/${longitude} ${latitude}`)
        }
        else if (zipCode) {
          history.push(`/cityzipCode/${zipCode}`)
        }
        console.log(history)
      })
      .catch(err =>{
        console.log(err)
        setloading(false) 
      }
      )
  }
  console.log(weatherData)

  const reset = () => {
    setCityName('')
    setCityID('')
    setLongitude('')
    setLatitude('')
    setZipcode('')
setWeatherData('')
  }
  return (
    // <Router>
    <Container className=' mt-5'>
      <Switch>
        <Route path='/' exact>
          <Select cityName={cityName} setCityName={setCityName}
            cityID={cityID} setCityID={setCityID}
            longitude={longitude} setLongitude={setLongitude} latitude={latitude} setLatitude={setLatitude}
            zipCode={zipCode} setZipcode={setZipcode}
            searchWeather={searchWeather} loading={loading} />
        </Route>
        <Route path='/cityName/:city'>
          <Weather weatherData={weatherData} hourlyData={hourlyData} reset={reset} />
        </Route>
        <Route path='/cityID/:cityID' >
          <Weather weatherData={weatherData} hourlyData={hourlyData} reset={reset} />
        </Route>
        <Route path='/cityCoordinates/:cityCoordinates' >
          <Weather weatherData={weatherData} hourlyData={hourlyData} reset={reset} />
        </Route>
        <Route path='/cityzipCode/:cityzipCode' >
          <Weather weatherData={weatherData} hourlyData={hourlyData} reset={reset} />
        </Route>
      </Switch>
    </Container>
    // </Router>
  );
}

export default App;

