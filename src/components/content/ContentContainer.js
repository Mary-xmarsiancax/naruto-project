import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/dialogsConteiner";
import ProfileContainer from "./Profile/ProfileContainer";
import NewsContainer from "./News/NewsContainer";
import MusicContainer from "./Music/MusicContainer";
import UsersContainer from "./users/usersConteiner";
import SettingsContainer from "./Settings/SettingsContainer";
import LoginContainer from "../login/loginContainer";

const ContentContainer = () => {
   return (
    <div className="app-wrapper-content">
        <Route path="/login" render={() => <LoginContainer/>}/>
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
        <Route path="/news" render={() => <NewsContainer/>}/>
        <Route path="/music" render={() => <MusicContainer/>}/>
        <Route path="/settings" render={() => <SettingsContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
    </div>
   )
}
export default ContentContainer;