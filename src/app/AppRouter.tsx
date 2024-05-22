import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/login";
import {RegistrationPage} from "../pages/signup";
import {SettingsPage} from "../pages/settings";
import {CreateStartupPage} from "../pages/createStartup";
import {StartupsPage} from "../pages/startups";
import {ProfilePage} from "../pages/profile";
import {StartupPage} from "../pages/startup";
import {AdminPage} from "../pages/admin";


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/create-startup" element={<CreateStartupPage/>}/>
            <Route path="/startups" element={<StartupsPage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="/startup/:id" element={<StartupPage/>}/>
            <Route path="/admin/startups" element={<AdminPage/>}/>
        </Routes>
    )
}
export default AppRouter;