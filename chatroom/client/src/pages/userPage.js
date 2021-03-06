import React from 'react'
import { Container, Row, Col, Form, Button, TabContent } from "react-bootstrap"
import avatar from '../assets/placeholder.png'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { redux_addUsers } from '../state/userSlice';
import { addUsers, getUsers } from '../actions';
import AccountModal from '../AccountModal'
import { Link } from 'react-router-dom';
import socket from '../socket/Socket';



function UserPage() {
    const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
    const handleShow = () => setShow(true); //function to change show to true and load Modal
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();
    const userContent = useSelector(addUsers);

    //user db
    const [response, setResponse] = useState()
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(response)
        dispatch(addUsers(response));
        socket.emit("response", response)
    }
    
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getUsers()) //triggers the db call
    }, [dispatch]);


    return (
        <div>
            <Container fluid className='bg-1'>
                <Row className="justify-content-md-center">
                    <Col className="top" xs lg="6">
                        <div class='box'>
      
                            <Form onSubmit={handleSubmit}>
                                <Form.Label className='miniMargin' onChange={updateField} name="avatar"><img className='avatar' src={avatar} alt='' /></Form.Label>
                                <Form.Text className='miniMargin'><h3>Username</h3></Form.Text>
                                <Form.Control className='miniMargin' type="Username" placeholder="Password" name="userName" onChange={updateField}/>
                                <Form.Label className='miniMargin'><h3>Password</h3></Form.Label>
                                <Form.Control className='miniMargin' type="Password" placeholder="Password" name="password" onChange={updateField}/>
                                <Form.Text className='miniMargin'><h3>FavColor</h3></Form.Text>
                                <Form.Control className='miniMargin' type="Color" placeholder="Favorite Color" name="favoriteColor" onChange={updateField}/>
                                <Button onClick={(e) => {
                                    
                                    e.preventDefault();
                                    handleSubmit()
                                    handleShow()
                                }}>Submit here</Button>
                            </Form>
                            <div className="userColor miniMargin space">

                            </div>
                            <Link
                                        className=" btn-outline-dark btn-lg"
                                        role="button"
                                        to="/EditUser"
                                    >
                                        Edit Profile
                                    </Link>
                                <div><br/></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserPage
