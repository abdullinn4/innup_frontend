import { HeaderGuest } from "./HeaderGuest.tsx";
import { HeaderUser } from "./HeaderUser.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import React from "react";

export const Header : React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)

    return isAuthenticated ? <HeaderUser/> : <HeaderGuest/>
}