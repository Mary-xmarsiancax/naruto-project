import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id
//     return (
//         <div className={s.Dialog}>
//             <NavLink to={path}>{props.name} </NavLink>
//         </div>
//     )
// }

// const Message = (props) => {
//     return (
//         <div className={s.Message}>{props.message}</div>
//     )
// }
const Dialogs = (props) => {
    let DialogData = [
        {id: 1, name: "Max Barochkin"},
        {id: 2, name: "Serg"},
        {id: 3, name: "Ann Sokolova"},
        {id: 4, name: "Nina Zachmatova"},
        {id: 5, name: "Fred Mercury"},
    ]
    let DialogsElements = DialogData.map
    (d => <DialogItem name={d.name} id={d.id}/>);

    let Messages = [
        {id: 1, message: "Hello!"},
        {id: 1, message: "Go to walk!!"},
        {id: 1, message: "Please call me!"},
        {id: 1, message: "Hop-hop-hop!"},
        {id: 1, message: "How are you?"},
    ]
    let MessagesElements = Messages.map
        (m =><Message message={m.message} id={m.id}/>);

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