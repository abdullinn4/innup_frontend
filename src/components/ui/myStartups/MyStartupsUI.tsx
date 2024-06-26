import React, { useEffect, useState } from "react";
import { fetchCreatedStartups } from "../../../service";
import style from './mystartups.module.sass'
import {StartupProfile} from "../../../entities";
import {Startup} from "../profile/Startup.tsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store.ts";
interface StartupProfileWithStatus extends StartupProfile {
    status: 'В обработке' | 'Принято' | 'Отклонено';
}

interface MyStartupsUIProps {
    userId: string;
}

export const MyStartupsUI: React.FC<MyStartupsUIProps> = () => {
    const user = useSelector((state:RootState) => state.user.user)

    const [inProgressStartups, setInProgressStartups] = useState<StartupProfileWithStatus[]>([]);
    const [acceptedStartups, setAcceptedStartups] = useState<StartupProfileWithStatus[]>([]);
    const [rejectedStartups, setRejectedStartups] = useState<StartupProfileWithStatus[]>([]);

    useEffect(() => {
        fetchCreatedStartups(user.id).then(data => {
            const startupsWithStatus = data as StartupProfileWithStatus[]; // Приведение типа, если нужно
            setInProgressStartups(startupsWithStatus.filter(startup => startup.status === 'В обработке'));
            setAcceptedStartups(startupsWithStatus.filter(startup => startup.status === 'Принято'));
            setRejectedStartups(startupsWithStatus.filter(startup => startup.status === 'Отклонено'));
        }).catch(error => console.error(error));
    }, [user.id]);


    return (
        <main className={style.my_startups_wrapper}>

            <div className={style.my_startups_wrapper_header}>
                <h1>Мои стартапы</h1>
                <Link to="/create-startup" className={style.create_startup_button}>Опубликовать проект</Link>
            </div>

            <div className={style.startups_wrapper}>
                <div className={style.startups_row}>
                    {acceptedStartups.map(startup => (
                        <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                    ))}
                </div>
            </div>


            <div className={style.startups_wrapper}>
                <h2>В обработке</h2>
                <div className={style.startups_column}>
                    {inProgressStartups.map(startup => (
                        <div className={style.startup_container}>
                            <Link key={startup.id} to={`/startup/${startup.id}`}>{startup.name}</Link>
                        </div>
                    ))}
                </div>
            </div>


            <div className={style.startups_wrapper}>
                <h2>Отклонено</h2>
                <div className={style.startups_column}>
                    {rejectedStartups.map(startup => (
                        <div className={style.startup_container}>
                            <Link key={startup.id} to={`/startup/${startup.id}`}>{startup.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
