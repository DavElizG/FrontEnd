import { useState } from 'react';
import { createAppointment } from '../services/AppointmentServices';

const createAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const AddAppointment = async (Appointment:any) => {
    setIsLoading(true);
    try {
      const response = await createAppointment(Appointment);
      setData(response.data);
    } catch {
      setError(error);
    }
    setIsLoading(false);
  };

  return { AddAppointment, isLoading, error, data };
};

export default createAppointments;
