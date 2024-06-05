import { useState } from 'react';
import { patchAppointment } from '../services/appointmentServices';

const useCancelAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleCancel = async (appointmentId: string) => {
    setIsLoading(true);
    try {
      const updatedStatus = false; // Aquí puedes definir el estado que quieres actualizar
      const response = await patchAppointment(appointmentId, updatedStatus);
      setError(null); // Limpiar el error después de una respuesta exitosa
      return response;
    } catch (error) {
      console.error('Error al cancelar la cita', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCancel, isLoading, error };
};

export default useCancelAppointment;