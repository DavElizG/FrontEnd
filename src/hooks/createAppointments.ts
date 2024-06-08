import { useState, useEffect } from 'react';

const createAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const AddAppointment = async (appointment: any, token: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://localhost:7108/api/Appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(appointment)
      });

      if (!response.ok) {
        let errorData;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          errorData = await response.json();
        } else {
          errorData = await response.text();
        }
        console.error('Server error:', errorData);
        throw alert('Error en el servicio de creación de citas, la cita NO ha sido creada');
        
      }

      const data = await response.json();
      setData(data);
      setError(null); // Limpiar el error después de una respuesta exitosa
      
    } catch (error: any) {
      setError(error);
    }
    setIsLoading(false);
    
  };

  

  return { AddAppointment, isLoading, error, data };
};

export default createAppointments;
