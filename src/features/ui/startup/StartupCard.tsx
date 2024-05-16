import  {StartupEntity} from "../../../entities";
import React from "react";
import {Link} from "react-router-dom";
import style from './startup.module.sass'

interface StartupProps{
    startup: StartupEntity;
}
export const StartupCard: React.FC<StartupProps> = ({startup}) => {
    return(
        <Link to={`/startups/${startup.id}`}>
            <div className={style.startup_img}>
                <img src={startup.mainPhotoUrl} alt={startup.name} />
            </div>
            <div className={style.startup_info}>
                <h2>{startup.name}</h2>
                <p>{startup.slogan}</p>
                <button className={style.favorite_button}>
                    <img src="/path/to/favorite-icon.png" alt="Add to favorites" />
                </button>
            </div>
        </Link>
    )
}