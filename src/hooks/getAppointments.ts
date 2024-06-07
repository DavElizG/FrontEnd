import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';

const useGetAppointment = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchAppointment = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://localhost:7108/api/Appointments', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
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

        const allData = await response.json();
        const userId = parseInt(user?.NameIdentifier); // Usa el NameIdentifier del user
        const userData = allData.filter((appointment: any) => appointment.userId === userId);
        console.log('User appointments:', userData); // Muestra las citas del usuario en la consola
        setData(userData);
        setError(null); // Limpiar el error después de una respuesta exitosa
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };

    if (token && user) { // Solo hacer la petición si el token y el user están presentes
      fetchAppointment();
    }
  }, [token, user]); // Asegúrate de incluir token y user en la lista de dependencias

  return { data, isLoading, error };
};

export default useGetAppointment;