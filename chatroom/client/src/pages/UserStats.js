import React from 'react'
import { Container, Row, Col, Form, } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
const Stat = 'Stat';


function userStats() {
    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="6">
                        <div class='box'>
                            {/* could probably replace this form with a map of the stats.
                            we also could just not do this because it isn't really needed i just thought it would be neat */}
                            <Form>
                                <Form.Label className='miniMargin w-50'><img className='avatar' src={avatar} alt='' /></Form.Label><br />
                                <Form.Label className='miniMargin'><h3>{Stat}</h3></Form.Label><br />
                                <p>unknown</p>
                                <Form.Label className='miniMargin'><h3>{Stat}</h3></Form.Label><br />
                                <p>unknown</p>
                                <Form.Label className='miniMargin'><h3>{Stat}</h3></Form.Label><br />
                                <p>unknown</p>
                                <Form.Label className='miniMargin'><h3>{Stat}</h3></Form.Label><br />
                                <p>unknown</p>
                                <Form.Label className='miniMargin'><h3>{Stat}</h3></Form.Label><br />
                                <p>unknown</p>
                            </Form>
                            <div><br /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default userStats