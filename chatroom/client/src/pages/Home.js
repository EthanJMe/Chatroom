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
                <Col sm={1}>

                </Col>
                <Col sm={7} className="top">
                    <div className="gradShadow top">
                    <br/>
                        <h2>Hello<br/> this is ChatWare, a gamers ChatRoom<br/>explore our chats through the ROOMS tab<br/>and send us a message through the CONTACT US tab</h2>
                        <br/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}




export default Home
