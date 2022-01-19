import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats } from "../actions";
import socket from "../socket/Socket"
import { selectChat } from "../state/chatSlice";

function BaseChat() {
    const dbmessage = useSelector(selectChat);
    const dispatch = useDispatch();
    const [message, setMessage] = useState([]);
    const [room, setRoom] = useState("public");
    const [messageArray, setMessageArray] = useState(dbmessage)
    const [response, setResponse] = useState({ message: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageArray([response, ...messageArray])
       setMessageArray([...messageArray,response])
        dispatch(addChats(messageArray))
        socket.emit("usermessage", room, message);
    }
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
        setMessage(e.target.value);
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
