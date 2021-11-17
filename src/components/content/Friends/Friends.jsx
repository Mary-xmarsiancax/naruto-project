import React from 'react';
import Friend from "./Friend/Friend";
import {Redirect} from "react-router-dom";


const Friends = (props) => {
    let myFriendsElements = props.friends.map(f => <Friend key={f.id} friendsName={f.friendsName} id={f.id}/>);
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div>
            {myFriendsElements}
        </div>

    )
}
export default Friends;