const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    newPostData: [
        {id: 1, message: "Hi!", likesCounte: 17},
        {id: 2, message: "How are you?", likesCounte: 20},
        {id: 3, message: "I am fine!I am under the water", likesCounte: 23},
    ],
    newPostText: " "
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 4, message: state.newPostText, likesCounte: 55};
            let stateCopy = {...state};
            stateCopy.newPostData = [...stateCopy.newPostData];
            stateCopy.newPostData.push(newPost);
            stateCopy.newPostText = " ";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

    export default postReducer;