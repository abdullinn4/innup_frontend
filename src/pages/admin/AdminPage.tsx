import {Footer, Header} from "../../features";
import {StartupList} from "../../features/ui/admin/StartupList.tsx";

export const AdminPage = () => {
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <StartupList/>
            <Footer/>
        </>
    )
}