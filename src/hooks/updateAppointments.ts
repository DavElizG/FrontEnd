// updateAppointments.ts
import { useState } from 'react';
// Asegúrate de importar el tipo correctamente
import { updateAppointment } from '../services/appointmentServices';
import { Appointment } from '../types/Types';

const useUpdateAppointment = (refetch: () => void) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSave = async (AppointmentId: string, Appointment: Appointment) => {
        setLoading(true);
        setError(null);
        try {
            const response = await updateAppointment(AppointmentId.toString(), Appointment);
            setLoading(false);
            refetch(); // Llama a refetch después de la actualización
            return response;
        } catch  {
            setError(error);
            setLoading(false);
        }
    };

    return { handleSave, loading, error };
};

export default useUpdateAppointment;