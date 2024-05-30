import style from "./header.module.sass"
import {IconWithMenu} from "./IconWithMenu.tsx";
import {Link} from "react-router-dom";
import {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";

export const HeaderUser = () => {
    const user = useSelector((state: RootState) => state.user.user);
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
                            <Link to="/categories">Категории</Link>
                        </li>
                        <li>
                            <Link to="#">О платформе</Link>
                        </li>
                        <li>
                            <Link to="/create-startup">Опубликовать проект</Link>
                        </li>
                        <li>
                            <IconWithMenu user={user}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}