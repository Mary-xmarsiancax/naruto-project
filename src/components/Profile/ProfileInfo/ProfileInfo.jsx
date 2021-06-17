import React from 'react';
import s from "./Profile.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.newsler.ru/data/content/2021/102948/d5e971a752b2adbcdbe52a1f41d2c108.jpg"
                     alt="narutoAndThisFriends"/>
            </div>
            <div className={s.avaDescription}>
                Ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;