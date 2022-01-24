import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState } from "react";
import AccountModal from '../AccountModal'
import { Link } from 'react-router-dom';



function UserPage() {
    const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
    const handleShow = () => setShow(true); //function to change show to true and load Modal
    const handleClose = () => setShow(false);


    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="6">
                        <div class='box'>
                            <Form>
                                <Form.Label className='miniMargin'><img className='avatar' src={avatar} alt='' /></Form.Label><br/>
                                <Form.Label className='miniMargin'><h3>Username</h3></Form.Label><br/>
                                <Form.Label className='miniMargin'><h3>Password</h3></Form.Label><br/>
                                <Form.Label className='miniMargin'><h3>Favorite Color</h3></Form.Label>
                            </Form>
                            <div className="userColor miniMargin space">

                            </div>
                            <Link
                                        className=" btn-outline-dark btn-lg"
                                        role="button"
                                        to="/EditUser"
                                    >
                                        Edit Profile
                                    </Link>
                                <div><br/></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserPage
