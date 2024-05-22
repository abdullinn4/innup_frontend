import {Footer, Header, ProfileUI} from "../../features";
import {useParams} from "react-router-dom";

export const ProfilePage = () => {
    const {id} = useParams<{id: string}>();
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <ProfileUI userId={id!}/>
            <Footer/>
        </>

    )
}