import {Footer, Header, StartupForm} from "../../features";

export const CreateStartupPage = () => {
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <StartupForm/>
            <Footer/>
        </>
    )
}