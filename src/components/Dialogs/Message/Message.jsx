import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    )
}
export default Message;