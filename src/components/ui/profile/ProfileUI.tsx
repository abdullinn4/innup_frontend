import {StartupProfile, UserBasicData} from "../../../entities";
import React, {useEffect, useState} from "react";
import {fetchCreatedStartups, fetchFavoriteStartups, fetchUserData} from "../../../service";
import {User} from "./User.tsx";
import {Startup} from "./Startup.tsx";
import style from './profile.module.sass';

interface ProfileUIProps {
    userId: string;
}

export const ProfileUI: React.FC<ProfileUIProps> = ({userId}) => {
    const [userData, setUserData] = useState<UserBasicData | null>(null);
    const [createdStartups, setCreatedStartups] = useState<StartupProfile[]>([]);
    const [favoriteStartups, setFavoriteStartups] = useState<StartupProfile[]>([]);

    useEffect(() => {
        fetchUserData(userId).then(data => setUserData(data)).catch(error => console.error(error));
        fetchCreatedStartups(userId).then(data => setCreatedStartups(data)).catch(error => console.error(error));
        fetchFavoriteStartups(userId).then(data => setFavoriteStartups(data)).catch(error => console.error(error));
    }, [userId]);


    return (
        <main>
            {userData && <User userData={userData} />}

            <div className={style.startups_wrapper}>
                <h2>Создатель</h2>
                <div className={style.startups_row}>
                    {createdStartups.map(startup => (
                        <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                    ))}
                </div>
            </div>

            <div className={style.startups_wrapper}>
                <h2>Избранное</h2>
                <div className={style.startups_row}>
                    {favoriteStartups.map(startup => (
                        <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                    ))}
                </div>
            </div>
        </main>
    );
};
