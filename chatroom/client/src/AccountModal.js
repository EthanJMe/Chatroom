import React from 'react'
import { Container, Modal, } from 'react-bootstrap';

function AccountModal({ show, handleClose }) {
  return (
    <Container >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className=" bg-dark text-white p-3" >
          <Modal.Title>Account Updated</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="bg-dark"/>
      </Modal>
    </Container>
  )
}

export default AccountModal
