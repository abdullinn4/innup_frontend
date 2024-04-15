import {Field} from "formik";
import style from "./startupform.module.sass"
import {ChangeEvent, useState} from "react";
import { options } from "./CategoryOptions.ts"

export const CategoryForm = () => {
    const [category, setCategory] = useState("")
    const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    return(
        <>
            <p>Категория</p>
            <Field as="select" value={category} onChange={handleCategory} className={style.basic_data_select}>
                {!category && <option value="" disabled hidden>Выберите категорию</option>}
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </Field>
        </>
    )
}