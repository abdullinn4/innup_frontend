import axios from 'axios';
import {StartupProfile, UserBasicData} from "../entities";

const API_URL = 'http://localhost:5294/api';
//получение по id юзера базовой инфы о юзере типа UserBasicData
export const fetchUserData = async (userId: string): Promise<UserBasicData> => {
    try {
        const response = await axios.get(`${API_URL}/User/GetById/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
//получение по id юзера его созданные стартапы типа StartupProfile[], любого статуса
export const fetchCreatedStartups = async (userId: string): Promise<StartupProfile[]> => {
    try {
        const response = await axios.get(`${API_URL}/Startup/Created/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching created startups:', error);
        throw error;
    }
};

//получение по id юзера его избранные стартапы типа StartupProfile[]
export const fetchFavoriteStartups = async (userId: string): Promise<StartupProfile[]> => {
    try {
        const response = await axios.get(`${API_URL}/Startup/Favorites/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching favorite startups:', error);
        throw error;
    }
};


