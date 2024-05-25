import React from "react";
import {options} from "../../../features/forms/StartupForm/CategoryOptions.ts";
import { Link } from "react-router-dom";
import style from './category.module.sass'

export const CategoryUI:React.FC = () => {
    return(
        <div className={style.category_wrapper}>
            <h1>Категории</h1>
            <div className={style.category_row}>
                {options.map((category) => (
                    <div className={style.category_container} key={category.value}>
                        <Link  to={`/categories/${category.value}`}>{category.label}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}