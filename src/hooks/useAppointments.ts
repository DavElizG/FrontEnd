import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { Appointment } from '../types/Types';
import { getAppointment } from '../services/appointmentServices';


const useAppointments = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const { token } = useAuth(); // Obtener el token JWT del contexto de autenticación

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const response = await getAppointment(); // Usar la función getAppointment

                // Verifica que la respuesta sea un array
                if (Array.isArray(response.data)) {
                    setAppointments(response.data);
                } else {
                    setAppointments([]);
                }
            } catch (error) {
                setError(error);
                setAppointments([]); // En caso de error, inicializa appointments como un array vacío
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [token]);

    return { appointments, loading, error };
};

export default useAppointments;