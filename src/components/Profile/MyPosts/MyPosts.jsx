import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
    <div>
        My Posts
        <div>
            New Post
            <Post message="Hello!" likesCounte="17"/>
            <Post message="How are you?" likesCounte="20"/>
            <Post message="I am fine!I am under the water" likesCounte="23"/>
        </div>
    </div>)
}
export default MyPosts;