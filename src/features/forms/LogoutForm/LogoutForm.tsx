import {useState} from "react";
import axios from "axios";
import style from "./logout.module.sass"

export const LogoutForm = () => {
    const[showModal,setShowModal] = useState(false);
    const handleLogout = async() => {
        try{
            const response = await axios.post('post/logout');
            if (response.data.success){
                console.log('Выход совершен успешно')
                //редирект на главную
            }else{
                console.error('Ошибка при выходе из аккаунта')
            }
        }catch (error) {
            console.error("Ошибка", error);
        }
    }

    return(
        <>
            <button type="submit" onClick={() => {setShowModal(true)}}>Выйти из аккаунта</button>

            {showModal && (
                <div className={style.logout_modal}>
                    <p>Вы уверены, что хотите выйти?</p>
                    <div className={style.modal_buttons_container}>
                        <button type="submit" className={style.modal_button} onClick={handleLogout}>Да</button>
                        <button type="submit" className={style.modal_button} onClick={() => setShowModal(false)}>Нет</button>
                    </div>
                </div>
            )}
        </>
    )
}