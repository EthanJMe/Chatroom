import { Col, Row, Container, Button, Form, TabContent, Card, CardImg } from "react-bootstrap"
import { Link } from "react-router-dom"
import chatContent from '../content.js'
// {'/Rooms/'chatContent.[0]}

function ChatList() {
    console.log(chatContent.length)
    return (
        <Container className="top2 ">
            <Col className="miniMargin top">
                {chatContent.map((chatContent, index) => (
                    <div key={index} className='miniMargin top'>
                        <Card className='w-25 space top'>
                            <Card.Body className='top'>
                                <CardImg className='top' src={chatContent.img} />
                                <Link className="btn-outline-dark btn-lg LogoCenter miniMargin top2" to={`/Rooms/${[index]}`}><div className="top center"><h3>{chatContent.title}</h3></div></Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Col>


        </Container>
    )
}

export default ChatList