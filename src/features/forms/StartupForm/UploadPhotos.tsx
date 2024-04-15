import {FileInput} from "../../../shared/FileInput.tsx";
import style from "./startupform.module.sass"
import {useState} from "react";
export const UploadPhotos = () => {
    const [mainPhoto, setMainPhoto] = useState<File | null>(null);
    const [selectedMainPhoto,setSelectedMainPhoto] = useState<string | null>(null);

    const handleMainPhoto = (file: File) => {
        setMainPhoto(file)
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedMainPhoto(reader.result as string)
        };
        reader.readAsDataURL(file);
    }
    const handleDeleteSelectedMainPhoto = () => {
        setMainPhoto(null)
        setSelectedMainPhoto(null)
    }




    return(
        <>
            <div>
                <p>Медиа</p>
                <p>Главное фото</p>
                {selectedMainPhoto ? (
                    <div className={style.selected_photo_container}>
                        <img src={selectedMainPhoto} alt="selected avatar" className={style.selected_photo}/>
                        <button type="submit" onClick={handleDeleteSelectedMainPhoto} className={style.delete_selected_photo_button}/>

                    </div>
                ) : (
                    <FileInput onFileSelect={handleMainPhoto}/>
                )}

            </div>
            <div className={style.additional_photos}>
                <p>Дополнительные фото</p>
                <FileInput onFileSelect={() => {}}/>
            </div>
        </>
    )
}