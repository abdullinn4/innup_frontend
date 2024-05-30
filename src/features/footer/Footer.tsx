import style from "./footer.module.sass"
import {Link} from "react-router-dom";
export const Footer = () => {
    return(
        <footer>
            <div className={style.footer_wrapper}>
                <div className={style.footer_logo}>
                    <p>Площадка стартапов</p>
                    <h1>innup</h1>
                </div>
                <div className={style.footer_info}>
                    <nav className={style.footer_navigation}>
                        <ul>
                            <li>
                                <Link to="/startups">Главная</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/categories">Категории</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">О платформе</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.footer_contacts}>
                        <p>Контакты</p>
                        <p>innup@gmail.com</p>
                        <p>8 800 937 24 24</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}