import  {StartupEntity} from "../../../entities";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from './startups.module.sass'
import {handleLikeClick} from "../../../shared/LikeClick.tsx";

interface StartupProps{
    startup: StartupEntity;
}
export const StartupCard: React.FC<StartupProps> = ({startup}) => {
    const[liked,setLiked] = useState(false);
    const serverUrl = "http://localhost:5294/startupPhotos";

    return(
        <Link to={`/startup/${startup.id}`}>
            <div className={style.startup}>
                <img src={`${serverUrl}/${startup.mainPhotoPath}`} alt={startup.name} className={style.startup_img} />
                <div className={style.startup_info}>
                    <h4>{startup.name}</h4>
                    <p>{startup.slogan}</p>
                    <button className={style.like_button} onClick={() => handleLikeClick(startup.id,liked,setLiked)}>
                        <img
                            src={liked ? "src/assets/icons/dark-like-icon.svg" : "src/assets/icons/like-icon.svg" }
                            alt="Add/Remove to favorites"
                            className={style.like_icon}
                        />
                    </button>
                </div>
            </div>
        </Link>
    )
}