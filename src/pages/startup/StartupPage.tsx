import {Footer, Header, StartupsUI} from "../../features";

export const StartupPage = () => {
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <StartupsUI/>
            <Footer/>
        </>
    )
}