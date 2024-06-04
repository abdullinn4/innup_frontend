import style from "./header.module.sass"
import {Link} from "react-router-dom";
import {LogoutForm} from "../../features";
import {useAuth} from "../user/isAuth.ts";
import {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";

export const MenuModal= ({onClose} : {onClose :React.MouseEventHandler<HTMLLIElement>}) => {
    const { isAdmin } = useAuth();
    const user = useSelector((state:RootState) => state.user.user);

    return (
        <div>
            <ul className={style.menu_modal}>
                <li onClick={onClose}>
                    <Link to="/mystartups" className={style.menu_modal_links}>Мои стартапы</Link>
                </li>
                <li onClick={onClose}>
                    <Link to={`/profile/${user?.id}`} className={style.menu_modal_links}>Профиль</Link>
                </li>
                <li onClick={onClose}>
                    <Link to="/settings" className={style.menu_modal_links}>Настройки</Link>
                </li>
                {isAdmin && (
                    <li onClick={onClose}>
                        <Link to="/admin/startups" className={style.menu_modal_links}>Админ</Link>
                    </li>
                )}
                <li>
                    <LogoutForm/>
                </li>
            </ul>
        </div>
    )
}