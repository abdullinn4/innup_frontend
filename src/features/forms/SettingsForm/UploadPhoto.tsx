import style from "./settings.module.sass";
import {FileInput} from "../../../shared/FileInput.tsx";
import {useState} from "react";
import axios from "axios";


export const UploadPhoto = () => {
    const [avatar,setAvatar] = useState<File | null>(null);
    const[selectedPhoto,setSelectedPhoto] = useState<string | null>(null)
    const handleAvatarSelect = (file: File) => {
        setAvatar(file)
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedPhoto(reader.result as string)
        };
        reader.readAsDataURL(file);
    }
    const handleUpdatePhoto = async () => {
        if (avatar) {
            const formData = new FormData();
            formData.append("avatar", avatar)
            try {
                const response = await axios.post('post/upload-photo', formData)
                console.log("Фото успешно загружено в профиль",response.data)
            } catch (error) {
                console.error("Ошибка при загрузке фото на сервер", error)
            }
        }
    }
    const handleDeletePhoto = async () => {
        try {
            await axios.delete('api/delete_photo');
            console.log("Фото успешно удалено")
            setAvatar(null)
        }catch (error){
            console.error("Ошибка при удалении фото", error)
        }
    }
    const handleDeleteSelectedPhoto = () => {
        setAvatar(null)
        setSelectedPhoto(null)
    }
    return(
        <>
            <h2>Фото профиля</h2>
            <div className={style.avatar_upload_form}>
                {selectedPhoto ? (
                    <div className={style.selected_photo_container}>
                        <img src={selectedPhoto} alt="selected avatar" className={style.selected_photo}/>
                        <button type="submit" onClick={handleDeleteSelectedPhoto} className={style.delete_selected_photo_button}/>
                    </div>
                ):(
                    <FileInput onFileSelect={handleAvatarSelect}/>
                )}
                <div className={style.button_container}>
                    <button type="submit" onSubmit={handleUpdatePhoto} className={style.update_button}>Обновить</button>
                    <button type="submit" onSubmit={handleDeletePhoto} className={style.delete_button}>
                            <img src="src/assets/icons/red-delete-icon.svg" alt="delete_icon" className={style.delete_icon}/>
                            <p>Удалить</p>
                    </button>
                </div>
            </div>
        </>
    )
}