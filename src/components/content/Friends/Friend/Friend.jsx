import React from 'react';
import s from "./Friend.module.css";
import orangeCircule from "../../../../images/orangeCircle копия.png"

const Friend = (props) => {
    return (
        <div className={s.item}>
                <img src={orangeCircule}
                     alt="orangeCircule"/>
                {props.friendsName}
        </div>
    )

}
export default Friend;