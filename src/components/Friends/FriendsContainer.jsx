import React from 'react';
import Friends from "./Friends";



const FriendsContainer = (props) => {

    return (
        <Friends friends={props.store.getState().friendsPage.friends}/>
    )
}
export default FriendsContainer;