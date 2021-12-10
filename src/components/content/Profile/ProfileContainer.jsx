import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUsersStatus, savePhotos, setUsersProfile, updateUsersStatus} from "../../redux/posts-reducer";
import {withRouter} from "react-router-dom"
import {withAuthAndPageRedirect} from "../../common/hocRedirect/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.auth.id || -1;
        }
        this.props.getProfile(userId);
        this.props.getUsersStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUsersStatus={this.props.updateUsersStatus}
                isOwner={!this.props.match.params.userId}
                         savePhotos={this.props.savePhotos}
                />
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth,
    status: state.profilePage.status
})
export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfile, getUsersStatus, updateUsersStatus, savePhotos}),
    withRouter,
    withAuthAndPageRedirect
)(ProfileContainer)


