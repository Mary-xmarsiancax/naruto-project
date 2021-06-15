import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My Posts
        <div>
            New Post
            <Post message="Hello!How are you?"/>
            <Post message="I'm fine!"/>
            <Post message="I'm under the water"/>
        </div>
    </div>)
}
export default MyPosts;