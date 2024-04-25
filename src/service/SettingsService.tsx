import axios from "axios";
import {UserBasicData, UserChangePassword} from "../entities";
import {useState} from "react";

export const handleSubmitBasicData = async (values: UserBasicData) => {
    try {
        const response = await axios.post('post/basic-data-form', {
            name: values.name,
            aboutMe: values.aboutMe,
            username: values.username
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
            const response = await axios.post('post/change-password', {
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
        const response = await axios.delete("api/delete-account"); //мб не delete, a post
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
    return axios.post('post/upload-photo', formData);
}
export const handleDeletePhoto = (): Promise<void> => {
    return axios.delete('api/delete_photo');
}