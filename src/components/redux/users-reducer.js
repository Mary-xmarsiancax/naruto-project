import {followAPI, usersAPI} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_COUNT_USERS = "SET-COUNT-USERS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setUsersCount = (totalCount) => ({type: SET_COUNT_USERS, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

let initialState = {
        users: [],
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }
;
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS:

            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:

            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_COUNT_USERS:

            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:

            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
};

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            if (data.totalCount <= 96) {
                dispatch(setUsersCount(data.totalCount))
            }
            dispatch(setUsersCount(180))

        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.followToFriend(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSucces(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        followAPI.unFollowToFriend(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSucces(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })

    }
}




export default usersReducer;