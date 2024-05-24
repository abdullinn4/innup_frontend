import Modal from 'react-modal';
import React from 'react';
import style from './startup.module.sass'


interface ContactModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onCall: () => void;
    onEmail: () => void;
    onChat: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onRequestClose, onCall, onEmail, onChat }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={style.custom_modal} overlayClassName={style.custom_overlay}>
            <div className={style.modal_header}>
                <h2>Выберите вариант связи</h2>
                <button className={style.close_button} onClick={onRequestClose}>×</button>
            </div>
            <div className={style.modal_content}>
                <button className={style.contact_button} onClick={onCall}>Позвонить</button>
                <button className={style.contact_button} onClick={onEmail}>Написать письмо</button>
                <button className={style.contact_button} onClick={onChat}>Чат</button>
            </div>
        </Modal>
    );
}
