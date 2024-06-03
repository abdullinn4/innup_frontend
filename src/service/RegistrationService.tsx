import axios, {AxiosError} from "axios";
import {UserSignup} from "../entities"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const useSignup = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    //Отправка на бэк инфы о юзере для его регистрации типа UserSignup
    const handleSubmitSignup = async (values: UserSignup) => {
        try {
            const response = await axios.post<UserSignup>('http://localhost:5294/api/User/Create',{
                email: values.email,
                password: values.password,
                firstname: values.name
            });
            console.log(response.data);
            navigate('/login')
        } catch (error: unknown) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 409){
                // Если статус 409 (конфликт), значит аккаунт существует
                setErrorMessage('Аккаунт с таким email уже существует');
            } else {
                console.error('Error:', error);
            }
        }
    };

    return { errorMessage, handleSubmitSignup };
};