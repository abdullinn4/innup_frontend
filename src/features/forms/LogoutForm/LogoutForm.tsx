import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './logout.module.sass';
import { logoutUser } from '../../user/userSlice';
import {AppDispatch} from "../../../app/store.ts";

export const LogoutForm = () => {
    const dispatch:AppDispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            console.log('Выход совершен успешно');
            setShowModal(false);
        } catch (error) {
            console.error('Ошибка при выходе из аккаунта', error);
        }
    };

    return (
        <>
            <button type="submit" onClick={() => { setShowModal(true); }}>Выйти из аккаунта</button>

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
    );
};
