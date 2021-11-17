import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ContentContainer from "./components/content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {setAuthUserData} from "./components/redux/auth-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class App extends React.Component {
    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <ContentContainer/>
            </div>
        )
    }
}
export default compose(
    withRouter,
    connect(null, {setAuthUserData})
)(App)

