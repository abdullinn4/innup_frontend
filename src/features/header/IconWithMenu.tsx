import {useState} from "react";
import style from "./header.module.sass";
import {MenuModal} from "./MenuModal.tsx";
import {UserBasicData} from "../../entities";
interface IconWithMenuProps{
    user: UserBasicData | null;
}
export const IconWithMenu:React.FC<IconWithMenuProps> = ({user}) => {
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
                
                    <img
                        src={"/icons/user-blue-icon.svg"}
                        alt="user avatar"
                        className={style.defaultIcon}
                        onMouseDown={handleMenuToggle}
                    />
                
            </div>
            {showMenu && <MenuModal onClose={toggleMenu}/>}
        </>
    )
}