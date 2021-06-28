import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogLogo from "../../images/dialogsLogo.png";
import Answer from "./Answers/Answer";


const Dialogs = (props) => {
    let answerElements = props.dialogsPage.answers.map(a => (
        <div key={a.id} >
            <div className={s.dFlex}>
                <img src={dialogLogo} alt="dialogLogo" width='50px' height='50px'/>
                <Answer key={a.id} answer={a.answer} id={a.id}/>
                            </div>
        </div>
    ));
    let dialogsElements = props.dialogsPage.dialogData.map(d => <DialogItem key={d.id} name={d.name} ava={d.ava} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => (
        <div key={m.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt='alt' width='50px' height='50px'/>
                <Message key={m.id} message={m.message} id={m.id}/>
            </div>
        </div>));

    let newMessageEl=React.createRef();
    let addMessage=()=>{
        let text=newMessageEl.current.value;
        props.addMessage(text);
        newMessageEl.current.value=" ";
    }

    let newAnswerEl=React.createRef();
    let addAnswer=()=>{
        let text=newAnswerEl.current.value;
        props.addAnswer(text);
        newAnswerEl.current.value=" ";
    }



    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.DialogsItem}>
                {messagesElements}
                <textarea ref={newMessageEl}/>
                <button onClick={addMessage}>Add new Message</button>
            </div>
            <div className={s.DialogsItem}>
                {answerElements}
                <textarea ref={newAnswerEl}/>
                <button onClick={addAnswer}>Add new Answer</button>
            </div>

        </div>
    )
}
export default Dialogs;