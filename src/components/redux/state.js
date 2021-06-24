import {rerenderAllTree} from "../../render";

let state = {
    profilePage: {
        newPostData: [
            {id: 1, message: "Hi!", likesCounte: 17},
            {id: 2, message: "How are you?", likesCounte: 20},
            {id: 3, message: "I am fine!I am under the water", likesCounte: 23},
        ],
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
        answers: [
            {id: 1, answer: "Hi!"},
            {id: 2, answer: "Ok!"},
            {id: 3, answer: "Ok!One minute"},
            {id: 5, answer: "Op!Op!op!!"},
            {id: 4, answer: "I am fine!I learn Programming!"},

        ]
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

export let addPost = (postMessage) => {
    let newPost = {id: 4, message: postMessage, likesCounte: 55};
    state.profilePage.newPostData.push(newPost);
    rerenderAllTree(state);
}

export let addMessage = (postMessage) => {
    let newMessage = {id: 6, message: postMessage};
    state.dialogsPage.messages.push(newMessage);
    rerenderAllTree(state);
}

export let addAnswer = (postMessage) => {
    let newAnswer = {id: 6, answer: postMessage};
    state.dialogsPage.answers.push(newAnswer);
    rerenderAllTree(state);
}


export default state;