import {useState} from "react";
import style from "./header.module.sass";
import {MenuModal} from "./MenuModal.tsx";

export const IconWithMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return(
        <>
            <div>
                <img src="src/assets/icons/user-blue-icon.svg" alt="" className={style.user_icon} onMouseDown={handleMenuToggle}/>
            </div>
            {showMenu && <MenuModal onClose={toggleMenu}/>}
        </>
    )
}