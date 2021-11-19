import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUsersStatus, setUsersProfile, updateUsersStatus} from "../../redux/posts-reducer";
import {withRouter} from "react-router-dom"
import withAuthRedirect from "../../common/hocRedirect/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19081;
        }
        this.props.getProfile(userId);
        this.props.getUsersStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUsersStatus={this.props.updateUsersStatus}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
})
export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfile,getUsersStatus,updateUsersStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


