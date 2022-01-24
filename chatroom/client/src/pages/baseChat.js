import { Col, Row, Container, Button, Form, TabContent, Card, CardImg } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats, retrieveChats } from "../actions";
import socket from "../socket/Socket"
import { SelectChat } from "../state/chatSlice";
import chatContent from '../content.js'
import { useParams } from "react-router-dom";

function BaseChat(props) {
    const messages = useSelector(SelectChat);
    // console.log(messages);
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const [room, setRoom] = useState("public");
    const { index } = useParams();
    let bg = "white"

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

    const bgColor = (e) => {
        e.preventDefault();
        bg = document.getElementById('colorInput').value
    }

    return (
        <>
            <Container fluid="true" className='center'>
                <Container className="box top ">
                    <Row className="miniMargin">
                        <div><br /></div>
                        <Col xs={8} className="contactTitle top">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{chatContent[index].title}</Card.Title>
                                    <CardImg src={chatContent[index].img} />
                                </Card.Body>
                            </Card>
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
                                        <Col className='messageBox top' style={{backgroundColor: `${bg}`}}>
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
                                                <button className="bg-0 unout miniMargin btn-outline-dark btn-lg">
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
