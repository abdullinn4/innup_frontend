import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {StartupProfile} from "../../../entities";
import {updateLikeStatusProfile} from "../../../service";
import style from './profile.module.sass';


export const Startup: React.FC<StartupProfile> = ({ name, description, imgUrl,id }) => {
    const[liked,setLiked] = useState(false);

    const handleLikeClick = async () => {
        setLiked(!liked);
        try {
            await updateLikeStatusProfile(id, !liked);
        } catch (error) {
            console.error('Error updating like status:', error);
        }
    };

    return (
        <div className={style.startup}>
            <Link to={`/startup/${id}`}>
                <div className={style.startup_info}>
                    <img src={imgUrl} className={style.startup_img} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <button className={style.like_button} onClick={handleLikeClick}>
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


