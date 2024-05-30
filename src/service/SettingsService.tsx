import axios, {AxiosResponse} from "axios";
import {UserBasicData, UserChangePassword} from "../entities";
import {useState} from "react";
import {NavigateFunction} from "react-router-dom";

//Отправка на бэк базовой инфы о юзере типа UserBasicData
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
    //Отправка на бэк паролей для смены парля типа UserChangePassword
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
//Отравка на бэк удаления акка без типизации, по аутентификации надо достать его
export const handleDeleteAccount = async (navigate:NavigateFunction) => {
    try{
        const response = await axios.delete('http://localhost:5294/api/User/Delete-account'); //мб не delete, a post
        if (response.data.success){
            console.log('Аккаунт успешно удален');
            navigate('/startups')
        }else{
            console.error('Ошибка при удалении аккаунта')
        }
    }catch (error) {
        console.error("Ошибка", error);
    }
}
//Обновление фото юзера
export const handleUpdatePhoto = (avatar: File): Promise<AxiosResponse> => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    return axios.post('http://localhost:5294/api/User/Upload-photo', formData);
}
//Удаление фото юзера
export const handleDeletePhoto = (): Promise<void> => {
    return axios.delete('http://localhost:5294/api/User/Delete-photo');
}