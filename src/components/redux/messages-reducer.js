const ADD_MESSAGE = "ADD-MESSAGE";
 const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const addMessageActionCreator = (formData) => ({type: ADD_MESSAGE,formData: formData});
 export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

let initialState = {
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Go to walk!!"},
        {id: 3, message: "Please call me!"},
        {id: 4, message: "Hop-hop-hop!"},
        {id: 5, message: "How are you?"},
    ],
};
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.formData.message}],
            };
        }
        default:
            return state;
    }
};
export default messagesReducer;