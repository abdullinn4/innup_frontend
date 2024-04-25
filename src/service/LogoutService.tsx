import axios from "axios";

export const handleLogout = async() => {
    try{
        const response = await axios.post('post/logout');
        if (response.data.success){
            console.log('Выход совершен успешно')
            //редирект на главную на бэке
        }else{
            console.error('Ошибка при выходе из аккаунта')
        }
    }catch (error) {
        console.error("Ошибка", error);
    }
}