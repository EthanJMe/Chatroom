import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ring from '../assets/eldenRing.png'
import CarouselStack from '../carousel/carouselStack'

function Home() {
    return (
        <Container fluid className='bg-1 carouselStack'>

            <Row>
                <Col className='carouselBorder top' sm={3}>
                    <CarouselStack />
                    {/* <img src={carouselContentGames[0].carouselImg}/> */}
                </Col>
                <Col sm={7}>
                </Col>
            </Row>
        </Container>
    )
}




export default Home
