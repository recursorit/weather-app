import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ByCityZipCode({ zipCode, setZipcode,cityName,longitude,latitude,cityID }) {
    return (
        <Row className='mt-3'>
            <Col >
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label className='text-center'>By Zip-Code</Form.Label>
                        <Form.Control type="select" value={zipCode} disabled={cityID || (longitude && latitude) || cityName}  onChange={e => setZipcode(e.target.value)} as="select" custom>
                            <option></option>
                            <option>94040</option>
                            <option>94041</option>
                            <option>380001</option>
                            <option>230532</option>
                            <option>111045</option>
                            <option>335009</option>
                            <option>500001</option>
                            <option>226001</option>
                            <option>110003</option>
                            <option>32901</option>
                            <option>75000</option>
                            <option>10001</option>
                            <option>EC1A</option>
                            <option>66777</option>
                            <option>2000</option>

                        </Form.Control>
                    </Form.Group>
                </Form>

                <Link to={`/cityZipCode/${zipCode}`} />
            </Col>
        </Row>
    )
}

export default ByCityZipCode
