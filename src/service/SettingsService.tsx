import axios from "axios";
import {UserBasicData, UserChangePassword} from "../entities";
import {useState} from "react";

export const handleSubmitBasicData = async (values: UserBasicData) => {
    try {
        const response = await axios.post('http://localhost:5294/api/User/Add-basic-data', {
            name: values.name,
            aboutMe: values.aboutMe,
            username: values.email
        })
        console.log('',response.data)
    }catch (error) {
        console.error('',error)
    }
}

export const useChangePassword = () => {
    const [message, setMessage] = useState('');

    const handleSubmitChangePassword = async (values: UserChangePassword) => {
        try {
            const response = await axios.post('http://localhost:5294/api/User/Change-password', {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
            })
            if (response.data.success) {
                setMessage("Смена пароля прошла успешно")
            }
        } catch (error: unknown) {
            const err = error as Error;
            if (err.message === 'Request failed with status code 401') {
                setMessage('Неправильный пароль');
            } else {
                console.error('Error:', error);
            }
        }
    }
    return {handleSubmitChangePassword, message}
}
export const handleDeleteAccount = async () => {
    try{
        const response = await axios.delete('http://localhost:5294/api/User/Delete-account'); //мб не delete, a post
        if (response.data.success){
            console.log('Аккаунт успешно удален');
            //редирект на главную страницу
        }else{
            console.error('Ошибка при удалении аккаунта')
        }
    }catch (error) {
        console.error("Ошибка", error);
    }
}

export const handleUpdatePhoto = (avatar: File): Promise<any> => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    return axios.post('http://localhost:5294/api/User/Upload-photo', formData);
}
export const handleDeletePhoto = (): Promise<void> => {
    return axios.delete('http://localhost:5294/api/User/Delete-photo');
}