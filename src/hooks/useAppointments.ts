import { useAuth } from '../context/AuthProvider';
import { Appointment } from '../types/Types';
import { getToday } from '../services/appointmentServices';
import { useEffect, useState } from 'react';

const useAppointments = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const { token } = useAuth(); // Obtener el token JWT del contexto de autenticación

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const response = await getToday(); // Usar la función getAppointment

               
                if (Array.isArray(response.data)) {
                   
                   

                    setAppointments(response.data);
                } else {
                    setAppointments([]);
                }
            } catch  {
                setError(error);
                setAppointments([]); // En caso de error, inicializa appointments como un array vacío
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [token]); // Dependencia en el token para que se vuelva a ejecutar cuando este cambie

    return { appointments, loading, error };
};
export default useAppointments;