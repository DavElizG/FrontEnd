import { Modal, Button } from 'react-bootstrap';

const CreationModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'green' }}>Cita Creada</Modal.Title>
      </Modal.Header>
      <Modal.Body>¡La cita se ha creado con éxito!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreationModal;
