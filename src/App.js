import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/dialogsConteiner"


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar store={props.store}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}
                    // dialogsPage={props.state.dialogsPage}
                    // answersPage={props.state.answersPage}
                    // messagesPage={props.state.messagesPage}
                    // newMessageText={props.state.messagesPage.newMessageText}
                    // newAnswerText={props.state.answersPage.newAnswerText}
                    // dispatch={props.dispatch}
                />}/>
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>


                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
