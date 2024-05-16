import {FileInput} from "../../../shared/FileInput.tsx";
import style from "./startupform.module.sass"
import {useState} from "react";
export const UploadPhotos = () => {
    const [mainPhoto, setMainPhoto] = useState<File | null>(null);
    const [selectedMainPhoto,setSelectedMainPhoto] = useState<string | null>(null);

    const[additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
    const [selectedAdditionalPhotos, setSelectedAdditionalPhotos] = useState<string[]>([])

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

    const handleAdditionalPhotos = (file: File) => {
        setAdditionalPhotos((prevPhotos) => [...prevPhotos, file]);
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedAdditionalPhotos((prevPhotos) => [...prevPhotos, reader.result as string]);
        };
        reader.readAsDataURL(file);
    };
    const handleDeleteSelectedAdditionalPhoto = (index: number) => {
        setAdditionalPhotos((prevPhotos) => {
            const newPhotos = [...prevPhotos];
            newPhotos.splice(index, 1);
            return newPhotos;
        });
        setSelectedAdditionalPhotos((prevPhotos) => {
            const newPhotos = [...prevPhotos];
            newPhotos.splice(index, 1);
            return newPhotos;
        });
    };



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
                <div className={style.add_additional_photos_container}>
                    {selectedAdditionalPhotos.map((photo,index) => (
                        <div key={index} className={style.selected_photo_container}>
                            <img src={photo} alt="selected photo" className={style.selected_photo} />
                            <button type="submit" onClick={() => handleDeleteSelectedAdditionalPhoto(index)} className={style.delete_selected_photo_button} />
                        </div>
                    ))}
                    <FileInput onFileSelect={handleAdditionalPhotos}/>
                </div>
            </div>
        </>
    )
}