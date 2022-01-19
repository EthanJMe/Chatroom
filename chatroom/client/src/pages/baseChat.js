import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
// this does not display yet, I have tested. Can someone take a look?


function BaseChat() {
    const [messageArray, setMessageArray] = useState([])
    const [response, setResponse] = useState({ message: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageArray([response, ...messageArray])
    }
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    

    return (
        <>
            <Container fluid className=''>
                <Container>
                    <Row>
                        <Col className='messageBox top' >
                            {messageArray.map((messageList, i) => {
                                return (
                                    <div key={i} className="">
                                        <h2>{messageList.message}</h2>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>

                    <Row>
                        <Col className="top">
                            <Form className="messageForm center" onSubmit={handleSubmit}>
                                <Form.Control type="text" placeholder="enter your message here" onChange={updateField} name="message" />
                                <Button onClick={handleSubmit}>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default BaseChat
