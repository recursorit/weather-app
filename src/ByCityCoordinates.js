import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ByCityCoordinates({ longitude, latitude, setLongitude, setLatitude ,cityName,cityID,zipCode}) {
    return (
        <Row className='mt-3 '>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Row className='px-3'>
                        <Col xs={12} md={4} lg={5} >
                            <Form.Label className='text-center'>By Longitutde</Form.Label>
                            <Form.Control type="select" value={longitude} disabled={cityID || cityName || zipCode}  onChange={(e) => setLongitude(e.target.value)} as="select" custom>
                                <option></option>
                                <option>73.199997</option>
                                <option>72.6167</option>
                                <option>72.683327</option>
                                <option> 72.847939</option>
                                <option>73.855347</option>
                                <option>149.066666</option>
                                <option> 68.373657</option>
                                <option> 80.916664</option>
                                <option>77.23114</option>
                                <option> 144.963318</option>
                                <option> 2.3486</option>
                                <option>-75.499901</option>
                                <option>-83.44825</option>
                                <option>-80.600906</option>
                                <option>151.207321</option>
                            </Form.Control>
                        </Col>
                        <Col xs={12} md={4} lg={5} >
                            <Form.Label className='text-center'>By Latitude</Form.Label>
                            <Form.Control type="select" value={latitude}  disabled={cityID || cityName|| zipCode}  onChange={(e) => setLatitude(e.target.value)} as="select" custom>
                                <option></option>
                                <option>22.299999</option>
                                <option>23.0333</option>
                                <option> 23.216669</option>
                                <option>19.01441</option>
                                <option>18.519569</option>
                                <option>-27.16667</option>
                                <option>25.39242</option>
                                <option>26.85</option>
                                <option>28.61282</option>
                                <option>-37.813999</option>
                                <option>48.853401</option>
                                <option>43.000351</option>
                                <option>39.886452</option>
                                <option>40.46423</option>
                                <option>-33.867851</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Link to={`/cityCoordinates/${longitude} ${latitude}`} />
        </Row>
    )
}

export default ByCityCoordinates
