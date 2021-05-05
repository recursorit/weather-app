import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'
import ByCityCoordinates from './ByCityCoordinates'
import ByCityId from './ByCityId'
import ByCityName from './ByCityName'
import ByCityZipCode from './ByCityZipCode'
import Weather from './Weather';

function Select() {
    const [cityName, setCityName] = useState('')
    const [cityID, setCityID] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")
    const [zipCode, setZipcode] = useState("")
    const [weatherData, setWeatherData] = useState({})


    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const searchWeather = () => {
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
            .then(res =>
                setWeatherData(res.data)
            )
            .catch(err =>
                console.log(err)
            )
    }

    return (
        <div>
            <Row >
                <Col xs={12} md={4} lg={4} >
                    <ByCityName cityname={cityName} setCityName={setCityName} />
                </Col>
                <Col xs={12} md={4} lg={4} >
                    <ByCityId cityID={cityID} setCityID={setCityID} />
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={4} lg={4} >
                    <ByCityCoordinates longitude={longitude} setLongitude={setLongitude}
                        latitude={latitude} setLatitude={setLatitude} />
                </Col>
                <Col xs={12} md={4} lg={4} >
                    <ByCityZipCode zipCode={zipCode} setZipcode={setZipcode} />
                </Col>
            </Row>
            <Weather weatherData={weatherData}/>
            <Button className='mt-5' onClick={searchWeather} disabled={!cityName && !cityID && !(longitude && latitude) && !zipCode}>Search</Button>
        </div>
    )
}

export default Select
