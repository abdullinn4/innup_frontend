import axios from "axios";
import {StartupEntity} from "../entities";

const API_URL = 'http://localhost:5294/api/AdminStartups'

export const fetchAllStartups = async (): Promise<StartupEntity[]> => {
    try{
        const response = await axios.get<StartupEntity[]>(`${API_URL}/Fetch`)
        return response.data;
    }catch (error) {
        console.error('Error sending startups data', error);
        throw error;
    }
}
export const updateStartupStatus = async (id: string, status: 'В обработке' | 'Принято' | 'Отклонено'):Promise<void> => {
    await axios.put(`${API_URL}/UpdateStartupStatus/${id}`,{status});
}