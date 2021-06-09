import React from 'react';
import s from "./Profile.module.css";
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://www.newsler.ru/data/content/2021/102948/d5e971a752b2adbcdbe52a1f41d2c108.jpg"
                 alt=""/>
        </div>
        <div>
            Ava + description
        </div>
        <div>
            My Posts
            <div>
                New Post
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>

        </div>
    </div>
}
export default Profile;