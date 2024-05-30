import {UserBasicData} from "../entities";
import axios from "axios";
//Получаем данные юзера
export const userFetchData = async (): Promise<UserBasicData> => {
    const response = await axios.get<UserBasicData>('http://localhost:5294/api/User');
    return response.data;
}