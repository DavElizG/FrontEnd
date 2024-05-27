import axios from "axios";

const baseURL = 'ApiURL';

export const getAppointmentService = async () => {
    const response = await axios.get(baseURL);
    return response;
} 

export const getAppointmentsById = async (AppointmentID:any) => {
    const response = await axios.get(`${baseURL}/${AppointmentID}`);
    return response;
    
} 

export const createAppointment = async (Appointment:any) => {
    const response = await axios.post(`${baseURL}`, Appointment);
    return response;
} 

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