import React from 'react'
import { Container, Modal, Button } from 'react-bootstrap';

function AccountModal({show, handleClose}) {
    

    return (
            <Container >
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-white p-3" closeButton>
          <Modal.Title >Thanks for submitting</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="bg-dark">
        <Button onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    )
}

export default AccountModal
