import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/login";
import {RegistrationPage} from "../pages/signup";
import {SettingsPage} from "../pages/settings";
import {CreateStartupPage} from "../pages/createStartup";
import {StartupsPage} from "../pages/startups";
import {ProfilePage} from "../pages/profile";
import {StartupPage} from "../pages/startup";
import {AdminPage} from "../pages/admin";
import {CategoryPage, StartupsByCategoryPage} from "../pages/category";
import {MyStartupsPage} from "../pages/mystartups";


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
            <Route path="/categories" element={<CategoryPage/>}/>
            <Route path="/categories/:category" element={<StartupsByCategoryPage/>}/>
            <Route path="/mystartups" element={<MyStartupsPage/>}/>
        </Routes>
    )
}
export default AppRouter;