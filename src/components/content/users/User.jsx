import React from "react"
import emptyAvatar from "../../../images/imgForUsesrs.jpg"
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


let User = ({user, ...props}) => {

    return (
        <div>
                <div
                    className={s.usersWrap}>
                    <div className={s.leftColumn}>
                        <NavLink to={"/profile/" + user.id}><img className={s.leftColumnImg}
                                                               src={user.photos.small != null ? user.photos.small : emptyAvatar}
                                                               alt="NarutoImg"/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }}> Unfollow < /button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                        <div></div>
                    </div>
                    <div className={s.rightColumn}>
                        <div className={s.fullNameColumn}>
                            <div>{user.name}</div>
                            <div></div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.countryName}>
                            <div>"user.location.country"</div>
                            <div>"user.location.cityName"</div>
                            <div></div>
                        </div>
                    </div>
                </div>
        </div>
  )
 }
export default User;