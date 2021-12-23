import { Form } from "react-bootstrap"
import ContactUsModal from "./ContactUsModal";
import { useState } from "react";
function ContactUsBody() {
    const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
    const handleShow = () => setShow(true); //function to change show to true and load Modal
    const handleClose = () => setShow(false);
    return (
        <div className="bg-1">

            <h2 className="bodyText">please enter your feedback below</h2>
            <Form>
                <Form.Control as="textarea" style={{ height: '70vh', width: '60vw' }} />
                <button onClick={(e) => {
                    e.preventDefault();
                    handleShow()
                }}>submit here</button>
            </Form>
            <ContactUsModal setShow={setShow} show={show} handleClose={handleClose} />
        </div>

    )
}
export default ContactUsBody