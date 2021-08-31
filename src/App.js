import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/dialogsConteiner"
import UsersContainer from "./components/users/usersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    )
}

export default App;
