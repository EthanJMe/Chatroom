import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState } from "react";
import AccountModal from '../AccountModal'
const Username = 'username'
const FavColor = 'favcolor'

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
                                <Form.Label className='miniMargin'><img className='avatar' src={avatar} alt='' /></Form.Label>
                                <Form.Text className='miniMargin'><h3>{Username}</h3></Form.Text>
                                <Form.Label className='miniMargin'><h3>Password</h3></Form.Label>
                                <Form.Control className='miniMargin' type="Password" placeholder="Password" />
                                <Form.Text className='miniMargin'><h3>{FavColor}</h3></Form.Text>
                                <Form.Control className='miniMargin' type="Color" placeholder="Favorite Color" />
                                <Button onClick={(e) => {

                                    e.preventDefault();
                                    handleShow()
                                }}>Submit here</Button>
                            </Form>
                            <AccountModal setShow={setShow} show={show} handleClose={handleClose} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserPage
