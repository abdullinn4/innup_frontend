import style from "./settings.module.sass";
import {FileInput} from "../../../shared/FileInput.tsx";
import {useState} from "react";
import {handleDeletePhoto, handleUpdatePhoto} from "../../../service";


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

    const handleUpdate = () => {
        if (avatar) {
            handleUpdatePhoto(avatar)
                .then(result => console.log(result))
                .catch(error => console.error(error));
        }else {
            console.warn("No avatar selected.");
        }
    }
    handleDeletePhoto().then(result => console.log(result), () => {})

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
                    <button type="submit" onSubmit={handleUpdate} className={style.update_button}>Обновить</button>
                    <button type="submit" onSubmit={handleDeletePhoto} className={style.delete_button}>
                            <img src="src/assets/icons/red-delete-icon.svg" alt="delete_icon" className={style.delete_icon}/>
                            <p>Удалить</p>
                    </button>
                </div>
            </div>
        </>
    )
}