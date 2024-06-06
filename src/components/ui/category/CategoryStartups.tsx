import {Startup} from "../profile/Startup.tsx";
import React, {useEffect, useState} from "react";
import {StartupProfile} from "../../../entities";
import { fetchStartupsByCategory} from "../../../service";
import style from "../profile/profile.module.sass";
import style1 from './category.module.sass'
import {useParams} from "react-router-dom";
import {options} from "../../../features/forms/StartupForm/CategoryOptions.ts";


export const CategoryStartups: React.FC = () => {
    const { category } = useParams<{ category?: string }>();
    const [categoryStartups,setCategoryStartups] = useState<StartupProfile[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");

    useEffect(() => {
        if (category) {
            const selectedCategory = options.find(opt => opt.id === parseInt(category));
            if (selectedCategory) {
                setCategoryName(selectedCategory.label);
                fetchStartupsByCategory(selectedCategory.label)
                    .then(data => setCategoryStartups(data))
                    .catch(error => console.error(error));
            }
        }
    }, [category]);

    return (
        <main className={style1.category_wrapper}>
            <h2>Стартапы в категории: {categoryName}</h2>
            <div className={style.startups_wrapper}>
                <div className={style.startups_row}>
                    {categoryStartups.map(startup => (
                        <Startup key={startup.id} id={startup.id} name={startup.name} description={startup.description} imgUrl={`http://localhost:5294/startupPhotos/${startup.mainPhotoPath}`} />
                    ))}
                </div>
            </div>
        </main>
    );
};