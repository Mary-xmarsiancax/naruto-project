import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/dialogsConteiner"
import UsersContainer from "./components/users/usersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/news" render={() => <NewsContainer/>}/>
                <Route path="/music" render={() => <MusicContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/settings" render={() => <SettingsContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    )
}

export default App;
