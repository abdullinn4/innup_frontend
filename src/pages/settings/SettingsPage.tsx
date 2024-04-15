import {Footer, Header, SettingsForm} from '../../features'

export const SettingsPage = () => {
    return(
        <>
            <Header isUserLoggedIn={true}/>
            <SettingsForm/>
            <Footer/>
        </>

    )
}