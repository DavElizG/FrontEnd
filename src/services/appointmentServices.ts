import axios from "axios";
import { Appointment } from "../types/Types";

const baseURL = 'https://localhost:7108/api/Appointments';

export const getAppointmentService = async () => {
    const response = await axios.get(baseURL);
    return response;
} 



export const getAppointmentsById = async (userId: number): Promise<Appointment[]> => {
    const response = await axios.get<Appointment[]>(`${baseURL}/user/${userId}`);
    return response.data;
};


export const createAppointment = async (appointment:any) => {
    try {
        const response = await axios.post(baseURL, appointment);
        return response;
    } catch (error) {
        console.error('Error en el servicio de creación de citas', error);
        throw error;
    }
};

export const deleteAppointment = async (AppointmentId:any) => {
      const response = await axios.delete(`${baseURL}/${AppointmentId}`);
      return response;
 
}

export const updateAppointment= async (AppointmentId: string, Appointment: any) => {
        const response = await axios.put(`${baseURL}/${AppointmentId}`, Appointment);
        return response.data;
 
};

export const patchAppointment = async (AppointmentId: string, Appointment: any) => {
    const response = await axios.patch(`${baseURL}/${AppointmentId}`, Appointment);
    return response.data;
}