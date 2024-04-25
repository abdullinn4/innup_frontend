import style from "./header.module.sass";
import {Link} from "react-router-dom";

export const HeaderGuest = () => {
    return(
        <header>
            <div className={style.header_wrapper}>
                <div className={style.header_logo}>
                    <h1>innup</h1>
                </div>
                <nav>
                    <ul className={style.header_list}>
                        <li>
                            <Link to="#">Главная</Link>
                        </li>
                        <li>
                            <Link to="#">Стартапы</Link>
                        </li>
                        <li>
                            <Link to="#">Категории</Link>
                        </li>
                        <li>
                            <Link to="#">О платформе</Link>
                        </li>
                        <li>
                            <Link to="#">Чат</Link>
                        </li>
                        <li>
                            <Link to="#">Опубликовать проект</Link>
                        </li>
                        <li>
                            <Link to="#">Войти</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}