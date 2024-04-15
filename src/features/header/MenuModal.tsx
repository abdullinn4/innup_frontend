import style from "./header.module.sass"
import {Link} from "react-router-dom";
import {LogoutForm} from "../../features";

export const MenuModal= ({onClose} : {onClose :React.MouseEventHandler<HTMLLIElement>}) => {

    return (
        <div>
            <ul className={style.menu_modal}>
                <li onClick={onClose}>
                    <Link to="#" className={style.menu_modal_links}>Мои стартапы</Link>
                </li>
                <li onClick={onClose}>
                    <Link to="#" className={style.menu_modal_links}>Профиль</Link>
                </li>
                <li onClick={onClose}>
                    <Link to="/settings" className={style.menu_modal_links}>Настройки</Link>
                </li>
                <li>
                    <LogoutForm/>
                </li>
            </ul>
        </div>
    )
}