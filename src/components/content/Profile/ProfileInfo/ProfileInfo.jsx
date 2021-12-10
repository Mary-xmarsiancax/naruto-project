import React from 'react';
import s from "./Profile.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import altAvaProfile from "../../../../images/altAvaProfile.jpg"

const ProfileInfo = (props) => {
    const onMainPhotosSelected = (e) => {
        if (e.target.files.length){
            props.savePhotos(e.target.files[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://www.newsler.ru/data/content/2021/102948/d5e971a752b2adbcdbe52a1f41d2c108.jpg"
                     alt="narutoAndThisFriends"/>
            </div>
            <div className={s.avaDescription}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : altAvaProfile}
                     alt="avaLarge"/>
                {props.isOwner &&
                <div className={s.addedAvaImgInput}><input onChange={onMainPhotosSelected} type="file"/></div>}
                <div>
                    Имя: {props.profile.fullName}
                </div>
                <div>
                    О себе: {props.profile.aboutMe}
                </div>
                <div>
                    Отношение к работе: {props.profile.lookingForAJobDescription}
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo;