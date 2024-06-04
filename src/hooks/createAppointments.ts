import { useState } from 'react';
import { createAppointment } from '../services/appointmentServices';

const createAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const AddAppointment = async (appointment: any) => {
    setIsLoading(true);
    try {
      const response = await createAppointment(appointment);
      setData(response.data);
      setError(null); // Limpiar el error después de una respuesta exitosa
    } catch (error: any) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { AddAppointment, isLoading, error, data };
};

export default createAppointments;
