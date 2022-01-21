import React from 'react'
import { Container, Modal, Button } from 'react-bootstrap';

function ContactUsModal({ show, handleClose }) {


  return (
    <Container >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className=" bg-dark text-white p-3" >
          <Modal.Title>Thank you for submitting</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="bg-dark"/>
      </Modal>
    </Container>
  )
}

export default ContactUsModal
