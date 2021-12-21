import {getProfileAPI, getUsersStatusAPI, updateUsersStatusAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USERS_STATUS = "SET-USERS-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export const addPostActionCreator = (formData) => ({type: ADD_POST, formData: formData});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id: id});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

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

            const newPost = {
                id: state.newPostData.length ? (state.newPostData[state.newPostData.length - 1].id + 1) : 1,
                message: action.formData.post,
                likesCount: 55
            }
            return {
                ...state,
                newPostData: [...state.newPostData, newPost],
                newPostText: " "
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                newPostData: state.newPostData.filter((obj) => {
                    return obj.id !== action.id
                })
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state;
    }
}

export const getProfile = (userId) => async (dispatch) => {
    let data = await getProfileAPI.getProfile(userId)
    dispatch(setUsersProfile(data));
}
export const savePhotos = (filePhotos) => async (dispatch) => {
    let data = await getProfileAPI.savePhotos(filePhotos)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
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
export const setProfileFormData = (formData) => async (dispatch) => {
    console.log("я попадаю в санку")
    let data = await getProfileAPI.setProfileFormData(formData)
    if (data.resultCode === 0) {
        console.log("данные ушли на сервак")
    dispatch(getProfile(19081))
        console.log("запрашиваю профайл с новыми данными")
    }
}


export default postReducer;