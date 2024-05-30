import axios from 'axios';
import {UserBasicData} from "../entities";
//отправка на бэк почты и пароля
export const loginUserService = async (email: string, password: string): Promise<UserBasicData> => {
    const response = await axios.post<UserBasicData>('http://localhost:5294/api/User/Login', {
        email,
        password,
    });
    return response.data;
};
