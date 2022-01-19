import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function LoginPage() {

    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="6">
                        <div class='box'>
                            <Form>
                                <Form.Label className='miniMargin'><h3>Username</h3></Form.Label>
                                <Form.Control className='miniMargin' type="Username" placeholder='Username' />
                                <Form.Label className='miniMargin'><h3>Password</h3></Form.Label>
                                <Form.Control className='miniMargin' type="Password" placeholder="Password" />
                                <Button className='miniMargin'>login in</Button>
                                <Button className='miniMargin'>Sign up</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage
