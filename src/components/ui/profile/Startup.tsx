import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {StartupProfile} from "../../../entities";
import style from './profile.module.sass';
import {handleLikeClick} from "../../../shared/LikeClick.tsx";


export const Startup: React.FC<StartupProfile> = ({ name, slogan, imgUrl,id }) => {
    const[liked,setLiked] = useState(false);


    return (
        <Link to={`/startup/${id}`}>
            <div className={style.startup}>
                <div className={style.startup_info}>
                    <img src={imgUrl} className={style.startup_img} alt={name} />
                    <div className={style.startup_info}>
                        <h4>{name}</h4>
                        <p>{slogan}</p>
                        <button className={style.like_button} onClick={() => handleLikeClick(id, liked, setLiked)}>
                            <img
                                src={liked ? "/icons/dark-like-icon.svg" : "/icons/like-icon.svg" }
                                alt="Add/Remove to favorites"
                                className={style.like_icon}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};


