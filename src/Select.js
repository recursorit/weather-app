import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import ByCityCoordinates from './ByCityCoordinates'
import ByCityId from './ByCityId'
import ByCityName from './ByCityName'
import ByCityZipCode from './ByCityZipCode'

function Select({ cityName, setCityName, cityID, setCityID, longitude, setLongitude, latitude, setLatitude, zipCode, setZipcode, searchWeather }) {


    return (
        <div>
             <h1 className='text-center text-primary'>Weather Data App</h1>
            <Row >
                <Col xs={12} md={4} lg={4} >
                    
                    <ByCityName cityName={cityName} setCityName={setCityName} cityID={cityID} longitude={longitude} latitude={latitude} zipCode={zipCode} />
                </Col>
                <Col xs={12} md={4} lg={4} >
                    <ByCityId cityID={cityID} setCityID={setCityID} cityName={cityName} longitude={longitude} latitude={latitude} zipCode={zipCode} />
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={4} lg={4} >
                    <ByCityCoordinates longitude={longitude} setLongitude={setLongitude}
                        latitude={latitude} setLatitude={setLatitude} cityID={cityID} cityName={cityName} zipCode={zipCode} />
                </Col>
                <Col xs={12} md={4} lg={4} >
                    <ByCityZipCode zipCode={zipCode} setZipcode={setZipcode} cityID={cityID} cityName={cityName} longitude={longitude} latitude={latitude} />
                </Col>
            </Row>
            <Button className='mt-5' onClick={searchWeather} disabled={!cityName && !cityID && !(longitude && latitude) && !zipCode}>Search</Button>
        </div>
    )
}

export default Select
