import { HeaderGuest } from "./HeaderGuest.tsx";
import { HeaderUser } from "./HeaderUser.tsx";

export const Header = ({ isUserLoggedIn } : { isUserLoggedIn: boolean }) =>
    isUserLoggedIn ? <HeaderUser/> : <HeaderGuest/>