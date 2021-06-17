import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.Dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let DialogData=[
        {id:1,name:"Max Barochkin"},
        {id:2,name:"Serg"},
        {id:3,name:"Ann Sokolova"},
        {id:4,name:"Nina Zachmatova"},
        {id:5,name:"Fred Mercury"},

    ]
    let MessageData=[
        {id:1,message:"Hello!"},
        {id:1,message:"Go to walk!!"},
        {id:1,message:"Please call me!"},
        {id:1,message:"Hop-hop-hop!"},
        {id:1,message:"How are you?"},
    ]
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogItem name={DialogData[2].name} id={DialogData[2].id}/>
                <DialogItem name={DialogData[3].name} id={DialogData[3].id}/>
                <DialogItem name={DialogData[4].name} id={DialogData[4].id}/>

            </div>
            <div className={s.Messages}>
                <Message message={MessageData[0].message} id={MessageData[0].id}/>
                <Message message={MessageData[1].message} id={MessageData[1].id}/>
                <Message message={MessageData[2].message} id={MessageData[2].id}/>
                <Message message={MessageData[3].message} id={MessageData[3].id}/>
                <Message message={MessageData[4].message} id={MessageData[4].id}/>
            </div>
        </div>
    )
}
export default Dialogs;