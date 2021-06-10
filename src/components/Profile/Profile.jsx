import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://www.newsler.ru/data/content/2021/102948/d5e971a752b2adbcdbe52a1f41d2c108.jpg"
                 alt="narutoAndThisFriends"/>
        </div>
        <div>
            Ava + description
        </div>
        <MyPosts/>
    </div>
}
export default Profile;