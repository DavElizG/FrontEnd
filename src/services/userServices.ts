import axios from "axios";

const baseURL = 'https://localhost:7108/api/User';
const URLRegister = 'https://localhost:7108/register';

export const getUserService = async () => {
    const response = await axios.get(baseURL);
    return response;
} 

export const getUsersById = async (userId:any) => {
    const response = await axios.get(`${baseURL}/${userId}`);
    return response;
    
} 

export const createRegister = async (user:any) => {
    const response = await axios.post(`${URLRegister}`, user);
    return response;
} 