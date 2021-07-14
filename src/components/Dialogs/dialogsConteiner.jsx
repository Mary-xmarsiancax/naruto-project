import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messages-reducer"
import {addAnswerActionCreator, onAnswerChangeActionCreator} from "../redux/answers-reducer";
import Dialogs from "./Dialogs";
import store from "../redux/redux-store";


const DialogsContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }


    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }


    let addAnswer = () => {
        props.store.dispatch(addAnswerActionCreator());
    }


    let onAnswerChange = (text) => {
        props.store.dispatch(onAnswerChangeActionCreator(text));
    }

    return (

        <Dialogs messages={props.store.getState().messagesPage.messages}
                 answers={props.store.getState().answersPage.answers}
                 dialogData={props.store.getState().dialogsPage.dialogData}
                 newMessageText={props.store.getState().messagesPage.newMessageText}
                 newAnswerText={props.store.getState().answersPage.newAnswerText}
                 addMessage={addMessage} onMessageChange={onMessageChange}
                 addAnswer={addAnswer} onAnswerChange={onAnswerChange}
        />
    )
}
export default DialogsContainer;