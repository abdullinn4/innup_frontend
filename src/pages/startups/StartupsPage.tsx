import {Footer, Header, StartupsUI} from "../../features";

export const StartupsPage = () => {
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <StartupsUI/>
            <Footer/>
        </>
    )
}