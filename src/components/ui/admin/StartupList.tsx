import React, {useEffect, useState} from "react";
import {StartupEntity} from "../../../entities";
import {fetchAllStartups, updateStartupStatus} from "../../../service";
import {Link} from "react-router-dom";
import style from './admin.module.sass'

export const StartupList : React.FC = () => {
    const [startups,setStartups] = useState<StartupEntity[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchAllStartups();
            const sortedStartups = result.sort((a,b) => b.id.localeCompare(a.id));
            setStartups(sortedStartups);
        };
        fetchData();
    },[]);

    const handleStatusChange = async (id: string, status: 'В обработке' | 'Принято' | 'Отклонено') => {
        await updateStartupStatus(id,status);
        setStartups(startups.map(startup => startup.id === id ? {...startup,status} : startup));
    };

    return (
        <div className={style.table_container}>
            <h1 className={style.table_heading}>Startups</h1>
            <table className={style.table_wrapper}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Подробнее</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {startups.map((startup, index) => (
                    <tr key={startup.id} className={style.startup_row}>
                        <td>{index + 1}</td>
                        <td>{startup.name}</td>
                        <td><Link to={`/startup/${startup.id}`}>Посмотреть</Link></td>
                        <td className={
                            startup.status === 'Принято' ? 'accept_status' :
                                startup.status === 'Отклонено' ? 'reject_status' :
                                    ''
                        }>
                            {startup.status}
                        </td>
                        <td>
                            {startup.status === 'В обработке' && (
                                <>
                                    <button onClick={() => handleStatusChange(startup.id, 'Принято')} className={style.admin_buttons}>Принять</button>
                                    <button onClick={() => handleStatusChange(startup.id, 'Отклонено')} className={style.admin_buttons}>Отклонить</button>
                                </>
                            )}
                            {startup.status === 'Принято' && (
                                <button onClick={() => handleStatusChange(startup.id, 'Отклонено')} className={style.admin_buttons}>Заблокировать</button>
                            )}
                            {startup.status === 'Отклонено' && (
                                <button onClick={() => handleStatusChange(startup.id, 'Принято')} className={style.admin_buttons}>Разблокировать</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}