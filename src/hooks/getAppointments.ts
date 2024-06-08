import { useState, useEffect } from 'react';

const useGetAppointment = (token: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      const token = localStorage.getItem('token'); // Obtener el token del localStorage
      console.log("Token: ", token); // Imprimir el token en la consola
      setIsLoading(true);
      try {
        const response = await fetch('https://localhost:7108/api/Appointments', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
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
          throw new Error('Error en el servicio de obtención de citas');
        }

        const data = await response.json();
        setData(data);
        setError(null); // Limpiar el error después de una respuesta exitosa
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchAppointment();
  }, [token]);

  return { data, isLoading, error };
};

export default useGetAppointment;