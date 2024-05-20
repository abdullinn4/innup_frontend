import React from "react";
import { UserBasicData } from "../../../entities";
import style from './profile.module.sass';

interface Props {
    userData: UserBasicData;
}

export const User: React.FC<Props> = ({ userData }) => {
    return (
        <div className={style.profile_wrapper}>
            <h1>Профиль</h1>
            <div className={style.profile_data}>
                <img
                    src={userData.photoUrl ? userData.photoUrl : "src/assets/icons/user-blue-icon-for-profile.svg"}
                    className={style.profile_photo}
                    alt="Profile"
                />
                <div className={style.text_info}>
                    <h2>{userData.name}</h2>
                    <p>{userData.email}</p>
                </div>
            </div>
            <div className={style.profile_about_me}>
                <h3>О себе: </h3><p>{userData.aboutMe}</p>
            </div>
        </div>
    );
}
