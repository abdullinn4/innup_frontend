import axios from "axios";
//отправка на бэк выхода из аккаунта, надо ли это делать в виду использования redux - не знаю...
export const handleLogout = async() => {
    try{
        const response = await axios.post('http://localhost:5294/api/User/Logout');
        if (response.data.success){
            console.log('Выход совершен успешно')
        }else{
            console.error('Ошибка при выходе из аккаунта')
        }
    }catch (error) {
        console.error("Ошибка", error);
    }
}