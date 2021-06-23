import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogLogo from "../../images/dialogsLogo.png";
import Answer from "./Answers/Answer";


const Dialogs = (props) => {
    let answerElements = props.state.answers.map(a => (
        <div key={a.id} >
            <div className={s.dFlex}>
                <img src={dialogLogo} alt="dialogLogo" width='50px' height='50px'/>
                <Answer key={a.id} answer={a.answer} id={a.id}/>

            </div>
        </div>
    ));
    let dialogsElements = props.state.dialogData.map(d => <DialogItem key={d.id} name={d.name} ava={d.ava} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => (
        <div key={m.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt='alt' width='50px' height='50px'/>
                <Message key={m.id} message={m.message} id={m.id}/>
            </div>
        </div>));

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.DialogsItem}>
                {messagesElements}
            </div>
            <div className={s.DialogsItem}>
                {answerElements}
            </div>

        </div>
    )
}
export default Dialogs;