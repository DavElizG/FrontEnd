import { useState, useEffect } from 'react';
import { getAppointmentsById } from '../services/appointmentServices';
import { Appointment } from '../types/Types';

const getAppointments = (userId: number) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getAppointmentsById(userId);
                setAppointments(response);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [userId]);

    return { appointments, loading, error };
};

export default getAppointments;
