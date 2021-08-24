import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY":
                        "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
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