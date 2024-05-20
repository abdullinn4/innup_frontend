import {ProfileUI} from "../../features";
import {useParams} from "react-router-dom";

export const ProfilePage = () => {
    const {id} = useParams<{id: string}>();
    return(
        <ProfileUI userId={id!}/>
    )
}