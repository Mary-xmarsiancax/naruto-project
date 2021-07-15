import {combineReducers, createStore} from "redux";
import postReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import answersReduser from "./answers-reducer";
import friendsReduser from "./friends-reducer";
import dialogsReduser from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReduser,
    messagesPage: messagesReducer,
    answersPage: answersReduser,
    friendsPage: friendsReduser
});


let store = createStore(reducers);
window.store=store;

export default store;
