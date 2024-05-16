import { StartupEntity } from "../../../entities/index.ts";
import {StartupCard} from "./StartupCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import style from './startup.module.sass'

export const StartupsUI = () => {
    const[startups,setStartups] = useState<StartupEntity[]>([])

    useEffect(()=>{
        const fetchStartups = async () => {
            try{
                const response = await axios.get<StartupEntity[]>("/startups");
                setStartups(response.data)
            }catch (e) {
                console.error(e)
            }
        };
        fetchStartups();
    },[]);

    return(
        <div className={style.startups_wrapper}>
            <h1>Стартапы</h1>
            <div className={style.startups_row}>
                <div className={style.startups_startup}>
                    {startups.map((startup) => (
                        <StartupCard key={startup.id} startup={startup}/>
                    ))}
                </div>
            </div>


        </div>
    )
}
