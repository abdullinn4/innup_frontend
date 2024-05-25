import {Startup} from "../profile/Startup.tsx";
import React, {useEffect, useState} from "react";
import {StartupProfile} from "../../../entities";
import { fetchStartupsByCategory} from "../../../service";
import style from "../profile/profile.module.sass";
import {useParams} from "react-router-dom";


export const CategoryStartups: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [categoryStartups,setCategoryStartups] = useState<StartupProfile[]>([]);

    useEffect(()=>{
        fetchStartupsByCategory(category).then(data => setCategoryStartups(data)).catch(error => console.error(error));
    },[category])


    return (
        <div className={style.category_wrapper}>
            <h2>Стартапы в категории: {category}</h2>
            <div className={style.startups_wrapper}>
                <div className={style.startups_row}>
                    {categoryStartups.map(startup => (
                        <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={startup.imgUrl} />
                    ))}
                </div>
            </div>
        </div>
    );
};