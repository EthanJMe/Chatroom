import { Form } from "react-bootstrap"
import ContactUsModal from "../ContactUsModal";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"

function ContactUsBody() {
    const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
    const handleShow = () => setShow(true); //function to change show to true and load Modal
    const handleClose = () => setShow(false);
    return (
        <Container fluid className='bg-1'>
            <Row className="justify-content-md-center">
                <Col className="top" xs lg="6">
                    <div className="box miniMargin">
                    <div class='contactTitle w-50'>
                                <h3>please enter your feedback below</h3>
                            </div>
                        <Form className="">
                            <Form.Control as="textarea" style={{ height: '20vh', width: '45vw', marginLeft: 'auto', marginRight: 'auto' }} />
                            <button className="bg-0 unout miniMargin btn-outline-dark btn-lg" onClick={(e) => {
                                    e.preventDefault();
                                    handleShow()
                                }}>
                                    Submit
                                </button>
                        </Form>
                        <ContactUsModal setShow={setShow} show={show} handleClose={handleClose} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default ContactUsBody