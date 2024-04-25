import axios from "axios";
import {useState} from "react";
import {UserLogin} from "../entities"

export const useLogin = () => {
    const[errorMessage, setErrorMessage] = useState('')
    const handleSubmitLogin = async (values: UserLogin) => {
        try {
            const response = await axios.post<UserLogin>('post/login', {
                email: values.email,
                password: values.password,
            });
            console.log(response.data)
        }catch (error: unknown){
            const err = error as Error;
            if (err.message === 'Request failed with status code 401'){
                setErrorMessage('Неправильный email или пароль');
            }else {
                console.error('Error:', error);
            }
        }
    };
    return{errorMessage,handleSubmitLogin};
}