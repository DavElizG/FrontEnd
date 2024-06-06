import { useState } from 'react';
import { deleteAppointment } from '../services/appointmentServices';

const RemoveAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const DeleteAppointment = async (AppointmentId: any) => {
    setIsLoading(true);
    try {
      const response = await deleteAppointment(AppointmentId);
      setError(null); // Limpiar el error después de una respuesta exitosa
      window.location.reload();
      return response;
    } catch (error) {
      console.error('Error en el servicio de eliminación de citas', error);
      setShowModal(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (appointmentId: any, onSuccess: () => void) => {
    try {
      await DeleteAppointment(appointmentId);
      onSuccess(); // Llamar a la función de devolución de llamada después de una eliminación exitosa
    } catch (error) {
      console.error('Error al eliminar la cita', error);
    }
  };

  return { handleDelete, isLoading, error, showModal, setShowModal };
};

export default RemoveAppointment;
