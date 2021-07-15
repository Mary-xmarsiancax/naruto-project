const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

let initialState = {
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Go to walk!!"},
        {id: 3, message: "Please call me!"},
        {id: 4, message: "Hop-hop-hop!"},
        {id: 5, message: "How are you?"},
    ],
    newMessageText: " ",
};
const messagesReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let stateCopy={...state};
            let newMessage = {id: 6, message: state.newMessageText};
            stateCopy.messagesCopy=[...stateCopy.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = " ";
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy={...state};
            stateCopy.newMessageText = action.newTextMessage;
            return stateCopy;
        }
        default:
            return state;
    }
};
export default messagesReducer;