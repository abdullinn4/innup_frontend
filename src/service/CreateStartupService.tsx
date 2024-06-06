import axios from "axios";
//Отправка только что созданного стартапа на бэк
export const handleCreateStartup = async (data: FormData) => {
    try{
        const response = await axios.post('http://localhost:5294/api/Startup/Create',data,  {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error sending startups data', error);
        throw error;
    }
};