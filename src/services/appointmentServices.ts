import axios from "axios";
import { Appointment } from "../types/Types";

const baseURL = 'https://localhost:7108/api/Appointments';

export const getAppointment = async () => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    const response = await axios.get(`${baseURL}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response;
};
export const getToday = async () => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  const response = await axios.get(`${baseURL}/today`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  });
  return response;
};


export const createAppointment = async (appointment: any) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  try {
    const response = await axios.post(baseURL, appointment, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAppointment = async (AppointmentId: any) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  const response = await axios.delete(`${baseURL}/${AppointmentId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response;
};

export const updateAppointment = async (AppointmentId: any, Appointment: any) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  const response = await axios.put(`${baseURL}/${AppointmentId}`, Appointment, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export const patchAppointment = async (AppointmentId: string, status: boolean) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  const response = await axios.patch(`${baseURL}/cancel/${AppointmentId}`, { status }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};
