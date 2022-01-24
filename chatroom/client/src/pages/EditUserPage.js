import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState, Component } from "react";
import AccountModal from '../AccountModal'
const Username = 'Username';
const Password = 'Password'
const FavColor = 'favcolor'


function EditUser() {
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
                                <Form.Label className='miniMargin w-50'><img className='avatar' src={avatar} alt='' /><input type="file" onChange /></Form.Label>
                                <br />
                                <Form.Label className='miniMargin'><h3>{Username}</h3></Form.Label>
                                <Form.Control className='center space w-75' type="Username" placeholder="Username" />
                                <Form.Label className='miniMargin'><h3>{Password}</h3></Form.Label>
                                <Form.Control className='center space w-75' type="Password" placeholder="Password" />
                                <Form.Label className='miniMargin'><h3>{FavColor}</h3></Form.Label>
                                <Form.Control className='miniMargin w-25' type="Color" placeholder="Favorite Color" />
                                <button className="bg-0 unout miniMargin btn-outline-dark btn-lg" onClick={(e) => {
                                    e.preventDefault();
                                    handleShow()
                                }}>
                                    Submit
                                </button>
                            </Form>
                            <div><br /></div>
                            <AccountModal setShow={setShow} show={show} handleClose={handleClose} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EditUser