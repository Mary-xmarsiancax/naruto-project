import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom"



const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.friendsPage}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} addAnswer={props.addAnswer}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
