import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats } from "../actions";
import socket from "../socket/Socket"
import { SelectChat, redux_saveChatContents } from "../state/chatSlice";

function BaseChat() {
    const dbmessage = useSelector(SelectChat);
    console.log(dbmessage);
    const dispatch = useDispatch();
    const [message, setMessage] = useState([]);
    const [room, setRoom] = useState("public");
    const [messageArray, setMessageArray] = useState(dbmessage)
    const [response, setResponse] = useState({ message: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // setMessage(response); 
        // setMessageArray([response, ...messageArray])
        console.log(message);
        dispatch(addChats(message))
        socket.emit("usermessage", room, message);
    }
    const updateField = (e) => {
        setMessage({
            // ...response,
            [e.target.name]: e.target.value
        })
       
    }

    

    return (
        <>
            <Container fluid className=''>
                <Container>
                    <Row>
                        <Col className='messageBox top' >
                           {dbmessage.map((messageList, i) => {
                               console.log(messageList);
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
