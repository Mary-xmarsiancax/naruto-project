import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import maxAva from "../../../../images/maxAva.png";
import sergAva from "../../../../images/sergAva.png";
import anyaAva from "../../../../images/anyaAva.jpg";
import ninaAva from "../../../../images/ninaAva.jpg";
import fredAva from "../../../../images/fredAva.jpg";

const images = {
    maxAva: maxAva,
    sergAva: sergAva,
    anyaAva: anyaAva,
    ninaAva: ninaAva,
    fredAva: fredAva
};

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let avaPath=props.ava;

    return (
        <div className={s.Dialog}>
            <NavLink to={path}>{props.name}</NavLink>
            <div>
                <img src={images[avaPath]} alt="ava"/>
            </div>
        </div>
    )
}
export default DialogItem;