import React from "react";
import {options} from "../../../features/forms/StartupForm/CategoryOptions.ts";
import { Link } from "react-router-dom";
import style from './category.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CategoryUI:React.FC = () => {
    return(
        <div className={style.category_wrapper}>
            <h1>Категории</h1>
            <div className={style.category_row}>
                {options.map((category) => (
                    <div className={style.category_container} key={category.value}>
                        <FontAwesomeIcon icon={category.icon} /><Link  to={`/categories/${category.id}`}>{category.label}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}