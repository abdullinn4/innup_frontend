import {Footer, Header} from "../../features";
import {MyStartupsUI} from "../../components";
import {useParams} from "react-router-dom";

export const MyStartupsPage = () => {
    const {id} = useParams<{id: string}>();
    return(
        <>
            <Header/>
            <MyStartupsUI userId={id!}/>
            <Footer/>
        </>
    )
}