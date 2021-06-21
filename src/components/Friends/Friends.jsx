import React from 'react';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let myFriendsElements = props.state.friends.map(f => <Friend key={f.id} friendsName={f.friendsName} id={f.id}/>);
    return (
        <div>
            {myFriendsElements}
        </div>

    )
}
export default Friends;