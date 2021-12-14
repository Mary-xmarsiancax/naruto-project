import {Redirect, Route} from "react-router-dom";
import React, { Suspense } from 'react';
import DialogsContainer from "./Dialogs/dialogsConteiner";
import ProfileContainer from "./Profile/ProfileContainer";
import NewsContainer from "./News/NewsContainer";
import MusicContainer from "./Music/MusicContainer";
//import UsersContainer from "./users/usersConteiner";
import SettingsContainer from "./Settings/SettingsContainer";
import LoginContainer from "../login/loginContainer";
import {withSuspense} from "../common/hocSuspense/withSuspense";

const UsersContainer = React.lazy(() => import("./users/usersConteiner"));



const ContentContainer = (props) => {
    return (
        <div className="app-wrapper-content">
            <Route path='/' exact={true} render={() => <Redirect to={"/current"}/>}/>
            <Route path="/login" render={() => <LoginContainer/>}/>
            <Route path="/current" render={() => <ProfileContainer/>}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/news" render={() => <NewsContainer/>}/>
            <Route path="/music" render={() => <MusicContainer/>}/>
            <Route path="/settings" render={() => <SettingsContainer/>}/>
            <Route path="/users" render = {withSuspense(UsersContainer)}/>
                 {/*<UsersContainer/>}/>*/}

        </div>
    )
}
export default ContentContainer;