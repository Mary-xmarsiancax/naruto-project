import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUsersProfile} from "../redux/posts-reducer";
import {Redirect, withRouter} from "react-router-dom"
import withAuthRedirect from "../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDateContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {setUsersProfile, getProfile})(WithUrlDateContainerComponent);