import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ByCityId({ cityID, setCityID, cityName, longitude, latitude, zipCode }) {
    return (
        <Row className='mt-3'>
            <Col >
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label className='text-center'>By City Id</Form.Label>
                        <Form.Control type="select" value={cityID} disabled={cityName|| (longitude && latitude) || zipCode } onChange={(e) => setCityID(e.target.value)} as="select" custom>
                            <option></option>
                            <option>1253573</option>
                            <option>1279233</option>
                            <option>1271715</option>
                            <option>1275339</option>
                            <option>1259229</option>
                            <option> 2147854</option>
                            <option>1176734</option>
                            <option> 1264733</option>
                            <option>5937522</option>
                            <option>7839805</option>
                            <option>2968815</option>
                            <option>5128638</option>
                            <option>4517009</option>
                            <option>6167865</option>
                            <option>6160752</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Link to={`/cityId/${cityID}`} />
            </Col>
        </Row>
    )
}

export default ByCityId
