import axios from 'axios';
import {StartupProfile, UserBasicData} from "../entities";

const API_URL = 'http://localhost:5294/api/Profile';

export const fetchUserData = async (userId: string): Promise<UserBasicData> => {
    try {
        const response = await axios.get(`${API_URL}/User/Fetch/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetchCreatedStartups = async (userId: string): Promise<StartupProfile[]> => {
    try {
        const response = await axios.get(`${API_URL}/Startup/Created/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching created startups:', error);
        throw error;
    }
};


export const fetchFavoriteStartups = async (userId: string): Promise<StartupProfile[]> => {
    try {
        const response = await axios.get(`${API_URL}/Startup/Favorites/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching favorite startups:', error);
        throw error;
    }
};


