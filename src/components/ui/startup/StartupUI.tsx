import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {StartupEntity, UserBasicData} from "../../../entities";
import style from './startup.module.sass'
import {handleLikeClick} from "../../../shared/LikeClick.tsx";
import {fetchStartupById, fetchUserData} from "../../../service";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {ContactModal} from "./ContactModal.tsx";


export const StartupUI: React.FC = () => {
    const {id} = useParams<{id:string}>();
    const [startup,setStartup] = useState<StartupEntity | null>(null);
    const [liked, setLiked] = useState(false);
    const [userData, setUserData] = useState<UserBasicData | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleContact = () => {
        setModalIsOpen(true);
    };

    useEffect(() => {
        if (id){
            fetchStartupById(id).then(setStartup).catch(console.error);
        }
    },[id]);

    useEffect(() => {
        if (startup && startup.userId) {
            fetchUserData(startup.userId)
                .then(setUserData)
                .catch(console.error);
        }
    }, [startup]);

    const images = startup ? [
        {original: startup?.mainPhotoUrl},
        ...startup.additionalPhotosUrl.map(url => ({original: url}))
    ]:[];

    return(
        <>
            <div className={style.startup_wrapper}>
                <h1>{startup?.name}</h1>
                <h2>{startup?.slogan}</h2>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className={style.swiper}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.original} alt={`Slide ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <p className={style.startup_desc}>{startup?.description}</p>
                <p className={style.startup_desc}>{startup?.price}</p>

                <div className={style.startup_nav}>
                    <Link to={startup?.webSite || '/'} className={style.link_container}>Посетить сайт</Link>
                    <button className={style.like_button} onClick={() => startup?.id && handleLikeClick(startup.id, liked, setLiked)}>
                        src={liked ? "src/assets/icons/dark-like-icon.svg" : "src/assets/icons/like-icon.svg"}
                        alt="Add/Remove to favorites"
                    </button>
                    <Link to={`/profile/${startup?.userId}`} className={style.user_link}>
                        <img src={userData?.photoUrl || "src/assets/icons/user-blue-icon.svg"} className={style.user_icon} alt="user icon" />
                    </Link>
                    <button onClick={handleContact} className={style.contact_button}>Связаться</button>
                    <ContactModal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        onCall={() => {
                            // Перенаправление на функционал звонка
                            window.location.href = `tel:${startup?.phone}`;
                        }}
                        onEmail={() => {
                            // Перенаправление на функционал отправки электронной почты или открытие почтового клиента
                            window.location.href = `mailto:${startup?.email}`;
                        }}
                    />
                </div>
            </div>
            <div className={style.additional_startup_info_wrapper}>
                <img src="src/assets/icons/calendar-icon.svg" className={style.user_icon} alt="calender icon"/>
                <p>Добавлено {startup?.createDate}</p>
                <img src="src/assets/icons/category-icon.svg" className={style.user_icon} alt="category icon"/>
                <p className={style.category}>{startup?.category}</p>
            </div>
        </>
    )
}