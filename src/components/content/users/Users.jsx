import React from "react"
import emptyAvatar from "../../../images/imgForUsesrs.jpg"
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/paginator/paginator";

let Users = (props) => {


    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

            {props.users.map(el =>
                <div key={el.id} className={s.usersWrap}>
                    <div className={s.leftColumn}>
                        <NavLink to={"/profile/" + el.id}><img className={s.leftColumnImg}
                                                               src={el.photos.small != null ? el.photos.small : emptyAvatar}
                                                               alt="NarutoImg"/>
                        </NavLink>
                        <div>
                            {el.followed
                                ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.unfollow(el.id)
                                }}> Unfollow < /button>
                                : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.follow(el.id)
                                }}>Follow</button>}
                        </div>
                        <div></div>
                    </div>
                    <div className={s.rightColumn}>
                        <div className={s.fullNameColumn}>
                            <div>{el.name}</div>
                            <div></div>
                            <div>{el.status}</div>
                        </div>
                        <div className={s.countryName}>
                            <div>"u.location.country"</div>
                            <div>"u.location.cityName"</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default Users;