import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../redux/posts-reducer";
import {withRouter} from "react-router-dom"
import {getProfileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        getProfileAPI.getProfile(userId)
            .then(data => {
                this.props.setUsersProfile(data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDateContainerComponent = withRouter (ProfileContainer);
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDateContainerComponent);