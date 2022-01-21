import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState } from "react";
import AccountModal from '../AccountModal'
import { Link, } from 'react-router-dom';

const Username = 'Username'

function UserPage() {
    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="6">
                        <div class='box'>
                            <Form>
                                <Form.Label className='miniMargin w-50'><img className='avatar' src={avatar} alt='' /></Form.Label>
                                <Form.Text className='miniMargin'><h3>{Username}</h3></Form.Text>
                            </Form>
                            <Link
                                className="miniMargin btn-outline-dark btn-lg"
                                role="button"
                                to="/EditUser"
                            >
                                Edit Info
                            </Link>
                            <br /><br />
                            <Link
                                className="miniMargin btn-outline-dark btn-lg"
                                role="button"
                                to="/UserStats"
                            >
                                Stats
                            </Link>
                            <div><br /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserPage
