import axios from "axios";
import { User } from "../types/Types";

const baseURL = 'https://localhost:7108/api/User';
const URLRegister = 'https://localhost:7108/register';

export const getUserService = async () => {
    const response = await axios.get(baseURL);
    return response;
} 


export const getUsersById = async (userId: number) => {
    const response = await axios.get<User>(`${baseURL}/${userId}`);
    return response.data;
};

export const createRegister = async (user:any) => {
    const response = await axios.post(`${URLRegister}`, user);
    return response;
} 