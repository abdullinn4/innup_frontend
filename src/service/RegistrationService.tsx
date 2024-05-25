import axios, {AxiosError} from "axios";
import {UserSignup} from "../entities"
import {useState} from "react";
export const useSignup = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmitSignup = async (values: UserSignup) => {
        try {
            const response = await axios.post<UserSignup>('http://localhost:5294/api/User/Create',{
                email: values.email,
                password: values.password,
                name: values.name,
                confirmPassword: values.confirmPassword
            });
            console.log(response.data);
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