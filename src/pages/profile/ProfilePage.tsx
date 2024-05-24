import {Footer, Header} from "../../features";
import {useParams} from "react-router-dom";
import {ProfileUI} from "../../components";

export const ProfilePage = () => {
    const {id} = useParams<{id: string}>();
    return(
        <>
            <Header/>
            <ProfileUI userId={id!}/>
            <Footer/>
        </>

    )
}