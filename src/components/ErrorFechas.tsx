import { Modal, Button } from 'react-bootstrap';

const ErrorFechas = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'red' }}>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>No se pueden crear dos citas en un mismo día.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorFechas;
