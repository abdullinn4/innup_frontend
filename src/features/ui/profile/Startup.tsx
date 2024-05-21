import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {StartupProfile} from "../../../entities";
import style from './profile.module.sass';
import {handleLikeClick} from "../../../shared/LikeClick.tsx";


export const Startup: React.FC<StartupProfile> = ({ name, description, imgUrl,id }) => {
    const[liked,setLiked] = useState(false);


    return (
        <div className={style.startup}>
            <Link to={`/startup/${id}`}>
                <div className={style.startup_info}>
                    <img src={imgUrl} className={style.startup_img} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <button className={style.like_button} onClick={() => handleLikeClick(id, liked, setLiked)}>
                            <img
                                src={liked ? "src/assets/icons/dark-like-icon.svg" : "src/assets/icons/like-icon.svg" }
                                alt="Add/Remove to favorites"
                                className={style.like_icon}
                            />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};


