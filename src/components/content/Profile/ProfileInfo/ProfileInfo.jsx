import React, {useState} from 'react';
import s from "./Profile.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import altAvaProfile from "../../../../images/altAvaProfile.jpg"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)
    const onGoToEditForm = () => {
        setEditMode(true)
    }
    const ExitToEditForm = () => {
        setEditMode(false)
    }
    const onMainPhotosSelected = (e) => {
        if (e.target.files.length) {
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
                {editMode ? <ProfileDataForm profile={props.profile} ExitToEditForm={ExitToEditForm} setProfileFormData={props.setProfileFormData}/>
                    : <ProfileData profile={props.profile}/>}
            </div>
            {!editMode && props.isOwner ? <button onClick={onGoToEditForm}>goToEditModeForm</button> : null}
        </div>
    )
}
const Contacts = (props) => {
    return <p>
        {props.contactItem}:{props.contactValue}
    </p>
}
const ProfileData = (props) => {
    return <div>
        <p> Имя: {props.profile.fullName}</p>
        <p> О себе: {props.profile.aboutMe}</p>
        <p>Нахожусь в поиске работы: {props.profile.lookingForAJob ? "да" : "нет"}</p>
        <p>Отношение к работе: {props.profile.lookingForAJobDescription}</p>
        <div>
            Контакты:{Object.keys(props.profile.contacts).map(key =>
            <Contacts key={key} contactItem={key} contactValue={props.profile.contacts[key]}/>
        )}
        </div>
    </div>
}
export default ProfileInfo;