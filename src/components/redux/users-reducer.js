const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_COUNT_USERS = "SET-COUNT-USERS"
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNumber) => ({type:SET_CURRENT_PAGE,pageNumber});
export  const setUsersCountAC = (totalCount)=> ({type:SET_COUNT_USERS, totalCount})

let initialState = {
        users: [],
        pageSize: 6,
        totalUsersCount: 0,
        currentPage:1
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
                ...state,currentPage:action.pageNumber
            }
        case SET_COUNT_USERS:

            return {
                ...state,totalUsersCount:action.totalCount
            }
        default:
            return state;
    }
};
export default usersReducer;