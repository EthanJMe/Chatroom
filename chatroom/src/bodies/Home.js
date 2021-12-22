import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ring from '../assets/eldenRing.png'

function Home() {
    return (
        <Container fluid className='bg-1'>
            <Row>
                <Col className='bg-black' sm={3}>
                    {/* triple carousel go here? */}
                </Col>
                <Col sm={7}>
                    <img className='topmargin' src={ring} alt='ring'></img>
                </Col>
            </Row>
        </Container>
    )
}




export default Home
