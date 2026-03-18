"use client"
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBackdrop = () => {
    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setShow(true);
    }, []);
  
    if (!mounted) {
        return null;
    }

    return (
      <>
       
       <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title text-danger p-0">
            IMPORTANT ANNOUNCEMENT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>
            <video width="auto" height="auto" autoPlay muted loop>
            <source src="./scholarshipPopup.mp4" type="video/mp4"/>
        </video>
          </p> */}
          <img src="./admissionopen.jpeg" alt="admissionopen" width="100%" height="auto" />
        </Modal.Body>
      </Modal>
      </>
    );
  
}

export default ModalBackdrop;