import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { WiDaySunny, WiFog, WiCloud, WiDayCloudy, WiCloudy, WiDayRain, WiDaySnow, WiRain, WiRaindrops, WiThunderstorm } from "react-icons/wi";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'

function Weather({ weatherData, reset,hourlyData }) {
    const TimeZone = new Date(weatherData.timezone)
    const DT = new Date(weatherData.dt)
    const cToF = ((weatherData.main.temp) * 9 / 5 + 32)
    return (
        <>
            <h3 className='text-center text-secondary'>Today's Weather Forecast</h3>
            <Card style={{ width: '80%', height: '40rem', marginLeft: '10%' }} className='shadow '>
                <Card.Header>
                    <h3>{weatherData.name},{weatherData.sys.country}</h3>
                    <code className='text-dark '>{moment(DT).format('MMMM Do YYYY, h:mm:ss a')}<br></br></code>
                </Card.Header>
                <Card.Body>
                        {
                            weatherData.weather[0].main === 'Clear' ? <WiDaySunny color='orange' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].description === 'broken clouds' ? <WiDayCloudy color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].description === 'few clouds' ? <WiCloud color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].description === 'overcast clouds' ? <WiCloudy color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].description === 'scattered clouds ' ? <WiDayRain color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].icon === '50d' ? <WiFog color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].icon === '13d' ? <WiDaySnow color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].main === 'Rain' ? <WiRain color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].icon === '09d' ? <WiRaindrops color='grey' size='3rem' /> : null
                        }
                        {
                            weatherData.weather[0].icon === '11d' ? <WiThunderstorm color='grey' size='3rem' /> : null
                        }

                        <h3>{weatherData.weather[0].main}</h3>
                        <h5>{weatherData.weather[0].description}</h5><br></br>
            
                    <h5>Current Temperature : {weatherData.main.temp} °C | {cToF} °F</h5>
                    Max Temp : {weatherData.main.temp_max} °C<br></br>
                    Min Temp : {weatherData.main.temp_min} °C<br></br>
                    Pressure : {weatherData.main.pressure} hPa<br></br>
                    Humidity : {weatherData.main.humidity} %<br></br>
                    Wind : {weatherData.wind.speed} km/h<br></br>
                   HourlyData :<ResponsiveContainer width="100%" height={168} className='mt-3' >
                        <LineChart data={hourlyData} margin={{ top: 5, right: 30, bottom: 5, left: -30 }}>
                            <Line type="monotone" dataKey="temp" stroke="Black" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis stroke={DT} />
                            <YAxis stroke="black" />
                        </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
            <Row className='justify-content-center'>
                <Col lg={2} xs={4} >
                    <Link to={`/`} ><Button className='mt-3 btn-secondary' onClick={reset}>Back</Button></Link>
                </Col>
            </Row>

        </>
    )
}

export default Weather
{/* {DT.toDateString()}<br></br> */ }
{/* {TimeZone.toUTCString()} <br></br> */ }
{/* {TimeZone.toTimeString()} <br></br>
      {moment(TimeZone).format('LLLL')}<br></br> */}