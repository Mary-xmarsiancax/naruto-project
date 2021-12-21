import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}  isOwner = {props.isOwner} savePhotos={props.savePhotos}
                     setProfileFormData={props.setProfileFormData}/>
        <ProfileStatusWithHooks status={props.status} updateUsersStatus={props.updateUsersStatus} isOwner = {props.isOwner}/>
        <MyPostsContainer isOwner = {props.isOwner}/>
    </div>
}
export default Profile;