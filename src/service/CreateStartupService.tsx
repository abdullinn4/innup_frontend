import axios from "axios";
import {StartupDto} from "../entities";

// Отправка только что созданного стартапа на бэкэнд
export const handleCreateStartup = async (startupData: StartupDto) => {
    try {
        const response = await axios.post('http://localhost:5294/api/Startup/Create', startupData);
        return response.data;
    } catch (error) {
        console.error('Error sending startup data', error);
        throw error;
    }
};

// Отправка фотографий стартапа на бэкэнд
export const uploadStartupPhotos = async (startupId: string, photos: File[]) => {
    try {
        const formData = new FormData();
        photos.forEach((photo, index) => {
            formData.append(`photo[${index}]`, photo);
        });
        const response = await axios.post(`http://localhost:5294/api/Startup/${startupId}/Photos`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading startup photos', error);
        throw error;
    }
};
