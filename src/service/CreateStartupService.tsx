import axios from "axios";

export const handleCreateStartup = async (data: FormData) => {
    try{
        const response = await axios.post("create-startup-post",data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending startup data', error);
        throw error;
    }
};