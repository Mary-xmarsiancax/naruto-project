import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUsersProfile} from "../redux/posts-reducer";
import {withRouter} from "react-router-dom"




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
        // getProfileAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.setUsersProfile(data);
        //     })
    }

    render() {
        return (
            <div>
            <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDateContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUsersProfile,getProfile})(WithUrlDateContainerComponent);