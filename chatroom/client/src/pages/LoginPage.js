import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';


function LoginPage() {
    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="4">
                        <div class='box'>
                            <Form className=" miniMargin">
                                <Form.Label className='miniMargin'><h3>Username</h3></Form.Label>
                                <Form.Control className='center miniMargin w-75' type="Username" placeholder='Username' />
                                <Form.Label className='miniMargin'><h3>Password</h3></Form.Label>
                                <Form.Control className='center miniMargin w-75' type="Password" placeholder="Password" />
                            </Form>
                            <Row className=" miniMargin justify-content-md-center">
                                <Col xs lg="6">
                                    <button className="bg-0 unout btn-outline-dark btn-lg">
                                    <Link className="space" to="/Profile">Login</Link>
                                    </button>
                                </Col>
                                <Col xs lg="6">
                                    <Link
                                        className=" btn-outline-dark btn-lg"
                                        role="button"
                                        to="/SighUp"
                                    >
                                        Register
                                    </Link>
                                </Col>
                            </Row>
                            <div><br /></div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default LoginPage
