import axios from "axios";

export const handleCreateStartup = async (data: FormData) => {
    try{
        const response = await axios.post('http://localhost:5294/api/Startup/Create',data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending startups data', error);
        throw error;
    }
};