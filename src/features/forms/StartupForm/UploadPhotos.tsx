import { FileInput } from "../../../shared/FileInput.tsx";
import style from "./startupform.module.sass";
import { useState } from "react";
import {FormikProps, useFormikContext} from "formik";
import {StartupDto} from "../../../entities";

export const UploadPhotos = () => {
    const { setFieldValue, errors, touched } : FormikProps<StartupDto>= useFormikContext<StartupDto>();

    const [selectedMainPhoto, setSelectedMainPhoto] = useState<string | null>(null);

    const [additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
    const [selectedAdditionalPhotos, setSelectedAdditionalPhotos] = useState<string[]>([]);

    const handleMainPhoto = (file: File) => {
        setFieldValue("mainPhoto", file);
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedMainPhoto(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleDeleteSelectedMainPhoto = () => {
        setFieldValue("mainPhoto", null);
        setSelectedMainPhoto(null);
    };

    const handleAdditionalPhotos = (file: File) => {
        setAdditionalPhotos((prevPhotos) => [...prevPhotos, file]);
        setFieldValue("additionalPhotos", [...additionalPhotos, file]);
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedAdditionalPhotos((prevPhotos) => [...prevPhotos, reader.result as string]);
        };
        reader.readAsDataURL(file);
    };

    const handleDeleteSelectedAdditionalPhoto = (index: number) => {
        const newPhotos = [...additionalPhotos];
        newPhotos.splice(index, 1);
        setAdditionalPhotos(newPhotos);
        setFieldValue("additionalPhotos", newPhotos);

        const newSelectedPhotos = [...selectedAdditionalPhotos];
        newSelectedPhotos.splice(index, 1);
        setSelectedAdditionalPhotos(newSelectedPhotos);
    };

    return (
        <>
            <div>
                <p>Медиа</p>
                <p>Главное фото</p>
                {selectedMainPhoto ? (
                    <div className={style.selected_photo_container}>
                        <img src={selectedMainPhoto} alt="selected avatar" className={style.selected_photo} />
                        <button type="button" onClick={handleDeleteSelectedMainPhoto} className={style.delete_selected_photo_button} />
                    </div>
                ) : (
                    <FileInput onFileSelect={handleMainPhoto} />
                )}
                {touched.mainPhoto && errors.mainPhoto && <div className={style.error}>{errors.mainPhoto}</div>}
            </div>
            <div className={style.additional_photos}>
                <p>Дополнительные фото</p>
                <div className={style.add_additional_photos_container}>
                    {selectedAdditionalPhotos.map((photo, index) => (
                        <div key={index} className={style.selected_photo_container}>
                            <img src={photo} alt="selected photo" className={style.selected_photo} />
                            <button type="button" onClick={() => handleDeleteSelectedAdditionalPhoto(index)} className={style.delete_selected_photo_button} />
                        </div>
                    ))}
                    <FileInput onFileSelect={handleAdditionalPhotos} />
                </div>
                {touched.additionalPhotos && (
                    <div className={style.error}>
                        {Array.isArray(errors.additionalPhotos) ? (
                            errors.additionalPhotos.map((error, index) => (
                                <div key={index}>{typeof error === 'string' ? error : Object.values(error).join(', ')}</div>
                            ))
                        ) : (
                            <div>{errors.additionalPhotos}</div>
                        )}
                    </div>
                )}

            </div>
        </>
    );
};
