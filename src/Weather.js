import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function Weather({ weatherData }) {
    return (
        <Card>
            {/* <Card.Header>
                {weatherData.name}
                {weatherData.sys.country}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    Current Temperature {weatherData.main.temp} C°,
                </Card.Title>
                <Card.Text>
                    min Temperature : {weatherData.main.temp_min}  C°
                    max Temperature : {weatherData.main.temp_max}  C°
                    pressure : {weatherData.main.pressure}
                    humidity : {weatherData.main.humidity}

                    <h3>{weatherData.weather.main}</h3>
                    <h5>{weatherData.weather.description}</h5>
                </Card.Text>
            </Card.Body> */}
        </Card>
    )
}

export default Weather
