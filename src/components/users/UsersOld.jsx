import React from 'react';
import emptyAvatar from "../../images/imgForUsesrs.jpg"
import s from "./Users.module.css";
import * as axios from "axios";



const Users = (props) => {
    let getUsers=()=>{
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users?count=6").then(response=>
            {props.setUsers(response.data.items)})
        }
    }


    //     props.setUsers([
    //         {
    //             id: 1,
    //             followed: true,
    //             fullName: "Leo",
    //             status: "lider",
    //             location: {country: "USA", cityName: "New York"}
    //         },
    //         {
    //             id: 2,
    //             followed: false,
    //             fullName: "Ruf",
    //             status: "philosopher",
    //             location: {country: "USA", cityName: "New York"}
    //         },
    //         {
    //             id: 3,
    //             followed: true,
    //             fullName: "Don",
    //             status: "scientist",
    //             location: {country: "USA", cityName: "New York"}
    //         },
    //         {
    //             id: 4,
    //             followed: false,
    //             fullName: "Micky",
    //             status: "merry fellow",
    //             location: {country: "USA", cityName: "New York"}
    //         },
    //         {
    //             id: 4,
    //             followed: false,
    //             fullName: "Micky",
    //             status: "merry fellow",
    //             location: {country: "USA", cityName: "New York"}
    //         },
    //     ]
    // )
    // }
    return (

        <div>
            <button onClick={getUsers}>GET USERS</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.usersWrap}>
                        <div className={s.leftColumn}>
                            <img src={u.photos.small != null?u.photos.small:emptyAvatar} alt="NarutoImg"/>
                            {/*<button>FOLLOW</button>*/}
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                            <div></div>
                        </div>
                        <div className={s.rightColumn}>
                            <div className={s.fullNameColumn}>
                                <div>{u.name}</div>
                                <div></div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.countryName}>
                                <div>"u.location.country"</div>
                                <div>"u.location.cityName"</div>
                                <div></div>
                            </div>

                        </div>

                    </div>


                </div>)
            }
        </div>)
}
export default Users;