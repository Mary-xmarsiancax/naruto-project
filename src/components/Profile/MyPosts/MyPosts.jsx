import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let NewPostData=[
        {id:1, message: "Hello!",likesCounte:"17"},
        {id:1, message: "How are you?",likesCounte:"20"},
        {id:1, message: "I am fine!I am under the water",likesCounte:"23"},
    ]
    return (
    <div className={s.myPostsFromHeader}>
        <h2>My Posts</h2>
        <div>
            <div>
                <textarea>New Post</textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        <div className={s.posts}>
            New Post
            <Post message={NewPostData[0].message}  likesCounte={NewPostData[0].likesCounte}/>
            <Post message={NewPostData[1].message}  likesCounte={NewPostData[1].likesCounte}/>
            <Post message={NewPostData[2].message}  likesCounte={NewPostData[2].likesCounte}/>
        </div>
        </div>
    </div>)
}
export default MyPosts;