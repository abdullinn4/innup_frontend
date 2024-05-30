import axios from "axios";
import {StartupEntity} from "../entities";

const API_URL = 'http://localhost:5294/api/AdminStartups'
//метод, отдает StartupEntity для рендеринга всех стартапов Админу, любого статуса
export const fetchAllStartups = async (): Promise<StartupEntity[]> => {
    try{
        const response = await axios.get<StartupEntity[]>(`${API_URL}/Fetch`)
        return response.data;
    }catch (error) {
        console.error('Error sending startups data', error);
        throw error;
    }
}
//Отправляем\Обновляем статус стартапа, отправляем id и status
export const updateStartupStatus = async (id: string, status: 'В обработке' | 'Принято' | 'Отклонено'):Promise<void> => {
    await axios.put(`${API_URL}/UpdateStartupStatus/${id}`,{status});
}