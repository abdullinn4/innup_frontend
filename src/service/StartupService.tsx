import axios from "axios";
import { StartupEntity } from "../entities";

export const fetchStartups = async (): Promise<StartupEntity[]> => {
    try {
        const response = await axios.get<StartupEntity[]>('http://localhost:5294/api/Startups/Fetch');
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
export const updateLikeStatusStartup = async (startupId: string, liked: boolean): Promise<void> => {
    try {
        const response = await axios.post('http://localhost:5294/api/Startup/Like', { startupId, liked });
        console.log('Like status updated:', response.data);
    } catch (error) {
        console.error('Error updating like status:', error);
        throw error;
    }
};