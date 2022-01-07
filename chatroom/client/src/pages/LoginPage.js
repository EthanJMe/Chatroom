import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function LoginPage() {
    
return (
<div>
 <Container fluid className='bg-1'>                
    
    <Row className="justify-content-md-center">
                    
        <Col xs lg="6">
            <div class='box'>
                <Form>
                    <Form.Label className='miniMargin'>Username</Form.Label>
                    <Form.Control className='miniMargin' type = "Username" placeholder='Username'/>
                    <Form.Label className='miniMargin'>Password</Form.Label>
                    <Form.Control className='miniMargin' type = "Password" placeholder="Password"/>
                    <Button className='miniMargin'>Submit</Button>

                </Form>
            </div>
        </Col>

    </Row>
               
 </Container>
</div>
    )
}

export default LoginPage
