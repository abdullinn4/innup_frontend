import axios from "axios";
import {StartupEntity, StartupProfile} from "../entities";
//Получение всех стартапов для главной страницы, но статус у каждого стартапа = Принято
export const fetchStartups = async (): Promise<StartupEntity[]> => {
    try {
        const response = await axios.get<StartupEntity[]>('http://localhost:5294/api/Startup/Fetch', {withCredentials:true});
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
//Обновление статуса залайканного стартапа - true - сохраняем, false - удаляем из избранных
export const updateLikeStatus = async (startupId: string, liked: boolean): Promise<void> => {
    try {
        const response = await axios.post('http://localhost:5294/api/Startup/Like', { startupId, liked });
        console.log('Like status updated:', response.data);
    } catch (error) {
        console.error('Error updating like status:', error);
        throw error;
    }
};
//Достаем стартап по его айдишнику
export const fetchStartupById = async (id: string): Promise<StartupEntity> => {
    try {
        const response = await axios.get<StartupEntity>(`http://localhost:5294/api/Startup/Get/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching startup:', error);
        throw error;
    }
}
//Получаем массив стартапов по категории
export const fetchStartupsByCategory = async (category: string | undefined): Promise<StartupProfile[]> => {
    try {
        const response = await axios.get<StartupProfile[]>(`http://localhost:5294/api/Startup/GetByCategory/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching startup:', error);
        throw error;
    }
}
