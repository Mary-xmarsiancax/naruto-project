import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusWhisHooks from "./ProfileStatusWhisHooks";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} />
        <ProfileStatusWhisHooks status={props.status} updateUsersStatus={props.updateUsersStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;