import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats } from "../actions";
import socket from "../socket/Socket"
import { selectChat } from "../state/chatSlice";
import rooms from '../Rooms'
const Input = document.getElementById('input');

function BaseChat() {
    const dbmessage = useSelector(selectChat);
    const dispatch = useDispatch();
    const [message, setMessage] = useState([]);
    const [room, setRoom] = useState(rooms);
    const [messageArray, setMessageArray] = useState(dbmessage)
    const [response, setResponse] = useState({ message: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageArray([response, ...messageArray])
        dispatch(addChats(messageArray))
        socket.emit("usermessage", room, message);
        Input.value = "";
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
            <Container fluid="true" className='center'>
                <Container>
                    <div className="box top">
                        <h1>{`room: ${room[2].name}`}</h1>
                        <Row xs={2} className="center">
                            <Col className={`${room[2].name}MessageBox top`} >
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
                                    <Form.Control id="input" type="text" placeholder="enter your message here" onChange={updateField} name="message"></Form.Control>
                                    <button className="bg-0 unout miniMargin btn-outline-dark btn-lg" onClick={handleSubmit}>
                                        Send
                                    </button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default BaseChat
