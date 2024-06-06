import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title style={{ color: 'red' }}>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>Solo los administradores pueden eliminar citas</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
