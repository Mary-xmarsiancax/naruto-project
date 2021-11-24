import {connect} from "react-redux";
import {
    follow, getUsers,setUsersCount, toggleFollowingProgress, unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
     getCurrentPageSelector,
     getFollowingInProgressSelector,
     getIsFetchingSelector,
     getPageSizeSelector,
     getTotalUsersCountSelector, getUsersSelector,
} from "./users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render = () => {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   isAuth={this.props.isAuth}


            />
        </div>


    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector (state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsersCount,
        toggleFollowingProgress,
        getUsers
    }),
)(UsersContainer);