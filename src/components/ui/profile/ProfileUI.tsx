import {StartupProfile, UserBasicData} from "../../../entities";
import React, {useEffect, useState} from "react";
import {fetchCreatedStartups, fetchFavoriteStartups, fetchUserData} from "../../../service";
import {User} from "./User.tsx";
import {Startup} from "./Startup.tsx";
import style from './profile.module.sass';

interface ProfileUIProps {
    userId: string;
}
interface StartupProfileWithStatus extends StartupProfile {
    status: 'В обработке' | 'Принято' | 'Отклонено';
}
export const ProfileUI: React.FC<ProfileUIProps> = ({userId}) => {
    const [userData, setUserData] = useState<UserBasicData | null>(null);
    const [favoriteStartups, setFavoriteStartups] = useState<StartupProfile[]>([]);
    const [acceptedStartups, setAcceptedStartups] = useState<StartupProfileWithStatus[]>([]);


    useEffect(() => {
        fetchUserData(userId).then(data => setUserData(data)).catch(error => console.error(error));
        fetchCreatedStartups(userId).then(data => {
            const startupsWithStatus = data as StartupProfileWithStatus[]; // Приведение типа, если нужно
            setAcceptedStartups(startupsWithStatus.filter(startup => startup.status === 'Принято'))});
        fetchFavoriteStartups(userId).then(data => setFavoriteStartups(data)).catch(error => console.error(error));
    }, [userId]);


    return (
        <main>
            {userData && <User userData={userData} />}

            <div className={style.startups_wrapper}>
                <h2>Создатель</h2>
                <div className={style.startups_row}>
                    {acceptedStartups.map(startup => (
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
