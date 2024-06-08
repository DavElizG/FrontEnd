import { Modal, Button } from 'react-bootstrap';

const ErrorHoras = ({ isOpen, handleClose }) => {
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'red' }}>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>No se pueden eliminar citas con menos de 24 horas de anticipación</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorHoras;
