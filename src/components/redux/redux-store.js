import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import answersReduser from "./answers-reducer";
import friendsReduser from "./friends-reducer";
import dialogsReduser from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer, {authMe, login} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReduser,
    messagesPage: messagesReducer,
    answersPage: answersReduser,
    friendsPage: friendsReduser,
    usersPage: usersReducer,
    auth: authReducer,
    app: AppReducer

});

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store=store;
store.dispatch(authMe());

export default store;
