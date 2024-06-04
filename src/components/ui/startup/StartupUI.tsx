import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StartupEntity, UserBasicData } from "../../../entities";
import style from './startup.module.sass';
import { handleLikeClick } from "../../../shared/LikeClick";
import { fetchStartupById, fetchUserData } from "../../../service";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ContactModal } from "./ContactModal";
import calendarIcon from "../../../assets/icons/calendar-icon.svg";
import categoryIcon from "../../../assets/icons/category-icon.svg";
import likeIcon from "../../../assets/icons/like-icon.svg";
import darkLikeIcon from "../../../assets/icons/dark-like-icon.svg";
import userBlueIcon from "../../../assets/icons/user-blue-icon.svg";

export const StartupUI: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [startup, setStartup] = useState<StartupEntity | null>(null);
    const [liked, setLiked] = useState(false);
    const [userData, setUserData] = useState<UserBasicData | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleContact = () => {
        setModalIsOpen(true);
    };

    useEffect(() => {
        if (id) {
            fetchStartupById(id).then(setStartup).catch(console.error);
        }
    }, [id]);

    useEffect(() => {
        if (startup && startup.userId) {
            fetchUserData(startup.userId)
                .then(setUserData)
                .catch(console.error);
        }
    }, [startup]);

    const images = startup ? [
        { original: startup?.mainPhotoPath ? `http://localhost:5294/startupPhotos/${startup.mainPhotoPath}` : '' },
        ...startup.additionalPhotosPaths.map(url => ({ original: url ? `http://localhost:5294/startupPhotos/${url}` : '' }))
    ] : [];

    return (
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
                            <img src={image.original} alt={`Slide ${index}`} className={style.swiper_image}/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <p className={style.startup_desc}>{startup?.description}</p>
                <p className={style.startup_desc}>{startup?.price}</p>

                <div className={style.startup_nav}>
                    <Link to={startup?.webSite || '/'} className={style.link_container}>Посетить сайт</Link>
                    <button className={style.like_button} onClick={() => startup?.id && handleLikeClick(startup.id, liked, setLiked)}>
                        <img src={liked ? darkLikeIcon : likeIcon} className={style.like_icon} alt="Add/Remove to favorites" />
                    </button>
                    <Link to={`/profile/${startup?.userId}`} className={style.user_link}>
                        <img src={userData?.photoUrl || userBlueIcon} className={style.user_icon} alt="user icon" />
                    </Link>
                    <button onClick={handleContact} className={style.link_container}>Связаться</button>
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
                <img src={calendarIcon} className={style.addition_icon} alt="calendar icon" />
                {/* <p>Добавлено {startup?.createDate}</p> */}
                <img src={categoryIcon} className={style.addition_icon} alt="category icon" />
                <p className={style.category}>{startup?.category}</p>
            </div>
        </>
    );
}
