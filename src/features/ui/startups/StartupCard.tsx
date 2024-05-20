import  {StartupEntity} from "../../../entities";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from './startup.module.sass'
import {updateLikeStatusStartup} from "../../../service";

interface StartupProps{
    startup: StartupEntity;
}
export const StartupCard: React.FC<StartupProps> = ({startup}) => {
    const[liked,setLiked] = useState(false);

    const handleLikeClick = async () => {
        setLiked(!liked)
        try{
            await updateLikeStatusStartup(startup.id, !liked);
            console.log('Like status updated:');
        }catch (error) {
            console.error('Error updating like status:', error);
        }
    }

    return(
        <Link to={`/startup/${startup.id}`}>
            <div>
                <img src={startup.mainPhotoUrl} alt={startup.name} className={style.startup_img} />
                <div className={style.startup_info}>
                    <h4>{startup.name}</h4>
                    <p>{startup.slogan}</p>
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
    )
}