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

    useEffect(() => {
        dispatch(retrieveChats()) //triggers the db call
    }, [dispatch]);

    return (
        <>
            <Container fluid="true" className='center'>
                <Container className="box top ">
                    <Row className="miniMargin">
                        <div><br /></div>
                        <Col xs={8} className="contactTitle top">
                            <h2 className="top">Room Title</h2>
                        </Col>
                    </Row>
                    <Row className="miniMargin top ">
                        <Col xs={3} className="top">
                            <div className="usersJoined">
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                <h2 >Avatar:User</h2>
                                
                            </div>
                        </Col>
                        <Col xs={8}  >
                            <Row>
                                <Col className='messageBox top'>
                                    <div className="chatCover"></div>
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
                                <Col className="miniMargin top">
                                    <Form className="messageForm " onSubmit={handleSubmit}>
                                        <Form.Control type="text" placeholder="enter your message here" onChange={updateField} name="message" />
                                        <button className="bg-0 unout miniMargin btn-outline-dark btn-lg" onClick={handleSubmit}>
                                            Send
                                        </button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default BaseChat
