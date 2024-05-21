import Modal from 'react-modal';
import React from "react";

interface ContactModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onCall: () => void;
    onEmail: () => void;
    onChat: () => void;
}

export const ContactModal:React.FC<ContactModalProps> = ({isOpen,onRequestClose,onCall,onEmail,onChat}) => {
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Выберите вариант связи</h2>
            <button onClick={onCall}>Позвонить</button>
            <button onClick={onEmail}>Написать письмо</button>
            <button onClick={onChat}>Чат</button>
        </Modal>
    )
}