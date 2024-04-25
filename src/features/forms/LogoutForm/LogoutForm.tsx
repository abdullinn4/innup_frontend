import {useState} from "react";
import style from "./logout.module.sass"
import {handleLogout} from "../../../service";

export const LogoutForm = () => {
    const[showModal,setShowModal] = useState(false);

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