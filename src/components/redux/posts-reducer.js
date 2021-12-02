import {getProfileAPI, getUsersStatusAPI, updateUsersStatusAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USERS_STATUS = "SET-USERS-STATUS";
export const addPostActionCreator = (formData) => ({type: ADD_POST,formData:formData});
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
            return {
                ...state,
                newPostData: [...state.newPostData, {
                    id: state.newPostData.length + 1,
                    message: action.formData.post,
                    likesCount: 55
                }],
                newPostText: " "
            }
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

export const getProfile = (userId) => async (dispatch) => {
        let data = await getProfileAPI.getProfile(userId)
                dispatch(setUsersProfile(data));
    }

export const getUsersStatus = (userId) => async (dispatch) => {
        let data = await getUsersStatusAPI.getStatus(userId)
                dispatch(setUsersStatus(data));
    }

export const updateUsersStatus = (status) => async (dispatch) => {
        let data = await updateUsersStatusAPI.updateStatus(status)
                if (data.resultCode === 0) {
                    dispatch(setUsersStatus(status));
                }
    }

export default postReducer;