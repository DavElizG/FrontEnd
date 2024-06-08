import { useState } from 'react';
import { patchAppointment } from '../services/appointmentServices';

const useCancelAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorhorasOpen, setIsErrorHorasOpen] = useState(false); // Estado para controlar la apertura y cierre del modal
  const [error, setError] = useState<any>(null);

  const handleCancel = async (appointmentId: string) => {
    setIsLoading(true);
    try {
      const updatedStatus = false; // Aquí puedes definir el estado que quieres actualizar
      const response = await patchAppointment(appointmentId, updatedStatus);
      setError(null); // Limpiar el error después de una respuesta exitosa
      window.location.reload();
      return response;
      
    } catch (error) {
      setIsErrorHorasOpen(true); 
      console.error('Error al cancelar la cita', error);
      setError(error);
      // Abre el modal de error en caso de error
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseErrorHoras = () => {
    setIsErrorHorasOpen(false); // Función para cerrar el modal de error
  };

  return { handleCancel, isLoading, error, isErrorhorasOpen, handleCloseErrorHoras};
};

export default useCancelAppointment;
