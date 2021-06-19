import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
        let DialogsElements = props.dialogData.map
    (d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    // let Messages = [
    //     {id: 1, message: "Hello!"},
    //     {id: 2, message: "Go to walk!!"},
    //     {id: 3, message: "Please call me!"},
    //     {id: 4, message: "Hop-hop-hop!"},
    //     {id: 5, message: "How are you?"},
    // ]
    let MessagesElements = props.message.map
        (m =><Message key={m.id} message={m.message} id={m.id}/>);

        return (
            <div className={s.Dialogs}>
                <div className={s.DialogsItem}>
                    {DialogsElements}
                </div>
                <div className={s.Messages}>
                    {MessagesElements}
                </div>
            </div>
        )
    }
    export default Dialogs;