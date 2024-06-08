import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { getAppointment } from '../services/appointmentServices'; // Asegúrate de importar getAppointment desde el archivo correcto

const useGetAppointment = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user, token } = useAuth();

  useEffect(() => {
    const fetchAppointment = async () => {
      setIsLoading(true);
      try {
        const response = await getAppointment(); // Usamos getAppointment en lugar de fetch

        const allData = response.data; // Usamos response.data ya que axios devuelve los datos aquí
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