import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/login";
import {RegistrationPage} from "../pages/signup";
import {SettingsPage} from "../pages/settings";
import {CreateStartupPage} from "../pages/createStartup";
import {StartupsPage} from "../pages/startups";


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/create-startup" element={<CreateStartupPage/>}/>
            <Route path="/startups" element={<StartupsPage/>}/>
        </Routes>
    )
}
export default AppRouter;