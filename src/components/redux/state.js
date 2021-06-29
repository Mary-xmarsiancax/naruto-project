let rerenderAllTree = () => {
    console.log("State was changed");
}


let state = {
    profilePage: {
        newPostData: [
            {id: 1, message: "Hi!", likesCounte: 17},
            {id: 2, message: "How are you?", likesCounte: 20},
            {id: 3, message: "I am fine!I am under the water", likesCounte: 23},
        ],
        // newPostText: "it camasutra"
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
        // newMessageText: "Add me",
        newMessageText: " ",
        answers: [
            {id: 1, answer: "Hi!"},
            {id: 2, answer: "Ok!"},
            {id: 3, answer: "Ok!One minute"},
            {id: 5, answer: "Op!Op!op!!"},
            {id: 4, answer: "I am fine!I learn Programming!"},

        ],
        // newAnswerText: "Answer to me"
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
}
window.state = state;

export const addPost = () => {
    let newPost = {id: 4, message: state.profilePage.newPostText, likesCounte: 55};
    state.profilePage.newPostData.push(newPost);
    state.profilePage.newPostText = " ";
    rerenderAllTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAllTree(state);
}


export const addMessage = () => {
    let newMessage = {id: 6, message: state.dialogsPage.newMessageText};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = " ";
    rerenderAllTree(state);
}
export const updateNewMessageText = (newTextMessage) => {
    state.dialogsPage.newMessageText = newTextMessage;
    rerenderAllTree(state);
}


export const addAnswer = () => {
    let newAnswer = {id: 6, answer: state.dialogsPage.newAnswerText};
    state.dialogsPage.answers.push(newAnswer);
    state.dialogsPage.newAnswerText = " ";
    rerenderAllTree(state);
}
export const updateNewAnswerText = (newTextAnswer) => {
    state.dialogsPage.newAnswerText = newTextAnswer;
    rerenderAllTree(state);
}


export const subscribe=(observer)=>{
    rerenderAllTree=observer;
}
export default state;