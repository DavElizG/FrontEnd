import axios from "axios";

const baseURL = 'apiURL';

export const getUserService = async () => {
    const response = await axios.get(baseURL);
    return response;
} 

export const getUsersById = async (userId:any) => {
    const response = await axios.get(`${baseURL}/${userId}`);
    return response;
    
} 