import {useState} from "react";
import axios from "axios";
import style from "./settings.module.sass";
export const DeleteAccount = () => {
    const[showModal,setShowModal] = useState(false)
     const handleDeleteAccount = async () => {
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
    return(
        <>
            <button type="submit" onClick={() => setShowModal(true)} className={style.delete_account_button}>
                <img src="src/assets/icons/white_delete_icon.svg" alt="delete_icon" className={style.delete_icon} />
                <p>Удалить аккаунт</p>
            </button>

            {showModal && (
                <div className={style.delete_account_modal}>
                    <p>Вы уверены, что хотите удалить аккаунт?</p>
                    <div className={style.modal_buttons_container}>
                        <button type="submit" onClick={handleDeleteAccount} className={style.modal_button}>Да</button>
                        <button type="submit" onClick={() => setShowModal(false)} className={style.modal_button}>Нет</button>
                    </div>
                </div>
            )}
        </>
    )
}