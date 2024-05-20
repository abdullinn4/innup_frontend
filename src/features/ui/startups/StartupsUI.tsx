import { StartupEntity } from "../../../entities";
import { StartupCard } from "./StartupCard.tsx";
import { useEffect, useState } from "react";
import style from './startup.module.sass';
import { fetchStartups } from "../../../service";

export const StartupsUI = () => {
    const [startups, setStartups] = useState<StartupEntity[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredStartups, setFilteredStartups] = useState<StartupEntity[]>([]);

    useEffect(() => {
        const loadStartups = async () => {
            try {
                const data = await fetchStartups();
                setStartups(data);
                setFilteredStartups(data);
            } catch (e) {
                console.error(e);
            }
        };
        loadStartups();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filterStartups = (startups: StartupEntity[], query: string) => {
        if (!query) {
            return startups;
        }
        return startups.filter(startup =>
            startup.name.toLowerCase().includes(query.toLowerCase())
        );
    };

    const handleSearchClick = () => {
        const filtered = filterStartups(startups, searchQuery);
        setFilteredStartups(filtered);
    };

    const chunkArray = (arr: StartupEntity[]) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += 3) {
            chunks.push(arr.slice(i, i + 3));
        }
        return chunks;
    };

    const startupChunks = chunkArray(filteredStartups);

    return (
        <>
            <div className={style.startups_header}>
                <input
                    type="text"
                    placeholder="Поиск стартапов"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={style.search_input}
                />
                <button className={style.search_button} onClick={handleSearchClick}>
                    <img src="src/assets/icons/search-icon.svg" alt="Search" className={style.search_icon}/>
                </button>
            </div>
            <div className={style.startups_wrapper}>
                {startupChunks.map((chunk, index) => (
                    <div key={index} className={style.startups_row}>
                        {Array.isArray(chunk) && chunk.map((startup) => (
                            <StartupCard key={startup.id} startup={startup} />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

