import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";
import {authMe} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {authMe.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);