import emptyAvatar from "../../images/imgForUsesrs.jpg"
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pageNumber}>
                {pages.map(el =>
                    <span className={props.currentPage === el && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(el);
                    }}>{el}
                    </span>)}
            </div>
            {props.users.map(el =>
                <div className={s.usersWrap}>
                    <div className={s.leftColumn}>
                        <NavLink to={"/profile/" + el.id}><img className={s.leftColumnImg}
                                                               src={el.photos.small != null ? el.photos.small : emptyAvatar}
                                                               alt="NarutoImg"/>
                        </NavLink>
                        <div>
                            {el.followed
                                ? <button onClick={() =>
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY":
                                                    "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(el.id);
                                            }
                                        })
                                }> Follow < /button>
                                : <button onClick={() =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`,{},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY":
                                                    "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(el.id)
                                                }
                                            })
                                }>Unfollow</button>}
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
    )}
export default Users;