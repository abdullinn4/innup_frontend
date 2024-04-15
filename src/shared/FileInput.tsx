import React, {ChangeEvent, useRef} from "react";
import style from './fileinput.module.sass'


interface FileInputProps{
    onFileSelect: (file: File) => void
}

export const FileInput: React.FC<FileInputProps> = ({onFileSelect}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file){
            onFileSelect(file)
        }
    }
    return(
        <div className={style.upload_input}>
            <input
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileSelect}
                type="file"
                id="file"
                name="file"
            />
            <label htmlFor="file">
                <img src="src/assets/icons/upload-icon.svg" alt="upload_icon"/>
                <span>Загрузить фото</span>
            </label>
        </div>

    )
}