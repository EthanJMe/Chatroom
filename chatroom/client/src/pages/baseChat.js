import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
import {useDispatch} from "react-redux"
import {redux_saveChatContents} from "../state/chatSlice"
// this does not display yet, I have tested. Can someone take a look?


function BaseChat() {
    const dispatch = useDispatch()
    const [messageArray, setMessageArray] = useState([])
    const [response, setResponse] = useState({ message: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
       setMessageArray([...messageArray,response])
       dispatch(redux_saveChatContents(messageArray))
    }
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    

    return (
        <>
            <Container fluid className='bg-13'>
                <Container>
                    <Row>
                        <Col className='messageBox' >
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
                        <Col >
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
