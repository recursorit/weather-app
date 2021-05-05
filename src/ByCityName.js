import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ByCityName({ cityName, setCityName }) {

    return (
        <Row className='mt-3'>
            <Col >
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>By City Name</Form.Label>
                        <Form.Control type='select' value={cityName} onChange={(e) => setCityName(e.target.value)} as="select" custom>
                            <option></option>
                            <option>Vadodara</option>
                            <option>Ahemdabad</option>
                            <option>Gandhinagar</option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                            <option>Surat</option>
                            <option>Hyderabad</option>
                            <option>Lucknow</option>
                            <option>Delhi</option>
                            <option>Melbourne</option>
                            <option>Paris</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Toronto</option>
                            <option>Sydney</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            <Link to={`/cityName/${cityName}`}/>
            </Col>
        </Row>
    );
}

export default ByCityName
