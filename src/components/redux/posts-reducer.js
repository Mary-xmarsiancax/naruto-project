const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});

let initialState = {
    newPostData: [
        {id: 1, message: "Hi!", likesCount: 17},
        {id: 2, message: "How are you?", likesCount: 20},
        {id: 3, message: "I am fine!I am under the water", likesCount: 23},
    ],
    newPostText: " ",
    profile: null
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
                    profile:action.profile
                }
        default:
            return state;
    }
}

export default postReducer;