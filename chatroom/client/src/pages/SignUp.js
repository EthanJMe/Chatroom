import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState } from "react";
import { Link } from 'react-router-dom';
const Username = 'Username'


function SignUp() {
    const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
    const handleShow = () => setShow(true); //function to change show to true and load Modal
    const handleClose = () => setShow(false);
    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="4">
                        <div class='box'>
                            <Form className=" miniMargin">
                                <Form.Label className='miniMargin w-50'>
                                    <img className='avatar' src={avatar} alt='' />
                                    <input type="file" onChange />
                                </Form.Label>
                                <br />
                                <Form.Control className='center miniMargin w-75' type="Email" placeholder='Email' />
                                <Form.Control className='center miniMargin w-75' type="Username" placeholder='Username' />
                                <Form.Control className='center space w-75' type="Password" placeholder="Password" />
                            </Form>
                            <Row className=" miniMargin justify-content-md-center">
                                <Col xs lg="6">
                                    <Link
                                        className=" btn-outline-dark btn-lg"
                                        role="button"
                                        to="/SighUp"
                                    >
                                        Sign Up
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

export default SignUp
