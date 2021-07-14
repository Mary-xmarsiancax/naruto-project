import postReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import answersReduser from "./answers-reducer";

let store = {
    _state: {
        profilePage: {
            newPostData: [
                {id: 1, message: "Hi!", likesCounte: 17},
                {id: 2, message: "How are you?", likesCounte: 20},
                {id: 3, message: "I am fine!I am under the water", likesCounte: 23},
            ],
            newPostText: " "
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: "Max Barochkin", ava: "maxAva"},
                {id: 2, name: "Serg", ava: "sergAva"},
                {id: 3, name: "Ann Sokolova", ava: "anyaAva"},
                {id: 4, name: "Nina Zachmatova", ava: "ninaAva"},
                {id: 5, name: "Fred Mercury", ava: "fredAva"},
            ],
            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "Go to walk!!"},
                {id: 3, message: "Please call me!"},
                {id: 4, message: "Hop-hop-hop!"},
                {id: 5, message: "How are you?"},
            ],
            newMessageText: " ",
            answers: [
                {id: 1, answer: "Hi!"},
                {id: 2, answer: "Ok!"},
                {id: 3, answer: "Ok!One minute"},
                {id: 5, answer: "Op!Op!op!!"},
                {id: 4, answer: "I am fine!I learn Programming!"},

            ],
            newAnswerText: " "
        },
        friendsPage: {
            friends: [
                {id: 1, friendsName: "Raf"},
                {id: 2, friendsName: "Donny"},
                {id: 3, friendsName: "Micky"},
                {id: 4, friendsName: "Leo"},
            ]
        }
    },
    _applyCallback() {
        console.log("State was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._applyCallback = observer;
    },

    dispatch(action) {
        this._state.profilePage= postReducer(this._state.profilePage, action);
        this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action);
        this._state.dialogsPage = answersReduser(this._state.dialogsPage,action);
        this._applyCallback(this._state);
    },
}


window.store = store;
export default store;
