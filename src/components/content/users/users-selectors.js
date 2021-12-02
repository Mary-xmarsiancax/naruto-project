import {createSelector} from "reselect";

const getUsersSelect = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsersSelect, (users) => {
    return users.filter(el => true)
})

const getTotalUsersCountSelect = (state) => {
    return state.usersPage.totalUsersCount
}
export const getTotalUsersCountSelector = createSelector(getTotalUsersCountSelect, (totalUsersCount) => {
    return totalUsersCount
})

const getPageSizeSelect = (state) => {
    return state.usersPage.pageSize
}
export const getPageSizeSelector = createSelector(getPageSizeSelect, (pageSize) => {
    return pageSize
})
const getCurrentPageSelect = (state) => {
    return state.usersPage.currentPage
}
export const getCurrentPageSelector = createSelector(getCurrentPageSelect, (currentPage) => {
    return currentPage
})
const getIsFetchingSelect = (state) => {
    return state.usersPage.isFetching
}
export const getIsFetchingSelector = createSelector(getIsFetchingSelect, (isFetching) => {
    return isFetching
})
const getFollowingInProgressSelect = (state) => {
    return state.usersPage.followingInProgress
}

export const getFollowingInProgressSelector = createSelector(getFollowingInProgressSelect, (followingInProgress) => {
    return followingInProgress
})