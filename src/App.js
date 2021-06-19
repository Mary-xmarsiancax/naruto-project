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
    // console.log(props.postData);
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogData={props.dialogData} message={props.message}/>}/>
                    <Route path="/profile" render={() => <Profile postData={props.postData} />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
