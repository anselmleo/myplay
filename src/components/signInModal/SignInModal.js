import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Style from './SignInModal.module.css';
import Input from '../../components/input/Input';

function SignInModal({show, handleShow}) {

  const submitForm = () => {

    handleShow()
  }

  return (
    <>
      <Modal
        className={Style.modal}
        backdrop="static"
        centered
        show={show}
        onHide={handleShow}
      >
        <Modal.Header className={Style.modalHeader}>
          <Modal.Title className={Style.modalTitle}>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "black", color: "white"}}>
          <Input name="email" type="email" placeholder="Enter email"/>
          <Input name="password" type="password" placeholder="Enter password"/>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "black", color: "white"}}>
          <Button variant="secondary" type="submit" onClick={submitForm}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignInModal

