import s from "./Answer.module.css";
import React from "react";

const Answer = (props) => {
    return (
        <div className={s.AnswerItem}>{props.answer}</div>
    )
}

export default Answer;