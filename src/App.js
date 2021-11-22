import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ContentContainer from "./components/content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/content/Profile/ProfileContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
           return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                {this.props.isAuth ? <ProfileContainer/> : <ContentContainer/>}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

