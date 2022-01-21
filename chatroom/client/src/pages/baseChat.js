import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats, retrieveChats } from "../actions";
import socket from "../socket/Socket"
import { SelectChat } from "../state/chatSlice";

function BaseChat() {
    const messages = useSelector(SelectChat);
    console.log(messages);
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const [room, setRoom] = useState("public");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        dispatch(addChats(message))
        socket.emit("message", message);
    }

    const updateField = (e) => {
        setMessage({
            [e.target.name]: e.target.value
        })
       
    }

        useEffect (() => {
            dispatch(retrieveChats()) //triggers the db call
            }, [dispatch]);

    return (
        <>
            <Container fluid="true" className='center'>
                <Container>
                    <Row>
                        <Col className='messageBox top' >
                           {messages.map((messageList, i) => {
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
