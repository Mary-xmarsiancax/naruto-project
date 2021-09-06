import {getProfileAPI, getUsersStatusAPI, updateUsersStatusAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USERS_STATUS = "SET-USERS-STATUS";
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});

let initialState = {
    newPostData: [
        {id: 1, message: "Hi!", likesCount: 17},
        {id: 2, message: "How are you?", likesCount: 20},
        {id: 3, message: "I am fine!I am under the water", likesCount: 23},
    ],
    newPostText: " ",
    profile: null,
    status: ""
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let bodyText = state.newPostText;
            return {
                ...state,
                newPostData: [...state.newPostData, {
                    id: state.newPostData.length + 1,
                    message: bodyText,
                    likesCount: 55
                }],
                newPostText: " "
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USERS_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        getProfileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            })
    }
}
export const getUsersStatus = (userId) => {
    return (dispatch) => {
        getUsersStatusAPI.getStatus(userId)
            .then(data => {
                dispatch(setUsersStatus(data));
            })
    }
}
export const updateUsersStatus = (status) => {
    return (dispatch) => {
        updateUsersStatusAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUsersStatus(data));
                }

            })
    }
}

export default postReducer;