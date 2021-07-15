import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    // console.log(props.PostData);

    // let newPostData = [
    //     {id: 1, message: "Hello!", likesCounte: "17"},
    //     {id: 2, message: "How are you?", likesCounte: "20"},
    //     {id: 3, message: "I am fine!I am under the water", likesCounte: "23"},
    // ]
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}
export default Profile;