// useFetchProductEdit.ts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAppointmentsById,updateAppointment } from '../services/AppointmentServices';
import { Appointment } from '../types/Types';

const useFetchProductEdit = () => {
    const { AppointmentId } = useParams<{ AppointmentId: string }>();///// revisar los params porque no los estoy usando 
    const [Appointment, setAppointment] = useState<Appointment>({
        AppointmentID: 0,
        DateTime: new Date(),  // Establece la fecha y hora actual como valor predeterminado
        Location: '',
        Status: 'pending',
        AppointmentType: 'general'
    });
    const [formData, setFormData] = useState<Appointment>({
        AppointmentID: 0,
        DateTime: new Date(),  // Establece la fecha y hora actual como valor predeterminado
        Location: '',
        Status: 'pending',
        AppointmentType: 'general'
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const { data } = await getAppointmentsById(AppointmentId);
                setAppointment(data);
                setFormData(data);
                setLoading(false);
            } catch  {
                setError(error);
                setLoading(false);
            }
        };

        fetchAppointment();
    }, [AppointmentId]);

    const handleUpdateAppointment = async () => {
        try {
            await updateAppointment(AppointmentId || '', formData);
            setAppointment(formData);
        } catch {
            setError(error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    



    return { Appointment, formData, loading, error, handleUpdateAppointment, handleInputChange };
};

export default useFetchProductEdit;
