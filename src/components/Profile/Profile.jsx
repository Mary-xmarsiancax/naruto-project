import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus";



const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} />
        <ProfileStatus status={props.status}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;