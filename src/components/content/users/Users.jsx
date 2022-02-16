import React from "react"
import s from "./Users.module.css";
import Paginator from "../../common/paginator/paginator";
import User from "./User";

let Users = (props) => {


    return (
        <div>
            <Paginator startator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map(el => <User user={el} unfollow={props.unfollow} follow={props.follow}
                                             followingInProgress={props.followingInProgress}
                                             key={el.id} className={s.usersWrap}/>
                )
                }
            </div>


        </div>
    )
}
export default Users;