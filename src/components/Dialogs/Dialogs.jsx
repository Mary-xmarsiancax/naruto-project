import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogLogo from "../../images/dialogsLogo.png";
import Answer from "./Answers/Answer";



const Dialogs = (props) => {
    console.log(props);
    let answerElements = props.answers.map(a => (
        <div key={a.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt="dialogLogo" width='50px' height='50px'/>
                <Answer key={a.id} answer={a.answer} id={a.id}/>
            </div>
        </div>
    ));
    let dialogsElements = props.dialogData.map(d => <DialogItem key={d.id} name={d.name} ava={d.ava}
                                                                            id={d.id}/>);
    let messagesElements = props.messages.map(m => (
        <div key={m.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt='alt' width='50px' height='50px'/>
                <Message key={m.id} message={m.message} id={m.id}/>
            </div>
        </div>));


    let addMessage = () => {
        props.addMessage();
    }


    let onMessageChange = (event) => {
        let text = event.target.value;
        props.onMessageChange(text);
    }


    let addAnswer = () => {
        props.addAnswer();
    }


    let onAnswerChange = (event) => {
        let text = event.target.value;
        props.onAnswerChange(text);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.DialogsItem}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={props.newMessageText}/>
                <button onClick={addMessage}>Add new Message</button>
            </div>
            <div className={s.DialogsItem}>
                {answerElements}
                <textarea onChange={onAnswerChange} value={props.newAnswerText}/>
                <button onClick={addAnswer}>Add new Answer</button>
            </div>

        </div>
    )
}
export default Dialogs;