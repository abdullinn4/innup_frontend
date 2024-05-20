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
    }, []);

    const chunkArray = (arr: any[], size: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const createdStartupChunks = chunkArray(createdStartups, 3);
    const favoriteStartupChunks = chunkArray(favoriteStartups, 3);

    return (
        <main>
            {userData && <User userData={userData} />}

            <div className={style.startups_wrapper}>
                <h2>Создатель</h2>
                {createdStartupChunks.map((chunk, index) => (
                    <div key={index} className={style.startups_row}>
                        {chunk.map(startup => (
                            <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                        ))}
                    </div>
                ))}
            </div>

            <div className={style.startups_wrapper}>
                <h2>Избранное</h2>
                {favoriteStartupChunks.map((chunk, index) => (
                    <div key={index} className={style.startups_row}>
                        {chunk.map(startup => (
                            <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
};
