import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <div className={s.Dialog}> Max Barochkin</div>
                <div className={s.Dialog}> Serg</div>
                <div className={s.Dialog}> Ann Sokolova</div>
                <div className={s.Dialog}> Nina Zachmatova</div>
            <div
                className={s.Dialog}> Fred Mercury
            </div>
        </div>
    <div className={s.Messages}>
        <div className={s.Message}>Hello!</div>
        <div className={s.Message}>Go to walk!</div>
        <div className={s.Message}>Please call me</div>
        <div className={s.Message}>Hop-hop-hop</div>
        <div className={s.Message}>How are you?</div>
    </div>
</div>
)
}
export default Dialogs;