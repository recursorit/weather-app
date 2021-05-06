import React from 'react'
import { Card,Button } from 'react-bootstrap'
import moment from 'moment'

function Weather({ weatherData }) {
const TimeZone = new Date(weatherData.timezone)
const DT = new Date(weatherData.dt)
    return (
        <>
            <h1 className='text-center'>Today's Forecast</h1>
            <Card style={{ width: '50rem', height: '30rem' }}>
                <Card.Header>
                    <h3>{weatherData.name},{weatherData.sys.country}</h3>
                </Card.Header>
                <Card.Body>
                    <code className='text-dark '>{moment(DT).format('MMMM Do YYYY, h:mm:ss a')}<br></br></code>





                    {/* <Card.Title>
                        Current Temperature {weatherData.main.temp} C°,
    </Card.Title> */}
    {/* {DT.toDateString()}<br></br> */}
    {weatherData.weather[0].main}<br></br>
    {weatherData.weather[0].description}<br></br>
      {/* {TimeZone.toUTCString()} <br></br> */}
      {/* {TimeZone.toTimeString()} <br></br>
      {moment(TimeZone).format('LLLL')}<br></br> */}
  Current Temperature {weatherData.main.temp} C°,
                    min Temperature : {weatherData.main.temp_min}  C°max Temperature : {weatherData.main.temp_max}  C°
        <br></br>
        pressure : {weatherData.main.pressure}
                    <br></br>
        humidity : {weatherData.main.humidity}

                    <h3>{weatherData.weather.main}</h3>
                    <h5>{weatherData.weather.description}</h5>
                </Card.Body>
            </Card>
        </>
    )
}

export default Weather

