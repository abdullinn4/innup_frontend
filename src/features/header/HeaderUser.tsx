import style from "./header.module.sass"
import {IconWithMenu} from "./IconWithMenu.tsx";
import {Link} from "react-router-dom";

export const HeaderUser = () => {
    return(
        <header>
            <div className={style.header_wrapper}>
                <div className={style.header_logo}>
                    <h1>innup</h1>
                </div>
                <nav>
                    <ul className={style.header_list}>
                        <li>
                            <Link to="/startups">Главная</Link>
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
                            <Link to="/create-startup">Опубликовать проект</Link>
                        </li>
                        <li>
                            <IconWithMenu/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}