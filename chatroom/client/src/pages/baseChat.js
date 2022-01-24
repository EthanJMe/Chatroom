import { Col, Row, Container, Button, Form, TabContent, Card, CardImg } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addChats, retrieveChats } from "../actions";
import socket from "../socket/Socket"
import { SelectChat } from "../state/chatSlice";
import chatContent from '../content.js'
import { useParams } from "react-router-dom";
import avatar from '../assets/placeholder.png'

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
                        <Col xs={8} className="w-25 contactTitle top">
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
                                <br/>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                                <Row className="miniMargin">
                                     <img className="avatar w-25" src={avatar} alt = ''/>
                                    <div className="w-25"><h2>User</h2></div>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={8}  >
                            <Row>
                                <Col className='messageBox top'>
                                    {messages.map((messageList, i) => {
                                        console.log(messageList);
                                        return (
                                            <div key={i} className="messageSpacer">
                                                <h2 ><span className="message top"> {messageList.message}</span></h2>
                                            </div>
                                        )
                                    })}
                                </Col>


                </Container>

            </Container>
        </>
    )
}

export default BaseChat
