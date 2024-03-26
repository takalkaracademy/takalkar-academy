"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBackdrop = () => {
    const [show, setShow] = useState(true);
  
    return (
      <>
       
       <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <video width="auto" height="auto" autoPlay muted loop>
            <source src="./scholarshipPopup.mp4" type="video/mp4"/>
        </video>
          </p>
        </Modal.Body>
      </Modal>
      </>
    );
  
}

export default ModalBackdrop;