import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/login";
import {RegistrationPage} from "../pages/signup";
import {SettingsPage} from "../pages/settings";
import {CreateStartupPage} from "../pages/createStartup";


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/create-startup" element={<CreateStartupPage/>}/>
        </Routes>
    )
}
export default AppRouter;